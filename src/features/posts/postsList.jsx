import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllPosts, postUpdated } from './postsSlice';
import PostAuthor from './postAuthor';
import TimeAgo from "./timeAgo";
import ReactionButtons from './reactionButtons';

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const dispatch = useDispatch();

  const [editingPostId, setEditingPostId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");

  const startEditing = (post) => {
    setEditingPostId(post.id);
    setEditedTitle(post.title);
    setEditedContent(post.content);
  };

  const saveChanges = () => {
    dispatch(postUpdated({ id: editingPostId, title: editedTitle, content: editedContent }));
    setEditingPostId(null);
  };

  const cancelEditing = () => {
    setEditingPostId(null);
    setEditedTitle("");
    setEditedContent("");
  };

  const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map((post) => (
    <article className="posts" key={post.id}>
        {editingPostId === post.id ? (
            <div className="edit__form">
              <div className="form__group">
                <label className="text-cs" htmlFor="postTitle">Title:</label>
                <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    className="edit__input"
                    placeholder="Edit title"
                />
              </div>

              <div className="form__group">
                <label className="text-cs" htmlFor="postContent">Content:</label>
                <textarea
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                    className="edit__textarea"
                    placeholder="Edit content"
                />
              </div>
                <div className='edit__buttons-container'>
                  <button 
                    onClick={cancelEditing} 
                    className="cancel__button hero__link text-cs">
                    Cancel
                  </button>
                  <button 
                    onClick={saveChanges}
                    className="save__button btn text-cs">
                    Save Changes
                  </button>
                </div>
            </div>
        ) : (
            <>
                <h3 className="posts__title">{post.title}</h3>
                <p className="posts__content">{post.content.substring(0, 500)}</p>

                {/* Conditional rendering of image preview */}
                {post.image && (
                  <div className="post__media">
                    <h4>Image:</h4>
                    <img
                      src={post.image}
                      alt="Uploaded"
                      style={{ maxWidth: "200px", marginTop: '10px' }}
                    />
                  </div>
                )}

                {/* Conditional rendering of video preview */}
                {post.video && (
                  <div className="post__media">
                    <h4>Video:</h4>
                    <video
                      controls
                      src={post.video}
                      style={{ maxWidth: "200px", marginTop: '10px' }}
                    />
                  </div>
                )}

                <div className='posts__author-container'>
                  <p className="posts__author">
                    <PostAuthor userId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                  </p>
                  <button onClick={() => startEditing(post)} className="edit__button">Edit Comment</button>
                </div>
                  <ReactionButtons post={post} />
            </>
        )}
    </article>
));

  return (
    <section className='posts__container'>
      <h2 className='posts__heading'>Recent Comments</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
