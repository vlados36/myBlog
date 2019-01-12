
/*
//переменные
var dni = "365";
var planet = "Земля";
var people = "7 млрд";
var name = "Солнца";
var text = " Мы живем на планете"+" " + planet +" " + "она делает один оборот вокруг " + name + " " + "за"+" " + dni +" " +  "дней."+ " " + "население"+ " " + people;
console.log(text);


//Массивы

// 1 вариант создания массива
var days = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
var myArrya = [6,"золото",planet];


// 2 вариант создания массива

var bong = new Array("золото", 36, "груша");

// массив с пустыми элементами

var bong1 = new Array(10);

console.log(bong[2]);

var strana = ["Россия","Англия","Греция","Испания","Германия"];

var naselen = ["10k","5k","8k","3k","6k"];

document.write ("<p>" +strana[0] +" -"+ naselen[0] +"</p>");
document.write ("<p>" +strana[1] +" -"+ naselen[1] +"</p>");
document.write ("<p>"+strana[2] +" -"+ naselen[2] +"</p>");
document.write ("<p>"+strana[3] +" -"+ naselen[3] +"</p>");
document.write ("<p>"+strana[4] +" -"+ naselen[4] +"</p>");

// length -количество элементов
var count = strana.length;

// push - метод добавления элементов в конец массива

strana.push("Индия");

var count = strana.length;

console.log(strana[5]);


// unshift - метод добавления элементов в начало массива

strana.unshift("Индия");

var count = strana.length;

console.log(strana[5]);


// shift - метод  удаления элементов из начало массива
strana.shift();
var count = strana.length;
console.log(strana[5]);

// pop - метод удаления элементов из конца массива

strana.pop();
var count = strana.length;
console.log(strana[4]);

//домашние задание

var fruts =["апельсин","банан","груша"];

document.write(fruts.length);

fruts.push("яблоко","ананас");
fruts.unshift("грейпфрут")

document.write("<p>" + fruts.length +"</p>");

fruts.pop();
fruts.shift();

document.write("<p>" + fruts.length +"</p>");

document.write("<p>" + fruts +"</p>");

document.write("<p>" + fruts[1] +"</p>");


// splise - удаление элементов с помощью метода splice

var students =["Ваня","Миша","Сергей","Алекс","Артем","Вова"];

students.splice(3,2);

document.write("<p>"+students +"</p>");

// splise - добавление элементов с помощью метода splice

students.splice(0,0,"Соня","Алина");

document.write(students);


students.splice(0,2,"pfpfpf","dldlldld");

document.write("<p>"+students + "</p>");


// домашние задание

var fruits =["арбуз","дыня","вишня","лимон"];
var fr = fruits.length - 2;
 fruits.splice(fr,2,"ЯБЛОКО","СЛИВА ");
 document.write(fruits);
 
 // метод reverse
 

 

// метод sort -сортирует массив
document.write("<p>"+ fruits.sort() + "</p>");

// метод join -возвращает массив с разделителем который указан
var fruits =["арбуз","дыня","вишня","лимон"];
document.write("<p>"+ fruits.join("-") + "</p>");

// concat - метод канкатенации (соеденяет массивы в 1)

var fruits =["арбуз","дыня","вишня","лимон"];
var fruits2 =["арбуз","дыня","вишня","лимон"];

var fruits3 =fruits.concat(fruits2);

document.write(fruits3.join("*"));


// slice - метод выреза элементов из массива


document.write("<p>"+"счастливые фрукты:" + fruits3.slice(1,3) + "</p>");

document.write(fruits3);

//многомерные массивы
var fruits =["арбуз","дыня","вишня","лимон"];
var fruits2 =["арбуз","дыня","вишня","лимон"];
var students =["Ваня","Миша","Сергей","Алекс","Артем","Вова"];

var allFruits = [fruits,fruits2,students];
document.write("<p>" + allFruits[1] [1] +"</p>" );


// условные операторы if, else
var students =["Ваня","Миша","Сергей","Алекс","Артем","Вова"];

var students1=students.length;

if(students1 >= 3)
{
	document.write("Массив большой")
}
else{
	document.write("В массе меньше 3 элементов")
}


// множественные условия


var students5 = ["Дмитрий", "Алексей", "Петр", "Виктор"];


if (students5.length ==4  &&  students5[students5.length-1] == "Виктор")
{
	document.write("этот массив мне подходит");
}
else{
	document.write("этот массив мне НЕ подходит");
}


// ЦИКЛ while


var students =["Ваня","Миша","Сергей","Алекс","Артем","Вова"];


var i = students.length -1

while(i >= 0)
{
	document.write("<p>" + students[i] + "</p>");
	i--;
}


students10 = ['Абаканов Сергей', 'Алалина Алина', 'Гагарин Матвей', 'Хантухова Лейла', 'Викторов Сергей',  'Масалкин Андрей', 'Петравкин Алексей', 'Московин Павел', 'Данилов Станислав'];



var a = students10.length - 2;

var b = students10.length - 7;


while( b < a)
{
	document.write("<p>" + students10[b] + "</p>");
	b++;
}


// ЦИКЛ for



var a = students10.length - 2;


for(var b = students10.length - 7;   b<a; b++)
{
	document.write("<p>" + students10[b] + "</p>");

}

// домашка


for(var i = 1; i <= 7; i++ )
{
	document.write( "<p>" + "Квадрат "+ i + "="+ i * i + "</p>");
}
*/

//методы объектов window
// window. open() -открывает новое окно
// prompt-выодит диалоговое окно
//confirm-диалоговое окно с вариантами "да" "нет" (ложб или истина)

//alert("ыыыыыыыыыыы"); alert-выодит сообщение в всплывающем окне 

//var age = prompt("сколько лет сука?","возраст блеать");

//alert(age);

//var age1 = confirm("сосать бушь?");

//if(age1)
//{ alert("ну ты вафля");
//}
//else
//{
	//alert("Красава бро");
//}


// функции

/*
function kub ()
{   
    var kubik = prompt ("Введите число для преобразования его в куб этого числа");
	alert("Куб числа  " + kubik +"="+ kubik*kubik*kubik);
	return kub;
}

var total = kub();
*/

// возврат функции
/*
function myFun (nam)
{
	var namber = nam * nam * nam;
	return namber;
}


myFun(222);
*/

/*
function fio()
{
	var name = prompt("Введите имя" );
	var surname = prompt("Введите фамилию" );
	var famil = prompt("Введите отчество" );
	var fi = name + " " + surname + " " + famil;
	return fi;
}

var fiom = fio();
alert(fiom);

/*





/*
function stroka(stroka1)
{
  var kol =stroka1.length;
  return kol;  
}
var slovo = prompt("Введите любое слово");

 var itog =  stroka(slovo);

alert(itog); 

*/


// МЕТОД toLowerCase and toApperCase  переводят строку в верхний или нижний регистр


/*
var answer = prompt( "что летает по небу?");

var answer1 = answer.toLowerCase();

var answer2 = "самолет"

if(answer2 == answer1){
	alert("Ответ верный");
}
else {
	alert("Ответ не верный");
}

*/

// методы indexOf() and LastIndexof() исчет совпадения 


/*
var Site = "http://ruseller.com";
function ind (my){
	if(my.indexOf( "http://")>=0)
	{
		alert("есть");
	}
	else{
		alert("нет");
	}
}

ind(Site);
*/
/*
var myStr = "Хороший день";

var day= myStr.slice(8);

alert(day);

*/


//   методы  charAt() и charCodeAt(). позволяет узнать символ по индексу и пзволяет узнать код символа

var students = ["Илья","Greg","Алина"];

for(var i = 0; i<students.length; i++){
	
			for(var j = 0; j < students[i].length; j++ ){
				if(students[i].charCodeAt(j) < 1040 || (students[i].charCodeAt(j)) > 1113)
				{
				document.write("Введен текст английскими буквами имено " + students[i].charAt(j));
				}
			}
}
	






































