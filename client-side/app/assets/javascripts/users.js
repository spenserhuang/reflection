$(document).on("page:change", function() {

  userProfileEdit();

});

var userProfileEdit = function() {
  $(".user-edit-form").on("submit", function(event) {
    event.preventDefault();

    var result = $(this).serialize();

    var request = $.ajax({
      method: "GET",
      url:    "/users"
    });

    request.done(function(response) {
      console.log("Obtained User ID");
      var user_id = response.id;
      console.log(result);
      updateUserDatabase(user_id, result)
    });

    request.fail(function(response) {
      console.log("Failed to Obtain User ID");
    });

  });

};

var updateUserDatabase = function(id, input) {
  console.log("user_id")
  console.log(id)
  console.log("user_input")
  console.log(input)

  var request = $.ajax({
    method: "PUT",
    url:    "http://localhost:3000/users/" + id,
    beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
    data:   input,
  });

  request.done(function() {
    console.log("Updated Database")
  })

  request.fail(function() {
    console.log("Failed to Update Database")
  })

};