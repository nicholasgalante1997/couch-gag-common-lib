import {
  _heller_base_colors_,
  _coolors_extension_pack_
} from '../../../constants';

export function deriveCssClassname(cHex: string) {
  const mashObj = { ..._heller_base_colors_, ..._coolors_extension_pack_ };
  for (const k of Object.keys(mashObj)) {
    for (const [vK, v] of Object.entries(mashObj[k as keyof typeof mashObj])) {
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
