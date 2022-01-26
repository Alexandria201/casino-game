{
  document.getElementById('bet-form').style.display = 'block';
  document.getElementById('bet-result').style.display = 'none';
  document.getElementById('broke').style.display = 'none';

}

function doARoll() {
  rollDice();
  resultBlock();
  DOMonRoll();
  calcWinLoss();
};
const DATA = {
  balance: 500,
  bet: 0,
  firstDice: 0,
  secondDice: 0,
  total: 0,
  win: [7, 11],
};


  function rollDice() {
      DATA.firstDice = getDice();
      DATA.secondDice = getDice();
      DATA.total = DATA.firstDice + DATA.secondDice;
      DATA.bet = document.getElementById('bet').value;
};

  function DOMonRoll() {
    document.getElementById('dice1result').value = DATA.firstDice;
    document.getElementById('dice2result').value = DATA.secondDice;

};

  function calcWinLoss() {
    if (DATA.balance <= 0) brokeBlock();
    if (![7, 11].includes(DATA.total)) {
      document.getElementById('winLose').value = `You lost: $${DATA['bet']}.`
      DATA.balance = DATA.balance - DATA.bet;
    } else {
      document.getElementById('winLose').value = `You won: $${DATA['bet'] * 2}`
      DATA.balance += DATA.bet * 2;
    }
  }

  function getDice(min = 1, max = 6) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


  function resultBlock() {
    document.getElementById('balance1').value = DATA.balance;
    document.getElementById('balance2').value = DATA.balance;
    document.getElementById('bet-result').style.display = 'block';
    document.getElementById('bet-form').style.display = 'none';

};

  function betBlock() {
    document.getElementById('balance1').value = DATA.balance;
    document.getElementById('balance2').value = DATA.balance;
    document.getElementById('bet-form').style.display = 'block';
    document.getElementById('bet-result').style.display = 'none';

  }

  function brokeBlock() {
    document.getElementById('bet-result').style.display = 'none';
    document.getElementById('broke').style.display = 'block';


};

  function doARoll() {
    rollDice();
    resultBlock();
    DOMonRoll();
    calcWinLoss();
  };