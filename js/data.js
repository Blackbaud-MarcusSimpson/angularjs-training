function story(title, url) {
  this.title = title;
  this.url = url;
  this.numComments = 0;
  this.id = guid();
  this.timestamp = new Date();
}

function comment(comment, storyId) {
  this.comment = comment;
  this.storyId = storyId;
  this.id = guid();
  this.timestamp = new Date();
}

function guid() {
  return Math.random();
}

