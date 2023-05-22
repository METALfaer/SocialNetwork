import React from "react";
import {PostsType} from "../../../redux/profile-reducer";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


export type MyPostsType = {
    posts: Array<PostsType>
    //newPostText: string
    //updateNewPostText: (text: string) => void
    addPost: (newPostText: any) => void
}

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
const maxLength10 = maxLengthCreator(10)
const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='newPostText' component={Textarea}
                   validate={[required, maxLength10]}
                   placeholder='getPost'/>
        </div>
        <div>
            <button>
                Add Post
            </button>
        </div>
    </form>;
}
const AddNewPostFormRedux = reduxForm<FormDataType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)


export const MyPosts = (props: MyPostsType) => {

    //let newPostElement = React.createRef<HTMLTextAreaElement>()
    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

    const onAddPost = (values: any) => {
        props.addPost(values.newPostText)
    }
    /*const onPostChange = () => {
        if (newPostElement && newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
            // let action = updateNewPostTextActionCreator(text) as UpdateNewPostTextActionType;
            // props.dispatch(action)
        }
    }*/

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}