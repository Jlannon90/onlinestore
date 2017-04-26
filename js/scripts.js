$(function() {
  $("#productDropdown").submit(function(event) {
    event.preventDefault();
    var selection = $("#products").val();

  $(".product").text(selection);

  });

  $("#information").submit(function(event) {
    event.preventDefault();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var streetAddress = $("#streetAddress").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var zip = $("#zip").val();


    $(".firstName").text(firstName);
    $(".lastName").text(lastName);
    $(".streetAddress").text(streetAddress);
    $(".city").text(city);
    $(".state").text(state);
    $(".zip").text(zip);


    $("#receipt").show();
  });
















});
