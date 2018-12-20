$(function(){
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
				"data": [
					65, 59, 80, 81, 56, 55, 40, 59, 45, 59
				],
				"_colorIndex": 0,
				"_symbolIndex": 0
			},
			{
				"name": "学员",
				"data": [
					8, 57, 113, 17, 22, 248, 241, 201, 141
				],
				"_colorIndex": 1,
				"_symbolIndex": 1
			},
			{
				"name": "教练",
				"data": [
					23, 21, 16, 8, 13, 17, 18
				],
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
		"xAxis": [{
			"type": "category",
			"categories": [
				"第一季度","第二季度","第三季度","第四季度"
			],
			"index": 0,
			"isX": true
		}],
		"series": [{
			"type": 'column',
			"name": '学员数',
			"data": [129.9, 171.5, 306.4, 429.2]
		}, {
			"type": 'column',
			"name": '教练数',
			"data": [69.9, 51.5, 176.4, 121.2]
		}],
		"yAxis": [{
			"title": {
				"text": "人数统计（人）"
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
	var chart2 = Highcharts.chart('chartpanel2', options2);
	
	$('#b1').click(function() {
		chart.series[0].update({
			data: [29.9, 71.5, 306.4, 429.2, 144.0, 176.0, 135.6, 248.5, 216.4, 194.1, 95.6, 54.4]
		});
	});
	
	$('#b2').click(function() {
		chart.update({
			series: [{
				type: 'column',
				name: 's1',
				data: [129.9, 171.5, 306.4, 429.2, 144.0, 176.0, 135.6, 248.5, 216.4, 194.1, 95.6, 54.4]
			}, {
				type: 'column',
				name: 's2',
				data: [69.9, 51.5, 176.4, 121.2, 124.0, 476.0, 935.6, 248.5, 266.4, 191.1, 99.6, 53.4]
			}]
		});
	});
	
	$('#b3').click(function() {
		chart.addSeries({
			type: 'column',
			name: 's3',
			data: [129.9, 171.5, 1106.4, 1129.2, 144.0, 176.0, 135.6, 1148.5, 216.4, 194.1, 95.6, 54.4]
		});
	});
	
	$('#b4').click(function() {
		seriesData = [{
			type: 'column',
			name: 's1 new',
			data: [234.9, 171.5, 1106.4, 1129.2, 144.0, 176.0, 135.6, 1148.5, 216.4, 194.1, 195.6, 454.4]
		}];
		while (chart.series.length > 0) {
			chart.series[0].remove(true);
		}
		for (var i = 0; i < seriesData.length; i++) {
			chart.addSeries(seriesData[i]);
		}
	});
	
	$('#b5').click(function() {
		seriesData = [{
			type: 'column',
			name: 's1 new',
			data: [234.9, 171.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 195.6, 454.4]
		}, {
			type: 'column',
			name: 's2 new',
			data: [234.9, 171.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 195.6, 454.4]
		}, {
			type: 'column',
			name: 's3 new',
			data: [234.9, 171.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 195.6, 454.4]
		}];
	
		var diff = chart.series.length - seriesData.length;
		if (diff > 0) {
			for (var i = chart.series.length; i > diff; i--) {
				chart.series[i - 1].remove(true);
			}
		} else if (diff < 0) {
			for (var i = chart.series.length; i < seriesData.length; i++) {
				chart.addSeries({});
			}
		}
	
		chart.update({
			series: seriesData
		});
	
	});
	
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
				chart1.series[2].update({
					data: [0]
				});
			}
		})
		
	});
	
});