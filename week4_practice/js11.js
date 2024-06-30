// function loadScript(src){
//     let script =document.createElement('script');
//     script.src=src;
//     document.head.append(script);
// }

new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)
  
  }).then(function(result) {

    console.log("첫 번째 then 함수 실행, result:", result); // 1
    return result * 2;
  
  }).then(function(result) {
  
    console.log("두 번째 then 함수 실행, result:", result); // 2
    return result * 2;
  
  }).then(function(result) {
  
    console.log("세 번째 then 함수 실행, result:", result); // 4
  
  });


  