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
  var boardCount = 0; //fixme
  // create a board
  var board = new Board({'n': n});
  // create helper
  var findSolution = function(row = 0) {
    // base case -- if first row column(index) is equal to n
    // iterate through row
    for (var i = 0; i < n; i++) {
      // place a piece
      board.togglePiece(row, i);
      // check board to see if no conflicts
      if (board.hasAnyRooksConflicts()) {
        // remove piece
        board.togglePiece(row, i);
        // go to next column
        continue;
        // if not on last row
      }
      if (row === n - 1) {
        boardCount++;
        board.togglePiece(row, i);
        return;
      } else if (row + 1 < n) {
        findSolution(row + 1);
        board.togglePiece(row, i);
      }
    }
  };
  findSolution();
  console.log('Number of boards for ' + n + ' rooks:', boardCount);
  return boardCount;
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