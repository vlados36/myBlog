document.getElementById('kb').onclick = sliderBottom;



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