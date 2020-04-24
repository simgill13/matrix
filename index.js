let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let matrix2 = [[0, 1, 1], [0, 1, 1], [0, 1, 1]];

function display(m) {
  let element = document.getElementById("root");
  for (let i = 0; i < m.length; i++) {
    let node = document.createElement("div");
    let brek = document.createElement("br");
    let textnode = document.createTextNode(m[i].join(" "));
    node.appendChild(textnode);
    document.getElementById("root").appendChild(node);
  }
}

display(matrix);

// function MatrixAddition(m1,m2){
//   let sum = [];

//   for(let i =0; i < m1.length ; i ++){
//     // sum[i] = m1[i] + m2[i]
//     console.log(m1[i])

//     for(let j = 0; j < m1[i].length; j++){
//       console.log(m1[i][j])
//        sum[i] = m1[i][j]
//     }
//   }

//   console.log(sum)

// }

// MatrixAddition(matrix,matrix2)

const flipMatrix = matrix =>
  matrix[0].map((column, index) => {
    return matrix.map(row => {
      return row[index];
    });
  });
const rotateMatrix = matrix => flipMatrix(matrix.reverse());
const rotatedMatrix = rotateMatrix(matrix);
display(rotatedMatrix);
