ig.module('game.main')
.requires(
    //'impact.debug.debug',
    'impact.game',
    'impact.font',
    'plugins.joncom.border-font'
)
.defines(function(){

MyGame = ig.Game.extend({

    scale: 1,
    font: new ig.BorderFont('media/04b03.font.png', {borderSize: 1, borderColor: '#000'}),
    clearColor: '#444',

    init: function() {
        ig.input.bind(ig.KEY.MOUSE1, 'click');
    },

    update: function() {
        this.parent();
        if(ig.input.pressed('click')) {
            Canvas2Image.saveAsPNG(this.font.data);
        }
    },

    draw: function() {
        this.parent();
        var x = ig.system.width/2;
        var y = ig.system.height/2;
        this.font.draw('Click the canvas to save this font as a PNG.', x, y, ig.Font.ALIGN.CENTER);
    }

});

ig.main('#canvas', MyGame, 60, 320, 240, MyGame.prototype.scale);

});
