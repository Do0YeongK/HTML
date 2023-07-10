//! 컴포넌트
//! React의 기본 단위
//! 화면을 독립적인 부분으로 나눠서 재사용성을 높이고
//! 관리를 용이하게 해줌
//! class 컴포넌트 / function 컴포넌트

function TestComponent () {

  //! return 위치에 화면에 출력할 HTML 작성
  //! 컴포넌트 return 시 주의사항
  //! 반드시 하나의 요소만 반환
  return (
    <div>
      <div>첫번째 컴포넌트</div>
      <div>두번째 컴포넌트</div>
      <div>세번째 컴포넌트</div>
      <div>네번째 컴포넌트</div>
      <div>다섯번째 컴포넌트</div>
    </div>
  );
};

export default TestComponent;

//! export , export default
//! export : 한 페이지에서 여러개를 내보낼때 사용
//! export default : 한 페이지에서 하나의 값을 기본값으로 내보낼때 사용
export const testVariable = 10; 