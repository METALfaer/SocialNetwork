import React from "react";
import {addPostActionCreator, PostsType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux"
import {StoreType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    posts: Array<PostsType>
    //newPostText: string
}
type MapDispatchToPropsType = {
    addPost: (newPostText:any) => void
}


const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        //newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText:any) => {
            //let action = addPostActionCreator() as AddPostActionType
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer

/*
export const MyPostsContainer = (props: MyPostsContainerType) => {
    // let state = props.store.getState()

    // let newPostElement = React.createRef<HTMLTextAreaElement>()
    // const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    /!*const addPost = () => {
        let action = addPostActionCreator() as AddPostActionType
        props.store.dispatch(action)
    }
    const onPostChange = (text: string) => {
        //if (newPostElement && newPostElement.current) {
        //let text = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text) as UpdateNewPostTextActionType;
        props.store.dispatch(action)
        // }
    }*!/

    return (
        <Consumer>
            {
                (store) => {
                    let state = store.getState()

                    const addPost = () => {
                        let action = addPostActionCreator() as AddPostActionType
                        store.dispatch(action)
                    }
                    const onPostChange = (text: string) => {
                        let action =
                            updateNewPostTextActionCreator
                            (text) as UpdateNewPostTextActionType;
                        store.dispatch(action)
                    }


                    return <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                    />
                }
            }
        </Consumer>
    )
}
*/