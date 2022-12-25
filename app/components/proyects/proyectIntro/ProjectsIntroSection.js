import { getProyects } from "../../../helpers/getProyects.js";

export function ProjectsIntroSection(nameSection) {
  const $projectsIntroSection = document.createElement("section"),
    $projectTitle = document.createElement("h6"),
    $cardProjectBox = document.createElement("div");

  const urlSection = nameSection;

  // css class
  $projectsIntroSection.id = "projectIntro-section";
  $projectsIntroSection.classList.add("conteiner");
  $projectsIntroSection.classList.add("proyects");
  $cardProjectBox.classList.add("button-conteiner");

  // title
  $projectTitle.classList.add("title-sections");
  $projectTitle.id = "proyectos-titulo";
  $projectTitle.innerHTML = nameSection;

  $projectsIntroSection.appendChild($projectTitle);

  // Set a special grid for card projects
  $cardProjectBox.classList.add("grid-fluid");

  // Call at ajax for show project cards
  getProyects($cardProjectBox, urlSection);

  $projectsIntroSection.appendChild($cardProjectBox);

  return $projectsIntroSection;
}
