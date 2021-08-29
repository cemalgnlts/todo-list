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
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        aria-hidden="true"
                        data-prefix="fas"
                        data-icon="plus"
                        className="plus"
                        viewBox="0 0 448 512"
                    >
                        <path 
                            fill="currentColor"
                            d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                    {/* <div className="plus"></div> */}
                </Fab>

            </div>

        </Page>
    );
}

export default HomePage;