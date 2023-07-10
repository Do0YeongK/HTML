function JavaScriptBasic() {
  
  // 주석
  /*
   * 여러줄 주석
   */

  // 변수 : js의 경우 변수의 타입이 존재하지 않음
  //! js / ts 에서 변수를 선언하는 방법
  // 1. var 키워드 사용
  var variable1;
  variable1 = 10;
  variable1 = 11.1;
  variable1 = "안녕하세요";

  /////////////////////////////
  // 상식적이지 못한게 가능 -> 사용하지 않음
  // localVariable = 10;
  // if (true) {
  //   var localVariable;
  // }
  // localVariable = 10;
  /////////////////////////////

  // 2. let 키워드 사용
  // + 선언과 동시에 초기화 하면 변수타입을 추론하여 고정됨
  // variable2 = 10;
  let variable2;
  variable2 = 10;
  variable2 = 10.2;

  /////////////////////////////
  // 상식적이지 못한건 불가능 -> 사용
  // if (true) {
  //   let localVariable;
  // }
  // localVariable = 10;
  /////////////////////////////

  // 3. const :상수
  // 자바와 다르게 상수 선언과 동시에 초기화가 이루어져야 함
  const constantVariable = 10;

  // 4. ts 변수선언 (1~3은 js의 변수선언)
  // + 선언과 동시에 초기화 하면 변수타입을 추론하여 고정됨
  let tsVariable = 10;
  // tsVariable = "안녕하세요";

  // 타입 어노테이션 : 선언 시 타입을 지정하는 방법
  let tsVariable2: string;
  // tsVariable2 = 10;
  tsVariable2 = "안녕하세요";

  let tsVariable3: string = "안녕하세요";

  //! 데이터 타입
  // 1. number : 숫자 타입 (실수, 정수, 10진수, 16진수, ...)
  let numberVariable: number = 10;
  numberVariable = 10.1;
  numberVariable = 0xff; //0x : 16진수

  // 2. boolean : 논리 타입
  let booleanVarialbe: boolean = true;
  booleanVarialbe = false;

  // 3. string : 문자열 타입
  let stringVariable1: string = "문자열";
  let stringVariable2: String = "문자열";
  // stringVariable1 = stringVariable2; -> String은 참조형이고 string은 기본형임 (string에 String을 넣을 수 없음)

  // 4. array : 배열 타입
  let numberArray: number[] = [1, 2, 3];
  // numberArray = [true, false, true]

  // 5. object : 객체 타입
  let object: any = {
    name: "홍길동",
    age: 30
  }

  // object = {
  //   name: "홍길동",
  //   age1: 30
  // }
  
  // 6. null : 값이 지정되지 않은 타입
  // object = null; -> 타입이 다름
  let nullVariable: null = null;

  // 하나의 변수가 여러개의 타입을 가질 수 있음
  let stringVariable3: string | null | number = null;
  stringVariable3 = "문자열";
  stringVariable3 = null;
  stringVariable3 = 10;

  // 7. undefined : 정의되지 않은 타입
  let undefinedVariable: undefined = object.address;

  // 8. any : 모든 타입을 받을 수 있는 타입
  let anyValiable: any = 10;
  anyValiable = "문자열";

  //! 연산자
  let result: any = 10 / 3;   // 3.33333..
  
  let number1: any = 10;
  let number2: any = "10";

  result = (number1 == number2);  // true
  result = (number1 === number2);  // false

  result = (number1 != number2);  // false
  result = (number1 !== number2);  // true

// 조건문
  // 조건문의 조건이 무조건 true, false 형태의 boolean 값이 오지 않아도됨
  // false : 0, 0.0, '', undefind, null
  const string = '';
  if (string) {

  } 

  // 반복문
  // for, while 모두 사용가능
  const exampleArray = ['apple', 'banana', 'carot'];
  //! foreach 함수: 배열.forEach(반환값이 없는 함수);
  // for (String item: exampleArray) {

  // }
  exampleArray.forEach(function (item) {
    console.log(item);
  });
  //! map 함수: 배열.map(반환값이 있는 함수);
  //!           배열을 반복하면서 함수 작업의 반환 값으로 새로운 배열을 생성하여 반환
  const numbers = [1, 2, 3, 4, 5];
  let resultList = numbers.map(function (item) {
    const result = item * item;
    return result;
  });  // [1, 4, 9, 16, 25]
  
  //! filter 함수: 배열.filter(조건문을 가진 함수);
  //!              배열을 반복하면서 함수 작성된 조건문에 부합하는 요소만 반환
  resultList = numbers.filter(function (item) {
    return item % 2 === 0;
  });  // [2, 4]
  
  // 객체 생성
  //! 1. JSON 형식을 이용하여 생성(바로 생성)
  //! JSON : { 'key': 'value', 'key': 'value', ... }
  let object1 = {
    name: '홍길동',
    age: 29,
    address: '부산광역시'
  };

  //! 2. class를 이용하여 생성
  class CHuman {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  }
  object1 = new CHuman('김철수', 30, '서울특별시');
  
  //! 3. interface를 이용하여 생성
  interface IHuman {
    name: string;
    age: number;
    address: string;
  }
  let object2: IHuman = {
    name: '고길동',
    age: 50,
    address: '인천광역시'
  }

  object1.age;

  //! 구조 분해 할당
  // let name = object1.name;
  // let age = object1.age;

  let { name, age } = object1; // { name: '홍길동', age: 30, address: '부산' }
  console.log(name);
  console.log(age);

  let { address, ...other } = object1;
  // address: '부산', other: { name: '홍길동', age: 30 }
  
  let object3 = { telNumber: '010-1111-1111', email: 'email@email.com' };
  let subObject = { ...object2, ...object3 };
  // { name: '고길동', age: 50, address: '인천광역시', telNumber: '010-1111-1111', email: 'email@email.com' }

  //! 함수

  //! 함수 선언 방법
  //! function 함수명 (매개변수: 타입, ...): 반환타입 {
  //!   ...
  //!   return 결과;
  //! }

  //! 화살표 함수
  //! 함수를 변수처럼 사용하는 것
  //! 선언 방법 
  //! const 함수명 = (매개변수, ...) => { ... return 결과값 };


  return (<></>);

}

export default JavaScriptBasic;