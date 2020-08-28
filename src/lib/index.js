import Vue from "vue";
import Test from "./test/Main.vue";

const component = {
    Test
};

Object.keys(component).forEach(name => {
    Vue.component(name, component[name]);
});

export default component;
export {
    Test
};
