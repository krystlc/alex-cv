import SectionAbout from "./SectionAbout.svelte";
import SectionExperience from "./SectionExperience.svelte";
import SectionSkills from "./SectionSkills.svelte";
import SectionContact from "./SectionContact.svelte";
import SectionTestimonials from "./SectionTestimonials.svelte";

export type SectionID =
  | "experience"
  | "about"
  | "testimonials"
  | "skills"
  | "contact";
export const sections: { id: SectionID; component: any }[] = [
  { id: "experience", component: SectionExperience },
  { id: "about", component: SectionAbout },
  { id: "skills", component: SectionSkills },
  { id: "testimonials", component: SectionTestimonials },
  { id: "contact", component: SectionContact },
];
