(function() {
	if (!sessionStorage.pagecount) {
		sessionStorage.pagecount = 1;
		if (localStorage.traffic_count) {
			localStorage.traffic_count = Number(localStorage.traffic_count) + 1;
		} else {
			localStorage.traffic_count = 1;
		}
	}
})()
//点击量统计
function clickcount() {
	if (sessionStorage.count) {
		sessionStorage.count = Number(sessionStorage.count) + 1;
	} else {
		sessionStorage.count = 1;
	}
}
//游客统计
function postdata(){
	var traffics=localStorage.traffic_count;
	var clicks=sessionStorage.count;
	$.ajax({
		type:"POST",
		async:true,
		url:"http://127.0.0.1:9080/countVisitors",
		data:{"traffics":traffic},
		dataType:"text",
		success:function (json) {console.log(json);}
	})
}


