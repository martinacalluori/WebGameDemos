gameObj.Loser = function (game) {};

gameObj.Loser.prototype = {
  create: function () {
    console.log('State - Loser');

    //Add background image
    var spBackground = this.add.sprite(this.world.centerX, this.world.centerY, 'background');
    spBackground.anchor.setTo(0.5, 0.5);

    //Add title image
    var spLogo = this.add.sprite(this.world.centerX, this.world.centerY, 'logoLoser');
    spLogo.anchor.setTo(0.5, 0.5);
    spLogo.rotation = .5;

    //The numbers given in parameters are the indexes of the frames, in this order: OVER, OUT, DOWN
    var btReplay = this.add.button(600, 607, 'replayButton', this.replayFun, this, 1, 0, 2);

    //Add text
    var scoreStr = gameObj.gScore;
    var timeStr = '2:30';

    var txScore = this.add.text(25, 15, scoreStr);
    var txTime = this.add.text(this.world.width - 115, 15, timeStr);

    txScore.fill = 'black';
    txScore.font = 'Zilla Slab';
    txScore.fontSize = 36;

    txTime.fill = 'black';
    txTime.font = 'Zilla Slab';
    txTime.fontSize = 36;
  },
  replayFun: function () {
    console.log('replayFun called');
    this.state.start('Play');
  }
};
