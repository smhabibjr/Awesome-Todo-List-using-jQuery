$(document).ready(function () {

  $("#submit-iteam").click(function (e) {
    e.preventDefault();
    var new_iteam = $("#new-iteam").val();

    if (new_iteam != "") {
      var newIteam = $(".new-added-iteam")
        .clone()
        .removeClass("new-added-iteam d-none")
        .addClass("new-iteam");
      newIteam.find(".itam-name").addClass("new_added_iteam_name");
      newIteam.find(".new_added_iteam_name").text(new_iteam);
      $("#iteam-list").append(newIteam);
    } else {
      $("#myModalBox").modal("show");
    }
  });
});
