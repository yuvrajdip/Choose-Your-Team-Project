
// declaring an array named players to count how many players selected
let players = [];


// the below if else part is done for Selected Players "counter" showing part
function showing_selected_players_count(){
    if( document.getElementById("selected-players-count").children.length ==1 ){
        
        // for showing the selected players counting in webpage
        let p = document.createElement('p');
        p.innerText = players.length;
        p.classList.add("text-2xl","mt-2","ml-3");

        // console.log( "Player length ", players.length );
        document.getElementById("selected-players-count").appendChild(p);
    }
    else if( document.getElementById("selected-players-count").children.length == 2 ){
    
        // for showing the selected players counting in webpage
        let pre = parseInt( document.getElementById("selected-players-count").lastChild.innerText );

        // console.log( "pre : ",pre , " players.length : ",players.length);
        document.getElementById("selected-players-count").lastChild.remove();

        let p = document.createElement('p');
        p.classList.add("text-2xl", "mt-2","ml-3");

        p.innerText = players.length;
        document.getElementById("selected-players-count").appendChild(p);
    }
}





// "select" button functionality
function select(element){
    let name = element.parentNode.parentNode.children[0].innerText ;
    
    let ol = document.createElement( "ol" );
    let li = document.createElement( "li" );

    // if the selected players are more than 5 than show an alert
    // check_players_number();

    if( players.length ==5 ){
        alert("You can't choose more than 5 players!");
        return;
    }

    // disabling the buttons after clicked
    element.setAttribute('disabled',true);

    players.push(name);

    // the below if else part is done for Selected Players "counter" showing part
    showing_selected_players_count();

    
    // for showing the selected players names
    li.innerText = players.length.toString(10) + ". " +  name ;

    // adding style to the selected players names
    li.classList.add("border-2", "border-cyan-400", "relative", "m-2" ,"px-5" ,"py-2.5" ,"transition-all" ,"ease-in" , "bg-white", "dark:bg-gray-900" ,"rounded" ,"group-hover:bg-opacity-1" );

    ol.appendChild( li );

    document.getElementById('select-five-section').appendChild(ol);

    // this below for loop is created to delete all the classes from Select button and add another type of style for the DeSelect button
    let all_classes = element.classList;
    
    for( let cls of all_classes){
        element.classList.remove(cls);
    }

    element.classList.add("after-selecting-player-button");
}



// "Calculate" button functionality
document.getElementById('calculate-button').addEventListener('click',function(){

    let total_player_expense =  players.length* document.getElementById('per-player').value ;

    let p = document.createElement('p');
    p.innerText = total_player_expense;
    document.getElementById('player-expense').appendChild(p);
});


// "total-calculation" button functionality
document.getElementById('total-calculation').addEventListener('click',function(){
    let total_player_expense = document.getElementById('player-expense').children[2].innerText;
    // console.log(total_player_expense);

    let manager_expense = document.getElementById('manager').value;
    // console.log( manager_expense);

    let coach_expense = document.getElementById('coach').value;
    
    let p = document.createElement('p');
    p.innerText = parseFloat(total_player_expense) + parseFloat(manager_expense) + parseFloat(coach_expense) ;
    document.getElementById('total').appendChild(p);
});