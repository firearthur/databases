var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) { //handle get requests from the user
      models.messages.get(function(data){
        res.send(data);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
  
      models.messages.post(req.body, function(results) {
        res.send(201);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

