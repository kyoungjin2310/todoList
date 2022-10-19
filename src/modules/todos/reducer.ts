import { TodosState, TodosAction } from "./type";
import { createReducer } from "typesafe-actions";
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  ALL_TODO,
  CLEAR_TODO,
  NOT_SELECT_TODO,
  SELECT_TODO,
} from "./action";

// 초기 상태
const initialState: TodosState = [
  {
    id: 1,
    text: "todo1",
    done: false,
    active: true,
  },
  {
    id: 2,
    text: "todo2",
    done: false,
    active: true,
  },
  {
    id: 3,
    text: "todo3",
    done: true,
    active: false,
  },
  {
    id: 4,
    text: "todo4",
    done: false,
    active: true,
  },
];

// reducer
const reducer = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, action) =>
    state.concat({
      ...action.payload,
      done: false,
    }),
  [TOGGLE_TODO]: (state, { payload: id }) =>
    state.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ),
  [REMOVE_TODO]: (state, { payload: id }) =>
    state.filter((todo) => todo.id !== id),
  [ALL_TODO]: (state) =>
    state.map((todo) => (!todo.active ? { ...todo, active: true } : todo)),
  [CLEAR_TODO]: (state) => [],
  [NOT_SELECT_TODO]: (state) =>
    state.map((todo) =>
      !todo.done ? { ...todo, active: false } : { ...todo, active: true }
    ),
  [SELECT_TODO]: (state) =>
    state.map((todo) =>
      todo.done ? { ...todo, active: false } : { ...todo, active: true }
    ),
});

export default reducer;
