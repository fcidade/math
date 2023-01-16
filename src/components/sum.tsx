import { useCallback, useEffect, useState } from "react";
import { Handle } from "../helpers/handle";
import { Random } from "../helpers/random";

export const SumExercise = () => {
    const [min, setMin] = useState(1)
    const [max, setMax] = useState(10)
  
    const [userAnswer, setUserAnswer] = useState(0)
  
    const [a, setA] = useState(Random.int(0, 100))
    const [b, setB] = useState(Random.int(0, 100))
  
    const newExercise = useCallback(() => {
      setA(Random.int(min, max))
      setB(Random.int(min, max))
    }, [min, max, setA, setB])
  
    const verify = () => {
      alert(userAnswer === (a + b) ? 'acertou' : 'errou')
    }
  
    useEffect(() => {
      newExercise()
    }, [newExercise])
  
    return (
      <div>
        <h1>Exercício</h1>
        <p>{a} + {b}</p>
        <input type="number" value={userAnswer} onChange={Handle.onChangeNumber(setUserAnswer)} />
        <input type="submit" value="Verificar" onClick={verify} autoFocus/>
        <hr />
        <h2>Preferências:</h2>
        <label>Menor número: <input type="number" value={min} onChange={Handle.onChangeNumber(setMin)} /></label><br />
        <label>Maior número: <input type="number" value={max} onChange={Handle.onChangeNumber(setMax)} /></label>
  
      </div>
    );
  }