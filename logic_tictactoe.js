   
//shortcut to get elements from id  
var el = function(element){
    return document.getElementById(element);
}
var check1 = el("check_1"),//check button for player 1
    check2 = el("check_2"),//check button for player 2
    p1 = "",//player1
    p2 = "",//player2
    box = document.querySelectorAll(".area"),//nodelist
    flag = 1,
    new_game = el("new_game"),
   
    b=["","","","","","","","",""];
    console.log(box);
  


function getbox(){
    return document.getElementById(b).innerText;
}

//get the name of player1
function getplayer1(){
    return el("Player_1").value;
};

//get the name of player2
function getplayer2(){
    return el("Player_2").value;
};

check1.addEventListener('click',function(){
    p1 = getplayer1();
    if(p1==""){
        p1 = "Player_1";
    }
    alert("Player1 is : "+p1);
});

check2.addEventListener('click',function(){
    p2 = getplayer2();
    if(p2==""){
        p2 = "Player_2";
    }
    alert("Player2 is : "+p2);
});

//for determing flag is odd or even
function evenorodd(num){
    if(num%2 == 0){
        return "even";
    }
    else{
        return "odd";
    }
};

function check_empty(num){
    var c = el(num).innerText;
    //console.log(c);
    if(c == ""){
        return "empty";
    }
    else if(c!= ""){
        return "no";
    }
};

function reset(){
    for(var i =0; i<=8;i++){
         el(i).innerText = "";
    }
    flag = 1;
    el("Player_1").value = "";
    el("Player_2").value = "";
};

function check(x,y,z){
    return(b[x]!= "" &&b[y]!= "" &&b[z]!="" &&b[x]==b[y] &&b[y]==b[z]);
};

function winner(){
    for(var i =0; i<=8;i++){
        b[i] = el(i).innerText;
    }
    
    p1 = getplayer1();
    if(p1==""){
        p1 = "Player_1";
    }
    p2 = getplayer2();
    if(p2==""){
        p2 = "Player_2";
    }

    for(var i=0;i<9;i+=3){
        if(check(i,i+1,i+2)){
            if(b[i]=="X"){
                alert(p1 + " Wins!!");
                  
            }
            else if(b[i] == "O"){
                alert(p2+" Wins!!")
            }
            reset();
        }
    }
    for(var i=0;i<9;i++){
        if(check(i,i+3,i+6)){
            if(b[i]=="X"){
                alert(p1+" Wins!!");  
            }
            else if(b[i] == "O"){
                alert(p2+" Wins!!")
            }
            reset();
        }
    }
    
        if(check(0,4,8)){
            if(b[0]=="X"){
                alert(p1+" Wins!!");  
            }
            else if(b[0] == "O"){
                alert(p2+" Wins!!")
            }
            reset();
        }
    
    
        if(check(2,4,6)){
            if(b[2]=="X"){
                alert(p1+" Wins!!");  
            }
            else if(b[2] == "O"){
                alert(p2+" Wins!!")
            }
            reset();
        }
    

};

function check_board(num){
    if(num>9)
    {
        alert("Its a DRAW!!");
        reset();
    }
    
}
//when the box is clicked
for(var i =0; i<box.length ; i++){
    box[i].addEventListener('click',function(){
        var d = this.id;
        
        //if box is empty X or O gets printed
        if(check_empty(d) == "empty"){
            //player1 gets x and every odd turn is of player1
            if(evenorodd(flag) == "odd"){
                //var d = this.id;
                el(d).innerText = "X";
                flag += 1;
            }
            //player2 gets o and every even turn is of player2
            else if(evenorodd(flag) == "even"){
                //var d = this.id;
                el(d).innerText = "O";
                flag += 1;
            }
        }
        //if box is not empty it gives message
        else if(check_empty(d) == "no"){
            alert("The box is already clicked!!");
        }
        setTimeout(check_board,300,flag);
        if(flag>5){
            setTimeout(winner,300);
        }
    });
    
};

new_game.addEventListener('click',reset);
