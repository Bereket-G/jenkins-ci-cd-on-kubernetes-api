//Router -> Controller -> DAL -> Models
/**
 * Load Module Dependencies
 */

let debug = require('debug')('comment-controller');

let Comment = require("../dal/comment");


// Get Collection of Comments
exports.getCollection = async function(req, res, next){
    let data = await Comment.getCollection({});

    res.status(200);
    res.json(data);
};

// Get one of Comment
exports.getComment = async function(req, res, next){

    debug('on get comment method');
    debug(req.params);

    let data = await Comment.getOne({_id : req.params.id});

    res.status(200);
    res.json(data);
};



// Create Comment
exports.create = async function create(req, res, next) {

    debug('on create method');
    debug(req.body);


    //------------------------------------//
    //--------- Validation -------------- //
    req.checkBody('title', 'Title is empty').notEmpty();
    req.checkBody('content', 'content is empty').notEmpty();

    let validationErrors = req.validationErrors();

    if(validationErrors){
        res.status(400);
        res.json(validationErrors);
        return;
    }
    //--------- Validation -------------- //
    //------------------------------------//



    // setting default to anonymous
    req.body.username = req.body.username ? req.body.username : 'anonymous';

    let data = await Comment.create(req.body);

    res.status(201);
    res.json(data);
};


// Update Comment
exports.update = async function update(req, res, next) {
    debug('on update method');
    debug(req.body);

    let data = await Comment.update({_id : req.params.id },req.body);

    res.status(201);
    res.json(data);
};


// Delete Comment
exports.remove = async function remove(req, res, next) {

    debug('on delete method');
    debug(req.params);

    let data = await Comment.remove({_id : req.params.id });

    res.status(200);
    res.json(data);
};


