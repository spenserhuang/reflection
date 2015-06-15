$(document).on("page:change", function() {

  newReflectionSubmission();
  reflectionDisplay();

});

var newReflectionSubmission = function() {
  $(".new-reflection-form").on("submit", function(event) {
    event.preventDefault();

    var result = $(this).serialize();

    var request = $.ajax({
      method: "GET",
      url:    "/users",
    });

    request.done(function(response) {
      console.log("Obtained User ID");
      var user_id = response.id;
      console.log(user_id);
      console.log(result);

      var call = $.ajax({
        method: "POST",
        url:    "http://localhost:3000/users/" + user_id + "/reflections",
        data:   result,
      })

      call.done(function() {
        console.log("Created new reflection")
        window.location.pathname = "/home"
      });

      call.fail(function() {
        console.log("Failed to create new refelction")
      });

    });

    request.fail(function(response) {
      console.log("Failed to Obtain User ID");
    })

  });

};

var reflectionDisplay = function() {

  var request = $.ajax({
    method: "GET",
    url:    "/users",
  });

  request.done(function(response) {
    console.log("Obtained User ID")
    var user_id = response.id;

    var list = $.ajax({
      method: "GET",
      url:    "http://localhost:3000/users/" + user_id + "/reflections",
    });

    list.done(function(reflections_array) {
      console.log("Obtained reflections list")
      console.log(reflections_array)

      var context = {}
      context.reflections = reflections_array
      console.log(context)
      // loop = HandlebarsTemplates["templates/reflection_list"](context)
      var source = $("#reflection-display").html();
      var template = Handlebars.compile(source)
      $("#reflections-list").append("<div>Hi</div>")
      $("#reflections-list").append(template(reflections_array))

    });

    list.fail(function(reflection_list) {
      console.log("Failed to get list of reflections")
    });
  });

  request.fail(function() {
    console.log("Failed to retrieve user id")
  });

};