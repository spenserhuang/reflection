$(document).on("page:change", function(){

  signup();
  signin();

});

var signup = function() {

  $(".user-signup-form").on("submit", function(event) {
    event.preventDefault();

    var result = $(this).serialize();

    var request = $.ajax({
      method: "POST",
      url:    "http://localhost:3000/users",
      data:   result,
    });

    request.done(function(response){
      console.log("User saved in database.");
      clientSignin(response);
    });

    request.fail(function(){
      alert("Failed to sign up.")
    });

  });

};

var signin = function() {

  $(".user-signin-form").on("submit", function(event){
    event.preventDefault();

    var result = $(this).serialize();

    var request = $.ajax({
      method: "POST",
      url:    "http://localhost:3000/sign_in",
      data:   result,
    });

    request.done(function(response) {
      clientSignin(response);
    });

    request.fail(function() {
      alert("Failed to sign in.");
    });

  });

};

var clientSignin = function(sessionId) {

  request = $.ajax({
    method:   "POST",
    url:      "/sign_in",
    data:     sessionId,
  });

  request.done(function(){
    console.log("Client Signed In");
    window.location.pathname = "/home";
  });

  request.fail(function(){
    console.log("Client Sign In Failed");
    window.location.pathname = "/sign_in";
  });

};