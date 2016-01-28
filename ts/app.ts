///<reference path='./phaser.d.ts'/>""

class SimpleGame {
    constructor() {
        var w = window.screen.width
        var h = window.screen.height
        this.game = new Phaser.Game(w, h, Phaser.AUTO, 'content', { preload: this.preload, update: this.update });
    }
    game: Phaser.Game;

    preload() {

    }

    update() {

    }
}

window.onload = () => {
    var game = new SimpleGame();
};
