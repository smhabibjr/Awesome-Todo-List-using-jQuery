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

      $(".to-do-done").on("change", function () {
        // on change of state
        if (this.checked) {
          // if changed state is "CHECKED"
          // delete the iteam form list
          var parent_row = $(this).closest(".new-iteam");
          parent_row.find("#asdf").wrap("<strike>");
          parent_row.fadeOut("slow");
        }
      });

      $("#new-iteam").val('');

    } else {
      $("#myModalBox").modal("show");
    }
  });


 


  



});
