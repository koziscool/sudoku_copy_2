

var solve = function() {
  console.log( "solve" );

  var gridStr = readGrid();

  console.log( "gridvalues", gridValues(gridStr) );
  solution = search( parse_grid(gridStr) );

  console.log( "solution", solution );

  console.log( convertToGridStr( solution ) );

  $solution = $('#solution');
  $solution.append('<br>');
  $solution.append('<div>solving real soon now</div>');
  $solution.append('<br>');
  $solution.append( outerBlock( "solution") );

  setGrid( "solution", convertToGridStr( solution )  );
};

var pick = function() {
  console.log( "pick" );
  resetGrid();
  var pickIndex = (Math.floor(Math.random()*puzzles.length)%puzzles.length);
  setGrid("puzzle", puzzles[pickIndex]);
  $('#solution').empty();
};

var getTest1 = function() {
  setGrid( "puzzle", testGrid1 );
  $('#solution').empty();
};

var getTest2 = function() {
  setGrid( "puzzle", testGrid2 );
  $('#solution').empty();
};

var readGrid = function() {
  var gridStr = "";
  for (var i = 0; i < rows.length; i++){
    for (var j = 0; j < cols.length; j++){
      var id = "puzzle-" + rows[i] + cols[j];
      var cellElement = document.getElementById(id);
      gridStr += (cellElement.value == "" ? "." : cellElement.value);
    }
  }
  console.log(gridStr);
  return gridStr;
};

var setGrid = function( context, gridStr ) {
  if (!gridStr || gridStr.length < 81){
    alert("Invalid grid");
    return;
  }

  for (var i = 0; i < rows.length; i++){
    for (var j = 0; j < cols.length; j++){
      var id = context + '-' +  rows[i] + cols[j];

      var cellValue = gridStr.charAt( 9*i + j );
      if (cellValue === ".")
        cellValue = "";
      // console.log(context);
      // console.log(context + '-' + id);
      var cellElement = document.getElementById(id);
      cellElement.value = cellValue;
    }
  }
} 


var resetGrid = function() {
  for (var i = 0; i < rows.length; i++){
    for (var j = 0; j < cols.length; j++){
      var id = "puzzle-" + rows[i] + cols[j];
      var cellElement = document.getElementById(id);
      cellElement.value = "";
    }
  }
  $('#solution').empty();
};


// these are imperative, could refactor to functional later
var outerBlock = function( context ) {
  var $table = $('<table>').addClass('outer-block');
  for(var i=0; i<3; i++){
    var $row = $('<tr>').addClass('outer-block-row');
    for(var j=0; j<3; j++){
      var $col = $('<td>').addClass('outer-block-data');
      $col.append( innerBlock(context, i, j) );
      $row.append( $col );
    }
    $table.append($row);
  }  
  return $table;
};

var innerBlock = function( context, outerRow, outerCol ) {
  var $table = $('<table>').addClass('inner-block');
  for(var i=0; i<3; i++){
    var $row = $('<tr>').addClass('inner-block-row');
    for(var j=0; j<3; j++){
      var $col = $('<td>');

      var rowIndex = 3 * outerRow + i;
      var colIndex = 3 * outerCol + j;

      var id = rows[rowIndex] + cols[colIndex];
      var inputString = 
          '<input type="text" maxlength="1" size="1" class="cell-input" id="' + context + '-' + id + '"  value=""/>';
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
  $puzzleGrid.append( outerBlock( "puzzle") );
};

$( document ).ready(function(){
  drawPuzzle();
  getTest2();
});

