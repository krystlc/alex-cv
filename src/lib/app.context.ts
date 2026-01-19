import SectionAbout from "./SectionAbout.svelte";
import SectionProjects from "./SectionProjects.svelte";
import SectionExperience from "./SectionExperience.svelte";
import SectionHero from "./SectionHero.svelte";
import SectionSkills from "./SectionSkills.svelte";
import SectionContact from "./SectionContact.svelte";

export type SectionID =
  | "home"
  | "experience"
  | "about"
  | "projects"
  | "skills"
  | "contact";
export const sections: { id: SectionID; component: any }[] = [
  { id: "home", component: SectionHero },
  { id: "experience", component: SectionExperience },
  { id: "about", component: SectionAbout },
  { id: "projects", component: SectionProjects },
  { id: "skills", component: SectionSkills },
  { id: "contact", component: SectionContact },
];
