//获取分页数据
//三个参数的含义： 
// direction:排序方式(0:倒序，1:正序)
// sort:排序字段
// pageNumber:第几页
function sAjax(direction,sort,pageNumber) {
	// 修改为ajax 来提交请求
	$.ajax({
		type:"POST",
		async:true,
		url:"http://127.0.0.1:9080/articals",
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
							$(this).html("<label class=\"i-checks m-b-none\"><input id=\""+item.articalId+"\" class=\""+index+"\" type=\"checkbox\" name=\"stu\" onclick=\"selectT('"+item.articalId+"')\" ></label>");
							break;
						case (1)://文章编号
							$(this).html(item.articalId);
							break;
						case (2)://文章标题
							$(this).html(item.articalTitle);
							break;
						case (3)://文章分类
							$(this).html("<select id=\"artical_type\" class=\"input-sm form-control w-sm inline v-middle\" onchange=\"ArticalType('"+item.articalId+"')\" style=\"width: 85px;\">"
							+"<option value=\"科目一\">科目一</option><option value=\"科目二\">科目二</option>"
							+"<option value=\"科目三\">科目三</option><option value=\"科目四\">科目四</option>"
							+"<option value=\"其他\">其他</option>"
							+"</select>");
							$("#artical_type").val(item.articalType);
							break;
						case (4)://文章作者
							$(this).html(item.nowWriter);
							break;
						case (5)://是否转载
							$(this).html("<select id=\"artical_reprint\" class=\"input-sm form-control w-sm inline v-middle\" onchange=\"ArticalReprint('"+item.articalId+"')\" style=\"width: 55px;\">"
							+"<option value=\"是\">是</option><option value=\"否\">否</option>"
							+"</select>");
							$("#artical_type").val(item.reprint);
							break;
						case (6)://原作者
							$(this).html(item.befWriter);
							break;
						case (7)://转载地址
							$(this).html(item.befAddress);
							break;
						case (8)://发表日期
							$(this).html(item.publishDate);
							break;
// 						case (10)://注册日期
// 							$(this).html(item.registryDate);
// 							break;
// 						case (9)://其他操作
// 							
// 							break;
					} //end switch
				}); //end children.each
				//把克隆好的tr追加原来的tr后面 ，这样才能看见新的tr
				clonedTr.insertAfter(tr1);
				// 将所有新生成的clonedTr ，既克隆出来的 tr 给予 class 属性，详情见 $(".dynamicCreate1").remove();的注释
				clonedTr.attr("class", "dynamicCreate1 "+index+" "+item.articalId);
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
	sAjax("ASC", "articalId", 1);
	document.getElementById("dijiye").innerHTML="1";
}
//页码跳转
function thisData(i){
	var option=$('#stu_type option:selected').val().split("-");
	var direction=option[0];
	var sort=option[1];
	console.log(direction+" "+sort+" "+i);
	sAjax(direction,sort,i);
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
		var option=$('#stu_type option:selected').val().split("-");
		var direction=option[0];
		var sort=option[1];
		var pageNumber=parseInt(document.getElementById("dijiye").innerHTML)-1;
		console.log(direction+" "+sort+" "+pageNumber);
		sAjax(direction,sort,pageNumber);
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
		var option=$('#stu_type option:selected').val().split("-");
		var direction=option[0];
		var sort=option[1];
		var pageNumber=parseInt(document.getElementById("dijiye").innerHTML)+1;
		console.log(direction+" "+sort+" "+pageNumber);
		sAjax(direction,sort,pageNumber);
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
function stuChange(){
	var trs = document.getElementById('tab').getElementsByTagName('tr');
	for (var i = 0; i < trs.length; i++) {
		trs[i].style.background='';
	}
	var page=document.getElementById("dijiye").innerHTML;
	var option=$('#stu_type option:selected').val().split("-");
	var direction=option[0];
	var sort=option[1];
	document.getElementById("allselect").checked=false;
	var pageNumber=document.getElementById("dijiye").innerHTML;
	console.log(direction+" "+sort+" "+pageNumber);
	sAjax(direction,sort,pageNumber);
}
//删除教练
function deleteStu(){
	var page=document.getElementById("dijiye").innerHTML;
	var task=document.getElementsByName("stu");
	for(var i=0;i<task.length;i++){
		if(task[i].checked==true){
			deleteTask(task[i].id);
		}
	}
	sAjax("ASC", "coachID", parseInt(page));
}
function deleteTask(id){
	$.ajax({
		type:"POST",
		async:true,
		url:"http://127.0.0.1:9080/updateCoachSubject/"+id,
		dataType:"text",
		success:function (json) {
			if(json=="failed"){
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
function deleteAll(){
	$.ajax({
		type:"get",
		async:true,
		url:"http://127.0.0.1:9080/deleteAllCoach",
		dataType:"text",
		success:function (json) {
			if(json=="0"){
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