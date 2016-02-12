///<reference path='./phaser.d.ts'/>""
var SimpleGame = (function () {
    // the constructor is for ts stuff so we should probably
    // keep it minimal and put most stuff in create()
    function SimpleGame() {
        var w = window.screen.width / 2;
        var h = window.screen.height / 2;
        this.game = new Phaser.Game(w, h, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update });
        this.input = new Phaser.Input(this.game);
    }
    SimpleGame.prototype.preload = function () {
        this.game.load.image('logo', 'sprites/sqsmile.png');
    };
    SimpleGame.prototype.create = function () {
        this.iconGroup = new Phaser.Group(this.game);
        //have to have .data at the end here
        var image = this.game.cache.getImage('logo', true).data;
        for (var i = 0; i < 4; i++) {
            var logo = void 0;
            console.log("Sprite: " + i);
            // can't have "this." before logo here
            logo = this.game.add.sprite(image.width * i, 0, 'logo');
            logo.anchor.setTo(0.5, 0.5);
            this.iconGroup.add(logo);
        }
    };
    SimpleGame.prototype.update = function () {
        // updates the active input method (sounds like it can change over time)
        this.pointer = this.input.activePointer;
        this.iconGroup.x = this.pointer.x;
        this.iconGroup.y = this.pointer.y;
    };
    return SimpleGame;
})();
window.onload = function () {
    // i'm sort of sure this isn't the same 'game' as in the rest of the script
    var game = new SimpleGame();
};
