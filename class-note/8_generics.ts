// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10);
// logText('하이');
// logText(true);

// 제네릭
// function logText<T>(text: T):T {
//   console.log(text);
//   return text;
// }

// logText<string>('하이');

// 기존 타입
// function logText(text: string) {
//   console.log(text);
//   text.split('').reverse().join('');
//   return text;
// }

// 기존 타입 - 함수 중복 선언
// function LogNumber(num: number) {
//   console.log(num);
//   return num;
// }

//유니온 타입을 이용한 선언 방식 문제점
// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }

//const a = logText('a');
//logText(10);
// const num = LogNumber(10);
// logText(true);

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

// 타입에 무엇이 들어갈 지 호출 시점에 정의
// 타입을 추론해서 최종 반환값까지 
const str = logText<string>('abc');
str.split('')
const login = logText<boolean>(true);



logText('a')
logText(10)
