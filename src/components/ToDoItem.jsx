import React from "react";

import { ListItem } from "framework7-react";

function ToDoItem() {

    return (
        <ListItem
            title="Books"
            value="Books"
            name="todo-radio"
            checkbox
        ></ListItem>
    );
}

export default ToDoItem;