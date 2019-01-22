window.onload=function rule(){
	var url=window.location.href;
	if(url.match("index")){
		this.hide();
	}else if(url.match("reservationHall")){
		this.title();
		this.hide();
	}
}
//页面导航条
function title(){
	var subject=document.getElementById("subject");
	var url=window.location.href;
	if(url.match("subject=2")){
		subject.innerHTML="科目二";
	}else if(url.match("subject=3")){
		subject.innerHTML="科目三";
	}
}
//检测是否登录
function hide(){
	var plr=document.getElementById("plr").style.display;
	var plrbody=document.getElementById("contentList");
	if(plr!="none"){
		plrbody.style.display="none";
		this.pleaseLogin();
	}
}
//隐藏后显示的内容
function pleaseLogin(){
	var div=document.createElement("div");
	div.className="contentList";
	div.style.textAlign="center";
	div.innerHTML="请登录后再浏览！";
	var hide=document.getElementById("hide");
	hide.appendChild(div);
}