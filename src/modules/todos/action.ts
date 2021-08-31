import { deprecated } from "typesafe-actions";
const { createStandardAction, createAction } = deprecated;

//action type
export const ADD_TODO = "todos/ADD_TODO";
export const TOGGLE_TODO = "todos/TOGGLE_TODO";
export const REMOVE_TODO = "todos/REMOVE_TODO";
export const ALL_TODO = "todos/ALL_TODO";
export const SELECT_TODO = "todos/SELECT_TODO";
export const NOT_SELECT_TODO = "todos/NOT_SELECT_TODO";
export const CLEAR_TODO = "todos/CLEAR_TODO";

let nextId = 1;

export const addTodo = createAction(
  ADD_TODO,
  (action) => (text: string) =>
    action({
      id: nextId++,
      text,
      active: true,
    })
);

export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
export const removeTodo = createStandardAction(REMOVE_TODO)<number>();
export const allTodo = createStandardAction(ALL_TODO)();
export const selectTodo = createStandardAction(SELECT_TODO)();
export const notSelectTodo = createStandardAction(NOT_SELECT_TODO)();
export const clearTodo = createStandardAction(CLEAR_TODO)();
