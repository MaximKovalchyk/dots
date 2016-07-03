var dots = {
	init_game: function(game_HTML_node) {
		var game = dots.model.create_game();
		var ui = dots.view.create_ui(game_HTML_node);
		var controller = dots.controller.create(ui, game);
	}
};
