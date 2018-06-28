function botao(){
	cont = 0;
	resp = document.getElementById("formulario");

	/*questao 1*/ 
	if (resp.questao1.value == 'B'){
		cont += 1;
		document.getElementsByClassName('correto')[0].style.display = 'inline';
	}
	else{
		document.getElementsByClassName('errado')[0].style.display = 'inline';
		document.getElementsByClassName('verde')[0].style.display = 'inline';
	}

	/*questao 2*/
	if(resp.questao2.value == 'D'){
		cont += 1;
		document.getElementsByClassName('correto')[1].style.display = 'inline';
	}
	else{
		document.getElementsByClassName('errado')[1].style.display = 'inline';
		document.getElementsByClassName('verde')[1].style.display = 'inline';
	}

	/*questao 3*/
	if(resp.questao3.value == 'C'){
		cont += 1;
		document.getElementsByClassName('correto')[2].style.display = 'inline';
	}
	else{
		document.getElementsByClassName('errado')[2].style.display = 'inline';
		document.getElementsByClassName('verde')[2].style.display = 'inline';
	}

	/*questao 4*/
	if(resp.questao4.value == 'A'){
		cont += 1;
		document.getElementsByClassName('correto4')[0].style.display = 'inline';
	}
	else{
		document.getElementsByClassName('errado4')[0].style.display = 'inline';
		document.getElementsByClassName('verde4')[0].style.display = 'inline';
	}

	/*questao 5*/
	if(resp.questao5.value == 'B'){
		cont += 1;
		document.getElementsByClassName('correto4')[1].style.display = 'inline';
	}
	else{
		document.getElementsByClassName('errado4')[1].style.display = 'inline';
		document.getElementsByClassName('verde4')[1].style.display = 'inline';
	}

	/*questao 6*/
	if(resp.questao6.value == 'D'){
		cont += 1;
		document.getElementsByClassName('correto4')[2].style.display = 'inline';
	}
	else{
		document.getElementsByClassName('errado4')[2].style.display = 'inline';
		document.getElementsByClassName('verde4')[2].style.display = 'inline';
	}

	/*questao 7*/
	if(resp.questao7.value == 'B'){
		cont += 1;
		document.getElementsByClassName('correto4')[3].style.display = 'inline';
	}
	else{
		document.getElementsByClassName('errado4')[3].style.display = 'inline';
		document.getElementsByClassName('verde4')[3].style.display = 'inline';
	}

	/*questao 8*/
	if(resp.questao8.value == 'B'){
		cont += 1;
		document.getElementsByClassName('correto4')[4].style.display = 'inline';
	}
	else{
		document.getElementsByClassName('errado4')[4].style.display = 'inline';
		document.getElementsByClassName('verde4')[4].style.display = 'inline';
	}

	/*questao 9*/
	if(resp.questao9.value == 'A'){
		cont += 1;
		document.getElementsByClassName('correto4')[5].style.display = 'inline';
	}
	else{
		document.getElementsByClassName('errado4')[5].style.display = 'inline';
		document.getElementsByClassName('verde4')[5].style.display = 'inline';
	}

	/*questao 10*/
	if(resp.questao10.value == 'B'){
		cont += 1;
		document.getElementsByClassName('correto4')[6].style.display = 'inline';
	}
	else{
		document.getElementsByClassName('errado4')[6].style.display = 'inline';
		document.getElementsByClassName('verde4')[6].style.display = 'inline';
	}


	/*mensagem final*/
	if (cont>=8){
		alert("Parabéns, você sabe muito sobre Copas do Mundo");
	}
	else if(cont >= 4 && cont < 8){
		alert("Boa, você sabe alguma coisa sobre Copas do Mundo");
	}
	else{
		alert("Copa do Mundo não é o seu forte, que tal começar a assistir Cricket?");
	}

}






   