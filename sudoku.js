

var solve = function() {
  console.log( "solve" );

  var gridStr = readGrid();

  console.log( "gridvalues", gridValues(gridStr) );
  solution = search( parse_grid(gridStr) );

  console.log( "solution", solution );

  console.log( convertToGridStr( solution ) );

  $solution = $('#solution');
  $solution.append('<div>solving real soon now</div>')
};

var pick = function() {
  console.log( "pick" );
};

var readGrid = function() {
  var gridStr = "";
  for (var i = 0; i < rows.length; i++){
    for (var j = 0; j < cols.length; j++){
      var id = rows[i] + cols[j];
      var cellElement = document.getElementById(id);
      gridStr += (cellElement.value == "" ? "." : cellElement.value);
    }
  }
  console.log(gridStr);
  return gridStr;
};

var setGrid = function( gridStr ) {
  if (!gridStr || gridStr.length < 81){
    alert("Invalid grid");
    return;
  }

  for (var i = 0; i < rows.length; i++){
    for (var j = 0; j < cols.length; j++){
      var id = rows[i] + cols[j];

      var cellValue = gridStr.charAt( 9*i + j );
      if (cellValue === ".")
        cellValue = "";
      var cellElement = document.getElementById(id);
      cellElement.value = cellValue;
    }
  }
} 


var getTest1 = function() {
  setGrid( testGrid1 );
};

var getTest2 = function() {
  setGrid( testGrid2 );
};

var resetGrid = function() {
  for (var i = 0; i < rows.length; i++){
    for (var j = 0; j < cols.length; j++){
      var id = rows[i] + cols[j];
      var cellElement = document.getElementById(id);
      cellElement.value = "";
    }
  }
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
      var $col = $('<td>');

      var rowIndex = 3 * outerRow + i;
      var colIndex = 3 * outerCol + j;

      var id = rows[rowIndex] + cols[colIndex];
      var inputString = 
          '<input type="text" maxlength="1" size="1" class="cell-input" id="' + id + '"  value=""/>';
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
  getTest2();
});

