import { useContext } from 'react';
import BootstrapCard from './Create_card';
import { PostList as PostListData } from '../Store/post-list-store.jsx';

function PostList() {
  const { postList, addinitialposts } = useContext(PostListData);

  function handleContentServer() {
    console.log("Fetching posts from server...");

    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => {
        console.log("Posts fetched from server:", data.posts);

        // Transform server data to match your card requirements
        const transformedPosts = data.posts.map(post => ({
          id: post.id,
          title: post.title,
          body: post.body,
          reactions: post.reactions,
          tags: post.tags,
        }));

        addinitialposts(transformedPosts);
      })
      .catch(err => console.error("Error fetching posts:", err));
  }

  return (
    <>
      {postList.length === 0 ? (
        <center><p>No posts available</p></center>
      ) : (
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {postList.map((post) => (
            <BootstrapCard key={post.id} post={post} />   
          ))}
        </div>
      )}
      <center className="mt-4">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleContentServer}
        >
          Get posts from server
        </button>
      </center>
    </>
  );
}

export default PostList;
