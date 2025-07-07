import { createContext, useReducer } from "react";

const defaultPostList = {
    postList: [],
    addPost: () => {},
    addinitialposts: () => {},
    removePost: () => {},
};

export const PostList = createContext(defaultPostList);

function postListReducer(state, action) {
    console.log("Current state:", state);   
    switch (action.type) {
        case 'ADD_POST':
            return [action.payload,...state ];
        case 'ADD_INITIAL_POST':
           return [...action.payload.posts];
        case 'REMOVE_POST':
            console.log("Removing post with ID:", action.payload);
            return state.filter(post => post.id !== action.payload);
        default:
            return state;
    }
}



function PostListProvider({ children }) {
    const [postList, dispatch] = useReducer(postListReducer, []);

    function addPost(post) {
        dispatch({ type: 'ADD_POST', 
                        payload: post });
    }
    function addinitialposts(posts) {
        dispatch({ type: 'ADD_INITIAL_POST',
                      payload: {posts} });
    }

    function removePost(postId) {
        dispatch({ type: 'REMOVE_POST',
                         payload: postId });
    }

    return (
        <PostList.Provider value={{
            postList,
            addPost,
            addinitialposts,
            removePost
        }}>
            {children}
        </PostList.Provider>
    );
}

export default PostListProvider; // Export the provider, not the context    