///<reference path='./phaser.d.ts'/>""
var SimpleGame = (function () {
    function SimpleGame() {
        var w = window.screen.width / 2;
        var h = window.screen.height / 2;
        this.game = new Phaser.Game(w, h, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update });
        this.input = new Phaser.Input(this.game);
    }
    SimpleGame.prototype.preload = function () {
        this.game.load.image('logo', 'sprites/test.jpeg');
    };
    SimpleGame.prototype.create = function () {
        this.logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        this.logo.anchor.setTo(0.5, 0.5);
    };
    SimpleGame.prototype.update = function () {
        // updates the active input method (sounds like it can change over time)
        this.pointer = this.input.activePointer;
        this.logo.x = this.pointer.x;
        this.logo.y = this.pointer.y;
        console.log("x: " + this.logo.x + " y: " + this.logo.y);
    };
    return SimpleGame;
})();
window.onload = function () {
    // i'm sort of sure this isn't the same 'game' as in the rest of the script
    var game = new SimpleGame();
};
