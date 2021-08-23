import { ActionType } from "typesafe-actions";
import * as actions from "./action";

export type TodosAction = ActionType<typeof actions>;

export type Todo = {
  id: number;
  text: string;
  done: boolean;
  active: boolean;
};

export type TodosState = Todo[];
