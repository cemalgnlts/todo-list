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

            <div className="main">

                <Block inset>
                    <Header />

                    <ListToDo />
                </Block>

                <Fab slot="fixed" position="center-bottom">
                    <div className="plus"></div>
                </Fab>

            </div>

        </Page>
    );
}

export default HomePage;