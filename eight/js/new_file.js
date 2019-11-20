var count = 0;
function add()
{
	a = document.createElement("tr");
	tab = document.getElementById("tab");
	name = document.getElementById("myname").value;
	num = document.getElementById("number1").value;
	myclass = document.getElementById("myclass").value;
	tab.innerHTML+=
	"<tr id='" + count +"'>"+
	"<th>"+name+"</th>"+
	"<th>"+num+"</th>"+
	"<th>"+myclass+"</th>"+
	'<th><a href="javascript:delet('+count+')">'+
	"X"+
	"</a></th>"+
	"</tr>";
	count++;
}
function delet(count){
    var row = document.getElementById(count);
    row.remove(count);
}
function empty(){
	var all;
	for(;count>0;count--){
		all = document.getElementById(count);
		all.remove(count);
	}
}