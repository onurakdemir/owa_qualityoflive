import { Router } from 'express';
import HobbyController from '../controllers/hobby.controller';
const router = new Router();

// Get all Posts
router.get('/hobbies', (req, res) => {
    HobbyController.getAll(req, res);
});

// Get one post by cuid
router.get('/hobby/:cuid', (req, res) =>{
    HobbyController.getHobby(req,res);
});

// Add a new Post
router.post('/hobby', (req, res) => {
    HobbyController.addHobby(req, res);
});

// router.put('/hobbies/:cuid', (req, res) => {
//     PostController.updatePost(req, res);
// });

// // Delete a post by cuid
// router.delete('/hobbies/:cuid', (req, res) => {
//     PostController.deletePost(req, res);
// });
export default router;