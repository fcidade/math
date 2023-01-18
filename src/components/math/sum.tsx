import { useState } from "react"
import { Exercise } from "./exercise"
import { useExercise } from "./use-exercise"

export const SumExercise = () => {
  const { a, b, verify, ...others } = useExercise((a, b, guess) => guess === a + b)
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
        name: 'Adição',
        formula: `${a} + ${b}`,
        userAnswer, setUserAnswer,
        onSubmit,
      }}
    />
  );
  }