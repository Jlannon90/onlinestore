$(function() {
  // $("#productDropdown").click(function(event) {
  //   event.preventDefault();

  // });

  $("#information").submit(function(event) {
    event.preventDefault();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var streetAddress = $("#streetAddress").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var zip = $("#zip").val();
    var selection = $("#products").val();


    $(".firstName").text(firstName);
    $(".lastName").text(lastName);
    $(".streetAddress").text(streetAddress);
    $(".city").text(city);
    $(".state").text(state);
    $(".zip").text(zip);
    $(".product").text(selection);

    $("#receipt").show();
  });
















});
