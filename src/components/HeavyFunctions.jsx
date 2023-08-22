import { useState, useMemo } from 'react'

export const HeavyFunctions = () => {

    const [numberList, setNumberList] = useState([2, 3, 4, 5, 6, 7, 8, 9])
    const [show, setShow] = useState(true)

    const getResult = (numberList) => useMemo(() => {
        console.log('Calculating')
        return numberList.reduce((a, b) => a * b)
    }, [numberList])

    const addNumber = () => {
        setNumberList([...numberList, numberList[numberList.length - 1] + 1])
        console.log(numberList)
    }

    return (
        <>
            <h1>Calculus: {getResult(numberList)}</h1>
            <hr />
            <div className="buttons">
                <button className="btn btn-primary" onClick={() => setShow(!show)}>{show ? 'Show' : 'Hide'}</button>
                <button className="btn btn-success" onClick={() => addNumber()}>Add Number</button>
            </div>
        </>
    )
}
