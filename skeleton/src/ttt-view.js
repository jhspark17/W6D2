class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    let $ul = $('ul');

    $ul.on('click', (e) => {
      if (!this.game.isOver()) {
      let $square = $(e.target)

      this.makeMove($square);
      };
    });
  }
  
  makeMove($square) {
    try {
      this.game.playMove($square.data('pos'));
      $square.addClass(this.game.currentPlayer);
  
      if (this.game.isOver()) {
        let winner = this.game.winner();

        if (winner === null) {
          $('.ttt').append("It's a tie!")
        } else {
          $('.ttt').append(`${this.game.currentPlayer} is the winner!`);
          // $('li').addClass('loser');
          $(`.${this.game.currentPlayer}`).addClass('winner');
        }
      }
    } catch (error) {
      alert(error.msg);
    }
  }

  setupBoard() {
    let $ul = $("<ul></ul>");
    
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $li = $("<li></li>");
        $li.data('pos', [i,j]);
        $ul.append($li);
      }
    }

    this.$el.append($ul);
  }
}

module.exports = View;
