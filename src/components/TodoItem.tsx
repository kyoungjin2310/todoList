import React, { CSSProperties } from "react";
import { Todo } from "../modules/todos";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  // CSSProperties 는 style 객체의 타입입니다.
  const textStyle: CSSProperties = {
    textDecoration: todo.done ? "line-through" : "none",
  };
  const removeStyle: CSSProperties = {
    marginLeft: 8,
    color: "red",
  };

  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleRemove = () => {
    onRemove(todo.id);
  };

  return (
    <li className={todo.active ? "on" : "hide"}>
      <div>
        <input onClick={handleToggle} type="checkbox" id={`${todo.id}`} />
        <label
          htmlFor={`${todo.id}`}
          className={todo.done ? "active" : undefined}
        >
          {todo.text}
        </label>
        <span className="delete" onClick={handleRemove} style={removeStyle}>
          (X)
        </span>
      </div>
    </li>
  );
}

export default TodoItem;
