import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns';

const initialState = [
    {
        id: '1',
        title: 'Behind the Scenes: Shooting Our Latest Short Film',
        content: "Creating this short film was a thrilling experience! From planning the storyboard to experimenting with lighting setups, the journey was packed with creativity and challenges. A memorable moment was capturing the golden hour for our outdoor scenes, which brought a magical touch to the visuals.",
        date: sub(new Date(), { minutes: 10}).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        },
            image: null,
            video:null,
    },
    {
        id: '2',
        title: 'Teamwork Makes the Dream Work: Our Video Project Recap',
        content: "Collaborating with my team on this video project was incredible. Each member brought unique ideas and skills to the table. We learned the importance of communication during post-production, especially when syncing audio and visuals seamlessly. Can't wait to share more insights!",
        date: sub(new Date(), { minutes: 5}).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        },
            image: null,
            video:null,
    }
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, content, userId, image, video) {
                return {
                    payload: {
                        id: nanoid(), // Create a unique ID for each post
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        image,
                        video,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                };
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        },

        postUpdated(state, action) { // New reducer for updating posts
            const { id, title, content } = action.payload;
            const existingPost = state.find(post => post.id === id);
            if (existingPost) {
                existingPost.title = title;
                existingPost.content = content;
            }
        }
        
    }
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;