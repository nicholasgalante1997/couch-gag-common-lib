import { _heller_base_colors } from '../../../constants';

export function deriveCssClassname(cHex: string) {
  for (const k of Object.keys(_heller_base_colors)) {
    for (const [vK, v] of Object.entries(
      _heller_base_colors[k as keyof typeof _heller_base_colors]
    )) {
      if (v === cHex) {
        return {
          css: {
            bg: `${k}-${vK}-bg`,
            text: `${k}-${vK}-text`
          }
        };
      }
    }
  }
  return;
}
