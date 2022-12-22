
let i;

 let total;
array=[]
$("button").click(function(){
$("input").val();
$("p").empty();
let n=$("input").val();
for(i=9;i<n;i++){
    if(i%9==0){
        num=i.toString()
      
 array=num.split('');

 a=parseInt(array[0]) 
  b=parseInt(array[1]) ||0 ;
  c=parseInt(array[2]) ||0;
 
//console.log(total);
 total=a+b+c;
 console.log(total);
if(total==9){
 if(array.length==3 && a<b && b<c){
  //console.log(num);
  $("p").append(num,"<br>")
 }
else if(array.length==2 && a<b){
 // console.log(num);
  $("p").append(num,"<br>")
 }
 else if(array.length==1){
  //console.log(num);
  $("p").append(num,"<br>")
 }
}
   }
};

});