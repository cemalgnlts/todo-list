import React from "react";

import { List, useStore } from "framework7-react";
import ToDoItem from "./ToDoItem";
import { store } from "../store";

function ListToDo() {
    const list = useStore("list");

    const handleChange = ev => {
        const target = ev.target;
        const li = target.parentElement.parentElement;

        store.dispatch("updateChecked", { 
            id: li.id,
            text: target.value,
            checked: target.checked
        });
    }

    return (
        <List
            noHairlines
            noHairlinesBetween
        >

            {list.map(itm => (
                <ToDoItem
                    slot="list"
                    id={itm.id}
                    key={itm.id}
                    onChange={handleChange}
                    checked={itm.checked}
                    title={itm.text}
                />
            ))}

        </List>
    );
}

export default ListToDo;