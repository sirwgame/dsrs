//onclick="clickcount()" onbeforeunload="return postdata()"
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
	var myDate = new Date();
	var year = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
	var month = myDate.getMonth()+1;       //获取当前月份(0-11,0代表1月)
	var day = myDate.getDate();        //获取当前日(1-31)
	$.ajax({
		type:"POST",
		async:true,
		url:"http://127.0.0.1:9080/countVisitors",
		data:{"date":year+"-"+month+"-"+day, "traffics":traffics},
		dataType:"text",
		success:function (json) {console.log(json);localStorage.removeItem(traffic_count);}
	})
}


