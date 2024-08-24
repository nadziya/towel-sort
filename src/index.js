
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result =[];

  if (arguments.length !== 0){

     for ( let k = 1; k < matrix.length; k = k + 2){
         matrix[k].reverse();
      }

    for (let i = 0; i < matrix.length; i++) {
       for ( let j = 0; j < matrix[i].length; j++) {
        result.push(matrix[i][j]);
    }
   }
  }
  return result;
}
