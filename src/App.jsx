import { App, View } from "framework7-react";

import HomePage from "./components/HomePage";

import { store } from "./store";

const f7params = {
    name: "ToDo List",
    theme: "md",
    store,
    routes: [{
        path: "/",
        component: HomePage
    }]
};

export default () => (
  <App {...f7params}>
    <View main url="/" />
  </App>
)