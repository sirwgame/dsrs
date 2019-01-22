//改变教练科目
function changeSubject(id,subject){
	document.getElementById("myModalLabel stu_id").innerHTML="教练("+id+")科目详情";
	document.getElementById("bef_sub").innerHTML=subject;
	document.getElementById("sub_id").innerHTML=id;
	$("#coach_subject").val(subject);
	var sd=document.getElementById("subject_detail");
	var option=$('#coach_subject option:selected').val();
	if(option=="理论教练"){
		sd.innerHTML="理论教练负责解答学员在备考科目一和科目四中遇到的本人无法理解的问题以及编辑相关学习和复习的文章。";
	}else if(option=="科目二"){
		sd.innerHTML="科目二教练负责教授学员定点停车、坡道起步、侧方位停车、倒车入库、直角转弯和弯道行驶的基本驾驶能力。";
	}else if(option=="科目三"){
		sd.innerHTML="科目三教练负责教授学员在正常道路上遇到斑马线、学校等公共设施的正常操作以及改变车道、加速等正常行驶的技巧。";
	}
}
function subjectChange(){
	var sd=document.getElementById("subject_detail");
	var option=$('#coach_subject option:selected').val();
	if(option=="理论教练"){
		sd.innerHTML="理论教练负责解答学员在备考科目一和科目四中遇到的本人无法理解的问题以及编辑相关学习和复习的文章。";
	}else if(option=="科目二"){
		sd.innerHTML="科目二教练负责教授学员定点停车、坡道起步、侧方位停车、倒车入库、直角转弯和弯道行驶的基本驾驶能力。";
	}else if(option=="科目三"){
		sd.innerHTML="科目三教练负责教授学员在正常道路上遇到斑马线、学校等公共设施的正常操作以及改变车道、加速等正常行驶的技巧。";
	}
}
function change_sub(){
	var option=$('#coach_subject option:selected').val();
	var id=document.getElementById("sub_id").innerHTML;
	if(option==document.getElementById("bef_sub").innerHTML)layer.msg("未作任何更改");
	else{
		$.ajax({
		type:"POST",
		async:true,
		url:"http://127.0.0.1:9080/updateCoachSubject",
		dataType:"text",
		data: {"subject":option,"coachID":id},
		success:function (json) {
			if(json=="success")layer.msg("更改成功");
			var page=document.getElementById("dijiye").innerHTML;
			sAjax("ASC", "coachID", parseInt(page));
			$("#subject").modal("hide");
		},
		error:function(json){layer.msg("更改失败");}
	})
	}
	
}
//查看教练评分
function viewStar(id,level){
	$.ajax({
		type:"POST",
		async:true,
		url:"http://127.0.0.1:9080/findByCoachID/"+id,
		dataType:"json",
		success:function (json) {
			document.getElementById("myModalLabel coach_id").innerHTML="教练("+id+")评分详情";
			document.getElementById("one_star").innerHTML=json.one+" 人";
			document.getElementById("two_star").innerHTML=json.two+" 人";
			document.getElementById("three_star").innerHTML=json.three+" 人";
			document.getElementById("four_star").innerHTML=json.four+" 人";
			document.getElementById("five_star").innerHTML=json.five+" 人";
			document.getElementById("result").innerHTML=json.result;
			if(json.result<6.0)document.getElementById("result").style.color="red";
			else document.getElementById("result").style.color="green";
		},
		error:function(json){
			layer.msg("还没有人对该教练评分");
			$("#level").modal("hide");
		},
	})
}
//筛选辅助函数
function maxAge(){
	var minAge=document.getElementById("minAge").value;
	var maxAge=document.getElementById("maxAge").value;
	if(maxAge<minAge){
		layer.msg("年龄上限不能小于年龄下限");
	}
}
function maxScore(){
	var minAge=document.getElementById("minScore").value;
	var maxAge=document.getElementById("maxScore").value;
	if(maxAge<minAge){
		layer.msg("评分上限不能小于评分下限");
	}
}
//筛选结果
function chooseStu(){
	var minAge=document.getElementById("minAge").value==""?0:document.getElementById("minAge").value;
	var maxAge=document.getElementById("maxAge").value==""?200:document.getElementById("maxAge").value;
	var minScore=document.getElementById("minScore").value==""?0:document.getElementById("minScore").value;
	var maxScore=document.getElementById("maxScore").value==""?0:document.getElementById("maxScore").value;
	var sex=$('#sex_type option:selected').val()=="0"?null:$('#sex_type option:selected').val();
	var subject=$('#subject_type option:selected').val()=="0"?null:$('#subject_type option:selected').val();
	console.log(minAge+" "+maxAge+" "+sex+" "+subject);
	$.ajax({
			type:"POST",
			async:true,
			url:"http://127.0.0.1:9080/coachWithChoose",
			data: {"minAge":minAge,"maxAge":maxAge,"minScore":minScore,"maxScore":maxScore,"sex":sex,"subject":subject,"name":null},
			success:function(data) {
				pageFuzhu(data);
				layer.msg("查询到"+document.getElementById("zongji").innerHTML+"条数据");
				var option1 = document.getElementById('sex_type').children;
				option1[0].selected=true;
				var option1 = document.getElementById('subject_type').children;
				option1[0].selected=true;
				$("#minAge").val("");$("#maxAge").val("");
				$("#minScore").val("");$("#maxScore").val("");
				document.getElementById("clearChoose").style.display="";
				document.getElementById("yema").style.display="none";
				$('#choose').modal('hide');
			}
	})
}
//分页辅助函数1
function pageFuzhu(data){
	//1,将class=dynamicCreate1清空，清空之前生成的tr，因为不清空会导致再生成新的tr时，原来的tr依然存在
	$(".dynamicCreate1").remove();
	//在数据生成完成后，隐藏了页面上空行的tr，需要显示出来才能使用。
	$("#dynamicCreate").show();
	// 拿到页面上的tr 对象
	var tr = $("#dynamicCreate");
	//往它后面添加tr
	var tr1 = tr;
	var si=0;
	//遍历集合 index 是索引，item 是当前的对象
	$.each(data, function(index, item) {
		si++;
		//克隆tr，每次遍历都可以产生新的tr，为了创建新的tr
		var clonedTr = tr.clone();
		//拿到新的tr，循环遍历它每一个td元素，并赋值 inner_index 是当前td 的索引
		clonedTr.children("td").each(function(inner_index) {
			//根据索引为每一个td赋值
			switch (inner_index) {
				case (0): // 判断是第一个 td ，就为其赋值
					$(this).html("<label class=\"i-checks m-b-none\"><input id=\""+item.coachID+"\" class=\""+index+"\" type=\"checkbox\" name=\"stu\" onclick=\"selectT('"+item.coachID+"')\" ></label>");
					break;
				case (1)://教练号
					$(this).html(item.coachID);
					break;
				case (2)://教练姓名
					$(this).html(item.coachName);
					break;
				case (3)://教练所属科目
					$(this).html("<a href=\"javascript:void(0)\" onclick=\"changeSubject('"+item.coachID+"','"+item.coachSubject+"')\" class=\"active\" ui-toggle-class=\"\" title=\"点此改变教练科目\" style=\"margin-right: 10px;\" data-toggle=\"modal\" data-target=\"#subject\">"+item.coachSubject+"</a>");
					break;
				case (4)://教练星级
					$(this).html("<a href=\"javascript:void(0)\" onclick=\"viewStar('"+item.coachID+"','"+item.coachLevel+"')\" class=\"active\" ui-toggle-class=\"\" title=\"点此查看教练评分详情\" style=\"margin-right: 10px;\" data-toggle=\"modal\" data-target=\"#level\">"+item.coachLevel+"</a>");
					break;
				case (5)://教练年龄
					$(this).html(item.coachAge);
					break;
				case (6)://教练性别
					$(this).html(item.coachSex);
					break;
				case (7)://教练身份证号
					$(this).html(item.coachCard);
					break;
				case (8)://教练联系方式
					$(this).html(item.coachPhone);
					break;
				case (9)://教练籍贯
					$(this).html(item.coachAddress);
					break;
				case (10)://注册日期
					$(this).html(item.registryDate);
					break;
// 						case (9)://其他操作
// 							
// 							break;
			} //end switch
		}); //end children.each
		//把克隆好的tr追加原来的tr后面 ，这样才能看见新的tr
		clonedTr.insertAfter(tr1);
		// 将所有新生成的clonedTr ，既克隆出来的 tr 给予 class 属性，详情见 $(".dynamicCreate1").remove();的注释
		clonedTr.attr("class", "dynamicCreate1 "+index+" "+item.coachID);
		tr1=clonedTr;
	}); //end $each
	//隐藏id=clone的tr，因为该tr中的td没有数据，不隐藏起来会在生成的table第一行显示一个空行
	$("#dynamicCreate").hide();
	// 显示整个 table 表格
	$("#tab").show();
	document.getElementById("zongji").innerHTML=si;
}
//分页辅助函数2
function clearChoose(){
	document.getElementById("clearChoose").style.display="none";
	document.getElementById("yema").style.display="";
	sAjax("ASC", "coachID", 1);
}
//全选
function selectTAll(){
	var page=document.getElementById('zongji').innerHTML;
	var check={};
	//1.获取checkbo的元素对象
	var chElt=document.getElementById("allselect");
	//2.获取选中状态
	var checkedElt=chElt.checked;
	//3.若checked=true,将所有的复选框选中,checked=false,将所有的复选框取消
	var stuCheck=document.getElementsByName("stu");
	var trs = document.getElementById('tab').getElementsByTagName('tr');
	console.log(checkedElt);
	if(checkedElt){
		//全选
		for(var i=0;i<stuCheck.length;i++){
			//设置复选框的选中状态
			var t=document.getElementsByClassName(i)[1].id;
			stuCheck[i].checked=true;
			check[t]=true;
		}
		for (var i = 0; i < trs.length; i++) {
			if(i!=0)trs[i].style.background='#a9d5fb';
		}
		check["c"]=page;
		if (!sessionStorage.stuCheck) {
			sessionStorage.setItem("stuCheck", JSON.stringify(check));
		}else if(sessionStorage.getItem("stuCheck")&&JSON.parse(sessionStorage.getItem("stuCheck"))["c"]!=page){
			var check=JSON.parse(sessionStorage.getItem("stuCheck"));
			for(var i=0;i<page;i++){
				//设置复选框的选中状态
				var t=document.getElementsByClassName(i)[1].id;
				check[t]=true;
			}
			check["c"]=page;
			sessionStorage.setItem("stuCheck",JSON.stringify(check));
		}
		
	}else{
		if(sessionStorage.getItem("stuCheck")&&JSON.parse(sessionStorage.getItem("stuCheck"))["c"]==page){
			//取消全选
			for(var i=0;i<stuCheck.length;i++){
				stuCheck[i].checked=false;
			}
			for (var i = 0; i < trs.length; i++) {
				if(i!=0)trs[i].style.background='';
			}
			sessionStorage.removeItem("stuCheck");
		}
	}
}
//单选一个
function selectT(id){
	var trs = document.getElementById('tab').getElementsByTagName('tr');
	if(!sessionStorage.getItem("stuCheck")){
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
		var check=JSON.parse(sessionStorage.getItem("stuCheck"));
		if(!schElt.checked){
			achElt.checked=false;
			schElt.checked=false;
			check[id]=false;
			check["c"]=check["c"]-1;
			for (var i = 0; i < trs.length; i++) {
				if(trs[i].className.split(" ")[2]==(id))trs[i].style.background='';
			}
			sessionStorage.setItem("stuCheck", JSON.stringify(check));
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
			sessionStorage.setItem("stuCheck", JSON.stringify(check));
			console.log(check[id]);
		}
		
	}
}
//搜索教练
function searchStu(){
	var name=document.getElementById("search_name").value;
	if(name=="")sAjax("ASC", "stuID", 1);
	else{
		// 修改为ajax 来提交请求
		$.ajax({
			type:"POST",
			async:true,
			url:"http://127.0.0.1:9080/findCoachByName/"+name,
			dataType:"json",
			success:function(data) {
				pageFuzhu(data);
				layer.msg("查询到"+document.getElementById("zongji").innerHTML+"条数据");
			}
		})
	}
}
