var str="";
var cnt;

$(function(){
	getCnt();

	if (localStorage.shopping)
		str=localStorage.shopping;
	else
		str="";

	$(".mybtn").click(function(){
		var img=$(this).data("img");
		var title=$(this).data("title");
		var price=$(this).data("price");
		//var mess=[img,title,price];
		//console.log(mess);
		str += '<tr class="p-item">' +
  	'<td><input type="checkbox" class="j-check"></td>' +
    '<td><image src="' + img + '" style="width: 100px;"> ' + title + '</td>' +
    '<td class="p-price">' + price + '</td>' +
    '<td class="p-num">' +
    	'<button class="dec btn btn-success">&#8722;</button>'+
    	' <input type="text" value=1 class="itxt"> ' +
    	'<button class="inc btn btn-success">&#43;</button>' +
    '</td>' +
    '<td class="p-sum">NT$' + price + '</td>' +
    '<td><button class="p-action btn btn-primary">刪除</button></td>' +
  '</tr>';

  		//console.log(str);
  		localStorage.shopping=str;

  		cnt++;
  		localStorage.count=cnt;
  		getCnt();
	});
});

function getCnt() {	
	if (localStorage.count)
		cnt=localStorage.count;
	else
		cnt=0;

	$("#mycnt").text(cnt);
}
