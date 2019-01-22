//查看进度 
function viewProcess(id,process){
	$.ajax({
		type:"POST",
		async:true,
		url:"http://127.0.0.1:9080/getScoreByStuId/"+id,
		dataType:"json",
		success:function (json) {
			document.getElementById("myModalLabel stu_id").innerHTML="学员("+json.stuId+")进度详情";
			for(var q=1;q<5;q++){document.getElementById("sub_"+q).innerHTML="";}
			if(process=="科目一"&&json.subOne==null){
				for(var q=1;q<5;q++){document.getElementById("sub_"+q).innerHTML="未考试";}
			}else if(process=="科目一"&&json.subOne!=null){
				fuzhu(json.subOne,"sub_1");
				for(var q=2;q<5;q++){document.getElementById("sub_"+q).innerHTML="未考试";}
			}
			if(process=="科目二"&&json.subTwo==null){
				fuzhu(json.subOne,"sub_1");
				for(var q=2;q<5;q++){document.getElementById("sub_"+q).innerHTML="未考试";}
			}else if(process=="科目二"&&json.subTwo!=null){
				fuzhu(json.subOne,"sub_1");
				fuzhu(json.subTwo,"sub_2");
				for(var q=3;q<5;q++){document.getElementById("sub_"+q).innerHTML="未考试";}
			}
			if(process=="科目三"&&json.subThree==null){
				fuzhu(json.subOne,"sub_1");
				fuzhu(json.subTwo,"sub_2");
				for(var q=3;q<5;q++){document.getElementById("sub_"+q).innerHTML="未考试";}
			}else if(process=="科目三"&&json.subThree!=null){
				fuzhu(json.subOne,"sub_1");
				fuzhu(json.subTwo,"sub_2");
				fuzhu(json.subThree,"sub_3");
				for(var q=4;q<5;q++){document.getElementById("sub_"+q).innerHTML="未考试";}
			}
			if(process=="科目四"&&json.subFour==null){
				fuzhu(json.subOne,"sub_1");
				fuzhu(json.subTwo,"sub_2");
				fuzhu(json.subThree,"sub_3");
				for(var q=4;q<5;q++){document.getElementById("sub_"+q).innerHTML="未考试";}
			}else if((process=="科目四"||process=="已结束")&&json.subFour!=null){
				fuzhu(json.subOne,"sub_1");
				fuzhu(json.subTwo,"sub_2");
				fuzhu(json.subThree,"sub_3");
				fuzhu(json.subFour,"sub_4");
			}
		},
		error:function (json){
			$('#process').modal('hide');
			layer.msg("数据读取失败");
		}
	})
}
//查看进度辅助函数
//json:分数
//sub:科目id
function fuzhu(json,sub){
	var score=json.split("-");
	var s=document.getElementById(sub);
	for(var i=0;i<score.length;i++){
		if(i==0&&parseInt(score[i])>=90){
			var span=document.createElement("span");
			span.style.color="green";
			span.innerHTML=score[0]+"分";
			s.appendChild(span);
		}else if(i==0&&parseInt(score[i])<90){
			var span=document.createElement("span");
			span.style.color="red";
			span.style.display="block";
			span.innerHTML="第"+(i+1)+"次成绩："+score[0]+"分";
			s.appendChild(span);
		}
		if(i!=0&&parseInt(score[i])>=90){
			var span=document.createElement("span");
			span.style.color="green";
			span.style.display="block";
			span.innerHTML="第"+(i+1)+"次成绩："+score[i]+"分";
			s.appendChild(span);
		}else if(i!=0){
			var span=document.createElement("span");
			span.style.color="red";
			span.style.display="block";
			span.innerHTML="第"+(i+1)+"次成绩："+score[i]+"分";
			s.appendChild(span);
		}
	}
}
//筛选辅助函数
function maxAge(){
	var minAge=document.getElementById("minAge").value;
	var maxAge=document.getElementById("maxAge").value;
	if(maxAge<minAge){
		layer.msg("年龄上限不能小于年龄下限");
	}
}
//筛选结果
function chooseStu(){
	var minAge=document.getElementById("minAge").value==""?0:document.getElementById("minAge").value;
	var maxAge=document.getElementById("maxAge").value==""?0:document.getElementById("maxAge").value;
	var sex=$('#sex_type option:selected').val()=="0"?null:$('#sex_type option:selected').val();
	var process=$('#process_type option:selected').val()=="0"?null:$('#process_type option:selected').val();
	console.log(minAge+" "+maxAge+" "+sex+" "+process);
	$.ajax({
			type:"POST",
			async:true,
			url:"http://127.0.0.1:9080/studentsWithChoose",
			data: {"minAge":minAge,"maxAge":maxAge,"sex":sex,"process":process,"name":null},
			success:function(data) {
				pageFuzhu(data);
				layer.msg("查询到"+document.getElementById("zongji").innerHTML+"条数据");
				var option1 = document.getElementById('sex_type').children;
				option1[0].selected=true;
				var option2 = document.getElementById('process_type').children;
				option2[0].selected=true;
				$("#minAge").val("");$("#maxAge").val("");
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
					$(this).html("<label class=\"i-checks m-b-none\"><input id=\""+item.taskId+"\" class=\""+index+"\" type=\"checkbox\" name=\"task\" onclick=\"selectT('"+item.taskId+"')\" ></label>");
					break;
				case (1)://学员号
					$(this).html(item.stuID);
					break;
				case (2)://学员姓名
					$(this).html(item.stuName);
					break;
				case (3)://学员年龄
					$(this).html(item.stuAge);
					break;
				case (4)://学员性别
					$(this).html(item.stuSex);
					break;
				case (5)://学员身份证
					$(this).html(item.stuCard);
					break;
				case (6)://学员进度
					$(this).html("<a href=\"javascript:void(0)\" onclick=\"viewProcess('"+item.stuID+"','"+item.stuProcess+"')\" class=\"active\" ui-toggle-class=\"\" title=\"点此查看详情\" style=\"margin-right: 10px;\" data-toggle=\"modal\" data-target=\"#process\">"+item.stuProcess+"</a>");
					break;
				case (7)://学员籍贯
					$(this).html(item.stuAddress);
					break;
				case (8)://注册日期
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
		clonedTr.attr("class", "dynamicCreate1 "+index+" "+item.taskId);
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
	sAjax("ASC", "stuID", 1);
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
//搜索任务
function searchStu(){
	var name=document.getElementById("search_name").value;
	if(name=="")sAjax("ASC", "stuID", 1);
	else{
		// 修改为ajax 来提交请求
		$.ajax({
			type:"POST",
			async:true,
			url:"http://127.0.0.1:9080/studentsWithNameByAjax/"+name,
			dataType:"json",
			success:function(data) {
				pageFuzhu(data);
				layer.msg("查询到"+document.getElementById("zongji").innerHTML+"条数据");
			}
		})
	}
}
