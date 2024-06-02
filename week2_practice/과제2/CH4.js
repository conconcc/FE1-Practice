// const user={
//     name : "John",
//     surname : "Smith"
// };

// user.name = "Pete";
// delete user.name;

// const user = {
//     name: "John"
// };
//   // 아래 코드는 에러 없이 실행될까요?
// user.name = "Pete"; //예

// let salaries = {
// John: 100,
// Ann: 160,
// Pete: 130
// }
// let sum=0;
// for (let num in salaries) {
//         sum+=salaries[num];
// }
// console.log(sum);


// // 함수 호출 전
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  
//   function multiplyNumeric(menu){
//     for(men in menu){
//         if(typeof(menu[men])=='number'){
//             return menu[men]*2;
//         }
//     }
//   }
//   multiplyNumeric(menu);
  
//   // 함수 호출 후
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };
//   for(men in menu){
//     console.log(menu[men]);
//   }

// ??
//function Calculator(){

//     this.read=function(){
//         this.a=prompt(a);
//         this.b=prompt(b);
//     }
    

//     this.sum= function(){return this.a+this.b;};
//     this.mul= function(){return this.a*this.b};



// }
// let calculator = new Calculator();
// calculator.read();

// console.log( "Sum=" + calculator.sum() );
// console.log( "Mul=" + calculator.mul() );
