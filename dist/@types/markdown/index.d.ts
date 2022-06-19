export declare type Story = {
    meta: {
        readonly episodeKey: string;
        readonly seasonKey: string;
        genres: string[];
        img?: string;
        subtitle?: string;
        title: string;
        key: string;
    };
    readonly content: string;
};
export declare type StoryKey = {
    readonly episodeKey: string;
    readonly seasonKey: string;
};
export declare type StoryMeta = {
    title: string;
    subtitle: string;
    author?: string;
    img: string;
    genres?: string[];
    readonly episodeKey: string;
    readonly seasonKey: string;
    readonly key: string;
};
export declare type StoryCollection = {
    collection: {
        [x: string]: StoryMeta;
    };
};
export declare type StoryRowProps = {
    imgSrc: string;
    title: string;
    subtitle: string;
    genres: string[];
    episodeKey: string;
    seasonKey: string;
    index: number;
};
//# sourceMappingURL=index.d.ts.map