var app = require('./../_module_init.js');
var constants = require('../../../../shared/constants/boardConstants');

app.directive('whatWentWell', [function() {
    "use strict";
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/whatWentWell.html',
        controller: function($scope, boardService) {
            $scope.feedbackList = [];
            $scope.phases = constants.board.phases;

            $scope.sendFeedback = function() {
                boardService.sendFeedback($scope.boardId, $scope.feedback).then(function(savedFeedback) {
                    $scope.userFeedback.push(savedFeedback);
                    $scope.sendFeedbackForm.$setPristine();
                    $scope.feedback = '';
                }, function(validation){
                    if(typeof validation !== "object"){
                        validation = [validation];
                    }
                    $scope.validation = validation;
                });
            };
        }
    };
}]);

module.exports = app;