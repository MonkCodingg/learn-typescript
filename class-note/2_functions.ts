// 함수 파라미터 타입 정의 방식
// function sum(a: number, b:number) {
//   return a + b;
// }

sum(10, 20);

// 함수 반환 값 타입을 정의하는 방식
function add(): number {
  return 10;
}

//함수 타입 정의 방식
function sum(a: number, b: number): number {
  return a + b;
}

sum(10);

// 함수 옵셔널 파라미터
function log(a: string, b?: string) {

}
log('hello world');
log('hello ts', 'abc');
