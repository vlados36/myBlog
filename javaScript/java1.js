document.getElementById('kb').onmouseover = sliderBottom;
document.getElementById('kb').onmouseout = sliderreturn;


function sliderBottom (){
	var prog = document.getElementById("prog");
	var soft = document.getElementById("soft");
	var dip = document.getElementById("dip");
	var books = document.getElementById("books");
	var kurs = document.getElementById("kurs");
	var varibls = document.getElementById("varibls");
	var Other = document.getElementById("Other");
	
	prog.style.top = 100+"px";
	soft.style.top = 140+"px";
	dip.style.top = 180+"px";
	books.style.top = 210+"px";
	kurs.style.top = 260+"px";
	varibls.style.top = 300+"px";
	Other.style.top = 340+"px";
	
}


function sliderreturn(){
	
	
	prog.style.top = 50+"px";
	soft.style.top = 90+"px";
	dip.style.top = 130+"px";
	books.style.top = 170+"px";
	kurs.style.top = 210+"px";
	varibls.style.top = 250+"px";
	Other.style.top = 290+"px";
	
}