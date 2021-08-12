import React from "react";

import { List, ListItem } from "framework7-react";
import ToDoItem from "./ToDoItem";

function ListToDo() {

    return (
        <List
            noHairlines
            noHairlinesBetween
        >

            <ToDoItem slot="list" />
            <ToDoItem slot="list" />

        </List>
    );
}

export default ListToDo;