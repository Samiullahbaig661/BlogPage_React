import React, { useRef } from "react";
import { useContext } from 'react';
import { PostList } from '../Store/post-list-store.jsx';

function CreatePost() {
  const { addPost } = useContext(PostList);
  const userId = useRef();
  const title = useRef();
  const body = useRef();
  const reactions = useRef();
  const tags = useRef();

  function handleSubmit(e) {
    e.preventDefault(); // Corrected typo: preventdefault -> preventDefault
    const post = {
      id: Date.now().toString(),
      userId: userId.current.value,
      title: title.current.value,
      body: body.current.value,
      reactions: reactions.current.value,
      tags: tags.current.value.split(',').map(tag => tag.trim())
    };
    
    addPost(post);
    userId.current.value = '';
    title.current.value = '';
    body.current.value = '';
    reactions.current.value = '';
    tags.current.value = '';
  }

  return (
    <>
      <form onSubmit={handleSubmit}> {/* Pass handleSubmit directly */}
        <div className="mb-3">
          <label htmlFor="userid" className="form-label">
            User ID
          </label>
          <input
            type="text"
            ref={userId}
            className="form-control"
            id="userid"
            placeholder="User ID"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            ref={title}
            type="text"
            className="form-control"
            id="title"
            placeholder="How are you doing Today..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            ref={body}
            className="form-control"
            id="body"
            rows="3"
            placeholder="Feed your mind with positive thoughts..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Reactions
          </label>
          <input
            ref={reactions}
            type="text"
            className="form-control"
            id="reactions"
            placeholder="How many people reacted to this post..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter Tags Here
          </label>
          <input
            ref={tags}
            type="text"
            className="form-control"
            id="tags"
            placeholder="Tags for the post..."
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
}

export default CreatePost;