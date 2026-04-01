import { initMap } from "./map.js";
import { initUI } from "./ui.js";
import { loadMetar } from "./metar.js";
import { loadTaf } from "./taf.js";
import { loadFids } from "./fids.js";

window.onload = () => {
    window.map = initMap();
    initUI();
    loadMetar();
    loadTaf();
    loadFids();
};
