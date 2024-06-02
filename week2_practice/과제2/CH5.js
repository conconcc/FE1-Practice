// let arr = [5, 3, 8, 1];

// function filterRangeInPlace(arr,from,to){
//     for (let index = from; index <= to; index++) {
//         if
//     }
// }
// filterRangeInPlace(arr, 1, 4); // 1과 4 사이에 있지 않은 요소는 모두 제거함

// console.log( arr ); // [3, 1]

// let arr = [5, 2, 1, -10, 8];

// // 요소를 내림차순으로 정렬해주는 코드를 여기에 작성해보세요.
// arr.sort().reverse();
// console.log( arr ); // 8, 5, 2, 1, -10

// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr){
//     return arr.slice().sort();
// }
// let sorted = copySorted(arr);

// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (no changes)

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// function getAverageAge(arr){
//     let sum=0;
//     for (let i = 0; i < arr.length; i++) {
//         sum+=arr[i].age;
//     }
//     return sum/arr.length;
// }

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

function unique(arr) {
    let tmp=[];
    let i=0;
    while(i==arr.letngth){
        if(tmp.includes(arr[i])){
            continue
        }
        else{
            tmp.push(arr[i]);
        }
        i++;
    }
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(strings) ); // Hare, Krishna, :-O