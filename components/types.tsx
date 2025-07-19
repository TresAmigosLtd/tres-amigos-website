
export type Category = 'Enablement' | 'Execution' | 'Leadership';
export const categoryGradients: {
  [key in Category]: string;
} = {
  Enablement: 'gradient-blue',
  Execution: 'gradient-pink',
  Leadership: 'gradient-orange',
};
