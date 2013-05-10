ig.module('game.main')
.requires(
    //'impact.debug.debug',
    'impact.game',
    'impact.font'
)
.defines(function(){

MyGame = ig.Game.extend({

    scale: 1,
    font: ig.BorderFont('media/04b03.font.png', borderSize: 1, borderColor: '#000'),

    draw: function() {
        var x = ig.system.width/2;
        var y = ig.system.height/2;
        this.font('The quick brown fox jumped over the lazy dog.', x, y, ig.Font.ALIGN.CENTER);
    }

});

ig.main('#canvas', MyGame, 60, 320, 240, MyGame.prototype.scale);

});