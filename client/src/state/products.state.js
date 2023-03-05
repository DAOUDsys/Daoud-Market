import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bestSillier: [{}],
};

const reducers = {
  setBestSillier: (state, action) => {
    state.bestSillier = action.payload.bestSillier;
  },
  setPost: (state, action) => {
    const updatedPost = state.posts.map((post) => {
      if (post._id === action.payload.post_id) return action.payload.post;
      return post;
    });
    state.posts = updatedPost;
  },
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers,
});

export const { setPost, setBestSillier } = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;
