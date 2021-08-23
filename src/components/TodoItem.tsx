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

  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleRemove = () => {
    onRemove(todo.id);
  };

  return (
    <li className={todo.active ? "on" : "hide"}>
      <div className="inputWrap">
        <input
          onClick={handleToggle}
          type="checkbox"
          id={`${todo.id}`}
          className="checkbox"
        />
        <label
          htmlFor={`${todo.id}`}
          className={todo.done ? "active" : undefined}
        >
          {todo.text}
        </label>
        <span className="delete" onClick={handleRemove}>
          X
        </span>
      </div>
    </li>
  );
}

export default TodoItem;
