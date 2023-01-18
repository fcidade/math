import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div>
            Exercícios:
            <ul>
                <Link to={'/exercise/sum'}><li>Soma</li></Link>
                <Link to={'/exercise/sub'}><li>Subtração</li></Link>
                <Link to={'/exercise/mult'}><li>Multiplicação</li></Link>
            </ul>
        </div>
    )
}