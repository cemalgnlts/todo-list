import React from "react";

import { ListItem } from "framework7-react";

function ToDoItem({ title }) {

    return (
        <ListItem
            title={title}
            value={title}
            name="todo-radio"
            checkbox
        ></ListItem>
    );
}

export default ToDoItem;