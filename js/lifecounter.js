var YourCounter = 20;
var Mode = "0"; //0 = 1v1, 1 = Commander

function YourIncrease() {
  YourCounter++;
  document.getElementById('YourCount').innerHTML = YourCounter;
  saveLife(); 
}

function YourIncreaseFive() {
    YourCounter += 5;
    document.getElementById('YourCount').innerHTML = YourCounter;
    saveLife(); 
  }

function YourDecrease() {
  YourCounter--;
  document.getElementById('YourCount').innerHTML = YourCounter;
  saveLife();
}

function YourDecreaseFive() {
    YourCounter -= 5;
    document.getElementById('YourCount').innerHTML = YourCounter;
    saveLife();
  }

function Commander() {
    if (true) { //confirm("Reset life totals to 20?")) {
      YourCounter = 40;
      document.getElementById('YourCount').innerHTML = YourCounter;
    }
  }

function Reset() {
  if (true) { //confirm("Reset life totals to 20?")) {
    YourCounter = 20;
    document.getElementById('YourCount').innerHTML = YourCounter;
  }
}


function prepareOnClicks() {
    document.getElementById('YourUp').onclick = function() { YourIncrease(); };
    document.getElementById('YourDown').onclick = function() { YourDecrease(); };
    document.getElementById('YourUpFive').onclick = function() { YourIncreaseFive(); };
    document.getElementById('YourDownFive').onclick = function() { YourDecreaseFive(); };
    document.getElementById('reset').onclick = function() { Reset(); };
    document.getElementById('commander').onclick = function() { Commander(); };
}

window.onload = function() {
  prepareOnClicks();
  var elem = document.querySelector('#YourDown');
  var draggie = new Draggabilly( elem, {
    axis: 'y'
  });
  document.getElementById('YourCount').innerHTML = YourCounter;
  document.getElementById('EnemyCount').innerHTML = EnemyCounter;
};