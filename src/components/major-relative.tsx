import { useCallback, useState } from "react"
import { Random } from "../helpers/random"
import * as Music from "../helpers/music"
import { Handle } from "../helpers/handle"

export const MajorRelativeExercise = () => {
    const [userAnswer, setUserAnswer] = useState('')

    const [minorScaleRoot, setMinorScaleRoot] = useState(new Music.Note(Random.oneOf(Music.notes)))

    const majorRelativeRoot = minorScaleRoot.minorThird()

    const verify = useCallback(() => {
        if (userAnswer.toUpperCase() === Music.toString(majorRelativeRoot.pitch).toUpperCase()) {
            alert('acertou!')
        } else {
            alert('errou! é: ' + Music.toString(majorRelativeRoot.pitch))
        }

        newRound()
    }, [majorRelativeRoot])

    const newRound = useCallback(() => {
        setMinorScaleRoot(new Music.Note(Random.oneOf(Music.notes)))
    }, [setMinorScaleRoot])

    return (
        <div>
            A: {Music.toString(minorScaleRoot.pitch)}m <br />
            {/* B: {Music.toString(majorRelativeRoot.pitch)} <br /> */}
            <hr />
            <form onSubmit={verify}>
                <input type="text" value={userAnswer} onChange={Handle.onChange(setUserAnswer)} autoFocus />
                <input type="submit" value="Verificar" />
            </form>
        </div>
    )
}