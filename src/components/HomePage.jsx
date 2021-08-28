import React from "react";

import {
    Page,
    Block,
    Fab,
    f7
} from "framework7-react";

import Header from "./Header";
import ListToDo from "./ListToDo";
import { store } from "../store";

function HomePage() {
    
    const openPrompt = () => {
        f7.dialog.prompt("", "New ToDo", text => {
            store.dispatch("add", { text });
        });
    }

    return (
        <Page>

            <div className="main">

                <Block inset>
                    <Header />

                    <ListToDo />
                </Block>

                <Fab slot="fixed" onClick={openPrompt} position="center-bottom">
                    <div className="plus"></div>
                </Fab>

            </div>

        </Page>
    );
}

export default HomePage;