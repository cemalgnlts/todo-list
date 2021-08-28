import React from "react";

import { ListItem } from "framework7-react";

function ToDoItem({ title, id, checked, onChange }) {

    return (
        <ListItem
            id={id}
            title={title}
            value={title}
            checked={checked}
            name="todo-radio"
            onChange={onChange}
            checkbox
        ></ListItem>
    );
}

export default ToDoItem;