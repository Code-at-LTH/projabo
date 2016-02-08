///<reference path='./phaser.d.ts'/>""
var SimpleGame = (function () {
    function SimpleGame() {
        var w = window.screen.width / 2;
        var h = window.screen.height / 2;
        this.game = new Phaser.Game(w, h, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update });
    }
    SimpleGame.prototype.preload = function () {
        this.game.load.image('logo', 'sprites/test.jpeg');
    };
    SimpleGame.prototype.create = function () {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    };
    SimpleGame.prototype.update = function () {
    };
    return SimpleGame;
})();
window.onload = function () {
    var game = new SimpleGame();
};
