var totalRows; // 总记录数
var pageNumber; // 当前页码
$(function() {
	Ajax(1, 0); // 在页面加载的时候，自动发送ajax 请求，生成数据
	//参数的含义： 
	// pageNumber 根据不同的页码，显示不用的分页数据
	// newsLabelId ： 可以理解为是查询的条件，根据条件在后台筛选分页数据
	function Ajax(pageNumber, newsLabelId) {
		// 修改为ajax 来提交请求
		var url = "data.json";
		$.get(url, {
				"pageNumber": pageNumber,
				"newsLabelId": newsLabelId
			}
			// 重点代码：----------------------------------------------------
			function(data) {
				//1,将class=dynamicCreate1清空，清空之前生成的tr，因为不清空会导致再生成新的tr时，原来的tr依然存在
				$(".dynamicCreate1").remove();
				//在数据生成完成后，隐藏了页面上空行的tr，需要显示出来才能使用。
				$("#dynamicCreate").show();
				// 拿到页面上的tr 对象
				var tr = $("#dynamicCreate");
				// 拿到需要遍历的数据
				var newslabledatas = data.datas;
				//遍历集合 index 是索引，item 是当前的对象
				$.each(newslabledatas, function(index, item) {
					//克隆tr，每次遍历都可以产生新的tr，为了创建新的tr
					var clonedTr = tr.clone();
					//拿到新的tr，循环遍历它每一个td元素，并赋值 inner_index 是当前td 的索引
					clonedTr.children("td").each(function(inner_index) {
						//根据索引为每一个td赋值
						switch (inner_index) {
							case (0): // 判断是第一个 td ，就为其赋值
								$(this).html("<label class='i-checks m-b-none'><input type='checkbox' name='post[]'><i></i></label>");
								break;
							case (1): 
								$(this).html(item.taskId);
								break;
							case (2):
								$(this).html(item.taskName);
								break;
							case (3):
								$(this).html(item.taskType);
								break;
							case (4):
								if(item.taskStatus=="新任务"){
									className="label label-default";
								}else if(item.taskStatus=="处理中"){
									className="label label-info";
								}else if(item.taskStatus=="审核中"){
									className="label label-warning";
								}else if(item.taskStatus=="已完成"){
									className="label label-success";
								}
								$(this).html("<a href='javascript:void(0)' onclick='changeStatus()' style='text-decoration : none'><span id='status' class='"+className+"'>"+item.taskStatus+"</span></a>");
								break;
							case (5):
								$(this).html(
									"<a href=# onClick=javascript:windowOpen('${pageContext.request.contextPath}/desktop/news/findNewsLabel.action?id=" +
									item.id + "','','',670,260,'no','yes','100','100')>修改</a>");
								break;
						} //end switch
					}); //end children.each
					//把克隆好的tr追加原来的tr后面 ，这样才能看见新的tr
					clonedTr.insertAfter(tr);
					// 将所有新生成的clonedTr ，既克隆出来的 tr 给予 class 属性，详情见 $(".dynamicCreate1").remove();的注释
					clonedTr.attr("class", "dynamicCreate1");
				}); //end $each
				//隐藏id=clone的tr，因为该tr中的td没有数据，不隐藏起来会在生成的table第一行显示一个空行
				$("#dynamicCreate").hide();
				// 显示整个 table 表格
				$("#table01").show();
				// 下面的两条数据，主要是为 分页做准备的
				totalRows = data.totalRows; // 总记录数
				pageNumber = data.pageNumber; // 当前页的页码
			}, "json");
	}
});
///////////////////
$(function() {
	var pageIndex = pageNumber-1 ; //页面索引初始值
	var pageSize = 3; //每页显示条数初始化，修改显示条数，修改这里即可
	//分页，PageCount是总条目数，这是必选参数，其它参数都是可选
	$("#Pagination").pagination(100, {
		callback: PageCallback,
		prev_text: '上一页', //上一页按钮里text
		next_text: '下一页', //下一页按钮里text
		items_per_page: pageSize, //显示条数
		num_display_entries: 5, //连续分页主体部分分页条目数
		current_page: pageIndex, //当前页索引
		num_edge_entries: 2 //两侧首尾分页条目数
	});
	//翻页调用 index 是当前页的索引
	function PageCallback(index, jq) {
		Ajax(index,index+1,1);
	}
});