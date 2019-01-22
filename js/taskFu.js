function deleteTasks(){
	var page=document.getElementById("dijiye").innerHTML;
	var task=document.getElementsByName("task");
	for(var i=0;i<task.length;i++){
		if(task[i].checked==true){
			deleteTask(task[i].id);
		}
	}
	Ajax("ASC", "taskId", parseInt(page));
}
function deleteTask(id){
	$.ajax({
		type:"POST",
		async:true,
		url:"http://127.0.0.1:9080/deleteTaskByAjax/"+id,
		dataType:"text",
		success:function (json) {
			var page=document.getElementById("dijiye").innerHTML;
			Ajax("ASC", "taskId", parseInt(page));
			layer.msg("删除成功");
		},
		error:function (json){
			layer.msg("删除失败");
		}
	})
}
function deleteAll(){
	$.ajax({
		type:"get",
		async:true,
		url:"http://127.0.0.1:9080/deleteAllTask",
		dataType:"text",
		success:function (json) {
			if(json=="success"){
				layer.msg("删除成功");
			}else{
				layer.msg("删除失败");
			}
		},
		error:function (json){
			layer.msg("删除失败");
		}
	})
}
//搜索任务
function searchTask(){
	var name=document.getElementById("search_name").value;
	console.log(name==""?"1":"2");
	if(name=="")this.Ajax("ASC", "taskId", 1);
	else{
		// 修改为ajax 来提交请求
		$.ajax({
			type:"POST",
			async:true,
			url:"http://127.0.0.1:9080/getTaskByTaskName/"+name,
			dataType:"json",
			success:function(data) {
				//1,将class=dynamicCreate1清空，清空之前生成的tr，因为不清空会导致再生成新的tr时，原来的tr依然存在
				$(".dynamicCreate1").remove();
				//在数据生成完成后，隐藏了页面上空行的tr，需要显示出来才能使用。
				$("#dynamicCreate").show();
				// 拿到页面上的tr 对象
				var tr = $("#dynamicCreate");
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
								$(this).html("<label class=\"i-checks m-b-none\"><input id=\""+item.taskId+"\" class=\""+index+"\" type=\"checkbox\" name=\"task\" onclick=\"selectT('"+item.taskId+"')\" ></label>");
								break;
							case (1)://任务编号
								$(this).html(item.taskId);
								break;
							case (2)://任务名称
								$(this).html(item.taskName);
								break;
							case (3)://任务分类
								$(this).html(item.taskType);
								break;
							case (4)://任务状态
								if(item.taskStatus=="新任务"){
									className="label label-default";
								}else if(item.taskStatus=="处理中"){
									className="label label-info";
								}else if(item.taskStatus=="审核中"){
									className="label label-warning";
								}else if(item.taskStatus=="已完成"){
									className="label label-success";
								}else if(item.taskStatus=="已过期"){
									className="label label-danger";
								}
								$(this).html("<span class=\"text-ellipsis\"><a style=\"text-decoration : none\"><span id=\"s_status\" class=\""+className+"\">"+item.taskStatus+"</span></a></span>");
								break;
							case (5)://任务操作
								if(item.taskStatus=="处理中"||item.taskStatus=="审核中"||item.taskStatus=="已完成"||item.taskStatus=="已过期"){
									$(this).html("<a href=\"javascript:void(0)\" onclick=\"taskDetail('"+item.taskId+"')\" class=\"active\" ui-toggle-class=\"\" title=\"任务详情\" style=\"margin-right: 10px;\" data-toggle=\"modal\" data-target=\"#detail\"><i class=\"glyphicon glyphicon-list-alt\"></i></a>"
									+"<a style='margin-right: 10px;' href=\"javascript:void(0)\" onclick=\"deleteTask('"+item.taskId+"')\" class=\"active\" ui-toggle-class=\"\" title=\"删除任务\"><i class=\"glyphicon glyphicon-trash\"></i></a>");
								}else{
									$(this).html("<a href=\"javascript:void(0)\" onclick=\"taskDetail('"+item.taskId+"')\" class=\"active\" ui-toggle-class=\"\" title=\"任务详情\" style=\"margin-right: 10px;\" data-toggle=\"modal\" data-target=\"#detail\"><i class=\"glyphicon glyphicon-list-alt\"></i></a>"
									+"<a href=\"javascript:void(0)\" onclick=\"editTask('"+item.taskId+"')\" class=\"active\" ui-toggle-class=\"\" title=\"编辑任务\" style=\"margin-right: 10px;\" data-toggle=\"modal\" data-target=\"#edit\"><i class=\"glyphicon glyphicon-edit\"></i></a>"
									+"<a style='margin-right: 10px;' href=\"javascript:void(0)\" onclick=\"deleteTask('"+item.taskId+"')\" class=\"active\" ui-toggle-class=\"\" title=\"删除任务\"><i class=\"glyphicon glyphicon-trash\"></i></a>"
									+"<a href=\"javascript:void(0)\" class=\"active\" ui-toggle-class=\"\" title=\"下发任务\" style=\"margin-right: 10px;dispaly: ;\" data-toggle=\"modal\" data-target=\"#send\"><i class=\"glyphicon glyphicon-send\"></i></a>");
								}
								
								break;
						} //end switch
					}); //end children.each
					//把克隆好的tr追加原来的tr后面 ，这样才能看见新的tr
					clonedTr.insertAfter(tr1);
					// 将所有新生成的clonedTr ，既克隆出来的 tr 给予 class 属性，详情见 $(".dynamicCreate1").remove();的注释
					clonedTr.attr("class", "dynamicCreate1 "+index+" "+item.taskId);
					tr1=clonedTr;
				}); //end $each
				//隐藏id=clone的tr，因为该tr中的td没有数据，不隐藏起来会在生成的table第一行显示一个空行
				$("#dynamicCreate").hide();
				// 显示整个 table 表格
				$("#tab").show();
				document.getElementById("zongji").innerHTML=c_i;
				createPage(c_i);
			}
		})
	}
}
function s(id){
	document.getElementById("send_id").innerHTML=id;
}
//下发任务
function addType(){
	var taskId=document.getElementById("send_id").innerHTML;
	var coachID=document.getElementsByTagName("strong")[0].innerHTML;
	$.ajax({
		type:"POST",
		async:true,
		url:"http://127.0.0.1:9080/addTaskProess",
		data:{"taskId":taskId,"coachID":coachID},
		dataType:"json",
		success:function (json) {
			$.ajax({
				type:"POST",
				async:true,
				url:"http://127.0.0.1:9080/updateTaskSend",
				data:{"taskId":taskId,"send":1},
				dataType:"json",
				success:function (json) {
					layer.msg("任务下发成功！");
					var page=document.getElementById("dijiye").innerHTML;
					Ajax(-3, "ASC", "taskId", parseInt(page));
					var options = document.getElementById('s_type').children;
					options[0].selected=true;
					document.getElementById('coachName').val("");
					$('#send').modal('hide');
				},
				error:function (json){
					layer.msg("任务下发失败");
				}
			})
		},
		error:function (json){
			layer.msg("任务下发失败");
		}
	})
}