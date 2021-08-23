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

// 초기 상태 선언
const initialState: TodosState = [];

// 리듀서 작성
const reducer = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, action) =>
    state.concat({
      ...action.payload, // id, text 를 이 안에 넣기
      done: false,
    }),
  // 바구조화 할당을 활용하여 payload 값의 이름을 바꿀 수 있음
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
      !todo.done ? { ...todo, active: true } : { ...todo, active: false }
    ),
  [SELECT_TODO]: (state) =>
    state.map((todo) =>
      todo.done ? { ...todo, active: true } : { ...todo, active: false }
    ),
});

export default reducer;
