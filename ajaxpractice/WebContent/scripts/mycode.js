$(document).ready(function(){
	$('#btn1').click(function(){
		$("#actor").hide();
		var obj = {allactors : "yes"};
		
		$.ajax({
			url: "AjaxServlet",
			data: obj,
			dataType: "json",
			success:createTable,
			complete: function() {
				$("#actor").fadeIn("slow");
			}
		});
	});

}); // end of ready

function createTable(data) {
	$("#actor").html("");
	$("#actor").append("<table id=\"restable\" border=\"1\" cellspacing=\"0\"></table>");
	var table = $("#restable");
	table.append("<th>First Name</th><th>Last Name</th>");
	$.each(data,function(index, obj){
		var row = "<tr><td>" + obj.firstName + "</td><td>" + obj.lastName + "</td></tr>";
		table.append(row);
		
	});
 }


 