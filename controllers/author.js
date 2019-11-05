//Router -> Controller -> DAL -> Models
/**
 * Load Module Dependencies
 */

let debug = require('debug')('author-controller');

let Author = require("../dal/author");


// Default Controller
exports.notImplemented = async function(req, res, next) {
    res.status(404);

    res.json({
        message: "Not Implemented"
    })
};

// Get Collection of Authors
exports.getCollection = async function(req, res, next){
    let data = await Author.getCollection({});

    res.status(200);
    res.json(data);
};

// Get one of Author
exports.getAuthor = async function(req, res, next){

    debug('on get author method');
    debug(req.params);

    let data = await Author.getOne({_id : req.params.id});

    res.status(200);
    res.json(data);
};



// Create Author
exports.create = async function create(req, res, next) {

    debug('on create method');
    debug(req.body);

    //------------------------------------//
    //--------- Validation -------------- //
    req.checkBody('firstname', 'firstname is empty').notEmpty();
    req.checkBody('lastname', 'lastname is empty').notEmpty();
    req.checkBody('date_of_birth', 'date_of_birth is empty').notEmpty();

    let validationErrors = req.validationErrors();

    if(validationErrors){
        res.status(400);
        res.json(validationErrors);
        return;
    }
    //--------- Validation -------------- //
    //------------------------------------//

    let data = await Author.create(req.body);

    res.status(201);
    res.json(data);
};


// Update Author
exports.update = async function update(req, res, next) {
    debug('on update method');
    debug(req.body);

    let data = await Author.update({_id : req.params.id },req.body);

    res.status(201);
    res.json(data);
};


// Delete Author
exports.remove = async function remove(req, res, next) {

    debug('on delete method');
    debug(req.params);

    let data = await Author.remove({_id : req.params.id });

    res.status(200);
    res.json(data);
};


