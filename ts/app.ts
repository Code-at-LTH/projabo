///<reference path='./phaser.d.ts'/>""

class SimpleGame {

    // tsc complained when i put 'let' in front of these, idk why
    // i also have to put 'this' in front of fucking everything
    game: Phaser.Game;
    input: Phaser.Input;
    pointer: Phaser.Pointer;
    logo: Phaser.Sprite;

    constructor() {
        var w = window.screen.width/2;
        var h = window.screen.height/2;
        this.game = new Phaser.Game(w, h, Phaser.AUTO, 'content', { preload: this.preload, create:this.create, update: this.update });
	this.input = new Phaser.Input(this.game);
    }
    
    preload() {
        this.game.load.image('logo', 'sprites/test.jpeg');
    }

    create() {
        this.logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        this.logo.anchor.setTo(0.5, 0.5);
    }

    update() {
        // updates the active input method (sounds like it can change over time)
        this.pointer = this.input.activePointer;
	this.logo.x = this.pointer.x;
	this.logo.y = this.pointer.y;
	console.log("x: " + this.logo.x + " y: " + this.logo.y);
    }
}

window.onload = () => {
    // i'm sort of sure this isn't the same 'game' as in the rest of the script
    var game = new SimpleGame();
};
