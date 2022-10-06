$(document).ready(function(){
    $("#submit-iteam").click(function(e){
        e.preventDefault();
        var new_iteam = $("#new-iteam").val();
        
        if(new_iteam != ""){
            var newIteam = $("#iteam").clone().removeClass("d-none").addClass("new-iteam");
            newIteam.find(".iteams").innerText = new_iteam;
            $("#iteam-list").append(newIteam);
        }else{
            alert("Iteam can not be empty!");
        }


    })
})