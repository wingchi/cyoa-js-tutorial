// your stats

var name = 'Helvetica';
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
    name = document.getElementById('adventurer-name').value;
    document.getElementById('name-blank').innerHTML = name;
    document.getElementById('stat-name-blank').innerHTML = name;

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
    var statHpBlank = document.getElementById('stat-hp-blank');

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
        statHpBlank.innerHTML = hp;

        document.getElementById('vending-machine').style.display = 'none';
        document.getElementById('vending-outcome').style.display = 'block';
    }
    else {
        alert("You must put some money into the machine to continue.");
    }
}

document.getElementById('explore-more-button').onclick = function() {
    document.getElementById('vending-outcome').style.display = 'none';
    document.getElementById('firefox').style.display = 'block';
    setTimeout(
        function() {
            document.getElementById('firefox-surprise').style.display = 'block';
        }, 3000);
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
    else if (hp < 0) {
        document.getElementById('fight').style.display = 'none';
        document.getElementById('defeat').style.display = 'block';   
    }
}

document.getElementById('laptop-attack').onclick = function () {
    
    // calculate the damage
    var ffAttack = getRandomInt(ffAttackMin, ffAttackMax);
    hp = hp - ffAttack;
    var advAttack = laptopAttack + attackBoost;
    ffHp = ffHp - advAttack;
    attackBoost = 0; // reset the attack boost

    // update the stats bars
    document.getElementById('stat-hp-blank').innerHTML = hp;
    document.getElementById('firefox-hp-blank').innerHTML = ffHp;

    // update attack messages
    advAttackMessage = "These modern laptops sure are tough. You do " + advAttack + " damage to the beast.";
    document.getElementById('adv-attack-message').innerHTML = advAttackMessage;

    ffAttackMessage = "The Fire Fox bites back and does " + ffAttack + " damage to you.";
    document.getElementById('ff-attack-message').innerHTML = ffAttackMessage;

    checkEnding();
}

document.getElementById('phone-attack').onclick = function () {
    
    if (!phoneUsed) {
        document.getElementById('phone-attack').classList.add("disabled");
        phoneUsed = true;

        // calculate the damage
        var ffAttack = getRandomInt(ffAttackMin, ffAttackMax);
        hp = hp - ffAttack;
        var advAttack = phoneAttack + attackBoost;
        ffHp = ffHp - advAttack;
        attackBoost = 0; // reset the attack boost

        // update the stats bars
        document.getElementById('stat-hp-blank').innerHTML = hp;
        document.getElementById('firefox-hp-blank').innerHTML = ffHp;

        // update attack messages
        advAttackMessage = "Did you know phone batteries will explode under high heat?<br>You sacrifice your phone and do " + advAttack + " damage!";
        document.getElementById('adv-attack-message').innerHTML = advAttackMessage;

        ffAttackMessage = "The Fire Fox lashes out and does " + ffAttack + " damage to you.";
        document.getElementById('ff-attack-message').innerHTML = ffAttackMessage;
    }
    else {
        alert ("Your phone already exploded!");
    }

    checkEnding();
}

document.getElementById('punch-attack').onclick = function () {

    // calculate the damage + recoil
    var recoilDamage = 10; //damage because you touched its fiery skin
    var ffAttack = getRandomInt(ffAttackMin, ffAttackMax);
    hp = hp - (ffAttack + recoilDamage);
    var advAttack = punchAttack + attackBoost;
    ffHp = ffHp - advAttack;
    attackBoost = 0; // reset the attack boost

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
    
    // generate a random attack boost from 10 to 20
    attackBoost = getRandomInt(10,20);

    // update attack messages
    advAttackMessage = "You insult the Fire Fox's mother. That's pretty low... Your next attack will do an extra " + attackBoost + " damage.";
    document.getElementById('adv-attack-message').innerHTML = advAttackMessage;

    ffAttackMessage = "The Fire Fox is so upset at your remarks it cries silently.";
    document.getElementById('ff-attack-message').innerHTML = ffAttackMessage;

    checkEnding();
}

// defeat scenario

document.getElementById('firefox-restart-button').onclick = function() {
    location.reload();
}

// victory scenario

document.getElementById('victory-replay-button').onclick = function() {
    location.reload();
}