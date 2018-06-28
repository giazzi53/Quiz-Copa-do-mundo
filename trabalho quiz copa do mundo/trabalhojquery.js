$(document).ready(function(){

	$("#img3").hover(function(){
		alert("Esse é o Estádio Centenário, palco da final da copa de 1930 no Uruguai");
	});

	$("#jules").hover(function(){
		alert("Taça Jules Rimet, uma taça especial que foi dada ao Brasil após conquistar seu tricampeonato");
	});

	$("#img2").hover(function(){
		alert("Romário, um dos principais jogadores da seleção brasileira em 1994");
	});

	$("#img1").hover(function(){
		alert("Imagem da seleção inglesa após a conquista do título mundial em 1966");
	});
	
	$(".button").click(function(){		
		alert("Você acertou " + cont + " questões e errou " + (10-cont) + " questões");
	});

	$("h1").css("text-align", "center");

	/*$("h2,h3").css("font-size","25px");*/

	$("#c1").hide();
	$("#p1").hide();
	$("#q1").hide();
	$("h2").css("text-align","center");
	$("#span1").mouseover(function(){

			$("#span1").fadeOut("slow");

			$("#c1")
				.delay("1000")
				.fadeIn("slow")
				.css("width","400px");

			$("#p1")
				.delay("2000")
				.fadeIn("slow")
				.text("Foi na Copa de 1950, no Brasil, na qual 199.854 pessoas foram ao Maracanã ver a final entre Brasil x Uruguai. O Brasil, embalado pela excelente campanha, pelo apoio da torcida, pela liderança e pelo elenco vitorioso, abriu o placar aos 47 minutos com gol de Friaça. O Uruguai, dezenove minutos depois, empatou a partida com Schiaffino. O empate daria o título do campeonato aos brasileiros. Entretanto, aos 79 minutos, Ghiggia virou o placar para os uruguaios, dando o segundo título ao Uruguai. Esta partida é considerada uma das maiores decepções da história do futebol brasileiro.")
				.css("font-size","20px")
				.css("margin-right","40px");

			$("#q1")
				.delay("3000")
				.fadeIn("slow")
				.css("width","300px");

	});

	$("#c2").hide();
	$("#p2").hide();
	$("#q2").hide();
	$("h2").css("text-align","center");
	$("#span2").click(function(){

		$("#span2").fadeOut("slow");		

		$("#c2")
				.delay("1000")
				.fadeIn("slow")
				.css("width","400px");


		$("#p2")
				.delay("2000")
				.fadeIn("slow")
				.text("A maior média de gols em uma copa do mundo ocorreu no ano de 1954 (Suíça) com a elevada média de 5,38 gols por partida (total de 140 gols). Já a Copa com menor número de gols foi a de 1990, na Itália, com apenas 115 gols e uma média de 2,21 por partida. Outro fato curioso, o jogador mais novo a marcar um gol em Copa do Mundo foi o brasileiro Pelé. Com apenas 17 anos e 239 dias, ele marcou um gol contra a seleção do País de Gales, em 1958.")
				.css("font-size","20px");

		$("#q2")
				.delay("3000")
				.fadeIn("slow")
				.css("width","300px");
	});

	$("#c3").hide();
	$("#p3").hide();
	$("#q3").hide();
	$("h2").css("text-align","center");
	$("#span3").dblclick(function(){

		$("#span3").fadeOut("slow");		

		$("#c3")
				.delay("1000")
				.fadeIn("slow")
				.css("width","400px");


		$("#p3")
				.delay("2000")
				.fadeIn("slow")
				.text("Apenas oito países foram campeões mundiais até hoje. O Brasil, a única seleção a ter jogado em todas as competições, é o maior campeão com cinco títulos, seguida pela Itália e Alemanha, atual campeã, com quatro troféus cada um. A equipe que venceu a primeira edição, o Uruguai, conquistou duas vezes, como a Argentina, outro país sul-americano. Finalmente, França, Inglaterra e a Espanha, ganharam uma Copa do Mundo cada um. O Uruguai (1930), a Itália (1934), a Inglaterra (1966), a Alemanha (1974), a Argentina (1978) e a França (1998) conseguiram vencer ao menos uma edição em casa. Enquanto, os únicos países a ganharem fora de seus continentes são o Brasil na Europa em 1958 e na Ásia em 2002, a Espanha na África em 2010 e a Alemanha na América do Sul em 2014.")
				.css("font-size","20px");

		$("#q3")
				.delay("3000")
				.fadeIn("slow")
				.css("width","250px");

	});

});	
