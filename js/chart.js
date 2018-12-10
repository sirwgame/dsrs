window.onload = function() {
	var datas = {
	  type: 'line',
	  data: {
		labels: ["1日", "2日", "3日", "4日", "5日", "6日", "7日", "8日", "9日", "10日",
				 "11日", "12日", "13日", "14日", "15日", "16日", "17日", "18日", "19日", "20日",
				 "21日", "22日", "23日", "24日", "25日", "26日", "27日", "28日", "29日", "30日"],
		datasets: [{
				label: "访客统计",
				fillColor: "rgba(220,220,220,0.2)",
				strokeColor: "rgba(220,220,220,1)",
				pointColor: "rgba(220,220,220,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(220,220,220,1)",
				data: [65, 59, 80, 81, 56, 55, 40, 59, 45, 59, 55, 87, 59, 32, 80, 3, 25, 62, 123, 1, 51, 97,
					   98, 59, 24, 59, 46, 59, 34, 109],
				},
				{
				label: "My Second dataset",
				fillColor: "rgba(151,187,205,0.2)",
				strokeColor: "rgba(151,187,205,1)",
				pointColor: "rgba(151,187,205,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(151,187,205,1)",
				data: [28, 48, 40, 19, 86, 27, 90]
				}]
	  }
	};
	
	var ctx = document.getElementById("myChart");
	var barChart = new Chart(ctx, datas);
}

    Chart.update({
        series: [{
        type: 'column',
        name: 's1',
        data: [129.9, 171.5, 306.4, 429.2, 144.0, 176.0, 135.6, 248.5, 216.4, 194.1, 95.6, 54.4]
    	},{
        type: 'column',
        name: 's2',
        data: [69.9, 51.5, 176.4, 121.2, 124.0, 476.0, 935.6, 248.5, 266.4, 191.1, 99.6, 53.4]
    	}]
    });
