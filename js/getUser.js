window.onload = function a() {
	var host="http://127.0.0.1:9080";
	sessionStorage.setItem("uNumber","2019071121");
	var stuId=sessionStorage.getItem("uNumber");
	$.ajax({
		type:"post",
		async:true,
		url:host+"/studentsWithIDByAjax/"+stuId,
		dataType:"json",
		success:function (stu) {
			$("#id").val(stu.stuID);$("#name").val(stu.stuName);
			$("#age").val(stu.stuAge);$("#sex").val(stu.stuSex);
			$("#nation").val(stu.nation);$("#address").val(stu.stuAddress);
			$("#birthday").val(stu.birthday);$("#phone").val(stu.stuPhone);
			$("#email").val(stu.email);$("#card").val(stu.stuCard);
			$("#registryDate").val(stu.registryDate);
			$("#indentifiy").val(stu.stuIdentify);
			document.getElementById("user").innerHTML=stu.stuName+document.getElementById("user").innerHTML;
			document.getElementById("hello").innerHTML="你好，"+stu.stuName;
			if(document.getElementById("male")){
				if(stu.stuSex=="男")s('m');
				if(stu.stuSex=="女")s('f');
			}
			if(document.getElementById("test1")){
				$("#test1").val(stu.birthday);
			}
			if(document.getElementById("birDate")){
				$("#birDate").val(stu.birthday);
			}
			v(stu.stuID,stu.stuProcess);
		}
	});
	$.ajax({
		type:"post",
		async:true,
		url:host+"/getImage/"+stuId,
		dataType:"json",
		success:function (image) {
			var img1=document.getElementById("headimage");
			img1.setAttribute("src",host+image.imagePath);
			var img2=document.getElementsByClassName("img-circle")[0];
			img2.setAttribute("src",host+image.imagePath);
		}
	});

}
function v(id,process){
	viewProcess(id,process);
}
function s(sex){
	changeSex(sex);
}