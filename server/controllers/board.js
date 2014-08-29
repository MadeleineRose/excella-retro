var board = require('../models/board');
var Hapi = require('hapi');

module.exports = {
    getBoards: {
        handler: function(request, reply){
          reply('hello world');
        },
        app: {
            name: 'board'
        }
    },
    createBoard: {
        handler: function(request, reply){
            board.create(request.payload.user, request.payload.boardName, request.payload.guid, function(err, board) {
                if(err) {
                    var error = Hapi.error.badRequest('Cannot create board!');
                    error.output.statusCode = 400;
                    reply(error);
                } else {
                    reply(board);
                }
            });
        },
        app: {
            name: 'board'
        }
    }
};