
var test_grid2 = "4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......";

var solve = function() {
  console.log( "solve" );
};

var pick = function() {
  console.log( "pick" );
};


var gridIndex = function( outerRow, outerCol, innerRow, innerCol) {
  var row = 3 * outerRow + innerRow;
  var col = 3 * outerCol + innerCol;
  return 3 * row + col;
};


// these are imperative, could refactor to functional later
var outerBlock = function() {
  var $table = $('<table>').addClass('outer-block');
  for(var i=0; i<3; i++){
    var $row = $('<tr>').addClass('outer-block-row');
    for(var j=0; j<3; j++){
      var $col = $('<td>').addClass('outer-block-data');
      $col.append( innerBlock(i, j) );
      $row.append( $col );
    }
    $table.append($row);
  }  
  return $table;
}

var innerBlock = function( outerRow, outerCol ) {
  var $table = $('<table>').addClass('inner-block');
  for(var i=0; i<3; i++){
    var $row = $('<tr>').addClass('inner-block-row');
    for(var j=0; j<3; j++){
      // var $col = $('<td>').addClass('inner-block-data').text( (3*i +j + 1).toString() );
      var $col = $('<td>');

      var index = gridIndex( outerRow, outerCol, i, j );
      var cellData = test_grid2[index];
      if (cellData === ".") {
        cellData = "";
      }

      var inputString = '<input type="text" maxlength="1" size="1" class="cell-input" " value="'  + cellData + '"/>;'
      var $input = $(inputString);

      $col.append($input);
      $row.append($col);
    }
    $table.append($row);
  }  
  return $table;
};


var drawPuzzle = function() {
  console.log( "draw" );
  var $puzzleGrid = $('#puzzle-grid');
  $puzzleGrid.append( outerBlock() );
};


$( document ).ready(function(){
  drawPuzzle();
});

