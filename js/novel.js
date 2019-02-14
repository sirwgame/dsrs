function getNovel(n){
	var noval_all=document.getElementById("noval_all");
	var noval_14=document.getElementById("noval_14");
	var noval_2=document.getElementById("noval_2");
	var noval_3=document.getElementById("noval_3");
	var noval_other=document.getElementById("noval_other");
	if(n=="noval_all"){
		noval_all.style.background="#999";
		noval_14.style.background="";noval_2.style.background="";
		noval_3.style.background="";noval_other.style.background="";
		initalTable("all");
	}else if(n=="noval_14"){
		noval_all.style.background="";
		noval_14.style.background="#999";noval_2.style.background="";
		noval_3.style.background="";noval_other.style.background="";
		initalTable("理论知识");
	}else if(n=="noval_2"){
		noval_all.style.background="";
		noval_14.style.background="";noval_2.style.background="#999";
		noval_3.style.background="";noval_other.style.background="";
		initalTable("科目二");
	}else if(n=="noval_3"){
		noval_all.style.background="";
		noval_14.style.background="";noval_2.style.background="";
		noval_3.style.background="#999";noval_other.style.background="";
		initalTable("科目三");
	}else if(n=="noval_other"){
		noval_all.style.background="";
		noval_14.style.background="";noval_2.style.background="";
		noval_3.style.background="";noval_other.style.background="#999";
		initalTable("其他");
	}
}
///////////////////
function initalTable(type){
	var writer=sessionStorage.getItem("uNumber");
	layui.use('table', function(){
		var table = layui.table;
		table.render({
			elem: '#posttable'
			,width: 970
			,height: 312
			,method: "post"
			,url: 'http://localhost:9080/getNovelByWriter/'+writer+"-"+type
			,page: true
			,limit: 10
			,parseData: function(res){//res 即为原始返回的数据
				return {
				  "code": 0, //解析接口状态
				  "msg": "", //解析提示文本
				  "count": res.length, //解析数据长度
				  "data": res //解析数据列表
				};
			}
			,cols: [[
				{field: 'novelId', title: '帖子编号', width:140, align:'center', sort: true}
				,{field: 'novelTitle', title: '帖子标题', width:250, align:'center'}
				,{field: 'novelType', title: '所属分类', width:120, align:'center'} 
				,{field: 'novelView', title: '浏览量', width:80, align:'center', sort: true} 
				,{field: 'novelComment', title: '评论数', width: 80, align:'center', sort: true}
				,{field: 'novelDate', title: '发表日期', width: 130, align:'center'},
				,{title: '操作',width: 163, toolbar: '#barDemo',align:'center'}
				]]
		});
		table.on('tool(test)', function(obj){event(obj);});
	});
}
function returnTable(){
	document.getElementById("novel").style.display="";
	document.getElementById("search-novel").style.display="none";
}
function searchnovel(){
	var title=$("#novel-name").val();
	if(title==null||title=="")layer.msg("未输入有效字符！");
	else{
		var writer=sessionStorage.getItem("uNumber");
		layui.use('table', function(){
			var table = layui.table;
			table.render({
				elem: '#posttable2'
				,width: 970
				,height: 312
				,method: "post"
				,url: 'http://localhost:9080/getNovelByTitle/'+writer+"-"+title
				,page: true
				,limit: 10
				,parseData: function(res){//res 即为原始返回的数据
					return {
					"code": 0, //解析接口状态
					"msg": "", //解析提示文本
					"count": res.length, //解析数据长度
					"data": res //解析数据列表
					};
				}
				,cols: [[
					{field: 'novelId', title: '帖子编号', width:140, align:'center', sort: true}
					,{field: 'novelTitle', title: '帖子标题', width:250, align:'center'}
					,{field: 'novelType', title: '所属分类', width:120, align:'center'} 
					,{field: 'novelView', title: '浏览量', width:80, align:'center', sort: true} 
					,{field: 'novelComment', title: '评论数', width: 80, align:'center', sort: true}
					,{field: 'novelDate', title: '发表日期', width: 130, align:'center'},
					,{title: '操作',width: 163, toolbar: '#barDemo2',align:'center'}
					]]
			});
			table.on('tool(test2)', function(obj){event(obj);});
		});
		document.getElementById("novel").style.display="none";
		document.getElementById("search-novel").style.display="";
	}
}
///表格事件
function event(obj){
	var data = obj.data;
	if(obj.event === 'detail'){
		layer.msg('ID：'+ data.novelTitle + ' 的查看操作');
	}else if(obj.event === 'edit'){
		layer.alert('编辑行：<br>'+ JSON.stringify(data))
	}
}