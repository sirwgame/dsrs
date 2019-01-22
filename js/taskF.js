//编辑预加载事件
function editTask(id){
	if(id=="id"){
		layer.msg("该任务不能编辑");
	}else{
		$.ajax({
			type:"get",
			async:true,
			url:"http://127.0.0.1:9080/getTypes",
			dataType:"json",
			success:function (result) {
				$("#s_type option").remove(); 
				$("#s_type").append("<option value='0' disabled selected='selected'>请选择</option>");
				$.each(result, function(i,json){
					$("#s_type").append("<option value='"+json.typeName+"'>"+json.typeName+"</option>");
				});
			}
		})
		$.ajax({
			type:"POST",
			async:true,
			url:"http://127.0.0.1:9080/getTaskById/"+id,
			dataType:"json",
			success:function (json) {
				$("#number").val(json.taskId);
				$("#t_name").val(json.taskName);
				$("#test1").val(json.startTime+" - "+json.endTime);
				$("#date").val(json.startTime);
				$("#endDate").val(json.endTime);
				$("#lasttime").val(json.allTime);
				$("#textarea").val(json.taskDetail);
				$("#s_type").val(json.taskType);
				$("#t_type").val(json.taskType);
			},
			error:function (json){
				layer.msg("加载事件失败");
			}
		})
	}
}
//重置页面所有内容为空
function reset(){
	$("#number").val("");
	$("#t_name").val("");
	$("#test1").val("");
	$("#lasttime").val("");
	$("#textarea").val("");
	var options = document.getElementById('s_type').children;
	options[0].selected=true;
	changeTStatus("number_exist","none","number_empty","none");
	changeTStatus("name_exist","none","name_empty","none");
	changeTStatus("type_exist","none","type_empty","none");
	changeTStatus("date_exist","none","date_exist","none");
	changeTStatus("lasttime_exist","none","lasttime_exist","none");
	changeTStatus("textarea_exist","none","textarea_empty","none");
}
//检测是否存在空项
function isEmpty(){
	var i=0;
	var number = document.getElementById("number");//任务编号
	var t_name = document.getElementById("t_name");//任务名称
	var date = document.getElementById("test1");//任务时间
	var lasttime = document.getElementById("lasttime");//任务持续时间
	var textarea = $("#textarea");//任务说明
	var options = document.getElementById("s_type");//任务类型
	if(number.value==""){
		changeTStatus("number_exist","none","number_empty","");
	}else{
		i=1;
		changeTStatus("number_exist","","number_empty","none");
	}
	if(t_name.value==""){
		i=0;
		changeTStatus("name_exist","none","name_empty","");
	}else{
		i=1;
		changeTStatus("name_exist","","name_empty","none");
	}
	if(options.selectedIndex==0){
		i=0;
		changeTStatus("type_exist","none","type_empty","");
	}else{
		i=1;
		changeTStatus("type_exist","","type_empty","none");
	}
	if(date.value==""){
		i=0;
		changeTStatus("date_exist","none","date_empty","");
	}else{
		i=1;
		changeTStatus("date_exist","","date_empty","none");
	}
	if(lasttime.value==""){
		i=0;
		changeTStatus("lasttime_exist","none","lasttime_empty","");
	}else{
		i=1;
		changeTStatus("lasttime_exist","","lasttime_empty","none");
	}
	if(textarea.val()==""){
		i=0;
		changeTStatus("textarea_exist","none","textarea_empty","");
	}else{
		i=1;
		changeTStatus("textarea_exist","","textarea_empty","none");
	}
	return i;
}
//改变指示状态
function changeTStatus(exist,s1,empty,s2){
	document.getElementById(exist).style.display=s1;
	document.getElementById(empty).style.display=s2;
}
//更改任务
function updateTask(){
	var i=isEmpty();
	if(i==1){
		var number = document.getElementById("number").value;
		var t_name = document.getElementById("t_name").value;
		var date = document.getElementById("date").value;
		var endDate = document.getElementById("endDate").value;
		var lasttime = document.getElementById("lasttime").value;
		var textarea = $("#textarea").val();
		var options = $('#t_type').val();
		$.ajax({
			type:"POST",
			async:true,
			url:"http://127.0.0.1:9080/updateTaskByAjax/"+number,
			data:{"taskId":number,"taskName":t_name,"taskType":options,"startTime":date,"endTime":endDate,"allTime":lasttime,"taskStatus":"新任务","taskDetail":textarea},
			dataType:"text",
			success:function (json) {
				if(json=="success"){
					layer.msg("修改成功！");
					reset();
					var page=document.getElementById("dijiye").innerHTML;
					Ajax("ASC", "taskId", parseInt(page));
					$('#edit').modal('hide');
				}else{
					layer.msg("修改失败！");
				}
			},
			error:function (json){
				layer.msg("修改失败");
			}
		})
	}else{
		layer.msg("填写有误或者不完整，请检查后重新提交！");
	}
}
//Select改变
function getTypeToInput(){
	$("#t_type").val($('#s_type option:selected').val());
}
//查看详情
function taskDetail(id){
	$.ajax({
		type:"POST",
		async:true,
		url:"http://127.0.0.1:9080/getTaskById/"+id,
		dataType:"json",
		success:function (json) {
			document.getElementById("s_number").innerHTML=json.taskId;
			document.getElementById("s_name").innerHTML=json.taskName;
			document.getElementById("s_date").innerHTML=json.startTime;
			document.getElementById("s_endDate").innerHTML=json.endTime;
			document.getElementById("s_lasttime").innerHTML=json.allTime;
			document.getElementById("s_textarea").innerHTML=json.taskDetail;
			document.getElementById("s_s_type").innerHTML=json.taskType;
			var status=document.getElementById("s_t_status");
			var html;
			if(json.taskStatus=="新任务")html="<a href=\"javascript:void(0)\" onclick=\"changeStatus('"+json.taskId+"')\"><span id=\"status\" class=\"label label-default\">新任务</span></a>";
			if(json.taskStatus=="处理中")html="<a href=\"javascript:void(0)\" onclick=\"changeStatus('"+json.taskId+"')\"><span id=\"status\" class=\"label label-info\">处理中</span></a>";
			if(json.taskStatus=="审核中")html="<a href=\"javascript:void(0)\" onclick=\"changeStatus('"+json.taskId+"')\"><span id=\"status\" class=\"label label-warning\">审核中</span></a>";
			if(json.taskStatus=="已完成")html="<span id=\"status\" class=\"label label-success\">已完成</span>";
			if(json.taskStatus=="已过期")html="<span class=\"label label-danger\">已过期</span>";
			status.innerHTML=html;
		},
		error:function (json){
			layer.msg("加载事件失败");
		}
	});
	
}
//显示列表
function viewList(){
	if(document.getElementById("viewList").innerHTML!="关闭教练列表"){
		coachAjax();
		document.getElementById("coach_tr1").style.display="";
		document.getElementById("coach_tr2").style.display="";
		document.getElementById("viewList").innerHTML="关闭教练列表";
	}else{
		document.getElementById("coach_tr1").style.display="none";
		document.getElementById("coach_tr2").style.display="";
		document.getElementById("viewList").innerHTML="查看教练列表";
	}
}
//教练列表
function coachAjax() {
	// 修改为ajax 来提交请求
	$.ajax({
		type:"post",
		async:true,
		url:"http://127.0.0.1:9080/CoachAndsortByAjax",
		data:{"direction":"1","sort":"coachID"},
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
							$(this).html("<label class=\"i-checks m-b-none\"><input id=\""+item.coachID+"\" class=\""+index+"\" type=\"radio\" name=\"coach\" onclick=\"selectC('"+item.coachID+"')\" ></label>");
							break;
						case (1)://任务编号
							$(this).html(item.coachID);
							break;
						case (2)://任务名称
							$(this).html(item.coachName);
							break;
						case (3)://任务分类
							$(this).html(item.coachPosition);
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
			$("#coach_tab").show();
			document.getElementById("zongji_coach").innerHTML=c_i;
		}
	})
}
//搜索教练
function searchCoach(){
	var name=document.getElementById("coachName").value;
	// 修改为ajax 来提交请求
	$.ajax({
		type:"POST",
		async:true,
		url:"http://127.0.0.1:9080/findCoachByName/"+name,
		dataType:"json",
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
							$(this).html("<label class=\"i-checks m-b-none\"><input id=\""+item.coachID+"\" class=\""+index+"\" type=\"radio\" name=\"coach\" onclick=\"selectC('"+item.coachID+"')\" ></label>");
							break;
						case (1)://编号
							$(this).html(item.coachID);
							break;
						case (2)://名称
							$(this).html(item.coachName);
							break;
						case (3)://职位
							$(this).html(item.coachPosition);
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
			$("#coach_tab").show();
			document.getElementById("zongji_coach").innerHTML=c_i;
		}
	})
}