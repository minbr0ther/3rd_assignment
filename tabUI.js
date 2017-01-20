function inputJason(getSomething,jasonURL) {

	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", function(evt){

		var Ajax = evt.target.responseText;
		var getJson = JSON.parse(Ajax);

		var getMyName = document.querySelector(".myName");
		var getMyDesc = document.querySelector(".myDesc");
		var getTab = document.querySelectorAll(".tab");

		for(var i=0; i<4; i++) getTab[i].setAttribute("style","");
		getSomething.setAttribute("style","background-color:#df9371; color:white;");

		getMyName.innerHTML = "";
		getMyName.insertAdjacentHTML('beforeend',getJson.title);
			
		getMyDesc.innerHTML = "";
		getMyDesc.insertAdjacentHTML('beforeend',getJson.body);
		
	});
	oReq.open("GET", jasonURL);
	oReq.send();
}

var getPosition = document.querySelector("#position");
var getFriend = document.querySelector("#friend");
var getTheme = document.querySelector("#theme");
var getNews = document.querySelector("#news");

getPosition.addEventListener("click", function(){
	inputJason(getPosition, "http://jsonplaceholder.typicode.com/posts/1");
});

getFriend.addEventListener("click", function(){
	inputJason(getFriend, "http://jsonplaceholder.typicode.com/posts/2");
});

getTheme.addEventListener("click", function(){
	inputJason(getTheme, "http://jsonplaceholder.typicode.com/posts/3");
});

getNews.addEventListener("click", function(){
	inputJason(getNews, "http://jsonplaceholder.typicode.com/posts/4");
});

