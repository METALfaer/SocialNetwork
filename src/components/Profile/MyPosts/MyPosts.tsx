import React from "react";
import { PostsType } from "../../../redux/profile-reducer";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


export type MyPostsType = {
    posts: Array<PostsType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}


export const MyPosts = (props: MyPostsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

    const onAddPost = () => {
        props.addPost()
    }
    const onPostChange = () => {
        if (newPostElement && newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
            // let action = updateNewPostTextActionCreator(text) as UpdateNewPostTextActionType;
            // props.dispatch(action)
        }
    }

    return <div className={s.postsBlock}>
        <div>
            <h3>My posts</h3>
            <div className={s.posts}>
                <div>
                    <textarea ref={newPostElement}
                              value={props.newPostText}
                              onChange={onPostChange}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>
                        Add Post
                    </button>
                </div>
            </div>
            {postsElements}
        </div>
    </div>
}