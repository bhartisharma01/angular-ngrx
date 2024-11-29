import { createReducer, on } from "@ngrx/store";
import { initialState } from "./post.state";

export const postReducer = createReducer(
    initialState,
    
  );