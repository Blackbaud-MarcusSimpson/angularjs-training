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

    function incrementCommentCount(storyId) {
      for (i=0; i<stories.length; i++) {
        if (stories[i].id == storyId)
          stories[i].numComments++;
      }
    }

    return {
      getStories: getStories,
      addStory: addStory,
      incrementCommentCount: incrementCommentCount
    };
  }])
  .controller('StoryController', ['$scope', 'storiesFactory', function($scope, storiesFactory) {
    $scope.title = "READINGIT";
    this.stories = storiesFactory.getStories();
    this.addStory = function(newTitle, newUrl) {
      storiesFactory.addStory(newTitle, newUrl);
    };
    this.incrementCommentCount = function(storyId){
      storiesFactory.incrementCommentCount(storyId);
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

    function addComment(newComment, storyId) {
      comments.push(new comment(newComment, storyId));
    }

    return {
      getComments: getComments,
      addComment: addComment
    };
  }])
  .controller('CommentController', ['$scope', 'commentsFactory', 'storiesFactory', function($scope, commentsFactory, storiesFactory) {
    this.comments = commentsFactory.getComments();
    this.addComment = function(newComment, storyId) {
      commentsFactory.addComment(newComment, storyId);
      storiesFactory.incrementCommentCount(storyId);
    };
    this.stories = storiesFactory.getStories();
  }]);
