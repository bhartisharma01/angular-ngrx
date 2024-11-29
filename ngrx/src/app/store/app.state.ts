import { counterReducer } from "../counter-with-ngrx/state/counter.reducer";
import { CounterState } from "../counter-with-ngrx/state/counter.state";
import { postReducer } from "../posts/postlist/state/post.reducer";
import { PostState } from "../posts/postlist/state/post.state";

export interface AppState{
    counter:CounterState,
    posts:PostState
}

export const AppReducer = {
    counter:counterReducer,
    posts:postReducer
}