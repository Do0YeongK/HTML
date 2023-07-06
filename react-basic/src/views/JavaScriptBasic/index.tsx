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
  
  result = (number1 == number2);



  return (<></>);

}

export default JavaScriptBasic;