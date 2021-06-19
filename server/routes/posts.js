import express from 'express';

import {getPosts,createPosts } from '../controllers/posts.js'
const router = express.Router();
// callback function
// http://localhost:5000/posts // when we check this url in search bar so we know that our express application is successfully conneted on 500 port 
router.get('/', getPosts );
router.get('/', createPost );

export default router;