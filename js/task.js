function changeStatus(id){
	var status=document.getElementById("status");
	var text=status.innerHTML;
	nextFunc(id,text);
}
//状态改变辅助函数
function nextFunc(id,text){
	var taskId=document.getElementById("s_number").innerHTML;
	var taskName=document.getElementById("s_name").innerHTML;
	var startTime=document.getElementById("s_date").innerHTML;
	var endTime=document.getElementById("s_endDate").innerHTML;
	var allTime=document.getElementById("s_lasttime").innerHTML;
	var taskDetail=document.getElementById("s_textarea").innerHTML;
	var taskType=document.getElementById("s_s_type").innerHTML;
	$.ajax({
		type:"POST",
		async:true,
		url:"http://127.0.0.1:9080/getTPByTaskId/"+id,
		dataType:"json",
		success:function (json) {
			if(json.taskId==id){
				if(text=="新任务"){
					status="处理中";
				}else if(text=="处理中"){
					status="审核中";
				}else if(text=="审核中"){
					status="已完成";
				}
				$.ajax({
					type:"POST",
					async:true,
					url:"http://127.0.0.1:9080/updateTaskByAjax/"+id,
					data:{"taskId":taskId,"taskName":taskName,"taskType":taskType,"startTime":startTime,"endTime":endTime,"allTime":allTime,"taskStatus":status,"taskDetail":taskDetail},
					dataType:"text",
					success:function (json) {
						if(json=="success"){
							var status=document.getElementById("status");
							var text2=status.innerHTML;
							if(text2=="新任务"){
								status.className="label label-info";
								status.innerHTML="处理中";
							}else if(text2=="处理中"){
								status.className="label label-warning";
								status.innerHTML="审核中";
							}else if(text2=="审核中"){
								status.className="label label-success";
								status.innerHTML="已完成";
							}
							layer.msg("修改成功！");
							Ajax("ASC", "taskId", 1);
						}else{
							layer.msg("修改失败！");
						}
					},
					error:function (json){
						layer.msg("数据获取失败");
					}
				})
			}else layer.msg("数据获取失败");
		},
		error:function (json){
			layer.msg("任务尚未下发");
		}
	})
}
//编号是否重复
function numberIsExist(v){
	var number=document.getElementById("number").value;
	if((number==null||number=="")&&v=="0"){
		layer.msg("输入内容不能为空！");
	}else{
		var c;
		if(number.length<2){c="PM-00"+number;}
		else if(number.length<3){c="PM-0"+number;}
			else{c="PM-"+number;}
		$.ajax({
			type:"POST",
			async:true,
			url:"http://127.0.0.1:9080/getTaskByTaskId/"+c,
			dataType:"text",
			success:function (json) {
				var is=document.getElementById("isornot");
				if(json=="0"){
					is.style.color="limegreen";
					is.innerHTML="该任务编号不存在，可以使用！";
					setTimeout(function a(){this.hidenText();},2000);
				}
					
				if(json.toString()=="1"){
					is.style.color="orangered";
					is.innerHTML="该任务编号已存在，不可以使用！";
					setTimeout(function a(){this.hidenText();},2000);
				}
			}
		})
	}
}
//获得焦点隐藏文字
function hidenText(){
	var is=document.getElementById("isornot");
	is.innerHTML="";
}
//添加类型
function addType(){
	var type=document.getElementById("type").value;
	if(type==null||type==""){
		alert("输入内容不能为空！");
	}else{
		$.ajax({
			type:"POST",
			async:true,
			url:"http://127.0.0.1:9080/getTypeByName/"+type,
			dataType:"text",
			success:function (json) {
				if(json=="0"){
					$.ajax({
						type:"POST",
						async:true,
						url:"http://127.0.0.1:9080/addType",
						data:{"typeName":type},
						dataType:"json",
						success:function (json) {
							if(json!=""||json!=null){
								refreshType();
								alert("添加成功！");
								document.getElementById("type").value="";
								$('#newtype').modal('hide');
							}else{
								alert("添加失败！");
								document.getElementById("type").value="";
							}
						}
					})
				}
				if(json.toString()=="1"){
					alert("该任务类型已存在，不可以重复添加！");
				}
			}
		});
	}
}
//刷新分类获取所有类型
function refreshType(){
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
}
window.onload=function t(){
	this.refreshType();
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
//添加任务
function addTask(){
	var i=isEmpty();
	if(i==1){
		var number = document.getElementById("number").value;
		var c;
		if(number.length<2){c="PM-00"+number;}
		else if(number.length<3){c="PM-0"+number;}
			else{c="PM-"+number;}
		$.ajax({
			type:"POST",
			async:true,
			url:"http://127.0.0.1:9080/getTaskByTaskId/"+c,
			dataType:"text",
			success:function (json) {
				var is=document.getElementById("isornot");
				if(json=="0"){
					var t_name = document.getElementById("t_name").value;
					var date = document.getElementById("date").value;
					var endDate = document.getElementById("endDate").value;
					var lasttime = document.getElementById("lasttime").value;
					var textarea = $("#textarea").val();
					var options = $('#s_type option:selected').val();
					$.ajax({
						type:"POST",
						async:true,
						url:"http://127.0.0.1:9080/addTaskByAjax",
						data:{"taskId":c,"taskName":t_name,"taskType":options,"startTime":date,"endTime":endDate,"allTime":lasttime,"taskStatus":"新任务","taskDetail":textarea},
						dataType:"text",
						success:function (json) {
							if(json=="success"){
								layer.msg("添加成功！");
								reset();
							}else{
								layer.msg("添加失败！");
							}
						},
						error:function (json){
							layer.msg("添加失败");
						}
					})
				}
					
				if(json.toString()=="1"){
					layer.msg("该任务编号已存在，不可以使用！");
					changeTStatus("number_exist","none","number_empty","");
				}
			}
		});
	}else{
		layer.msg("填写有误或者不完整，请检查后重新提交！");
	}
}
