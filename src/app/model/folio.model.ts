import {Media} from "./media.model";
import {Skills} from "./skills.model";
import {Projet} from "./projet.model";

export interface Folio {
  first_name: string;
  job: string;
  media: Media;
  picture: string;
  presentation: string;
  skills: Skills[];
  projet: Projet[];
}
