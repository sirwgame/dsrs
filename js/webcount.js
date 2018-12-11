(function() {
	if (!sessionStorage.pagecount) {
		sessionStorage.pagecount = 1;
		if (localStorage.traffic_count) {
			localStorage.traffic_count = Number(localStorage.traffic_count) + 1;
		} else {
			localStorage.traffic_count = 1;
		}
	}
	document.getElementById("count").innerHTML = localStorage.traffic_count;
})()

function c() {
	if (sessionStorage.count) {
		sessionStorage.count = Number(sessionStorage.count) + 1;
	} else {
		sessionStorage.count = 1;
	}
	document.getElementById("cou").innerHTML = "你点击了本页面" + sessionStorage.count + "次";
}