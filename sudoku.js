
var test_grid2 = "4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......";

var solve = function() {
  console.log( "solve" );
};


var pick = function() {
  console.log( "pick" );
};


// this is imperative, could refactor to function later
var outerBlock = function() {
  var $table = $('<table>').addClass('outer-block');
  for(var i=0; i<3; i++){
    var $row = $('<tr>').addClass('outer-block-row');
    for(var j=0; j<3; j++){
      var $col = $('<td>').addClass('outer-block-data');
      $col.append( innerBlock() );
      $row.append( $col );
    }
    $table.append($row);
  }  
  return $table;
}

var innerBlock = function() {
  var $table = $('<table>').addClass('inner-block');
  for(var i=0; i<3; i++){
    var $row = $('<tr>').addClass('inner-block-row');
    for(var j=0; j<3; j++){
      // var $col = $('<td>').addClass('inner-block-data').text( (3*i +j + 1).toString() );
      var $col = $('<td>');

      var cellData =  (3*i +j + 1).toString();
      var inputString = '<input type="text" maxlength="1" size="1" " value="'  + cellData + '"/>;'
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

