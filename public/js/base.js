console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  
  // variable to keep count of blog posts
  var postCount = 0;

  // new blog post
  $('#new-post-form').on('submit', function (e){
  	e.preventDefault();
    // post serialized form to server
    $.post('/api/posts', $(this).serialize(), function (res){
      //append new post to page
      var newPost = res;
      //clear new post form
      $('#post-ul').prepend('<li class="list-group-item" id="post-ul">' + newPost + '</li>');
      // reset form
      $('#new-post-form')[0].reset();
      // give focus back to the post input
      $('#post-input').focus();
    });
  });

  $(document).on('click', 'button.close', function (e){
  var postId = $(this).data().id;
  $.ajax({
    url: '/api/posts/' + postId,
    type: 'DELETE',
    success: function(response) {
      // once successful, remove food from the DOM
      $(this).closest('li').remove();
    }
  });
});
});


//   	// store new blog post as text string
//   	var newPost = $('#post').val();
  	
//   	// append new post to wall
//   	$('#blog-posts').append('<li class="list-group-item" id="blog-post">' + newPost + '</li>');
  	
//   	// update post count
//   	postCount++;
//   	$('.badge').text(postCount);
  	
//   	// clear input field
//   	$('#post').val("");
//   });

//   // click blog post to delete
//   $('#post').click(function(e) {
//   	e.preventDefault();
//   	$(this).text("");
  	
//   	// update post count
//   	postCount--;
//   	$('.badge').text(postCount);
//   });
// });


 // click on blog post to edit comment
  // append comment to blog post


  // $('.list-group').click(function(e) {
  //  e.preventDefault();
  //  var comment = prompt('What do you want to comment?');
  //  $('.list-group-item').append("<li>" + comment + "</li>");
 

  // $('.list-group-item').each(function(i) {
  //  $(this).click(function(e) {
  //    e.preventDefault();
  //    var comment = prompt('What do you want to comment?');
  //    $(this).append("<li>" + comment + "</li>");
  //  });

/*

<button onclick="newPost()"><button>
$('parent').on( 'click', '.appened', function(){} )

*/