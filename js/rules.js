//学员姓名规则
function NameRule(val){
	var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
	var name=document.getElementById("name");
　　if(val==null||val==""){
		name.innerHTML="学员名不能为空！";
		name.style.color="red";
		return false;
	}
　　else{
		if(!reg.test(val)) {
				name.innerHTML="学员名必须是汉字！";
				name.style.color="red";
				return false;
		}else
			name.innerHTML="";
			return true;
	}
		
	
}
//身份证规则
function CardRule(val){
	var r=this.idCardNo(val);
	var name=document.getElementById("card");
	if(val==null||val==""){
			name.innerHTML="身份证号不能为空！";
			name.style.color="red";
			return false;
	}
	else{
	　　if(!r) {
			name.innerHTML="身份证号输入有误！";
			name.style.color="red";
			return false;
		}
	　　else
			name.innerHTML="";
			return true;
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
	function PwdRule(pwd){  
		var name=document.getElementById("pwd");
		if (pwd==null||pwd==''){  
			name.innerHTML="密码不能为空！";
			name.style.color="red";
			return false;
		} 
		else{  
			if(pwd.length<6){
				name.innerHTML="密码太短！";
				name.style.color="red";
				return false;
			} else{
				name.style.color="white";
				S_level=checkStrong(pwd);  
				switch(S_level) {  
				case 0:  
					name.innerHTML="密码强度：弱";
					name.style.backgroundColor="#FF0000";
					break;
				case 1:  
					name.innerHTML="密码强度：中";
					name.style.backgroundColor="#FF9900";
					break;  
				case 2:  
					name.innerHTML="密码强度：强";
					name.style.backgroundColor="#33CC00";
					break; 
				return true;
			}
		}  
	}   
	return;
}
//密码规则2
function Pwd2Rule(val){
	var pwd=document.getElementById("tea_password_hide").value;
	var name=document.getElementById("pwd2");
	if (val==null||val==''){  
		name.innerHTML="密码不能为空！";
		name.style.color="red";
		return false;
	} 
	else{
		if(val!=pwd){
			name.innerHTML="两次密码不一致！";
			name.style.color="red";
			return false;
		}
		else{
			name.innerHTML="";
			return true;
		}
	}
}
//附加规则
function idCardNo(value){
  //验证身份证号方法
  var area = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "xinjiang", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" }
  var idcard, Y, JYM;
  var idcard=value;
  var S, M;
  var idcard_array = new Array();
  idcard_array = idcard.split("");
  if (area[parseInt(idcard.substr(0, 2))] == null) return false;
  switch (idcard.length) {
      case 15:
          if ((parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0 || ((parseInt(idcard.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0)) {
              ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/; //测试出生日期的合法性
          }
          else {
              ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/; //测试出生日期的合法性
          }
          if (ereg.test(idcard))
              //return Errors[0];
            var res = true;
          else
              //return Errors[2];
            var res = false;
          return res;
          break;
      case 18:
          if (parseInt(idcard.substr(6, 4)) % 4 == 0 || (parseInt(idcard.substr(6, 4)) % 100 == 0 && parseInt(idcard.substr(6, 4)) % 4 == 0)) {
              ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/; //闰年出生日期的合法性正则表达式
          }
          else {
              ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/; //平年出生日期的合法性正则表达式
          }
          if (ereg.test(idcard)) {
              S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7 + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9 + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10 + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5 + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8 + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4 + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2 + parseInt(idcard_array[7]) * 1 + parseInt(idcard_array[8]) * 6 + parseInt(idcard_array[9]) * 3;
              Y = S % 11;
              M = "F";
              JYM = "10X98765432";
              M = JYM.substr(Y, 1);
              if (M == idcard_array[17])
                  //return Errors[0];
                var res = true;
              else
                  //return Errors[3];
                var res = false;
          }
          else
              //return Errors[2];
            res = false;
          return res;
          break;
      default:
          res = false;
          return res;
          break;
    };
}
//提交前验证
function submitBack(){
	var name=document.getElementById("tea_username_hide").value;
	var card=document.getElementById("tea_indentifycode_hide").value;
	var pwd1=document.getElementById("tea_password_hide").value;
	var pwd2=document.getElementById("tea_password1_hide").value;
	var rn=this.NameRule(name);
	var rc=this.CardRule(card);
	var rp1=this.PwdRule(pwd1);
	var rp2=this.Pwd2Rule(pwd2);
	if(rn!=false&&rc!=false&&rp1!=false&&rp2!=false){
		var stu = {"code": "20181764263","name": name,"pwd": pwd1}; 
		localStorage.setItem("student",JSON.stringify(stu)); 
		var rb=document.getElementById("rb");
		rb.setAttribute("data-target","#myModalMsg");
		var msg=document.getElementById("msg");
		msg.innerHTML="你的学员号是：20181764263";
	}
}
//退出规则
function quitToIndex(){
	var plr=document.getElementById("plr");
	var pmsg=document.getElementById("pmsg");
	plr.style.display="none";
	pmsg.style.display="";
}