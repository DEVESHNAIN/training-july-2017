let express  = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');
let User = require('../models/user');            // get an instance of the express Router
let config = require('../../config');
let controller=require('../controller/controller');
router.post('/authenticate', controller.authenticate);
router.post('/users', controller.postUserData);
router.get('/users',controller.getAllDetails);
router.delete('/users/:username',controller.delete);
router.use(controller.middleware);
router.get('/users/:userName',controller.idSpecificGet);
router.put('/users/:userName',controller.idSpecificPut);
router.get('/', controller.test);

module.exports = router;
