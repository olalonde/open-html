import { expectType } from "tsd";
import openHtml from "./index.js";

expectType<Promise<void>>(openHtml("<html>wow</html>"));
