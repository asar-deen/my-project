
$("#button1").click(function(){
	$("#output2").empty();
	 let c=parseInt($("#input3").val());

	for(j=0;j<=c;j++){
		for(i=0;i<=c;i++){
				$("#output2").append("*","");
	}$("#output2").append("<br>")
	};
});


$("#button2").click(function(){
	$("#output3").empty();
	 let d=parseInt($("#input4").val());

	for(j=0;j<=d;j++){
		for(i=0;i<d-j;i++){
				$("#output3").append("*","");
	}$("#output3").append("<br>")
	};
});

$("#button3").click(function(){
	$("#output4").empty();
	  e=parseInt($("#input5").val());

	for(k=0;k<=e;k++){
		for(j=0;j<=e-k;j++){
				$("#output4").append("\n","")
			}
		for(i=0;i<2*k-1;i++){
				$("#output4").append("*","");
	}$("#output4").append("<br>")

	};
});


colors=["red","blue","orange","green","yellow","white"]

$("#button6").click(function(){
	add=$("#input6").val();
	colors.push(add)
});

$("#button5").click(function(){
	$("#output5").empty()
   $("#output5").append(colors.join("<br>"))

});



