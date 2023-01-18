import { SubExercise, SumExercise } from "./components/math";
import { DivExercise } from "./components/math/div";
import { MultExercise } from "./components/math/mult";

const App = () => {
  return (
    <div className="App">
      <SumExercise/>
      <SubExercise/>
      <MultExercise/>
      <DivExercise/>
    </div>
  );
}

export default App;
