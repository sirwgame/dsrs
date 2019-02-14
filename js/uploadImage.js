function loadImg(){
	document.getElementById("file_input").click();
}
function changepic(obj) {
	//console.log(obj.files[0]);//这里可以获取上传文件的name
	var newsrc=getObjectURL(obj.files[0]);
	document.getElementById('imgContent').src=newsrc;
	ReSizePic(document.getElementById('imgContent'));  
}
//建立一個可存取到該file的url
function getObjectURL(file) {
	var url = null ;
	// 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已
	if (window.createObjectURL!=undefined) { // basic
		url = window.createObjectURL(file) ;
	} else if (window.URL!=undefined) { // mozilla(firefox)
		url = window.URL.createObjectURL(file) ;
	} else if (window.webkitURL!=undefined) { // webkit or chrome
		url = window.webkitURL.createObjectURL(file) ;
	}
	return url ;
}
function ReSizePic(ThisPic) {   
    var RePicWidth = 200; //这里修改为您想显示的宽度值    
    
    var TrueWidth = ThisPic.width; //图片实际宽度    
    var TrueHeight = ThisPic.height; //图片实际高度    
        
    if(TrueWidth*TrueHeight>30000){    
        ThisPic.width = TrueWidth/5;     
        ThisPic.height = TrueHeight/5;  
    }
}
////////////////////////////////////////////
function upload(){
	var host="http://127.0.0.1:9080";
	var oFiles = document.getElementById("file_input").files;
    var params = new FormData();
	var stuId=sessionStorage.getItem("uNumber");
    params.append('file',oFiles[0]);
	console.log(params.get("file"));
	$.ajax({
		url: host+"/upload/"+stuId,
		type: "post",
		cache: false,
		contentType: false,
		processData: false,
		data: params,
		dataType:"text",
		success: function(data){
			if(data=="success"){
				var img1=document.getElementById("headimage");
				img1.removeAttribute("src");
				var img2=document.getElementsByClassName("img-circle")[0];
				img2.removeAttribute("src");
				layer.msg("照片上传成功！");
				$.ajax({
					type:"post",
					async:true,
					url:host+"/getImage/"+stuId,
					dataType:"json",
					success:function (image) {
						img1.setAttribute("src",host+image.imagePath);
						img2.setAttribute("src",host+image.imagePath);
					}
				})
				$("#pic").modal('hide');
			}else{
				layer.msg("照片上传失败");
			}
		},
		error: function(data){
			layer.msg("照片上传失败");
		}
	});
}
////////////////////////////////////////////
function update(){
	var host="http://127.0.0.1:9080";
	var stuId=$("#id").val();
	var stuName=$("#name").val();
	var stuAge=$("#age").val();
	var stuSex=getSex();
	var stuAddress=$("#address").val();
	var birthday=$("#birDate").val();
	var stuPhone=$("#phone").val();
	var email=$("#email").val();
	$.ajax({
		type:"post",
		async:true,
		url:host+"/updateStudentByAjax/"+stuId,
		dataType:"text",
		data:{"stuId":stuId,"stuName":stuName,"stuAge":stuAge,"stuSex":stuSex,"stuAddress":stuAddress,"birthday":birthday,"stuPhone":stuPhone,"email":email},
		success:function (data) {
			if(data=="success")layer.msg("修改成功!");
			else{
				layer.msg("修改失败!");
			}
		}
	})
}
function getSex(){
	var mi=document.getElementById("male");
	miv=mi.innerHTML;
	if(miv==""){
		return "男";
	}else return "女";
}