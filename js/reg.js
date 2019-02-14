function Age(){
	var name=document.getElementById("age");
	var li=document.getElementById("age_li");
	var reg = /^[0-9]*$/;
	if(name.value==null||name.value==""){
		layer.msg("年龄不能为空!");
		li.style.display="";
		li.title="年龄不能为空!";
	}else if(!reg.test(parseInt(name.value))){
		layer.msg("年龄必须是数字!");
		li.style.display="";
		li.title="年龄必须是数字!";
	}else if(parseInt(name.value)>150){
		layer.msg("输入年龄已超过上限!");
		li.style.display="";
		li.title="输入年龄已超过上限!";
	}else if(parseInt(name.value)<=0){
		layer.msg("输入年龄已不能小于0岁!");
		li.style.display="";
		li.title="输入年龄已不能小于0岁!";
	}else{
		li.style.display="none";
	}
}
function changeSex(s){
	var mi=document.getElementById("male");
	miv=mi.innerHTML;
	var fi=document.getElementById("female");
	fiv=fi.innerHTML;
	if(s=='m'){
		if(miv!=""){
			mi.innerHTML=fiv;
			mi.style.color="#5fb878";
			fi.innerHTML=miv;
			fi.style.color="";
		}
		
	}
	if(s=='f'){
		if(fiv!=""){
			fi.innerHTML=miv;
			fi.style.color="#5fb878";
			mi.innerHTML=fiv;
			mi.style.color="";
		}
	}
}
function isNumber(){
	var name=document.getElementById("phone");
	var li=document.getElementById("phone_li");
	var reg1 = /^[0-9]*$/;
	var reg2 = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
	if(name.value==null||name.value==""){
		layer.msg("联系方式不能为空!");
		li.style.display="";
		li.title="联系方式不能为空!";
	}else if(!reg1.test(parseInt(name.value))){
		layer.msg("联系方式必须是数字!");
		li.style.display="";
		li.title="联系方式必须是数字!";
	}else if(!reg2.test(parseInt(name.value))){
		layer.msg("联系方式不符合规则，必须是11位数字!");
		li.style.display="";
		li.title="联系方式不符合规则，必须是11位数字!";
	}else{
		li.style.display="none";
	}
}
function isEamil(){
	var name=document.getElementById("email");
	var li=document.getElementById("email_li");
	var reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
	if(name.value==null||name.value==""){
		layer.msg("邮箱不能为空!");
		li.style.display="";
		li.title="邮箱不能为空!";
	}else if(!reg.test(name.value)){
		layer.msg("邮箱不符合规则!");
		li.style.display="";
		li.title="邮箱不符合规则!";
	}else{
		li.style.display="none";
	}
}
//密码规则
	//判断输入密码的类型  
	function CharMode(iN){  
		if (iN>=48 && iN <=57) //数字  
			return 1;  
		if (iN>=65 && iN <=90) //大写  
			return 2;  
		if (iN>=97 && iN <=122) //小写  
			return 4;  
		else  
			return 8;   
	}
	//bitTotal函数  
	//计算密码模式  
	function bitTotal(num){  
		modes=0;  
		for (i=0;i<4;i++){  
			if (num & 1) modes++;  
			num>>>=1;  
		}
		return modes;  
	}
	//返回强度级别  
	function checkStrong(sPW){  
		if (sPW.length<6)  
			return 0; //密码太短，不检测级别
		Modes=0;  
		for (i=0;i<sPW.length;i++){  
			//密码模式  
			Modes|=CharMode(sPW.charCodeAt(i));  
		}
		return bitTotal(Modes);  
	}
	//显示颜色  
	function PwdRule(name){
		var lable,pwd;
		if(name=='beforePwd'){
			lable=document.getElementById("before_Pwd");
			pwd=document.getElementById("beforePwd").value;
		}else if(name=='nowPwd'){
			lable=document.getElementById("now_Pwd");
			pwd=document.getElementById("nowPwd").value;
		}else if(name=='pwdAgain'){
			lable=document.getElementById("pwd_Again");
			pwd=document.getElementById("pwdAgain").value;
		}
		if (pwd==null||pwd==''){  
			lable.innerHTML="密码不能为空！";
			lable.style.color="red";
		} 
		else{  
			S_level=checkStrong(pwd);
			switch(S_level) {  
			case 0:  
				lable.innerHTML="<div class=\"layui-progress\" style='width:45px;display:inline-block;'><div class=\"layui-progress-bar layui-bg-red\" lay-percent=\"100%\" style='width:100%;'></div></div>";
				lable.innerHTML=lable.innerHTML+"<div class=\"layui-progress\" style='width:45px;margin-left:5px;display:inline-block;'><div class=\"layui-progress-bar layui-bg-orange\" lay-percent=\"0%\" style='width:0%;'></div></div>";
				lable.innerHTML=lable.innerHTML+"<div class=\"layui-progress\" style='width:45px;margin-left:5px;display:inline-block;'><div class=\"layui-progress-bar layui-bg-green\" lay-percent=\"0%\" style='width:0%;'></div></div>";
				lable.innerHTML=lable.innerHTML+"<div style='width:88px;margin-left:15px;display:inline-block;'>密码强度太低</div>";
				break;
			case 1:  
				lable.innerHTML="<div class=\"layui-progress\" style='width:45px;display:inline-block;'><div class=\"layui-progress-bar layui-bg-orange\" lay-percent=\"100%\" style='width:100%;'></div></div>";
				lable.innerHTML=lable.innerHTML+"<div class=\"layui-progress\" style='width:45px;margin-left:5px;display:inline-block;'><div class=\"layui-progress-bar layui-bg-orange\" lay-percent=\"0%\" style='width:100%;'></div></div>";
				lable.innerHTML=lable.innerHTML+"<div class=\"layui-progress\" style='width:45px;margin-left:5px;display:inline-block;'><div class=\"layui-progress-bar layui-bg-orange\" lay-percent=\"0%\" style='width:0%;'></div></div>";
				lable.innerHTML=lable.innerHTML+"<div style='width:88px;margin-left:15px;display:inline-block;'>密码强度中等</div>";
				break;
			case 2:  
				lable.innerHTML="<div class=\"layui-progress\" style='width:45px;display:inline-block;'><div class=\"layui-progress-bar\" lay-percent=\"100%\" style='width:100%;background-color: #00a65a;'></div></div>";
				lable.innerHTML=lable.innerHTML+"<div class=\"layui-progress\" style='width:45px;margin-left:5px;display:inline-block;'><div class=\"layui-progress-bar\" lay-percent=\"0%\" style='width:100%;background-color: #00a65a;'></div></div>";
				lable.innerHTML=lable.innerHTML+"<div class=\"layui-progress\" style='width:45px;margin-left:5px;display:inline-block;'><div class=\"layui-progress-bar\" lay-percent=\"0%\" style='width:100%;background-color: #00a65a;'></div></div>";
				lable.innerHTML=lable.innerHTML+"<div style='width:88px;margin-left:15px;display:inline-block;'>密码强度较强</div>";
				break;
		}  
	}   
	return;
}
//密码规则2
function PwdRule2(val){
	var lable=document.getElementById("pwd_Again");
	var pwd=document.getElementById("nowPwd").value;
	if (val==null||val==''){  
		lable.innerHTML="密码不能为空！";
		lable.style.color="red";
		return false;
	} 
	else{
		if(val!=pwd){
			lable.innerHTML="两次密码不一致！";
			lable.style.color="red";
			return false;
		}
		else{
			PwdRule(val);
			return true;
		}
	}	
}
function reset(){
	document.getElementById("beforePwd").value="";
	document.getElementById("nowPwd").value="";
	document.getElementById("pwdAgain").value="";
	document.getElementById("before_Pwd").innerHTML="[自动检测密码强度或自动判断是否为空]";
	document.getElementById("now_Pwd").innerHTML="[自动检测密码强度或自动判断是否为空]";
	document.getElementById("pwd_Again").innerHTML="[自动检测密码强度或自动判断是否为空]";
	document.getElementById("before_Pwd").style.color="";
	document.getElementById("now_Pwd").style.color="";
	document.getElementById("pwd_Again").style.color="";
}
function updatePwd(){
	var host="http://localhost:9080";
	var stuId=$("#id").val();
	var stuPwd=$("#beforePwd").val();
	var newStuPwd=$("#nowPwd").val();
	$.ajax({
		type:"post",
		async:true,
		url:host+"/updatePwd",
		dataType:"text",
		data:{"stuId":stuId,"stuPwd":stuPwd,"newStuPwd":newStuPwd},
		success:function (da) {
			if(da=="beforepwdiserror")layer.msg("原密码错误!");
			if(da=="success")layer.msg("修改密码成功!");
			if(da=="failed")layer.msg("修改密码失败!");
		}
	})
}