$(function(){
	var plr=document.getElementById("pmsg").style.display;
	if(plr!="none"){
		var div = document.getElementById("contentList");
		var Shu = 6;
		var DA=5;
		var star=10;
		for (var i = 0; i < Shu; i++) {
			var aDiv=document.createElement("div");
			aDiv.className="panel panel-default";
				//adiv
				var bDiv=document.createElement("div");
				bDiv.className="panel-body";
					//bdiv
					var cDiv=document.createElement("div");
					cDiv.className="contentleft";
						//cdiv
						var cH4=document.createElement("h4");

							var cH4A=document.createElement("a");
							cH4A.className="title";
							cH4A.href="article_detail.html";
							cH4A.innerHTML="黄教练";

						cH4.appendChild(cH4A);

						var cP1=document.createElement("p");
						for (var j = 0; j < DA; j++) {
							var cP1A=document.createElement("a");
							cP1A.className="label label-default";
							cP1A.innerHTML="热情";
							cP1.appendChild(cP1A);
						}

						var cP2=document.createElement("p");
						cP2.className="overView";
						cP2.innerHTML="五星级好教练";

						var cP3=document.createElement("p");
							var cP3Span1=document.createElement("span");
							cP3Span1.className="count";

								var cP3Span1I=document.createElement("i");
								cP3Span1I.className="glyphicon glyphicon-user";
								var cP3Span1s=document.createElement("span");
								cP3Span1s.innerHTML="剩余名额："+"1000";

							cP3Span1.appendChild(cP3Span1I);
							cP3Span1.appendChild(cP3Span1s);
							

						cP3.appendChild(cP3Span1);
						
						var cP4=document.createElement("p");
							var cP4Span1=document.createElement("span");
							cP4Span1.className="count";
							
							var cP4Span1I=document.createElement("i");
							cP4Span1I.className="glyphicon glyphicon-star";
							var cP4Span1s=document.createElement("span");
							cP4Span1s.innerHTML="学员评价：";
							
							cP4Span1.appendChild(cP4Span1I);
							cP4Span1.appendChild(cP4Span1s);
							
							for(var c=0;c<star;c++){
								var cP4Span1sI=document.createElement("i");
								if((c+1)==star&&(c+1)%2!=0){
									cP4Span1sI.className="glyphicon glyphicon-star-empty";
								}
								else if(c%2==0){
									cP4Span1sI.className="glyphicon glyphicon-star";
								}else{
									cP4Span1sI.className="glyphicon glyphicon-star-empty";
								}
								cP4Span1.appendChild(cP4Span1sI);
								c++;
							}
							
						cP4.appendChild(cP4Span1);

					cDiv.appendChild(cH4);
					cDiv.appendChild(cP1);
					cDiv.appendChild(cP2);
					cDiv.appendChild(cP3);
					cDiv.appendChild(cP4);

					//dDiv
					var dDiv=document.createElement("div");
					dDiv.className="contentImage";
						//eDiv
						var eDiv=document.createElement("div");
						eDiv.className="row";
							var eA=document.createElement("a");
							eA.className="thumbnail w_thumbnail";
							eA.href="#";
								var eImg=document.createElement("img");
								eImg.src="E:/HBuilderX/Hproject/blog/img/slider/Aj6bieY.jpg";
								eImg.alt="...";
							eA.appendChild(eImg);
						eDiv.appendChild(eA);
					dDiv.appendChild(eDiv);

				bDiv.appendChild(cDiv);
				bDiv.appendChild(dDiv);

			aDiv.appendChild(bDiv);
			 div.appendChild(aDiv);
		}
		}
})