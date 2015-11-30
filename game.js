var name = 'Helvetica';
var hp = 50;

document.getElementById('start-button').onclick = function () {
    // hide the current panel and show the next one
    // we'll use this pattern A LOT
    document.getElementById('start').style.display = 'none';
    document.getElementById('name-entry').style.display = 'block';
}

document.getElementById('save-name-button').onclick = function() {
    name = document.getElementById('adventurer-name').value;
    document.getElementById('name-blank').innerHTML = name;

    document.getElementById('name-entry').style.display = 'none';
    document.getElementById('intro').style.display = 'block';
}

// begin click heels outcome

document.getElementById('click-heels-button').onclick = function() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('wolves').style.display = 'block';
}

document.getElementById('wolves-restart-button').onclick = function() {
    location.reload();
}

// end click heels outcome


document.getElementById('enter-cave-button').onclick = function() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('vending-machine').style.display = 'block';
}

document.getElementById('pay-vending-button').onclick = function() {
    payment = document.getElementById('vending-payment').value;

    var item = ""; //store the item name here during our conditional statements
    var hpGain = 0; //store the HP gain here during our conditional statements

    // create variables that point to these elements 
    // so we can call them more easily later
    var itemBlank = document.getElementById('vending-item-blank');
    var hpGainBlank = document.getElementById('vending-hp-blank');
    var currentHpBlank = document.getElementById('current-hp-blank');

    // Check if the payment is not null and greater than 0
    if (payment && payment > 0) {
        if (payment < 5){
            hpGain = 10;
            item = "Chocolate Chip Cookie";   
        }
        else if (payment >= 5 && payment < 15) {
            hpGain = 20;
            item = "Caesar Salad";
        }
        else if (payment >= 15) {
            hpGain = 50;
            item = "Footlong Sub";
        }
        hp = hp + hpGain;
        itemBlank.innerHTML = item;
        hpGainBlank.innerHTML = hpGain;
        currentHpBlank.innerHTML = hp;

        document.getElementById('vending-machine').style.display = 'none';
        document.getElementById('vending-outcome').style.display = 'block';
    }
    else {
        alert("You must put some money into the machine to continue.");
    }
}