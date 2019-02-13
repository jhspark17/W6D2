const View = require ('./ttt-view');
const Game = require ('./game')

  $(() => {
    const game = new Game();

    const $el = $('.ttt');
    console.log($el);
    const view = new View(game, $el);
    console.log($el);
  });
