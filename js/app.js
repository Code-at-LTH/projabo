window.onload = function() {
	var w = window.screen.width;
	var h = window.screen.height;
	var game = new Phaser.Game(w, h, Phaser.AUTO, '',
		{ preload: preload, create: create, update: update });

	function preload() {
	    game.load.image('smile', '../sprites/sqsmile.png');
	}

	function create() {
		game.stage.backgroundColor == "#000";
	    var smile = game.add.sprite(0, 0, 'smile');
	}

	function update() {

	}
};
