console.log("Sanity Check: JS is working!");

$(document).ready(function() {
  
  // variable to keep count of blog posts
  var postCount = 0;

  $('#new-post').click(function(e) {
  	e.preventDefault();

  	// store new blog post as text string
  	var newPost = $('#blog-post').val();
  	
  	// append new post to wall
  	$('.list-group').append("<li class='list-group-item'>" + newPost + "</li>");
  	
  	// update post count
  	postCount++;
  	$('.badge').text(postCount);
  	
  	// clear input field
  	$('#blog-post').val("");
  });

  // click on blog post to comment
  /* appends comment to all blog posts

  // $('.panel-body').click(function(e) {
  // 	e.preventDefault();
  // 	var comment = prompt('What do you want to comment?');
  // 	$(this).append("<li>" + comment + "</li>");
  // });

});