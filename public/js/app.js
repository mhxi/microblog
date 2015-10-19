console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  
  // variable to keep count of blog posts
  var postCount = 0;

  // create new post
  $('#new-post-form').on('submit', function (e){
    e.preventDefault();

    // console.log(this);
    var formData = $(this).serialize();
    // console.log(formData);

    $.ajax({
        url: '/api/posts',
        type: "POST",
        data: formData
    })
    .done(function (data){
      // console.log("made a new post: ", data);
      $('.list-group').append("<li class='list-group-item'>" + data.body + "<span data-id='" + data._id + "' class='close delete'>X</span></li>");
      $('#new-post-form')[0].reset();
      // update post count
      postCount++;
      $('.badge').text(postCount);
    })
    .fail(function (data){
      // console.log("Failed to create a post!");
    });
  });

  // delete post
  $('.list-group').on('click', '.close', function (e){
    e.preventDefault();
    // console.log("delete me");

    var postId = $(this).data().id;
    // console.log(postId);
    var postToDelete = $(this).closest('li');

    $.ajax({
      type: "DELETE",
      url: '/api/posts/' + postId
    })
    .done(function (data){
      // console.log(data);
      $(postToDelete).remove();
      // update post count
      postCount--;
      $('.badge').text(postCount);
    })
    .fail(function (data){
      // console.log("Failed to delete the post!");
    });
  });

  // // update post
  // $('.list-group').on('click', function (e){
  //   e.preventDefault();

  //   var postId = $(this).data().id;
  //   // console.log(postId);
  //   var postToUpdate = $(this).closest('li');

  //   $.ajax({
  //     type: "PUT",
  //     url: '/api/posts/' + postId
  //   })
  //   .done(function (data){
  //     // console.log(data);
  //     $(postToUpdate).text();
  //   })
  //   .fail(function (data){
  //     // console.log("Failed to update the post!");
  //   });
  // });

});