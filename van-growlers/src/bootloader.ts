import "./index.scss";

import { load, subscribe } from "growlers/store";

import { defineComponent } from 'vue';
import VanillaCart from "growlers/VanillaCart";
import VanillaSearch from "growlers/VanillaSearch";
import VanillaTaps from "growlers/VanillaTaps";

load("hv-taplist");

subscribe((state) => {
    const tapList = state.filteredTaps.slice(0,3).map(({beverageName}) => beverageName).join(", ");

    document.querySelector("#like").innerText = tapList;
});

VanillaCart("#cart")
VanillaSearch("#search")
VanillaTaps("#taps")