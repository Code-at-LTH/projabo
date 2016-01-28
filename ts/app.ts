///<reference path='./phaser.d.ts'/>""

class SimpleGame {
    constructor() {
        var w = window.screen.width
        var h = window.screen.height
        this.game = new Phaser.Game(w, h, Phaser.AUTO, 'content', { preload: this.preload, create:this.create, update: this.update });
    }
    game: Phaser.Game;
    
    preload() {
        this.game.load.image('logo', 'test.jpeg');
    }

    create() {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    }

    update() {
    
    }
}

window.onload = () => {
    var game = new SimpleGame();
};
