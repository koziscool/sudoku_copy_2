
var dict = function(keys, values) {
  var result = {};
  $.each(keys, function(i, key) {
    result[key] = values[i];
  });
  return result;
}

var cross = function(A, B){
  var C = [];
  for (var a in A) 
    for (var b in B) 
      C.push(A[a] + B[b]);
  return C;
};

var rows = ['A','B','C','D','E','F','G','H','I'];
var cols = ['1','2','3','4','5','6','7','8','9'];
var squares = cross(rows, cols);



// Given a string of 81 digits (or .), return an object os {cell:values}
var convertToValuesObj = function( grid ) {
  var values = {};
  for (var i = 0; i < squares.length; i++)
    values[squares[i]] = grid.charAt(i);

  console.log( "convert", values);
  return values;
};

function gridValues(grid) {
    return dict(squares, grid)
}


var convertToGridStr = function( valuesObj ) {
  var gridStr = "";
  for (var r in rows){
    for (var c in cols){
      var id = rows[r] + cols[c];

      gridStr += valuesObj[id];
      // if (digits.indexOf(dig) != -1){
      //   var inpElem = document.getElementById(id);
      //   inpElem.value = dig;
      // }
    }
  }
  return gridStr;
};


