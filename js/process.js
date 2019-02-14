//查看进度 
function viewProcess(id,process){
	$.ajax({
		type:"POST",
		async:true,
		url:"http://127.0.0.1:9080/getScoreByStuId/"+id,
		dataType:"json",
		success:function (json) {
			for(var q=1;q<4;q++){$("#sub_"+q).val("未开始");}
			if(process=="科目一"&&(json.subOne==null||json.subOne=="")){
				for(var q=1;q<5;q++){$("#sub_"+q).val("未开始");}
			}else if(process=="科目一"&&json.subOne!=null&&json.subOne!=""){
				$("#sub_1").val("进行中");
				for(var q=2;q<5;q++){$("#sub_"+q).val("未开始");}
			}
			if(process=="科目二"&&(json.subTwo==null||json.subTwo=="")){
				$("#sub_1").val("进行中");
				for(var q=2;q<5;q++){$("#sub_"+q).val("未开始");}
			}else if(process=="科目二"&&json.subTwo!=null&&json.subTwo!=""){
				$("#sub_1").val("已结束");
				$("#sub_2").val("进行中");
				for(var q=3;q<5;q++){$("#sub_"+q).val("未开始");}
			}
			if(process=="科目三"&&(json.subThree==null||json.subThree=="")){
				$("#sub_1").val("已结束");
				$("#sub_2").val("已结束");
				for(var q=3;q<5;q++){$("#sub_"+q).val("未开始");}
			}else if(process=="科目三"&&json.subThree!=null&&json.subThree!=""){
				$("#sub_1").val("已结束");
				$("#sub_2").val("已结束");
				$("#sub_3").val("进行中");
				$("#sub_4").val("未开始");
			}
			if(process=="科目四"&&(json.subFour==null||json.subFour=="")){
				$("#sub_1").val("已结束");
				$("#sub_2").val("已结束");
				$("#sub_3").val("已结束");
				for(var q=4;q<5;q++){$("#sub_"+q).val("未开始");}
			}else if(process=="科目四"&&json.subFour!=null&&json.subFour==""){
				$("#sub_1").val("已结束");
				$("#sub_2").val("已结束");
				$("#sub_3").val("已结束");
				$("#sub_4").val("进行中");
			}
			if(process=="已结束"){
				$("#sub_1").val("已结束");
				$("#sub_2").val("已结束");
				$("#sub_3").val("已结束");
				$("#sub_4").val("已结束");
			}
		},
		error:function (json){
			$('#process').modal('hide');
			layer.msg("数据读取失败");
		}
	})
}