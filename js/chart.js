$(function(){
	
	window.onload=function(){
		var visitorData;
		var studentData;
		var coachData;
		
		//获取游客初始数据
		$.ajax({
			type:"get",
			async:true,
			url:"http://127.0.0.1:9080/getVisitorsCount/2018-12",
			dataType:"json",
			success:function(r){
				if(month==2){
					visitorData=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine];
				}else if(month==4||month==6||month==9||month==11){
					visitorData=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine,r.thirty];
				}else{
					visitorData=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine,r.thirty,r.thirtyone];
				}
				chart1.series[0].update({
					data: visitorData
				});
			},
			error:function(r){
				layer.msg("数据获取失败或不完整！");
				chart1.series[0].update({
					data: [0]
				});
			}
		});
		//获取学员访问初始数据
		$.ajax({
			type:"get",
			async:true,
			url:"http://127.0.0.1:9080/getStudentsVisitorCount/2018-12",
			dataType:"json",
			success:function(r){
				if(month==2){
					studentData=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine];
				}else if(month==4||month==6||month==9||month==11){
					studentData=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine,r.thirty];
				}else{
					studentData=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine,r.thirty,r.thirtyone];
				}
				chart1.series[1].update({
					data: studentData
				});
			},
			error:function(r){
				layer.msg("数据获取失败或不完整！");
				chart1.series[1].update({
					data: [0]
				});
			}
		});
		//获取教练数据
		$.ajax({
			type:"get",
			async:true,
			url:"http://127.0.0.1:9080/getCoachsVisitorCount/2018-12",
			dataType:"json",
			success:function(r){
				if(month==2){
					coachData=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine];
				}else if(month==4||month==6||month==9||month==11){
					coachData=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine,r.thirty];
				}else{
					coachData=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine,r.thirty,r.thirtyone];
				}
				chart1.series[2].update({
					data: coachData
				});
			},
			error:function(r){
				layer.msg("数据获取失败或不完整！");
				chart1.series[2].update({
					data: [0]
				});
			}
		});
	}
	
	var options = {
		"xAxis": [{
			"type": "category",
			"categories": [
				"1日", "2日", "3日", "4日", "5日", "6日", "7日", "8日", "9日", "10日",
				"11日", "12日", "13日", "14日", "15日", "16日", "17日", "18日", "19日", "20日",
				"21日", "22日", "23日", "24日", "25日", "26日", "27日", "28日", "29日", "30日", "31日"
			],
			"index": 0,
			"isX": true
		}],
		"series": [{
				"name": "访客",
				"data":[0],
				"_colorIndex": 0,
				"_symbolIndex": 0
			},
			{
				"name": "学员",
				"data": [0],
				"_colorIndex": 1,
				"_symbolIndex": 1
			},
			{
				"name": "教练",
				"data": [0],
				"_colorIndex": 2,
				"_symbolIndex": 2
			}
		],
		"yAxis": [{
			"title": {
				"text": "访问统计（人次）"
			},
			"index": 0
		}],
		"chart": {
			"style": {
				"fontFamily": "\"微软雅黑\", Arial, Helvetica, sans-serif",
				"color": "#333",
				"fontSize": "12px",
				"fontWeight": "normal",
				"fontStyle": "normal"
			}
		},
		"title": {
			"text": null,
		},
		"subtitle": {
			"text": "数据来源: 网站统计",
			"x": 0
		},
		"tooltip": {
			"valueSuffix": "人次"
		},
		"legend": {
			"layout": "vertical",
			"align": "right",
			"verticalAlign": "middle"
		},
		"credits": {
			"enabled": false
		},
		"plotOptions": {
			"series": {
				"animation": false
			}
		}
	};
	var chart1 = Highcharts.chart('chartpanel', options);
	
	var options2 = {
		"chart": {
				"plotBackgroundColor": null,
				"plotBorderWidth": null,
				"plotShadow": false,
				"type": 'pie'
		},
		"credits": {
			"enabled": false
		},
		"title": {
			"text": null,
		},
		"subtitle": {
			"text": "数据来源: 网站统计",
			"x": 0
		},
		"tooltip": {
				"pointFormat": '{series.name}: <b>{point.y}</b> 人'
		},
		"plotOptions": {
				"pie": {
						"allowPointSelect": true,
						"cursor": 'pointer',
						"dataLabels": {
								"enabled": true,
								"format": '<b>{point.name}</b>: {point.y} 人',
								"style": {
										"color": (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
								}
						}
				}
		},
		"series": [{
				"name": '人数',
				"colorByPoint": true,
				"data": [{
						"name": '教练',
						"y": 6,
						"sliced": true,
						"selected": true
				}, {
						"name": '学员',
						"y": 6
				}]
		}]
	};
	var chart2 = Highcharts.chart('chartpanel2', options2);

	
	//改变网站流量统计图--年
	$("#year").on("change",function (){
		var year=$("#year").val();
		var month=$("#month").val();
		console.log(month==12?"1":"2");
		//获取游客数据
		$.ajax({
			type:"get",
			async:true,
			url:"http://127.0.0.1:9080/getVisitorsCount/"+year+"-"+month,
			dataType:"json",
			success:function(r){
				var Data;
				if(month==2){
					Data=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine];
				}else if(month==4||month==6||month==9||month==11){
					Data=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine,r.thirty];
				}else{
					Data=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine,r.thirty,r.thirtyone];
				}
				chart1.series[0].update({
					data: Data
				});
			},
			error:function(r){
				layer.msg("数据获取失败或不完整！");
				chart1.series[0].update({
					data: [0]
				});
			}
		});
		//获取学员数据
		$.ajax({
			type:"get",
			async:true,
			url:"http://127.0.0.1:9080/getStudentsVisitorCount/"+year+"-"+month,
			dataType:"json",
			success:function(r){
				var Data;
				if(month==2){
					Data=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine];
				}else if(month==4||month==6||month==9||month==11){
					Data=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine,r.thirty];
				}else{
					Data=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine,r.thirty,r.thirtyone];
				}
				chart1.series[1].update({
					data: Data
				});
			},
			error:function(r){
				layer.msg("数据获取失败或不完整！");
				chart1.series[1].update({
					data: [0]
				});
			}
		});
		//获取教练数据
		$.ajax({
			type:"get",
			async:true,
			url:"http://127.0.0.1:9080/getCoachsVisitorCount/"+year+"-"+month,
			dataType:"json",
			success:function(r){
				var Data;
				if(month==2){
					Data=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine];
				}else if(month==4||month==6||month==9||month==11){
					Data=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine,r.thirty];
				}else{
					Data=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine,r.thirty,r.thirtyone];
				}
				chart1.series[2].update({
					data: Data
				});
			},
			error:function(r){
				layer.msg("数据获取失败或不完整！");
				chart1.series[2].update({
					data: [0]
				});
			}
		})
		
	});
	//改变网站流量统计图--月
	$("#month").on("change",function (){
		var year=$("#year").val();
		var month=$("#month").val();
		console.log(month==12?"1":"2");
		//获取游客数据
		$.ajax({
			type:"get",
			async:true,
			url:"http://127.0.0.1:9080/getVisitorsCount/"+year+"-"+month,
			dataType:"json",
			success:function(r){
				var Data;
				if(month==2){
					Data=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine];
				}else if(month==4||month==6||month==9||month==11){
					Data=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine,r.thirty];
				}else{
					Data=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine,r.thirty,r.thirtyone];
				}
				chart1.series[0].update({
					data: Data
				});
			},
			error:function(r){
				layer.msg("数据获取失败或不完整！");
				chart1.series[0].update({
					data: [0]
				});
			}
		});
		//获取学员数据
		$.ajax({
			type:"get",
			async:true,
			url:"http://127.0.0.1:9080/getStudentsVisitorCount/"+year+"-"+month,
			dataType:"json",
			success:function(r){
				var Data;
				if(month==2){
					Data=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine];
				}else if(month==4||month==6||month==9||month==11){
					Data=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine,r.thirty];
				}else{
					Data=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine,r.thirty,r.thirtyone];
				}
				chart1.series[1].update({
					data: Data
				});
			},
			error:function(r){
				layer.msg("数据获取失败或不完整！");
				chart1.series[1].update({
					data: [0]
				});
			}
		});
		//获取教练数据
		$.ajax({
			type:"get",
			async:true,
			url:"http://127.0.0.1:9080/getCoachsVisitorCount/"+year+"-"+month,
			dataType:"json",
			success:function(r){
				var Data;
				if(month==2){
					Data=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine];
				}else if(month==4||month==6||month==9||month==11){
					Data=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine,r.thirty];
				}else{
					Data=[r.one,r.two,r.three,r.four,r.five,r.six,r.seven,r.eight,r.nine,r.ten,r.eleven,r.twelve,r.thirteen,r.fourteen,r.fifteen,r.sixteen,r.seventeen,r.eighteen,r.nineteen,r.twenty,r.twentyone,r.twentytwo,r.twentythree,r.twentyfour,r.twentyfive,r.twentysix,r.twentyseven,r.twentyeight,r.twentynine,r.thirty,r.thirtyone];
				}
				chart1.series[2].update({
					data: Data
				});
			},
			error:function(r){
				layer.msg("数据获取失败或不完整！");
				chart1.series[2].update({
					data: [0]
				});
			}
		})
		
	});
	
});