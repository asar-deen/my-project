/*var names = ["gobi","diya","mohan","siva","vijay","mathan","soman","albert"];
$("#searchInput").keyup(function(a){

	var inputVal = $(a.target).val();
	var outArray = [];
	$("p").empty();
	for(var i=0;i<names.length;i++){
		let eachValue = names[i];
		let checkString = eachValue.includes(inputVal);
		
		if(checkString) {
			
			outArray.push(eachValue);
			
		}console.log(outArray);
	}
	console.log(typeof outArray);
	outArray="\n"+outArray;
	console.log(typeof outArray);
	
	$("p").append(outArray);
});*/

 array=["asar","yasar","khaja","ismail"];
 var outArray;
 
$("#button1").click(function(){
	
	$("#p1").empty();
	$("#p1").append(array.join("<br>"));
/*array.forEach(val => {

		outArray=val+'<br>';
		$("#p1").append(outArray);
	});*/
		
});

$("#add").click(function(){
	$("#p1").empty();
	var add=$("#input1").val();
	if(add!==array){
	array.push(add);
	}
});

/*
name1=["apple","orange","kiwi","mango","banana"];
name2=[];
function array(id,data){
		let input =$("id").val();
		for(i=0;i<=data.length;i++){
				eachIndex=data[i];
				output=eachIndex.includes(input);
				if(output){
					name2.push(eachIndex);
				}
			
		}
}$("#p2").append(name2);
 array("#input2","name1"); 
*/	
	
function addo(data,id){
    
	$(id).append(data.join("<br>"));
}
function print(){
name1=["apple","orange","kiwi","mango","banana"];
$("#p2").empty();
addo(name1,"#p2");
}

	

