var w = window.screen.width
var h = window.screen.height
this.game = new Phaser.Game(w, h, Phaser.AUTO, 'content', { preload: this.preload, update: this.update });

function preload() {
    this.game.load.image('smile', '../sprites/sqsmile.png')
    this.game.add.sprite(0, 0, 'smile')
}

function update() {

}