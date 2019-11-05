//Router -> Controller -> DAL -> Models
/**
 * Load Module Dependencies
 */

let debug = require('debug')('article-controller');

let Article = require("../dal/article");


// Default Controller
exports.notImplemented = async function(req, res, next) {
  res.status(404);
  res.json({
    message: "Not Implemented"
  })
};

// Get Collection of Articles
exports.getCollection = async function(req, res, next){
    let data = await Article.getCollection({});
    res.status(200);
    res.json(data);
};

// Get one of Article
exports.getArticle = async function(req, res, next){

    debug('on get article method');
    debug(req.params);
    
    let data = await Article.getOne({_id : req.params.id});

    res.status(200);
    res.json(data);
};



// Create Article
exports.create = async function create(req, res, next) {

    debug('on create method');
    debug(req.body);

    //------------------------------------//
    //--------- Validation -------------- //
    req.checkBody('Title', 'Title is empty').notEmpty();
    req.checkBody('Content', 'Content is empty').notEmpty();
    req.checkBody('authorId', 'authorId is empty').notEmpty();

    let validationErrors = req.validationErrors();

    if(validationErrors){
        res.status(400);
        res.json(validationErrors);
        return;
    }
    //--------- Validation -------------- //
    //------------------------------------//


   let data = await Article.create(req.body);

   res.status(201);
   res.json(data);
};


// Update Article
exports.update = async function update(req, res, next) {
    debug('on update method');
    debug(req.body);

    let data = await Article.update({_id : req.params.id },req.body);

    res.status(201);
    res.json(data);
};


// Delete Article
exports.remove = async function remove(req, res, next) {

    debug('on delete method');
    debug(req.params);
    
    let data = await Article.remove({_id : req.params.id });

    res.status(200);
    res.json(data);
};


