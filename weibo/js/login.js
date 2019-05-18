class Send {
	constructor(seletor) {
	    this.btn = document.querySelector(seletor);
		this.container =  document.querySelector("#container");
		this.bindEvents();
		this.ul = document.createElement("ul");
		this.del = this.ul.querySelector(".del");
		this.time = 0;
		this.div = document.createElement("div");


	}
	bindEvents(){
		this.btn.onclick = () =>{
			this.container.innerHTML = '<h4>发布</h4>'+
			'<a id="closeBtn" class="close_btn" href="javascript:;">×</a>'+
			'<p><label>用户名：<input id="username" type="text"></label></p>'+
			'<p><label>内容：<textarea></textarea></label></p>'+
			'<p><button id="sendBtn" class="sendBtn" type="button">发布</button></p>';
			tools.showCenter(this.container);
			this.model = document.createElement("div");
			this.model.className = "model";
			document.body.appendChild(this.model);
			this.container.onclick = (e) =>{
				e = e || window.event;
				var target = e.target || e.srcElement;
				if(target.className ==="close_btn"){
					this.container.style.display = "none";
					document.body.removeChild(this.model);
				}
				if(target.className === "sendBtn"){
					this.textarea = this.container.querySelector("textarea").value;
					this.username = document.querySelector("#username").value;
					if(this.textarea == ""){
						alert("请输入内容！");
					}
					else if(this.username == ""){
						alert("请输入用户名！");
					}
					else {
// 						document.body.removeChild(this.container);
// 						document.body.removeChild(this.medal);
						this.btn.classList.add("xs");
						this.container.style.display = "none";
						this.model.style.display="none";
						var date = new Date();
						this.time = date.getTime();
						var years = date.getFullYear();
						var months = date.getMonth()+1;
						var days = date.getDate();
						var hours = date.getHours();
						var minutes = date.getMinutes();
						var seconds = date.getSeconds();
						this.div.innerHTML= `${this.username}:&nbsp;${this.textarea}<br>
						${years}/${months}/${days}&nbsp;${hours}:${minutes}:${seconds}`;
						document.body.appendChild(this.div);
						this.div.oncontextmenu = (e) =>{
							e.preventDefault() || e.srcElement;
							let ul = document.createElement("ul");
							this.ul.innerHTML = `<li class="del">撤回</li>`;
							document.body.appendChild(this.ul);
						}
					}
				}
			}
			this.ul.onclick = (e) =>{
				e = e || window.event;
				var target = e.target || e.srcElement;
				let date2 = new Date();
				let time2 = date2.getTime();
				if(target.className === "del"){
					if(time2 - this.time <2*60*1000){
						this.div.parentNode.removeChild(this.div);
						document.body.removeChild(this.ul);
						this.btn.classList.remove("xs");
					}
					else{
						alert("消息超过两分钟无法撤回！");
						document.body.removeChild(this.ul);

					}
				}
			}
		}
	}
}