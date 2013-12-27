var tictactoe = (function(){
	var game = {};
	game.player = function(turn,symbol){
		var person = {};
		person.turn = turn;
		person.symbol=symbol;
		var string = "z";
		person.getString = function(){
			return string;
		};
		person.append = function(str){
			string = string + str;
		};
		return person;
	};
	
	game.currentSelected = null;
	game.currentPlayer = null;
	
	game.changeColor = function(x,y,z,className){
		$("#"+x).addClass(className);
		$("#"+y).addClass(className);
		$("#"+z).addClass(className);
	};
	
	game.init = function(){
		var playerArray= new Array();
		playerArray[0]= tictactoe.player(true,"O");
		playerArray[1]= tictactoe.player(false,"X");
		tictactoe.currentPlayer = playerArray[0];
		//$("div:not(.grid)").click(function(){$("#submit").attr("disabled", true);});
		$("#player1").removeClass('black').addClass('red');
		game.currentSelected = null;
		$(".ballonImage").hide();
		$("#submit").attr("disabled", true);
		$(".grid").each(function(){
			$(this).addClass("noValue");
			$(this).click(function(){
				if($(this).hasClass("noValue")){
					if($("#"+game.currentSelected).hasClass("noValue"))$("#"+game.currentSelected).text("");
					game.currentSelected = $(this).attr('id');
					$(this).text(game.currentPlayer.symbol);
					$("#submit").attr("disabled", false);
				}	
			});
		});
		return playerArray;
	};
	game.checkWin = function(player){
		var currentPlayerString = player.getString();
		alert(player.getString());
		switch(game.currentSelected){
			case "a":{
				if((/^(?=.*b)(?=.*c)(?=.*a).*$/).test(currentPlayerString)){
				alert("case a ");
					game.changeColor("a","b","c","vertical");
					return true;
				}
				if((/^(?=.*d)(?=.*g)(?=.*a).*$/).test(currentPlayerString)){
					game.changeColor("a","d","g","horizontal");
					return true;
				}
				if((/^(?=.*e)(?=.*i)(?=.*a).*$/).test(currentPlayerString)){
					game.changeColor("a","e","i","leftDiagonal");
					return true;
				}
				else return false;
			}
			case "b":{
				if((/^(?=.*a)(?=.*c)(?=.*b).*$/).test(currentPlayerString)){
					game.changeColor("a","b","c","vertical");
					return true;
				}
				if((/^(?=.*e)(?=.*h)(?=.*b).*$/).test(currentPlayerString)){
					game.changeColor("b","e","h","horizontal");
					return true;
				}
				else return false;
			}
			case "c":{
				if((/^(?=.*b)(?=.*a)(?=.*c).*$/).test(currentPlayerString)){
					game.changeColor("a","b","c","vertical");
					return true;
				}
				if((/^(?=.*e)(?=.*g)(?=.*c).*$/).test(currentPlayerString)){
					game.changeColor("e","g","c","rightDiagonal");
					return true;
				}
				if((/^(?=.*f)(?=.*i)(?=.*c).*$/).test(currentPlayerString)){
					game.changeColor("f","i","c","horizontal");
					return true;
				}
				else return false;
			}
			case "d":{
				if((/^(?=.*f)(?=.*e)(?=.*d).*$/).test(currentPlayerString)){
					game.changeColor("d","e","f","vertical");
					return true;
				}
				if((/^(?=.*a)(?=.*g)(?=.*d).*$/).test(currentPlayerString)){
					game.changeColor("a","d","g","horizontal");
					return true;
				}
				else return false;
			}
			case "e":{
				if((/^(?=.*a)(?=.*i)(?=.*e).*$/).test(currentPlayerString)){
					game.changeColor("e","a","i","leftDiagonal");
					return true;
				}
				if((/^(?=.*b)(?=.*h)(?=.*e).*$/).test(currentPlayerString)){
					game.changeColor("e","b","h","horizontal");
					return true;
				}
				if((/^(?=.*c)(?=.*g)(?=.*e).*$/).test(currentPlayerString)){
					game.changeColor("e","c","g","rightDiagonal");
					return true;
				}
				if((/^(?=.*f)(?=.*d)(?=.*e).*$/).test(currentPlayerString)){
					game.changeColor("e","f","d","vertical");
					return true;
				}
				else return false;
			}
			case "f":{
				if((/^(?=e)(?=.*d)(?=.*f).*$/).test(currentPlayerString)){
					game.changeColor("e","d","f","vertical");
					return true;
				}
				if((/^(?=.*c)(?=.*i)(?=.*f).*$/).test(currentPlayerString)){
					game.changeColor("f","c","i","horizontal");
					return true;
				}
				else return false;
			}
			case "g":{
				if((/^(?=.*a)(?=.*d)(?=.*g).*$/).test(currentPlayerString)){
					game.changeColor("g","a","d","horizontal");
					return true;
				}
				if((/^(?=.*h)(?=.*i)(?=.*g).*$/).test(currentPlayerString)){
					game.changeColor("g","i","h","vertical");
					return true;
				}
				if((/^(?=.*c)(?=.*e)(?=.*g).*$/).test(currentPlayerString)){
					game.changeColor("g","c","e","rightDiagonal");
					return true;
				}
				else return false;
			}
			case "h":{
				if((/^(?=.*e)(?=.*b)(?=.*h).*$/).test(currentPlayerString)){
					game.changeColor("h","e","b","horizontal");
					return true;
				}
				if((/^(?=.*g)(?=.*i)(?=.*h).*$/).test(currentPlayerString)){
					game.changeColor("h","g","i","vertical");
					return true;
				}
				else return false;
			}
			case "i":{
				if((/^(?=.*h)(?=.*g)(?=.*i).*$/).test(currentPlayerString)){
					game.changeColor("i","h","g","vertical");
					return true;
				}
				if((/^(?=.*f)(?=.*c)(?=.*i).*$/).test(currentPlayerString)){
					game.changeColor("i","f","c","horizontal");
					return true;
				}
				if((/^(?=.*a)(?=.*e)(?=.*i).*$/).test(currentPlayerString)){
					game.changeColor("i","a","e","leftDiagonal");
					return true;
				}
				else return false;
			}
		}
	};	
	game.animate = function(){
		$(".ballonImage").show();
		$(".ballonImage").animate({top:'0px'},1000);
	};
	return game;
}());

$(document).ready(function(){
	var playerArray = tictactoe.init();
	var player1 = playerArray[0];
	var player2 = playerArray[1];
	$("#submit").click(function(){
		$("#"+tictactoe.currentSelected).text(tictactoe.currentPlayer.symbol);
		$("#"+tictactoe.currentSelected).removeClass("noValue");
		if(player1.turn==true){
			player1.append(tictactoe.currentSelected);
			if(tictactoe.checkWin(player1)){
				$("#result").text("CONRATULATIONS PLAYER 1 WINS");
				tictactoe.animate();
		}	
			else {
				$("#player1").removeClass('red').addClass('black');
				$("#player2").removeClass('black').addClass('red');
				tictactoe.currentPlayer = player2;
				player1.turn=false;
				player2.turn=true;
			}
		}
		else{
			tictactoe.currentPlayer = player2;
			player2.append(tictactoe.currentSelected);
			if(tictactoe.checkWin(player2)){
				$("#result").text("CONRATULATIONS PLAYER 2 WINS");
				tictactoe.animate();
			}
			else {
				$("#player2").removeClass('red').addClass('black');
				$("#player1").removeClass('black').addClass('red');
				tictactoe.currentPlayer = player1;
				player2.turn=false;
				player1.turn=true;
			}
		}
		$("#submit").attr("disabled", true);
	});

});
