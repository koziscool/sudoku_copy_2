
var solve = function() {
  console.log( "solve" );
};


var pick = function() {
  console.log( "pick" );
};


// this is imperative, could refactor to function later
var outerBlock = function() {
  var $table = $('<table></table>').addClass('outer-block');
  for(var i=0; i<3; i++){
    var $row = $('<tr></tr>').addClass('outer-block-row');
    for(var j=0; j<3; j++){
      var $col = $('<td></td>').addClass('outer-block-data');
      $col.append( innerBlock() );
      $row.append( $col );
    }
    $table.append($row);
  }  
  return $table;
}


var innerBlock = function() {
  var $table = $('<table></table>').addClass('inner-block');
  for(var i=0; i<3; i++){
    var $row = $('<tr></tr>').addClass('inner-block-row');
    for(var j=0; j<3; j++){
      var $col = $('<td></td>').addClass('inner-block-data').text( (3*i +j + 1).toString() );
      $row.append($col);
    }
    $table.append($row);
  }  
  return $table;
}

var drawPuzzle = function() {
  console.log( "draw" );

  var $puzzleGrid = $('#puzzle-grid');
  // var newStuff = "<div>koz is really cool</div>"
// $('#here_table').append(table);

  $puzzleGrid.append( outerBlock() );
};