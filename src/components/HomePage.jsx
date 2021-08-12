import React from "react";

import {
    Page,
    Block,
    Fab,
    Icon
} from "framework7-react";

import Header from "./Header";
import ListToDo from "./ListToDo";

function HomePage() {
    return (
        <Page>
            <Block inset>
                <Header />

                <ListToDo />
            </Block>

            <Fab position="center-bottom" slot="fixed">
                <div className="plus"></div>
            </Fab>
        </Page>
    );
}

export default HomePage;