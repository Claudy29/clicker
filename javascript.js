adblockEnabled=false;

var score = 0;
var buy = 0;
var price = 50;
var lvl = 0;

function click2 (){
	score -= score;
	document.getElementById("balance").innerHTML = "Баланс - " + score;
}

function click1 (){
    if(score >= price){
		score -=price;
		buy++;
		lvl++;
		price *= 2;
	}else{
		alert("У вас недостаточно денег!");
	}
	document.getElementById("lvl").innerHTML = "Ваш уровень прокачки:" + lvl;
	document.getElementById("balance").innerHTML = "Баланс - " + score;
    document.getElementById("buttom2").innerHTML = "Улучшить! <br/> Цена:" + price;
}



function click5 (){
	if(buy == 0){
		score++;
	}
	
	if(buy == 3){
		score +=3.5;
	}
	
	if(buy == 4){
		score +=3;
	}
	
	if(buy == 5){
		score +=4;
	}
	
	if(buy == 2){
		score +=2;
	}
	
	if(buy == 1){
		score +=1.5;
	}
	
	document.getElementById("balance").innerHTML = "Баланс - " + score;
}

alert ("Добро пожаловать в Кликкер!");

