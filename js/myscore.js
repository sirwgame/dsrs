function getTrainData(){
	var stuId=sessionStorage.getItem("uNumber");
	$.ajax({
		type:"post",
		async:true,
		url:"http://127.0.0.1:9080/getScoreByStuId/"+stuId,
		dataType:"json",
		success:function(data) {
			$(".copy1").remove();
			$("#copy").attr("style", "");
			var tr=$("#copy");
			for(var i=0;i<4;i++){
				var clonedTr=tr.clone();
				clonedTr.children("td").each(function(inner_index) {
					//根据索引为每一个td赋值
					switch (inner_index) {
						case (0):
							if(i==0)$(this).html("科目一");
							if(i==1)$(this).html("科目二");
							if(i==2)$(this).html("科目三");
							if(i==3)$(this).html("科目四");
							break;
						case (1):
							if(i==0)$(this).html(score(data.subOne,1));
							if(i==1)$(this).html(score(data.subTwo,1));
							if(i==2)$(this).html(score(data.subThree,1));
							if(i==3)$(this).html(score(data.subFour,1));
							break;
						case (2):
							if(i==0)$(this).html(score(data.subOne,2));
							if(i==1)$(this).html(score(data.subTwo,2));
							if(i==2)$(this).html(score(data.subThree,2));
							if(i==3)$(this).html(score(data.subFour,2));
							break;
						case (3):
							if(i==0)$(this).html(score(data.subOne,3));
							if(i==1)$(this).html(score(data.subTwo,3));
							if(i==2)$(this).html(score(data.subThree,3));
							if(i==3)$(this).html(score(data.subFour,3));
							break;
						case (4):
							if(i==0)$(this).html(score(data.subOne,4));
							if(i==1)$(this).html(score(data.subTwo,4));
							if(i==2)$(this).html(score(data.subThree,4));
							if(i==3)$(this).html(score(data.subFour,4));
							break;
						case (5):
							if(i==0)$(this).html(score(data.subOne,5));
							if(i==1)$(this).html(score(data.subTwo,5));
							if(i==2)$(this).html(score(data.subThree,5));
							if(i==3)$(this).html(score(data.subFour,5));
							break;
					} //end switch
				});
				clonedTr.insertBefore(tr);
				clonedTr.attr("class","copy1");
			}
			tr.attr("style", "display:none");
		}
	})
}
function score(s,c){
	if(s!=null){
		var array=(s=="-1"||s==""?[]:s.split("-"));
		var l=array.length;
		if(l>=c){
			return array[c-1];
		}else if(l<c){
			return "-";
		}
	}else return "-";
}
////////////
function luru(){
	var score=$("#sub_score").val();
	var stuId=sessionStorage.getItem("uNumber");
	var sub=$("#score_process").val();
	$.ajax({
		type:"post",
		async:true,
		url:"http://127.0.0.1:9080/getTrainData/"+stuId,
		dataType:"json",
		success:function(data) {
			if(data!=null&&data.stuId==stuId&&data.timeUsed=='32'&&data.pingfen!='0'){
				if(score==""||score==null||parseInt(score)>100||parseInt(score)<0){
					layer.msg("未输入有效成绩!");
				}else{
					$.ajax({
						type:"post",
						async:true,
						url:"http://127.0.0.1:9080/updateSubScore",
						dataType:"text",
						data:{"stuId":stuId,"sub":sub,"s":score},
						success:function(data) {
							if("success"==data)layer.msg("录入成功!");
							getTrainData();
							$("#luru").modal('hide');
						}
					})
				}
			}else{
				layer.msg("未查询到你有该科目的学车记录或者未练习结束，不能录入成绩!");
			}
		}
	});

}