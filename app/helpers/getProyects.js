import { ajax } from "../helpers/ajax.js";
import { ProyectsCards } from "../components/proyects/proyectCards/ProyectsCards.js";

export async function getProyects(element) {
  let relativeUrl = `app/assets/json/individualProjects`;
  let urlProyects = `${relativeUrl}/DataProjectIntroduction.json`;

  await ajax({
    url: urlProyects,
    cbSuccess: (proyects) => {
      console.log(proyects);
      proyects.forEach((proyect) => {
        element.appendChild(ProyectsCards(proyect));
      });
    },
  });
}
