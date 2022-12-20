// JavaScript Document 
  
var books = [[1,"H","The Blind Witch",10.00,"<img src = 'file:///D|/My Webs/Not-Just-Toys/Books/img/img1.jpg' class='responsive'/>" ], [2,"H","The Blue Witch",10.00,"<img src = 'file:///D|/My Webs/Not-Just-Toys/Books/img/img2.jpg' class='responsive'/>" ],[3,"H","The Blank Witch",10.00,"<img src = 'file:///D|/My Webs/Not-Just-Toys/Books/img/img3.jpg' class='responsive'/>" ],[4,"H","The Blinking Witch",10.00,"<img src = 'file:///D|/My Webs/Not-Just-Toys/Books/img/img4.jpg'class='responsive' />"],[5,"M","The Blind Bat",15.00 ,"<img src = 'file:///D|/My Webs/Not-Just-Toys/Books/img/img4.jpg' class='responsive'/>"], [6,"M","The Blue Bat",15.00,"<img src = 'file:///D|/My Webs/Not-Just-Toys/Books/img/img3.jpg' class='responsive'/>" ],[7,"M","The Blank Bat",15.00,"<img src = 'file:///D|/My Webs/Not-Just-Toys/Books/img/img2.jpg' class='responsive'/>"],[8,"M","The Blinking Bat",15.00,"<img src = 'file:///D|/My Webs/Not-Just-Toys/Books/img/img1.jpg' class='responsive'/>"],[9,"S","The Blind Devil",20.00,"<img src = 'file:///D|/My Webs/Not-Just-Toys/Books/img/img2.jpg' class='responsive'/>" ], [10,"S","The Blue Devil",20.00,"<img src = 'file:///D|/My Webs/Not-Just-Toys/Books/img/img3.jpg' class='responsive'/>" ],[11,"S","The Blank Devil",20.00,"<img src = 'file:///D|/My Webs/Not-Just-Toys/Books/img/img4.jpg' class='responsive'/>" ],[12,"S","The Blinking Devil",20.00,"<img src = 'file:///D|/My Webs/Not-Just-Toys/Books/img/img1.jpg' class='responsive'/>"],[13,"C","The Blind Mouse",25.00,"<img src = 'file:///D|/My Webs/Not-Just-Toys/Books/img/img3.jpg' class='responsive'/>" ], [14,"C","The Blue Mouse",25.00 ,"<img src = 'file:///D|/My Webs/Not-Just-Toys/Books/img/img1.jpg' class='responsive'/>"],[15,"C","The Blank Mouse",25.00 ,"<img src = 'file:///D|/My Webs/Not-Just-Toys/Books/img/img4.jpg' class='responsive'/>"],[16,"C","The Blinking Mouse",25.00,"<img src = 'file:///D|/My Webs/Not-Just-Toys/Books/img/img2.jpg' class='responsive'/>"]];

function bookSearch(bookType,bookGenre){ 
	// WORKS!!
	var field = [];
	y = 0;
  for (var x = 0; x <= 15; x++) {	  
    if (books[x][1] == bookType) {		
		changeColor(bookType); // change <div> color
		switch (y) {
			case 0:		
				field[0] = "Record Number =" + books[x][0] + "<br>";
				field[1] = "Genre = " + bookGenre + "<br>";					
				field[2] = "Title =" + books[x][2] + "<br>";		
				field[3] = "Cost = " + books[x][3] + "<br>";
				field[4] = books[x][4] + "<br>";
				document.getElementById("books1").innerHTML = field[0] + field[1] + field[2] + field[3] + field[4];			
				y++;
				break;
			case 1:
				field[0] = "Record Number =" + books[x][0] + "<br>";
				field[1] = "Genre = " + bookGenre + "<br>";		
				field[2] = "Title =" + books[x][2] + "<br>";		
				field[3] = "Cost = " + books[x][3] + "<br>";	
				field[4] = books[x][4] + "<br>";
				document.getElementById("books2").innerHTML = field[0] + field[1] + field[2] + field[3] + field[4];
				y++;
				break;	
			case 2:
				field[0] = "Record Number =" + books[x][0] + "<br>";
				field[1] = "Genre = " + bookGenre + "<br>";		
				field[2] = "Title =" + books[x][2] + "<br>";		
				field[3] = "Cost = " + books[x][3] + "<br>";	
				field[4] = books[x][4] + "<br>";
				document.getElementById("books3").innerHTML = field[0] + field[1] + field[2] + field[3] +field[4];
				y++;
				break;
			case 3:
				field[0] = "Record Number =" + books[x][0] + "<br>";
				field[1] = "Genre = " + bookGenre + "<br>";		
				field[2] = "Title =" + books[x][2] + "<br>";		
				field[3] = "Cost = " + books[x][3] + "<br>";	
				field[4] = books[x][4] + "<br>";
				document.getElementById("books4").innerHTML = field[0] + field[1] + field[2] + field[3] + field[4];
				y++;
				break;			
	 	}		
	}
  }
}

function changeColor(divColor){
	if (divColor == "H"){
		document.getElementById("books1").style.backgroundColor = "red";
		document.getElementById("books2").style.backgroundColor = "red";
		document.getElementById("books3").style.backgroundColor = "red";
		document.getElementById("books4").style.backgroundColor = "red";
	}
	else if (divColor == "M"){
		document.getElementById("books1").style.backgroundColor = "green";
		document.getElementById("books2").style.backgroundColor = "green";
		document.getElementById("books3").style.backgroundColor = "green";
		document.getElementById("books4").style.backgroundColor = "green";
	}
	else if (divColor == "S"){
		document.getElementById("books1").style.backgroundColor = "yellow";
		document.getElementById("books2").style.backgroundColor = "yellow";
		document.getElementById("books3").style.backgroundColor = "yellow";
		document.getElementById("books4").style.backgroundColor = "yellow";
	}
	else if (divColor == "C"){
		document.getElementById("books1").style.backgroundColor = "teal";
		document.getElementById("books2").style.backgroundColor = "teal";
		document.getElementById("books3").style.backgroundColor = "teal";
		document.getElementById("books4").style.backgroundColor = "teal";
	}
	
}