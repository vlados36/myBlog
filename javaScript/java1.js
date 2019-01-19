document.getElementById('kb').onmouseover = sliderBottom;
document.getElementById('kb').onmouseout = sliderreturn;

document.getElementById('prog').onmouseover = sliderBottom1;
document.getElementById('prog').onmouseout = sliderreturn1;

document.getElementById('soft').onmouseover = sliderBottom2;
document.getElementById('soft').onmouseout = sliderreturn2;

document.getElementById('dip').onmouseover = sliderBottom3;
document.getElementById('dip').onmouseout = sliderreturn3;

document.getElementById('books').onmouseover = sliderBottom4;
document.getElementById('books').onmouseout = sliderreturn4;



	var prog = document.getElementById("prog");
	var soft = document.getElementById("soft");
	var dip = document.getElementById("dip");
	var books = document.getElementById("books");
	var kurs = document.getElementById("kurs");
	var varibls = document.getElementById("varibls");
	var Other = document.getElementById("Other");



function sliderBottom (){
	
	
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





function sliderBottom1 (){
	
	
	
	soft.style.top = 140+"px";
	dip.style.top = 180+"px";
	books.style.top = 210+"px";
	kurs.style.top = 260+"px";
	varibls.style.top = 300+"px";
	Other.style.top = 340+"px";
	
}


function sliderreturn1(){
	
	
	
	soft.style.top = 90+"px";
	dip.style.top = 130+"px";
	books.style.top = 170+"px";
	kurs.style.top = 210+"px";
	varibls.style.top = 250+"px";
	Other.style.top = 290+"px";
	
}



function sliderBottom2 (){
	
	dip.style.top = 180+"px";
	books.style.top = 210+"px";
	kurs.style.top = 260+"px";
	varibls.style.top = 300+"px";
	Other.style.top = 340+"px";
	
}


function sliderreturn2(){
	
	dip.style.top = 130+"px";
	books.style.top = 170+"px";
	kurs.style.top = 210+"px";
	varibls.style.top = 250+"px";
	Other.style.top = 290+"px";
	
}



function sliderBottom3 (){
	
	books.style.top = 210+"px";
	kurs.style.top = 260+"px";
	varibls.style.top = 300+"px";
	Other.style.top = 340+"px";
	
}


function sliderreturn3(){
	
	books.style.top = 170+"px";
	kurs.style.top = 210+"px";
	varibls.style.top = 250+"px";
	Other.style.top = 290+"px";
	
}


function sliderBottom4 (){
	
	kurs.style.top = 260+"px";
	varibls.style.top = 300+"px";
	Other.style.top = 340+"px";
	
}


function sliderreturn4(){
	
	kurs.style.top = 210+"px";
	varibls.style.top = 250+"px";
	Other.style.top = 290+"px";
	
}

