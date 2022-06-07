import { PROVIDERS } from "../config";
import fa from "./fa";
import mdi from "./mdi";
import hi from "./hi";

const faPrefix = PROVIDERS.fontAwesome.prefix;
const mdiPrefix = PROVIDERS.materialDesign.prefix;
const hiPrefix = PROVIDERS.hero.prefix;

export default {
  [faPrefix]: fa(faPrefix),
  [mdiPrefix]: mdi(mdiPrefix),
  [hiPrefix]: hi(hiPrefix),
};
