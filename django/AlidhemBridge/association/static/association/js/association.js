
$(document).ready(function(){
	
	addToggleListeners();
	
	openActiveList();

});

function addToggleListeners() {
	
	$("#statutes").click(function() {
		$("#statuteslist").toggle("slow");
	});

	$("#board").click(function() {
		$("#boardlist").toggle("slow");
	});

	$("#annual").click(function() {
		$("#annuallist").toggle("slow");
	});

	$("#motion").click(function() {
		$("#motionlist").toggle("slow");
	});

}

function openActiveList() {
	
	url = window.location.href;
	
	if (url.match("statutes")) {
		$("#statuteslist").show();
	} else if (url.match("boards")) {
		$("#boardlist").show();
	} else if (url.match("annuals")) {
		$("#annuallist").show();
	} else if (url.match("motions")) {
		$("#motionlist").show();
	}
	
}