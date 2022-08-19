# common utils package for couch-gag inc.

[danny devito](https://tenor.com/bmJrc.gif)

## Developer's Guide

### IMPORTANT - Contribution Abstract

You'll notice that we have no dependencies and less than 5 devdeps. Is this intentional? No, definitely just a happy coincidence. Are we limited in introducing dependencies into the package? What if I want to add the package [foo-bar-blah]? That's fine. Devs should trend to using existing solutions. This package is intended to be _environment agnostic_ however, and what that means is that any client or server specific code _needs_ to go in the respective package (couch-gag or couch-gag-server). This package is solely for code that _will_ be run in both environments, client and sever (couch-gag and couch-gag-server). That drastically limits the domain of code that should live in this package. Some examples of current modules in this package are: a logger util that acts as an enhanced wrapper over the `Console` module by offering log-types and colors, shared typescript type models (.d.ts files), theme derivation utils and raw theme components (hex codes, font-families, etc), shell scripts, static asset files (scaffolded css based off raw theme components).

_But wait, why are there theme utils/constants/modules inside here? Shouldn't that be handled directly in the client?_

Great call out, let's talk about it. Couch-Gag client (the UI) actually dynamically pulls its theme-layer (how it organizes its view, what colors to use, what to implement the font family as..., etc) from the server on application-load. The reason that we do this, is that we actually offer different themes for different users, and a different theme for a non-authenticated user altogether. There's a couple reasons behind this.

- We are actively treatment testing, trying to determine the best route to go with regards to view composition/theme. Think of it like A/B testing but if you went up to (n) alphabetical chars so like A/B/C/D/.../Q testing. We don't just want to test one view against another. That's thinking too small. We can't pull enough information from that. It doesn't help us infer why a certain treatment outperformed another treatment. We need to get more granular and for that, we need to offer a matrix of possibilities. To learn more about how that works/gets generated, see our section on theme.

- What you need to know is the client pulls information about user-themes from the server, and so both the server and the client need access to the raw theme data for their own operative purposes, and to maintain consistency and reduce code duplication, we abstract out the bulk of the theming primitives to @nickgdev/couch-gag-common-lib.

### Version Control

> We use git. Who doesn't?

_2+ branch system_

I'm calling this a 2+ branch system. Our **master** branch is called `main`. Our **developing/working** branch is called `development`. Here is the ideal workflow with this setup.

##### Workflow A: 2 Flat

- I have a new feature I want to implement.
- I sync my local branches with `git fetch`
- I checkout to `main` and run `git pull origin main`
- I checkout to `development` and run `git pull origin development`
- I refresh my deps with `rm -rf node_modules/ yarn.lock && yarn`
- I implement my feature on the branch `development`
- I add my changes with `git add ...` and commit them `git commit -S -m "..."`
- Push to origin development with `git push`
- Raise a new pull request (base main, merge development)
- Get feedback (opt)
- Make any fixes, git add, commit, push (opt)
- Re-raise pull request (opt)
- Get approvals
- Breath of relief
- Merge pull request _DO NOT DELETE BRANCH DEVELOPMENT, ITS GOING TO PROMPT YOU TO, BUT DO NOT. WE REUSE DEVELOPMENT._

##### Workflow B: 2 + 1 Rotational

- I have a new feature I want to implement.
- I sync my local branches with `git fetch`
- I checkout to `main` and run `git pull origin main`
- I checkout to `development` and run `git pull origin development`
- I checkout to a temporary feature branch `git checkout -b [github-alias]/[feature-desc]` i.e. `git checkout -b nicholasgalante1997/dark-theme-rewrite`
- I refresh my deps with `rm -rf node_modules/ yarn.lock && yarn`
- I implement my feature on the branch `[github-alias]/[feature-desc]`
- I add my changes with `git add ...` and commit them `git commit -S -m "..."`
- I checkout to development locally with `git checkout development`
- I merge my feature branch into `development` with `git merge [github-alias]/[feature-desc]`
- Push to origin development with `git push`
- Raise a new pull request (base main, merge development)
- Get feedback (opt)
- Make any fixes, git add, commit, push (opt)
- Re-raise pull request (opt)
- Get approvals
- Breath of relief
- Merge pull request _DO NOT DELETE BRANCH DEVELOPMENT, ITS GOING TO PROMPT YOU TO, BUT DO NOT. WE REUSE DEVELOPMENT._

> Why would I use B over A, isnt it just extra work? Yeah, it is. But youll have an isolated snapshot now on a local branch of that feature launch that isn't polluted with changes that have made it into development since then, which should make bug fixing/improvements easier down the line.

### File Structure

_Source: Entry point_ - `src/index.ts` <- Used for re-exporting the contents of `/src`

_Distribution: Entry Point_ - `lib/index.js` <- Entry point in the built/transpiled JS artifact

- .github/workflows/
  - release.yml -> used to implement a CI workflow with the npm registry. As we kick off merges to `main`, this release workflow will run through the process of reinstalling deps, linting, rebuilding, and deploying the newly constructed artifact to NPM.
- lib/ <- the built JS artifact that gets published. Output of running `tsc` or `yarn build`
- public/
  - styles/heller.css <- auto-generated to include heller palette styles. Output of `src/scripts/theme/heller-color-tokenizer.js` .
- src/
  - @types/ <- common types used or extended across `couch-gag-website` and `couch-gag-server`
  - constants/ <- static primitive values used across packages
  - scripts/ <- largely JS scripts, files that are intended to be run from the CLI to affect the file system or kick off side effects.
  - theme/
    - font/ <- This is where we set up the `font` treatment objects. These objects represent a possible font family implementation that the client can make use of to implement a TYPOGRAPHY. All font-families are taken from google fonts. We make use of the `VarFont` component [here](https://615213bb7c9f60003aa5ec0d-koqepqgxho.chromatic.com/?path=/docs/typography-varfont--default) to implement a font family dynamically at runtime.
    - palette/ <- This is where we set up the `palette` or color treatment objects. These primitive attributes are used for everything from background color to border color to text color. Anywhere there's a color being used in the client, this is setting it.
    - view/ <- This is where we aggregate the palette and font treatments to create an array of all possible different theme treatments (color and font combinations)
  - utils/
    - logs/ <- source code for the logger util fn used in server/client
    - theme/ <- source code for helper fns used for working with theme
  - index.ts <- exports everything we intend to expose.

### Theme Construction

> Make sure you've read the section above entitled _Contribution Abstract_ before proceeding.

Let's talk about theme a bit more in depth.

### Build tooling

##### Resources

- https://www.typescriptlang.org/docs/handbook/compiler-options.html
- https://www.typescriptlang.org/tsconfig

> We use the in-house typescipt compiler engine `tsc`. We've had no issues with this approach so far, and we don't really have a ton of nested interwoven dependencies in this package. You'll notice that we have no dependencies and less than 5 devdeps. Is this intentional? No, definitely just a happy coincidence. Are we limited in introducing dependencies into the package? What if I want to add the package [foo-bar-blah]? That's fine. Devs should trend to using existing solutions. This package is intended to be _environment agnostic_ however, and what that means is that any client or server specific code _needs_ to go in the respective package (couch-gag or couch-gag-server). This package is solely for
