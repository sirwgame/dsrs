//获取分页数据
//三个参数的含义： 
// direction:排序方式(0:倒序，1:正序)
// sort:排序字段
// pageNumber:第几页
function Ajax(direction,sort,pageNumber) {
	// 修改为ajax 来提交请求
	$.ajax({
		type:"POST",
		async:true,
		url:"http://127.0.0.1:9080/tasksAndsortByAjax",
		data: {"direction":direction,"sort":sort,"pageNumber":pageNumber-1},
		success:function(data) {
			//1,将class=dynamicCreate1清空，清空之前生成的tr，因为不清空会导致再生成新的tr时，原来的tr依然存在
			$(".dynamicCreate1").remove();
			//在数据生成完成后，隐藏了页面上空行的tr，需要显示出来才能使用。
			$("#dynamicCreate").show();
			// 拿到页面上的tr 对象
			var tr = $("#dynamicCreate");
			//往它后面添加tr
			var tr1 = tr;
			// 拿到需要遍历的数据
			var newslabledatas = data.content;
			console.log(newslabledatas);
			//遍历集合 index 是索引，item 是当前的对象
			$.each(newslabledatas, function(index, item) {
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
							}else if(item.isSend==1){
								$(this).html("<a href=\"javascript:void(0)\" onclick=\"taskDetail('"+item.taskId+"')\" class=\"active\" ui-toggle-class=\"\" title=\"任务详情\" style=\"margin-right: 10px;\" data-toggle=\"modal\" data-target=\"#detail\"><i class=\"glyphicon glyphicon-list-alt\"></i></a>"
								+"<a href=\"javascript:void(0)\" onclick=\"editTask('"+item.taskId+"')\" class=\"active\" ui-toggle-class=\"\" title=\"编辑任务\" style=\"margin-right: 10px;\" data-toggle=\"modal\" data-target=\"#edit\"><i class=\"glyphicon glyphicon-edit\"></i></a>"
								+"<a style='margin-right: 10px;' href=\"javascript:void(0)\" onclick=\"deleteTask('"+item.taskId+"')\" class=\"active\" ui-toggle-class=\"\" title=\"删除任务\"><i class=\"glyphicon glyphicon-trash\"></i></a>");
							}else if(item.isSend==0){
								$(this).html("<a href=\"javascript:void(0)\" onclick=\"taskDetail('"+item.taskId+"')\" class=\"active\" ui-toggle-class=\"\" title=\"任务详情\" style=\"margin-right: 10px;\" data-toggle=\"modal\" data-target=\"#detail\"><i class=\"glyphicon glyphicon-list-alt\"></i></a>"
								+"<a href=\"javascript:void(0)\" onclick=\"editTask('"+item.taskId+"')\" class=\"active\" ui-toggle-class=\"\" title=\"编辑任务\" style=\"margin-right: 10px;\" data-toggle=\"modal\" data-target=\"#edit\"><i class=\"glyphicon glyphicon-edit\"></i></a>"
								+"<a style='margin-right: 10px;' href=\"javascript:void(0)\" onclick=\"deleteTask('"+item.taskId+"')\" class=\"active\" ui-toggle-class=\"\" title=\"删除任务\"><i class=\"glyphicon glyphicon-trash\"></i></a>"
								+"<a href=\"javascript:void(0)\" onclick=\"s('"+item.taskId+"')\" class=\"active\" ui-toggle-class=\"\" title=\"下发任务\" style=\"margin-right: 10px;dispaly: ;\" data-toggle=\"modal\" data-target=\"#send\"><i class=\"glyphicon glyphicon-send\"></i></a>");
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
			document.getElementById("zongji").innerHTML=data.numberOfElements;
			document.getElementById("total").innerHTML=data.totalPages;
			createPage(data.totalPages);
		}
	})
}
//动态生成页码
function createPage(total){
	var div = document.getElementById("yema");
	var dangqianye=document.getElementById("dijiye").innerHTML;
	while(div.hasChildNodes()) //当div下还存在子节点时 循环继续  
    {
        div.removeChild(div.firstChild);
    }
	//上一页
	var lis=document.createElement("li");
	lis.setAttribute("id","pre");
		var lisa=document.createElement("a");
		lisa.href="javascript:void(0)";
		lisa.setAttribute("onclick","preData()");
		var lisai=document.createElement("i");
		lisai.setAttribute("class","fa fa-chevron-left");
		lisa.appendChild(lisai);
		lis.appendChild(lisa);
	document.getElementById("yema").appendChild(lis);
	//中间页码
	for(var i=1;i<=total;i++){
		var li=document.createElement("li");
		li.setAttribute("id",i);
			var lia=document.createElement("a");
			lia.href="javascript:void(0)";
			lia.innerHTML=i;
			if(i==dangqianye){
				lia.setAttribute("style","background-color: grey");
				lia.setAttribute("onclick","");
			}
			else{
				lia.setAttribute("style","");
				lia.setAttribute("onclick","thisData("+i+")");
			}
		li.appendChild(lia);
		document.getElementById("yema").appendChild(li);
	}
	//下一页
	var lix=document.createElement("li");
	lix.setAttribute("id","next");
		var lixa=document.createElement("a");
		lixa.href="javascript:void(0)";
		lixa.setAttribute("onclick","nextData()");
		var lixai=document.createElement("i");
		lixai.setAttribute("class","fa fa-chevron-right");
		lixa.appendChild(lixai);
		lix.appendChild(lixa);
	document.getElementById("yema").appendChild(lix);
}
window.onload=function a(){
	Ajax("ASC", "taskId", 1);
	document.getElementById("dijiye").innerHTML="1";
}
//页码跳转
function thisData(i){
	var option=$('#sp_type option:selected').val().split("-");
	var direction=option[0];
	var sort=option[1];
	console.log(direction+" "+sort+" "+i);
	Ajax(direction,sort,i);
	sessionStorage.removeItem("allCheck");
	document.getElementById("allselect").checked=false;
	document.getElementById("dijiye").innerHTML=i;
	var trs = document.getElementById('tab').getElementsByTagName('tr');
	for (var i = 0; i < trs.length; i++) {
		trs[i].style.background='';
	}
}
//上一页
function preData(){
	var page=document.getElementById("dijiye").innerHTML;
	if(page=="1")layer.msg("已经是首页了！");	
	else{
		var option=$('#sp_type option:selected').val().split("-");
		var direction=option[0];
		var sort=option[1];
		var pageNumber=parseInt(document.getElementById("dijiye").innerHTML)-1;
		console.log(direction+" "+sort+" "+pageNumber);
		Ajax(direction,sort,pageNumber);
		sessionStorage.removeItem("allCheck");
		document.getElementById("allselect").checked=false;
		document.getElementById("dijiye").innerHTML=parseInt(page)-1;
		var trs = document.getElementById('tab').getElementsByTagName('tr');
		for (var i = 0; i < trs.length; i++) {
			trs[i].style.background='';
		}
	}
}
//下一页
function nextData(){
	var page=document.getElementById("dijiye").innerHTML;
	if(page==document.getElementById("total").innerHTML)layer.msg("已经是最后一页了！");	
	else{
		var option=$('#sp_type option:selected').val().split("-");
		var direction=option[0];
		var sort=option[1];
		var pageNumber=parseInt(document.getElementById("dijiye").innerHTML)+1;
		console.log(direction+" "+sort+" "+pageNumber);
		Ajax(direction,sort,pageNumber);
		sessionStorage.removeItem("allCheck");
		document.getElementById("allselect").checked=false;
		document.getElementById("dijiye").innerHTML=parseInt(page)+1;
		var trs = document.getElementById('tab').getElementsByTagName('tr');
		for (var i = 0; i < trs.length; i++) {
			trs[i].style.background='';
		}
	}
}
//select改变
$("#sp_type").on("change",function(){
	var trs = document.getElementById('tab').getElementsByTagName('tr');
	for (var i = 0; i < trs.length; i++) {
		trs[i].style.background='';
	}
	var page=document.getElementById("dijiye").innerHTML;
	var option=$('#sp_type option:selected').val().split("-");
	var direction=option[0];
	var sort=option[1];
	document.getElementById("allselect").checked=false;
	var pageNumber=document.getElementById("dijiye").innerHTML;
	console.log(direction+" "+sort+" "+pageNumber);
	Ajax(direction,sort,pageNumber);
});
//任务——全选
function selectTAll(){
	var page=document.getElementById('zongji').innerHTML;
	var check={};
	//1.获取checkbo的元素对象
	var chElt=document.getElementById("allselect");
	//2.获取选中状态
	var checkedElt=chElt.checked;
	//3.若checked=true,将所有的复选框选中,checked=false,将所有的复选框取消
	var taskCheck=document.getElementsByName("task");
	var trs = document.getElementById('tab').getElementsByTagName('tr');
	console.log(checkedElt);
	if(checkedElt){
		//全选
		for(var i=0;i<taskCheck.length;i++){
			//设置复选框的选中状态
			var t=document.getElementsByClassName(i)[1].id;
			taskCheck[i].checked=true;
			check[t]=true;
		}
		for (var i = 0; i < trs.length; i++) {
			if(i!=0)trs[i].style.background='#a9d5fb';
		}
		check["c"]=page;
		if (!sessionStorage.taskCheck) {
			sessionStorage.setItem("taskCheck", JSON.stringify(check));
		}else if(sessionStorage.getItem("taskCheck")&&JSON.parse(sessionStorage.getItem("taskCheck"))["c"]!=page){
			var check=JSON.parse(sessionStorage.getItem("taskCheck"));
			for(var i=0;i<page;i++){
				//设置复选框的选中状态
				var t=document.getElementsByClassName(i)[1].id;
				check[t]=true;
			}
			check["c"]=page;
			sessionStorage.setItem("taskCheck",JSON.stringify(check));
		}
		
	}else{
		if(sessionStorage.getItem("taskCheck")&&JSON.parse(sessionStorage.getItem("taskCheck"))["c"]==page){
			//取消全选
			for(var i=0;i<taskCheck.length;i++){
				taskCheck[i].checked=false;
			}
			for (var i = 0; i < trs.length; i++) {
				if(i!=0)trs[i].style.background='';
			}
			sessionStorage.removeItem("taskCheck");
		}
	}
}
//单选一个//单选几个//在全选状态下取消某一项选择
function selectT(id){
	var trs = document.getElementById('tab').getElementsByTagName('tr');
	if(!sessionStorage.getItem("taskCheck")){
		var chElt=document.getElementById(id);
		var checkedElt=chElt.checked;
		if(checkedElt){
			chElt.checked=true;
			if (!sessionStorage.getItem(id)||sessionStorage.getItem(id)=="false") {
				sessionStorage.setItem(id, true);
			}
			for (var i = 0; i < trs.length; i++) {
				if(trs[i].className.split(" ")[2]==(id))trs[i].style.background='#a9d5fb';
			}
		}else{
			chElt.checked=false;
			if (sessionStorage.getItem(id)) {
				sessionStorage.setItem(id, false);
			}
			for (var i = 0; i < trs.length; i++) {
				if(trs[i].className.split(" ")[2]==(id))trs[i].style.background='';
			}
		}
	}else{
		//1.全选按钮
		var achElt=document.getElementById("allselect");
		//2.单选按钮
		var schElt=document.getElementById(id);
		//3.session数据
		var check=JSON.parse(sessionStorage.getItem("taskCheck"));
		if(!schElt.checked){
			achElt.checked=false;
			schElt.checked=false;
			check[id]=false;
			check["c"]=check["c"]-1;
			for (var i = 0; i < trs.length; i++) {
				if(trs[i].className.split(" ")[2]==(id))trs[i].style.background='';
			}
			sessionStorage.setItem("taskCheck", JSON.stringify(check));
		}else{
			//schElt.checked=true;
			check[id]=true;
			check["c"]=check["c"]+1;
			if(check["c"]==document.getElementById("zongji").innerHTML){
				achElt.checked=true;
			}
			for (var i = 0; i < trs.length; i++) {
				if(trs[i].className.split(" ")[2]==(id))trs[i].style.background='#a9d5fb';
			}
			sessionStorage.setItem("taskCheck", JSON.stringify(check));
			console.log(check[id]);
		}
		
	}
}
//教练单选一个
function selectC(id){
	var html="<div class=\"alert alert-info alert-dismissible\" role=\"alert\" style=\"width: 200px;display: inline-block;margin: 0 3px;\">"
			+"<a href='javascript:void(0)' onclick='clearRadio()' class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" style=\"right: 0;\">"
			+"<span aria-hidden=\"true\">&times;</span></a>"
			+"<strong style='margin-left: 36px'>"+id+"</strong></div>";
	var chtml=document.getElementById("c_html");
	var trs = document.getElementById('coach_tab').getElementsByTagName('tr');
	var chElt=document.getElementById(id);
	var checkedElt=chElt.checked;
	if(checkedElt){
		chElt.checked=true;
		chtml.innerHTML=html;
		for (var i = 0; i < trs.length; i++) {
			if(trs[i].className.split(" ")[2]==(id))trs[i].style.background='#a9d5fb';
			else trs[i].style.background='';
		}
	}	
}
//单选辅助按钮
function clearRadio(){
	var strong=document.getElementsByTagName("strong")[0].innerHTML;
	$("input:radio[name='coach']").attr("checked",false);
	var trs = document.getElementById('coach_tab').getElementsByTagName('tr');
	for (var i = 0; i < trs.length; i++) {
		trs[i].style.background='';
	}
}