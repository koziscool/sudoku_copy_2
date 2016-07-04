
var testGrid1 = "003020600900305001001806400008102900700000008006708200002609500800203009005010300";
var testGrid2 = "4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......";


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


