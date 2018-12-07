function value(){
	var status=$(".table").closest("tr").find("td").eq(4).text();
	
	if(document.getElementById("edit")){
		var stat=document.getElementById("edit");
		if(status.indexOf("审核中")>0){
			stat.id="a";
		}else if(status.indexOf("已完成")>0){
			stat.id="a";
		}else stat1.id="edit";
	}
	if(document.getElementById("a")){
		if(status.indexOf("审核中")>0){
			alert("该任务审核中，不能编辑！");
		}else if(status.indexOf("已完成")>0){
			alert("该任务已完成，不能编辑！");
		}
	}
}
function checkLen(obj){
	var maxChars = 100;//最多字符数
	if (obj.value.length > maxChars)
		obj.value = obj.value.substring(0,maxChars);
}
function checkLenforType(obj){
	var maxChars = 8;//最多字符数
	if (obj.value.length > maxChars)
		obj.value = obj.value.substring(0,maxChars);
}
function changeStatus(){
	var status=document.getElementById("status");
	var text=status.innerHTML;
	if(text=="新任务"){
		status.className="label label-info";
		status.innerHTML="处理中";
	}else if(text=="处理中"){
		status.className="label label-warning";
		status.innerHTML="审核中";
	}else if(text=="审核中"){
		status.className="label label-success";
		status.innerHTML="已完成";
	}
}