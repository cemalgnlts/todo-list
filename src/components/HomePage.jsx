import React from "react";

import { Page, Block } from "framework7-react";

import Header from "./Header";

function HomePage() {
    return (
        <Page>
            <Block inset>
                <Header/>
            </Block>
        </Page>
    );
}

export default HomePage;