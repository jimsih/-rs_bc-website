function initBoard() {
	$("#board").load("pages/board/board.html").ready(function() {
		$.getJSON("json/boards.json", function(result) {
		    var txt="ak";
			var sum = 0;
			console.log(eval("result."+txt));		

				$.each(result,function(i, value){
					$(("#"+value.dealer+"text")).append("<b> GIV</b>");
					var z = 0;
					if (value.zone == "NS")
						z = 1;
					else if (value.zone == "EW")
						z = 2;
					else if (value.zone == "all")
						z = 3;
					if (z > 1) {
						document.getElementById("easttext").setAttribute("style","color: red;");
						document.getElementById("westtext").setAttribute("style","color: red;");
						z = z-2
					}

					if (z == 1) {
						document.getElementById("northtext").setAttribute("style","color: red;");
						document.getElementById("southtext").setAttribute("style","color: red;");
					}
					for (a = 0; a < 4; a++) {
						if (a == 0)
							var hand = "north";
						else if (a == 1)
							var hand = "east";
						else if (a == 2)
							var hand = "south";
						else if (a == 3)
							var hand = "west";
						console.log(eval("value."+hand));
						$.each(eval("value."+hand), function(i, value) {
							console.log(i+" "+value[0]);
							for (j = 0; j < value.length; j++) {
								if (value[j] < 10)
									val= "0"+value[j];
								else
									val= value[j];
								if (i == "clubs")
									var card = val+"_of_clubs.svg";
								else if (i == "diamonds")
									var card = val+"_of_diamonds.svg";
								else if (i == "hearts")
									var card = val+"_of_hearts.svg";
								else if (i == "spades")
									var card = val+"_of_spades.svg";
									card = "pictures/cards/"+card;
								k = 0;
								do {
									if (document.getElementsByClassName(hand)[0].getElementsByClassName("card")[k].getAttribute("src") == "") {
										document.getElementsByClassName(hand)[0].getElementsByClassName("card")[k].setAttribute("src",card);
										break;
									}
									k++;
								} while (k < 13);
							}
						});
					}
				});
			console.log(sum);
		});
	});

}

