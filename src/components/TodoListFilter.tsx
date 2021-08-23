import React, { MouseEvent } from "react";
import { Todo } from "../modules/todos";

type TodoListFilterProps = {
  todos: Todo[];
  onAllSelect: () => void;
  onClearSelect: () => void;
  onSelectTodo: () => void;
  onNotSelectTodo: () => void;
};

function TodoListFilter({
  todos,
  onAllSelect,
  onClearSelect,
  onSelectTodo,
  onNotSelectTodo,
}: TodoListFilterProps) {
  const onActiveClass = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = document.querySelectorAll(".filterList li a");
    const target = Array.prototype.slice.call(el);
    for (let i = 0; i < el.length; i++) {
      target[i].classList.remove("active");
    }
    (e.target as Element).classList.add("active");
  };

  const handleAllSelect = (e: MouseEvent<HTMLAnchorElement>) => {
    onActiveClass(e);
    onAllSelect();
  };

  const handleSelectTodo = (e: MouseEvent<HTMLAnchorElement>) => {
    onActiveClass(e);
    onSelectTodo();
  };
  const handleNotSelectTodo = (e: MouseEvent<HTMLAnchorElement>) => {
    onActiveClass(e);
    onNotSelectTodo();
  };

  const handleClearSelect = (e: MouseEvent<HTMLAnchorElement>) => {
    onActiveClass(e);
    onClearSelect();
  };
  return (
    <ul className="filterList">
      <li className="length">
        <span>{todos.length} items left</span>
      </li>
      <li>
        <a href="#" className="active" onClick={(e) => handleAllSelect(e)}>
          All
        </a>
      </li>
      <li>
        <a href="#" onClick={(e) => handleSelectTodo(e)}>
          active
        </a>
      </li>
      <li>
        <a href="#" onClick={(e) => handleNotSelectTodo(e)}>
          completed
        </a>
      </li>
      <li className="completed">
        <a href="#" onClick={(e) => handleClearSelect(e)}>
          Clear completed
        </a>
      </li>
    </ul>
  );
}

export default TodoListFilter;
