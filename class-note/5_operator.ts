// function logMessage(value: any) {
//   console.log(value);
// }
// logMessage('hello');
// logMessage(100);

var seho: string | number | boolean;
function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string of number');
}
logMessage('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function asksomeone(someone: Developer | Person) {
  //someone.name;
  //someone.skill;
  //someone.age;
}
asksomeone({ name: '디벨로퍼', skill: '웹개발' });
asksomeone({ name: '캡틴', age: 100 });

function askSomeone(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 34 });

//var seho: string | number | boolean;
//var capt: string & number & boolean;

