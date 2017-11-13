//cat map.txt|awk '{printf "key_map[\"%s\"]=\"%s\";\n",$2,$1}'
// 猴子重复工作50分钟，人用45分钟发明工具，工作5分钟
c_map = {
	'a':"() => {alert(213);}",
	'v':"() => {window.scrollBy(0,100);}"
}
map = {}



$(document).keypress(function(e) {
	if(e.ctrlKey){
		eval(c_map[String.fromCharCode(e.which+96)])();
	}
	console.log("-------------")
	console.log(e.which)
	console.log(String.fromCharCode(e.which))
});