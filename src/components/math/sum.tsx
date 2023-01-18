import { useState } from "react"
import { Random } from "../../helpers/random"
import { Exercise } from "./exercise"
import { useExercise } from "./use-exercise"

type ExerciseConfigs = {
  name: string
  questionTemplates: string[]
  solveFn: (a: number, b: number, guess: number) => boolean
}

const exercises: ExerciseConfigs[] = [
  {
    name: 'Adição',
    questionTemplates: [
      'Joâo comprou [a] maçãs e [b] bananas, quantas frutas o João tem no total?',
      'Pedro tirou nota [a] na prova de matemática do primeiro semestre e [b] na prova de matemática do segundo semestre, qual a soma das notas que pedro tirou no ano?',
      'Paulo foi no mercado fazer compras e gastou R$ [a] em produtos de limpeza e R$ [b] em alimentos, quanto Paulo gastou ao total na sua ida ao mercado?',
      "O Ricardo está tentando aprender a tocar Welcome To The Jungle do Guns 'n Roses já faz [a] dias, e ele acredita que vai demorar pelo menos mais uns [b] dias para terminar de aprender, quanto tempo ele irá gastar ao todo aprendendo essa música?",
    ],
    solveFn: (a, b, guess) => guess === a + b
  }
]

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

  const formulaWithText = Random.oneOf(exercises[0].questionTemplates)
  const bindVariablesOnFormula = formulaWithText
    .trim()
    .replace('[a]', a.toString())
    .replace('[b]', b.toString())

  return (
    <Exercise
      {...{
        ...others,
        name: 'Adição',
        // formula: `${a} + ${b}`,
        formula: bindVariablesOnFormula,
        userAnswer, setUserAnswer,
        onSubmit,
      }}
    />
  );
}