window.onload = function a() {
	var host="http://127.0.0.1:9080";
	var stuId=sessionStorage.getItem("uNumber");
	$.ajax({
		type:"post",
		async:true,
		url:host+"/studentsWithIDByAjax/"+stuId,
		dataType:"json",
		success:function (stu) {
			document.getElementById("user").innerHTML=stu.stuName+document.getElementById("user").innerHTML;
			document.getElementById("hello").innerHTML="你好，"+stu.stuName;
			if(document.getElementById("beforePwd")){
				$("#id").val(stuId);
			}
			if(document.getElementById("process")){
				$("#process").val(stu.stuProcess);
				$("#id2").val(stu.stuID);
				get();
			}
			if(document.getElementById("score_process")){
				$("#score_process").val(stu.stuProcess);
				$("#id2").val(stu.stuID);
				get();
			}
			if(document.getElementById("posttable")){
				table();
			}
		}
	});
	$.ajax({
		type:"post",
		async:true,
		url:host+"/getImage/"+stuId,
		dataType:"json",
		success:function (image) {
			var img2=document.getElementsByClassName("img-circle")[0];
			img2.setAttribute("src",host+image.imagePath);
		}
	});
}
function table(){initalTable("all");}
function get(){getTrainData();}