import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { SubExercise, SumExercise } from "./components/math";
import { DivExercise } from "./components/math/div";
import { MultExercise } from "./components/math/mult";
import { ExercisePage } from "./pages/exercise";
import { Home } from "./pages/home";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/exercise/*" element={<ExercisePage/>} />
        </Routes>
      </BrowserRouter>
      {/* <DivExercise/> */}
    </div>
  );
}

export default App;
