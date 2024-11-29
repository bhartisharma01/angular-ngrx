import { Post } from "src/app/models/post.model";

export interface PostState{
    posts: Post[]
}
export const initialState: PostState ={
    posts:[
        {id:"1",title:"post title 1", description:"post descriptio 1"},
        {id:"1",title:"post title 1", description:"post descriptio 1"},
    ]
}
