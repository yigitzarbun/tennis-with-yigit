export const Paths = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  BOOKING: "/booking",
} as const;

export type Paths = typeof Paths;
