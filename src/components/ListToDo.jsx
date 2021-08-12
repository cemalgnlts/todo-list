import React from "react";

import { List, ListItem } from "framework7-react";
import ToDoItem from "./ToDoItem";

const fakeItems = [
    "Buy new sweatshirt",
    "Begin promotional phase",
    "Read an article",
    "Try not to fall asleep",
    "Watch 'Sherlock'",
    "Begin QA for the product",
    "Go for a walk"
]

function ListToDo() {

    return (
        <List
            noHairlines
            noHairlinesBetween
        >

        {fakeItems.map((txt, i) => (
            <ToDoItem
                slot="list"
                key={i}
                title={txt}
            />
        ))}

        </List>
    );
}

export default ListToDo;