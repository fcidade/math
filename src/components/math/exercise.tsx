import { Handle, SetStateFn } from "../../helpers/handle";


export type ExerciseProps = {
  name: string;
  formula: string;
  onSubmit: () => void;
  userAnswer: number;
  setUserAnswer: SetStateFn<number>;
  min: number;
  setMin: SetStateFn<number>;
  max: number;
  setMax: SetStateFn<number>;
};
export const Exercise = ({
  name, formula, onSubmit, userAnswer, setUserAnswer, min, setMin, max, setMax,
}: ExerciseProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{formula}</p>
      <form onSubmit={onSubmit}>
        <input type="number" value={userAnswer} onChange={Handle.onChangeNumber(setUserAnswer)} />
        <input type="submit" value="Verificar" autoFocus />
      </form>
      <hr />
      <h2>Preferências:</h2>
      <label>Menor número: <input type="number" value={min} onChange={Handle.onChangeNumber(setMin)} /></label><br />
      <label>Maior número: <input type="number" value={max} onChange={Handle.onChangeNumber(setMax)} /></label>

    </div>
  );
};
