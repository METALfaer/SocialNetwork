import profileReducer, {addPostActionCreator, StateProfilePageType} from "./profile-reducer";

let state: StateProfilePageType = {
    posts: [
        {id: 1, message: 'more many', likesCount: 14},
        {id: 2, message: 'want meny many', likesCount: 32}
    ],
    profile: {
        userId: 0,
        fullName: '',
        photos: {large: undefined, small: undefined},
        contacts: {
            facebook: '',
            github: '',
            instagram: '',
            mainLink: '',
            twitter: '',
            vk: '',
            website: '',
            youtube: ''
        },
        lookingForAJob: true,
        lookingForAJobDescription: '',
    },
    status: ''
}
test('message of  post should be correct', () => {
    let action = addPostActionCreator('it-camasutra')

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})

test('new post should be added', () => {

    let action = addPostActionCreator('it-camasutra')

    let newState = profileReducer(state, action)

    expect(newState.posts[2].message).toBe('it-camasutra')
})

