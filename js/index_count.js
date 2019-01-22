$(function(){
	
	window.onload=function(){
		var myDate = new Date();
		year=myDate.getFullYear();    //获取完整的年份(4位)
		month=myDate.getMonth()+1;       //获取当前月份(0-11,0代表1月)
		day=myDate.getDate();        //获取当前日(1-31)
		var hv=document.getElementById("visitor_num");
		var hs=document.getElementById("student_num");
		var hc=document.getElementById("coach_num");
		//初始化今日访客
		$.ajax({
			type:"post",
			async:true,
			url:"http://127.0.0.1:9080/visitorCounts",
			data: {"date":year+"-"+month,"d":day},
			dataType:"text",
			success:function(r){
				hv.innerHTML=r;
			},
			error:function(r){
				hv.innerHTML=0;
			}
		});
		//初始化学员总数
		$.ajax({
			type:"get",
			async:true,
			url:"http://127.0.0.1:9080/students",
			dataType:"text",
			success:function(r){
				hs.innerHTML=r;
			},
			error:function(r){
				hs.innerHTML=0;
			}
		});
		//初始化教练总数
		$.ajax({
			type:"get",
			async:true,
			url:"http://127.0.0.1:9080/Coachs",
			dataType:"text",
			success:function(r){
				hc.innerHTML=r;
			},
			error:function(r){
				hc.innerHTML=0;
			}
		});
	}
})
//显示?访客数据
function viewVCounts(){
	var hv=document.getElementById("visitor_num");
	if(document.getElementById("va").title=="不显示数据"){
		changeATitle("va","显示数据","vi","glyphicon glyphicon-eye-open");
		hv.innerHTML="***";
	}else{
		changeATitle("va","不显示数据","vi","glyphicon glyphicon-eye-close");
		hv.innerHTML=sessionStorage.hv;
	}
}
//显示?学员数据
function viewSCounts(){
	var hs=document.getElementById("student_num");
	if(document.getElementById("sa").title=="不显示数据"){
		changeATitle("sa","显示数据","si","glyphicon glyphicon-eye-open");
		hs.innerHTML="***";
	}else{
		changeATitle("sa","不显示数据","si","glyphicon glyphicon-eye-close");
		hs.innerHTML=sessionStorage.hs;
	}
}
//显示?教练数据
function viewCCounts(){
	var hc=document.getElementById("coach_num");
	if(document.getElementById("ca").title=="不显示数据"){
		changeATitle("ca","显示数据","ci","glyphicon glyphicon-eye-open");
		hc.innerHTML="***";
	}else{
		changeATitle("ca","不显示数据","ci","glyphicon glyphicon-eye-close");
		hc.innerHTML=sessionStorage.hc;
	}
}
//a标签、i标签辅助函数
function changeATitle(A,title,I,className){
	var a=document.getElementById(A);
	a.title=title;
	var i=document.getElementById(I);
	i.className=className;
}
//刷新数据辅助函数
function refresh(type){
	if(type==0){
		var myDate = new Date();
		year=myDate.getFullYear();    //获取完整的年份(4位)
		month=myDate.getMonth()+1;       //获取当前月份(0-11,0代表1月)
		day=myDate.getDate();        //获取当前日(1-31)
		var hv=document.getElementById("visitor_num");
		$.ajax({
			type:"post",
			async:true,
			url:"http://127.0.0.1:9080/visitorCounts",
			data: {"date":year+"-"+month,"d":day},
			dataType:"text",
			success:function(r){
				if(document.getElementById("va").title=="不显示数据")hv.innerHTML=r;
				sessionStorage.hv = r;
				layer.msg("数据获取成功！");
			},
			error:function(r){
				if(document.getElementById("va").title=="不显示数据")hv.innerHTML=0;
				sessionStorage.hv = 0;
				layer.msg("数据获取失败！");
			}
		});
	}else if(type==1){
		var hs=document.getElementById("student_num");
		$.ajax({			
			type:"get",
			async:true,
			url:"http://127.0.0.1:9080/students",
			dataType:"text",
			success:function(r){
				if(document.getElementById("sa").title=="不显示数据")hs.innerHTML=r;
				sessionStorage.hs = r;
				layer.msg("数据获取成功！");
			},
			error:function(r){
				if(document.getElementById("sa").title=="不显示数据")hs.innerHTML=0;
				sessionStorage.hs = 0;
				layer.msg("数据获取失败！");
			}
		});
	}else if(type==2){
		var hc=document.getElementById("coach_num");
		$.ajax({			
			type:"get",
			async:true,
			url:"http://127.0.0.1:9080/Coachs",
			dataType:"text",
			success:function(r){
				if(document.getElementById("ca").title=="不显示数据")hc.innerHTML=r;
				sessionStorage.hc = r;
				layer.msg("数据获取成功！");
			},
			error:function(r){
				if(document.getElementById("ca").title=="不显示数据")hc.innerHTML=0;
				sessionStorage.hc = 0;
				layer.msg("数据获取失败！");
			}
		});
	}
	
}