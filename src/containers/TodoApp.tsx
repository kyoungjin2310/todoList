import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import {
  toggleTodo,
  removeTodo,
  addTodo,
  allTodo,
  clearTodo,
  selectTodo,
  notSelectTodo,
} from "../modules/todos";
import TodoInsert from "../components/TodoInsert";
import TodoList from "../components/TodoList";
import TodoListFilter from "../components/TodoListFilter";

function TodoApp() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const onInsert = (text: string) => {
    dispatch(addTodo(text));
  };

  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const onRemove = (id: number) => {
    dispatch(removeTodo(id));
  };

  const onAllSelect = () => {
    dispatch(allTodo());
  };

  const onClearSelect = () => {
    dispatch(clearTodo());
  };

  const onSelectTodo = () => {
    dispatch(selectTodo());
  };

  const onNotSelectTodo = () => {
    dispatch(notSelectTodo());
  };

  return (
    <>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      <TodoListFilter
        todos={todos}
        onAllSelect={onAllSelect}
        onClearSelect={onClearSelect}
        onSelectTodo={onSelectTodo}
        onNotSelectTodo={onNotSelectTodo}
      />
    </>
  );
}

export default TodoApp;
