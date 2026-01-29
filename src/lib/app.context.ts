export const sections = [
  "top",
  "experience",
  "about",
  "skills",
  "testimonials",
  "contact",
] as const;
export type SectionID = typeof sections[number];
