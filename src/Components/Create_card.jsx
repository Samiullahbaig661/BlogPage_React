import React, { useContext } from 'react';
import css from '../Compunents_CSS/Create_card.module.css';
import { PostList } from '../Store/post-list-store';
import { MdDeleteForever } from "react-icons/md";

function BootstrapCard({ post }) {   // ✅ Correct prop name
  const { removePost } = useContext(PostList);

  return (
    <div className={`card ${css.manageCard}`} style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span 
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => removePost(post.id)}
            style={{ cursor: 'pointer' }}
          >
            <MdDeleteForever />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags && post.tags.map((tag, index) => (
          <span key={index} className="badge bg-primary me-2">{tag}</span>
        ))}
        {/* <div className="alert alert-success m-3" role="alert">
          <strong>Reactions:</strong> {post.reactions}
        </div> */}
      </div>
    </div>
  );
}

export default BootstrapCard;
