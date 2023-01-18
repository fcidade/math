import { useCallback, useEffect, useState } from "react";
import { Random } from "../../helpers/random";


export const useExercise = (verifyFn: (a: number, b: number, guess: number) => boolean) => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);

  const [a, setA] = useState(Random.int(min, max));
  const [b, setB] = useState(Random.int(min, max));

  const newExercise = useCallback(() => {
    setA(Random.int(min, max));
    setB(Random.int(min, max));
  }, [min, max, setA, setB]);

  useEffect(() => {
    // newExercise();
  }, [newExercise]);

  return {
    newExercise,
    verify: (guess: number) => verifyFn(a, b, guess),
    a, b,
    min, max, setMin, setMax,
  };
};
