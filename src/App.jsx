import { App, View } from "framework7-react";

import HomePage from "./components/HomePage";

const f7params = {
    name: "ToDo List",
    theme: "md",
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