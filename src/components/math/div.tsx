import { useState } from "react"
import { Exercise } from "./exercise"
import { useExercise } from "./use-exercise"

export const DivExercise = () => {
  const { a, b, verify, ...others } = useExercise((a, b, guess) => guess === a / b)
  const [userAnswer, setUserAnswer] = useState(0)

  const onSubmit = () => {
    if (verify(userAnswer)) {
      alert('Acertou!')
    } else {
      alert('Errou!!')
    }
  }

  return (
    <Exercise
      {...{
        ...others,
        name: 'Divisão',
        formula: `${a} / ${b}`,
        userAnswer, setUserAnswer,
        onSubmit,
      }}
    />
  );
  }