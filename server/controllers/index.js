var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) { //handle get requests from the user
      // console.log('I made it to the get in the controller');
      models.messages.get(function(data){
        // console.log('this is the request from controller', req );
        // console.log('this is the data from controller',data);
        res.send(data);
      });
      
      //GET request comes in to get the messages from the user 
      //grab the required messages from the database
      //serve them back to user
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // req.body the actual message
     
      // console.log('this is the request body from controller', req.body);
      models.messages.post(req.body, function(results) {
        console.log('this is the result', results);
        console.log('this is the request body from model', req.body);
      });
     res.send(res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

