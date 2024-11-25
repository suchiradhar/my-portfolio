import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

import { FiImage, FiVideo } from 'react-icons/fi';

const AddPostForm = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [videoFile, setVideoFile] = useState(null);

    const [imagePreview, setImagePreview] = useState(null);
    const [videoPreview, setVideoPreview] = useState(null);

    // Input change handlers
    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);
    const onAuthorChanged = (e) => setUserId(e.target.value);

    // Handle file upload

    const [isUploaded, setIsUploaded] = useState(false);

    const handleFileUpload = (e, type) => {
        const file = e.target.files[0];
        if (!file) return;
    
        if (type === "image") {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        } else if (type === "video") {
            setVideoFile(file);
            setVideoPreview(URL.createObjectURL(file));
        }
    
        // Setting upload status to true
        setIsUploaded(true);
    };
    

    // Handle post save
    const onSavePostClicked = () => {
        if (title && content && userId) {

        // Dispatch post
        dispatch(postAdded(title, content, userId, imagePreview, videoPreview));
        setTitle("");
        setContent("");
        setUserId("");
        setImageFile(null);
        setVideoFile(null);

        // Reset form
        setTitle("");
        setContent("");
        setUserId("");
        setImageFile(null);
        setVideoFile(null);
        }
    };

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    // Generate user options for the dropdown
    const usersOptions = users.map((user) => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

    return (
        <section className="comments__heading">
            <h2>Add a Comment</h2>
            <form className="comments_form">
                <div className="form__group">
                    <label className="text-cs" htmlFor="postTitle">Title:</label>
                    <input
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={title}
                        onChange={onTitleChanged}
                    />
                </div>
                
                <div className="form__group">
                    <label className="text-cs" htmlFor="postAuthor">Author:</label>
                    <select
                        id="postAuthor"
                        value={userId}
                        onChange={onAuthorChanged}
                        className="author__dropdown"
                    >
                        <option value="">Select an author</option>
                        {usersOptions}
                    </select>
                </div>

                <div className="form__group">
                    <label className="text-cs" htmlFor="postContent">Content:</label>
                    
                    <div className="textarea__container">
                        <textarea
                            id="postContent"
                            name="postContent"
                            value={content}
                            onChange={onContentChanged}
                        />
                        <div className="upload__icons">
                            {!imageFile && (
                                <>
                                    <input
                                        type="file"
                                        id="imageUpload"
                                        accept="image/*"
                                        onChange={(e) => handleFileUpload(e, 'image')}
                                        className="upload__input"
                                    />
                                    <label htmlFor="imageUpload" className="upload__icon">
                                        <FiImage size={20} title="Upload Image" />
                                    </label>
                                </>
                            )}

                            {!videoFile && (
                                <>
                                    <input
                                        type="file"
                                        id="videoUpload"
                                        accept="video/*"
                                        onChange={(e) => handleFileUpload(e, 'video')}
                                        className="upload__input"
                                    />
                                    <label htmlFor="videoUpload" className="upload__icon">
                                        <FiVideo size={20} title="Upload Video" />
                                    </label>
                                </>
                            )}
                        </div>

                        <div className="preview__section">
                        {imageFile && (
                            <div>
                                <h4>Preview your Image</h4>
                                <img
                                    src={URL.createObjectURL(imageFile)}
                                    alt="Preview"
                                    style={{ maxWidth: "200px" }}
                                />
                            </div>
                        )}
                        {videoFile && (
                            <div>
                                <h4>Preview your Video</h4>
                                <video
                                    controls
                                    src={URL.createObjectURL(videoFile)}
                                    style={{ maxWidth: "600px" }}
                                />
                            </div>
                        )}
                    </div>

                    </div>
                </div>
                <div className="form__buttons">
                    <button
                        type="button"
                        onClick={() => {
                            setTitle("");
                            setContent("");
                            setUserId("");
                            setImageFile(null);
                            setVideoFile(null);
                        }}
                        className="cancel__button hero__link text-cs"
                        >
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="sharecomment__button btn text-cs"
                        onClick={onSavePostClicked}
                        disabled={!canSave}
                    >
                        Share Comment
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AddPostForm;
