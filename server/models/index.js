var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // db.connection.connect();

      db.connection.query('SELECT * FROM messages', function (error, results, fields) {
        if (error) throw error;
        // console.log('fields is: ', fields);
        // console.log('results !!', results);
        callback(results);
      });
      // db.connection.end();

    }, // a function which produces all the messages
    post: function (message, callback) {
      // db.connection.connect();
      // console.log('here is the message before db',message);
      db.connection.query(`INSERT INTO messages (username, messageText) VALUES ('${message.username}', '${message.messageText}');`, function (error, results, fields) {
        if (error) throw error;
        // console.log('fields is: ', fields);
        // console.log('results !!', results);
        callback(results);
      });

      // db.connection.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () { },
    post: function () { }
  }
};

