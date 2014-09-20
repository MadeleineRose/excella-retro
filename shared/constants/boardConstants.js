/* jslint node: true */
'use strict';

var readonly = require('./readonly.js');

var values = {
    errors: {
        scrumMasterMismatch: 'scrum master key mismatch',
        userExists: "User is already on board",
        userDoesNotExist: "User isn't on board"
    },

    messages: {
        cannotCreate: 'Cannot create board!',
        cannotFind: 'Cannot find board!',
        cannotDelete: 'Cannot delete board!',
        cannotUpdatePhase: 'Cannot update board phase!',
    },

    phases: {
        initial: 'initial',
        feedbackStarted: 'feedback-started',
        feedbackCompleted: 'feedback-completed',
        votingStarted: 'voting-started',
        votingEnded: 'voting-ended'
    },

    socketEmitters: {
        joinBoard: 'room',
        joinSuccess: 'join-success',
        joinError: 'join-error',
        joined: 'joined',
        beginVoting: 'begin-voting',
        collectVotes: 'collect-votes',
        themeAdded: 'theme-added',
        boardClosed: 'board-closed',
        refreshBoard: 'refresh-board'
    }
};

exports = module.exports = readonly(values);