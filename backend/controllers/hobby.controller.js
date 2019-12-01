import Hobby from '../models/hobby';
import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';

const HobbyController = {};
HobbyController.getAll = async (req, res) => {
    try{
        await Hobby.find().sort('-dateAdded').exec((err, hobbies) => {
            if (err) {
                res.status(500).send(err);
            }
            res.json({ hobbies });
        });
    }
    catch(err){
        res.send(err);
    }
}

HobbyController.getHobby = async (req, res) => {
    try{
        Hobby.findOne({ cuid: req.params.cuid }).exec((err, hobby) => {
            if (err) {
                res.status(500).send(err);
            }
            res.json({ hobby });
        });
    }
    catch(err){

    }
}

HobbyController.addHobby = async (req, res) => {
    try {
        if (!req.body.name ) {
            res.status(403).end();
        }

        const newHobby = new Hobby(req.body);

        // Let's sanitize inputs
        newHobby.title = sanitizeHtml(newHobby.name);
        newHobby.cuid = cuid();

        newHobby.save((err, saved) => {
            if (err) {
                res.status(500).send(err);
            }
            res.json({ hobby: saved });
        });
    }
    catch (err) {
        console.log(err);
    }
}

// PostController.updatePost = async (req, res) => {
//     try {
//         if (!req.body.post.title || !req.body.post.content) {
//             res.status(403).end();
//         }
//         Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
//             // Handle any possible database errors
//             if (err) {
//                 res.status(500).send(err);
//             } else {
//                 // Update each attribute with any possible attribute that may have been submitted in the body of the request
//                 // If that attribute isn't in the request body, default back to whatever it was before.
//                 post.title = req.body.post.title || post.title;
//                 post.content = req.body.post.content || post.content;
//                 console.log('Post about to be saved');
//                 // Save the updated document back to the database
//                 post.save((err, saved) => {
//                     if (err) {
//                         res.status(500).send(err)
//                     }
//                     res.json({ post: saved });
//                 });
//             }
//         });
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// PostController.deletePost = async (req, res) => {
//     try {
//         Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
//             if (err) {
//                 res.status(500).send(err);
//             }

//             post.remove(() => {
//                 res.status(200).end();
//             });
//         });
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

export default HobbyController;