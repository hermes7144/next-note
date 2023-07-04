'use client';
import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter((num) => num + 1)}>숫자 증가시키기</button>
    </>
  );
}
