export type Theme = {
  palette: Palette;
  font: Font;
  treatmentId: string;
};

export type Font = {
  google: {
    family: string;
  };
  fallback: 'serif' | 'sans-serif' | 'cursive' | 'monospace';
};

export type Palette = {
  backgroundColor: string;
  paragraphTextColor: string;
  headingPrimaryColor: string;
  headingSecondaryColor?: string;
  buttonColorOptions: string[];
};
