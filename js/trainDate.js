function getTrainData(){
	var stuId=$("#id2").val();
	$.ajax({
		type:"post",
		async:true,
		url:"http://127.0.0.1:9080/getTrainData/"+stuId,
		success:function(data) {
			if(data.stuId==null||data==null){
				$("#istrain").val("否");
				var forTrain=document.getElementById("forTrain");
				forTrain.innerHTML="[点击预约]";
			}
			else{
				if(data.process=='科目四'||data.process=='科目一'){
					$("#istrain").val("不需要预约");
					document.getElementById("forTrain").innerHTML="[不需要预约]";
				}else{
					$("#istrain").val("是");
					var forTrain=document.getElementById("forTrain");
					if(data.result=="预约中"){
						forTrain.innerHTML="[查看预约结果]";
					}else if(data.result=="预约成功"){
						forTrain.innerHTML="[查看学车进度]";
					}
				}
			} 
		},
	})
}
function forTrain(){
	var stuId=$("#id2").val();
	var forTrain=document.getElementById("forTrain");
	if(forTrain.innerHTML=="[点击预约]"){
		document.getElementById("train").style.display="";
		document.getElementById("forTrain").style.cursor="not-allowed";
	}else if(forTrain.innerHTML=="[查看预约结果]"){
		$.ajax({
			type:"post",
			async:true,
			url:"http://127.0.0.1:9080/getTrainData/"+stuId,
			success:function(data) {
				$("#r_status").val(data.result);
				$("#r_time").val(data.time);
				$("#r_coach").val(data.coach);
			}
		})
		document.getElementById("train_result").style.display="";
		document.getElementById("forTrain").style.cursor="not-allowed";
	}else if(forTrain.innerHTML=="[查看学车进度]"){
		$.ajax({
			type:"post",
			async:true,
			url:"http://127.0.0.1:9080/getTrainData/"+stuId,
			dataType:"json",
			success:function(data) {
				if(data.process=='科目四'||data.process=='科目一'){
					document.getElementById("forTrain").innerHTML='没有可以查看的数据';
				}else{
					if(data.timeUsed=="32"&&data.pingfen=="0"){
						$("#process_status").val("已结束,请为教练评分");
						document.getElementById("my_pingfen").style.display="inline-block";
					}else if(data.timeUsed=="32"&&data.pingfen!="0"){
						$("#process_status").val("已结束,已评分");
						document.getElementById("my_pingfen").style.display="inline-block";
						document.getElementById("pingfen_bu").style.display="none";
						layui.use(['rate'], function(){
							var rate = layui.rate;							 
							//显示文字
							rate.render({
								elem: '#test2'
								,value: data.pingfen //初始值
								,text: true //开启文本
								,readonly: true
							});
						});
					}else{
						$("#process_status").val("学车中");
					}
					$("#process_time").val(data.time);
					$("#process_coach").val(data.coach);
					$("#timeused").val(data.timeUsed+"h/32h");
				}
			}
		})
		document.getElementById("train_process").style.display="";
		document.getElementById("forTrain").style.cursor="not-allowed";
	}
	
}
//教练列表
function showCoachList() {
	if(document.getElementById("list").innerHTML!="[关闭教练列表]"){
		document.getElementById("caochtab").style.display="";
		document.getElementById("list").innerHTML="[关闭教练列表]";
		// 修改为ajax 来提交请求
		$.ajax({
			type:"post",
			async:true,
			url:"http://127.0.0.1:9080/coachAndsort",
			data:{"direction":"ASC","sort":"coachID"},
			success:function(data) {
				//1,将class=dynamicCoach1清空，清空之前生成的tr，因为不清空会导致再生成新的tr时，原来的tr依然存在
				$(".dynamicCoach1").remove();
				//在数据生成完成后，隐藏了页面上空行的tr，需要显示出来才能使用。
				$("#dynamicCoach").show();
				// 拿到页面上的tr 对象
				var tr = $("#dynamicCoach");
				//往它后面添加tr
				var tr1 = tr;
				var c_i=0;
				//遍历集合 index 是索引，item 是当前的对象
				$.each(data, function(index, item) {
					c_i++;
					//克隆tr，每次遍历都可以产生新的tr，为了创建新的tr
					var clonedTr = tr.clone();
					//拿到新的tr，循环遍历它每一个td元素，并赋值 inner_index 是当前td 的索引
					clonedTr.children("td").each(function(inner_index) {
						//根据索引为每一个td赋值
						switch (inner_index) {
							case (0): // 判断是第一个 td ，就为其赋值
								$(this).html("<label class=\"i-checks m-b-none\"><input id=\""+item.coachID+"\" class=\""+index+"\" type=\"radio\" name=\"coach\" onclick=\"selectC('"+item.coachID+"')\" style='display:inline-block;'></label>");
								break;
							case (1)://任务编号
								$(this).html(item.coachID);
								break;
							case (2)://任务名称
								$(this).html(item.coachName);
								break;
							case (3)://任务分类
								$(this).html(item.coachLevel);
								break;
						} //end switch
					}); //end children.each
					//把克隆好的tr追加原来的tr后面 ，这样才能看见新的tr
					clonedTr.insertAfter(tr1);
					// 将所有新生成的clonedTr ，既克隆出来的 tr 给予 class 属性，详情见 $(".dynamicCoach1").remove();的注释
					clonedTr.attr("class", "dynamicCoach1 "+index+" "+item.coachID);
					tr1=clonedTr;
				}); //end $each
				//隐藏id=clone的tr，因为该tr中的td没有数据，不隐藏起来会在生成的table第一行显示一个空行
				$("#dynamicCoach").hide();
				// 显示整个 table 表格
				$("#tab").show();
			}
		})
	}else{
		document.getElementById("caochtab").style.display="none";
		document.getElementById("list").innerHTML="[查看教练列表]";
	}
}
function selectC(id){
	$.ajax({
		type:"post",
		async:true,
		url:"http://127.0.0.1:9080/findCoachByID/"+id,
		success:function(data) {
			$("#trainContent").val("("+data.coachID+")"+data.coachName);
		},
	})
}
function addTrain(){
	var stuId=$("#id2").val();
	var process=$("#process").val();
	var time=$("#date").val()+"~"+$("#endDate").val();
	var coach=$("#trainContent").val().substring(1,11);
	$.ajax({
		type:"post",
		async:true,
		url:"http://127.0.0.1:9080/addData/",
		data:{"stuId":stuId,"process":process,"time":time,"coach":coach,"result":"预约中"},
		success:function(data) {
			layer.msg("提交预约成功!");
			document.getElementById("train").style.display="none";
			document.getElementById("forTrain").style.cursor="";
			getTrainData();
		}
	})
}
function submitScore(){
	var pingfen=$("#pingfen").val();
	var coach=$("#process_coach").val();
	var stuId=$("#id2").val();
	var process=$("#process").val();
	var time=$("#process_time").val();
	if(pingfen!=""&&pingfen!="0"){
		$.ajax({
			type:"post",
			async:true,
			url:"http://127.0.0.1:9080/updateCoachScore",
			data:{"pingfen":pingfen,"coach":coach},
			success:function(data) {
				if(data=="success")layer.msg("评分成功!");
				forTrain();
			}
		});
		$.ajax({
			type:"post",
			async:true,
			url:"http://127.0.0.1:9080/updateTrainData",
			data:{"stuId":stuId,"process":process,"time":time,"coach":coach,"result":"预约成功","timeUsed":"32","pingfen2":pingfen},
			success:function(data) {
				
			}
		})
	}else layer.msg("评分不能为空！");
}