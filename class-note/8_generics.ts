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
function logText(text: string) {
  console.log(text);
  text.split('').reverse().join('');
  return text;
}
// 기존 타입 - 함수 중복 선언
function LogNumber(num: number) {
  console.log(num);
  return num;
}

logText('a');
logText(10);
// const num = LogNumber(10);
// logText(true);
