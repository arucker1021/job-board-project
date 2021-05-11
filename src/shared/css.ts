export const breakpoints = {
  small: 576,
  medium: 768,
  large: 992,
  xl: 1200,
};

export const colors = {
  white: "#FFF",
  lightGray: "#FAF9F8",
  gray: "#C4C4C4",
  blue: "#085ff7",
  black: "#2D2D2D",
  darkGray: "#737373",
  border: "#D4D2D0",
};

export const bp = (breakpoint: string) => {
  if (breakpoint in breakpoints) {
    return `@media(min-width: ${(breakpoints as any)[breakpoint]}px)`;
  }
};

export const transition = (property: string) => {
  if (!!property) {
    return `transition: ${property} 0.1s ease-in`;
  }
};

export const borderRadius = (pixels: number) => {
  return `border-radius: ${rem(pixels)}`;
};

export const rem = (pixels: number) => {
  return `${pixels / 16}rem`;
};

export const border = (color: string) => {
  return `border: ${rem(1)} solid ${color}`;
};
