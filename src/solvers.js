/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

// hasRowConflictAt(rowIndex)
// hasAnyRowConflicts()
// hasColConflictAt(colIndex)
// hasAnyColConflicts()
// togglePiece(rowIndex, colIndex)
// hasAnyRooksConflicts

// i: number, board size
window.findNRooksSolution = function(n) {
  var solution = new Board({'n': n}); //fixme
  // make variable placed = 0;
  var placed = 0;

  for (let i = 0; i < n; i++) {
    // iterate through board
    for (let j = 0; j < n; j++) {
      solution.togglePiece(i, j);
      placed++;
      if (solution.hasRowConflictAt(i)) {
        solution.togglePiece(i, j);
        placed--;
        // move to next row
        break;
      }
      if (solution.hasColConflictAt(j)) {
        solution.togglePiece(i, j);
        placed--;
        // move to next col
        continue;
      }
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other

// o: number, of solutions
window.countNRooksSolutions = function(n) {

  console.log('n: ', n);
  var solutionCount = 0;

  var counter = function(row, board, placed) {
    var row = row || 0;
    var board = board || new Board({'n': n});
    var placed = placed || 0;

    debugger;
    console.log('board: \n', board.rows());
    for (let i = 0; i < n; i++) {
      board.togglePiece(row, i);
      placed += 1;
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(row, i);
        placed -= 1;
        continue;
      }
      if (placed === n) {
        solutionCount++;
        return;
      }
      if (row < n) {
        counter (row + 1, board, placed);
      }
    }
  };

  counter();
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};