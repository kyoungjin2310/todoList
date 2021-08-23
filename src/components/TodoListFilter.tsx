import React from "react";
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
  const handleAllSelect = () => {
    onAllSelect();
  };

  const handleSelectTodo = () => {
    onSelectTodo();
  };
  const handleNotSelectTodo = () => {
    onNotSelectTodo();
  };

  const handleClearSelect = () => {
    onClearSelect();
  };
  return (
    <ul>
      <li>
        <span>{todos.length} items left</span>
      </li>
      <li>
        <a href="#" onClick={handleAllSelect}>
          All
        </a>
      </li>
      <li>
        <a href="#" onClick={handleSelectTodo}>
          active
        </a>
      </li>
      <li>
        <a href="#" onClick={handleNotSelectTodo}>
          completed
        </a>
      </li>
      <li>
        <a href="#" onClick={handleClearSelect}>
          Clear completed
        </a>
      </li>
    </ul>
  );
}

export default TodoListFilter;
