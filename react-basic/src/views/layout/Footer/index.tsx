import React, { useState } from "react";

interface Human {
  name: string;
  age: number;
}

export default function Footer() {

  const [human, setHuman] = useState<Human>({ name : '홍길동',  age: 20});
  const [value, setValue] = useState<string>('');

  const changeHuman = () => {
    // human.name = '김철수';
    // human.age = 30; 
    // -> 바뀐게 인식이 안됨 => 새로운 주소를 만들어 줘서 변경해야 함
    const newHuman: Human = {
      name: '김철수',
      age: 30
    }
    setHuman(newHuman);
  }

  return (
    <div>
      <div>{human.name} {human.age}</div>
      <button onClick={changeHuman}>변경</button>
      <div>
        <input  onChange={(event) => {setValue(event.target.value)}} /> {value}
      </div>
    </div>
  )
}
