import Test from "./test";

const myComp = [
    Test
];

const install = function(Vue) {
    if (install.installed) {
        return;
    }
    for (const item of myComp) {
        Vue.component(item.name, item);
    }
};

if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}

export default {
    install
};
export {
    Test
};
