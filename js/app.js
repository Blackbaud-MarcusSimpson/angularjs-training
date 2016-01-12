angular.module('redditApp', [])
  .factory('storiesFactory', ['$rootScope', function($rootScope) {
    var stories = [
      new story("Blackbaud is good at spelling", "http://www.blackbaud.com"),
      new story("TIY is appreciative of that", "http://www.theironyard.com")
    ];

    function getStories() {
      return stories;
    }

    function addStory(newTitle, newUrl) {
      stories.push(new story(newTitle, newUrl));
    }

    return {
      getStories: getStories,
      addStory: addStory
    };
  }])
  .controller('StoryController', ['$scope', 'storiesFactory', function($scope, storiesFactory) {
    $scope.title = "READINGIT";
    this.stories = storiesFactory.getStories();
    this.addStory = function(newTitle, newUrl) {
      storiesFactory.addStory(newTitle, newUrl);
    };
  }])

  .factory('commentsFactory', ['$rootScope', function($rootScope) {
    var comments = [
      new comment("This is Comment1", "1"),
      new comment("This is Comment2", "2")
    ];

    function getComments() {
      return comments;
    }

    return {
      getComments: getComments
    };
  }])
  .controller('CommentController', ['$scope', 'commentsFactory', function($scope, commentsFactory) {
    this.comments = commentsFactory.getComments();
  }]);
