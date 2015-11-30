// your stats

// we probably need a variable for name storage
var hp = 50;
var attackBoost = 0;
var laptopAttack = 20;
var phoneAttack = 50;
var punchAttack = 10;
var phoneUsed = false;

// firefox stats

var ffHp = 100;
var ffAttackMin = 10;
var ffAttackMax = 20;


// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

document.getElementById('start-button').onclick = function () {
    // hide the current panel and show the next one
    // we'll use this pattern A LOT
    document.getElementById('start').style.display = 'none';
    document.getElementById('name-entry').style.display = 'block';
}

document.getElementById('save-name-button').onclick = function() {
    // try using element.value
    
    // update the spans where name blanks exist

    // hide #name entry and show #intro
}

// begin click heels outcome

document.getElementById('click-heels-button').onclick = function() {
    // hide #intro show #wolves
}

document.getElementById('wolves-restart-button').onclick = function() {
    // location.reload();
}

// end click heels outcome


document.getElementById('enter-cave-button').onclick = function() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('vending-machine').style.display = 'block';
}

document.getElementById('pay-vending-button').onclick = function() {
    // get the value of #vending-payment

    // check if the payment is not null and greater than 0
    // then assign hp gains and item received
    // decide which item is given based on how much money is inserted
}

document.getElementById('explore-more-button').onclick = function() {
    document.getElementById('vending-outcome').style.display = 'none';
    document.getElementById('firefox').style.display = 'block';
    // surprise the adventurer with the #firefox-surprise div 
    // after some amount of time
}

// runaway outcome
document.getElementById('run-choice-button').onclick = function() {
    document.getElementById('firefox').style.display = 'none';
    document.getElementById('runaway').style.display = 'block';
    hp = hp - 10; // drop the adventurers HP by 10 because they tried to run away
    document.getElementById('stat-hp-blank').innerHTML = hp;
}

document.getElementById('fight-choice-button').onclick = function () {
    document.getElementById('firefox').style.display = 'none';
    document.getElementById('fight').style.display = 'block';
}

document.getElementById('runaway-fight-button').onclick = function () {
    document.getElementById('runaway').style.display = 'none';
    document.getElementById('fight').style.display = 'block';
}

// function to check if hp of adventurer or fire fox fall below 0
// end the game if either falls below 0
// for a tie, the adventurer wins
checkEnding = function () {
    if (ffHp < 0) {
        document.getElementById('fight').style.display = 'none';
        document.getElementById('victory').style.display = 'block';
    }
    // what about if the adventurer's hp falls below 0?
}

document.getElementById('laptop-attack').onclick = function () {
    
    // calculate the damage for both parties
    // don't forget to reset the attack boost

    // update the stats bars

    // update attack messages

    // check the ending after every attack
}

document.getElementById('phone-attack').onclick = function () {
    
    // check if the phone has already exploded
    // if it's still available
    // calculate the damage and update the stats and messages just like before

    // check the ending after every attack
}

document.getElementById('punch-attack').onclick = function () {

    // punching should have recoil damage
    // because touching the fire fox
    // will burn the adventurer
    // make sure the adventurer knows that recoil damage has been applied
    // after every punch

    // calculate the damage + recoil
    var recoilDamage = 10; 
    
    // update the stats bars
    document.getElementById('stat-hp-blank').innerHTML = hp;
    document.getElementById('firefox-hp-blank').innerHTML = ffHp;

    // update attack messages
    advAttackMessage = "You punch the Fire Fox and do " + advAttack + " damage.<br>Too bad it's super hot. You take " + recoilDamage + " damage for touching it. <i class=\"fa fa-frown-o\"></i>";
    document.getElementById('adv-attack-message').innerHTML = advAttackMessage;

    ffAttackMessage = "The Fire Fox claws you and does " + ffAttack + " damage.";
    document.getElementById('ff-attack-message').innerHTML = ffAttackMessage;

    checkEnding();
}

document.getElementById('insult-attack').onclick = function () {
    
    // insulting should make attack boost go up and make the fire fox not attack this turn

    // generate a random attack boost from 10 to 20 and assign it to attack boost

    // update attack messages
}

// defeat scenario

document.getElementById('firefox-restart-button').onclick = function() {
    location.reload();
}

// victory scenario

document.getElementById('victory-replay-button').onclick = function() {
    location.reload();
}