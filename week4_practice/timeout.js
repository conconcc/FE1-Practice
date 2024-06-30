console.log("1: 시작");

setTimeout(() => {
  console.log("2: 0ms 타임아웃");
}, 0);

console.log("3: 중간");

setTimeout(() => {
  console.log("4: 1000ms 타임아웃");
}, 1000);

console.log("5: 끝");