import {  Link, Route, Routes } from "react-router-dom"
import { SubExercise, SumExercise } from "../components/math"
import { MultExercise } from "../components/math/mult"

export const ExercisePage = () => {
    return (<div>
        <p><Link to="/">Voltar</Link></p>
        <Routes>
            <Route path="sum" element={<SumExercise />} />
            <Route path="sub" element={<SubExercise />} />
            <Route path="mult" element={<MultExercise />} />
        </Routes>
    </div>
    )
}