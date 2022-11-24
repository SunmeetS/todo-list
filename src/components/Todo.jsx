import React, { useEffect, useRef, useState } from 'react'
import { NewTodo } from './NewTodo'

export const Todo = () => {
    let [allTodos, setAllTodos] = useState([])
    let mainScreen = useRef()
    let [h4, setH4] = useState([])
    let input = useRef(null);

    useEffect(() => {
        input.current.focus()
    }, [])

    let handleAddition = (e) => {
        if (e.key === 'Enter') {
            setAllTodos([...allTodos, <NewTodo />])
            setH4([...h4, input.current.value])
        }
    }

    return (
        <div className='mainDiv' ref={mainScreen}>
            <div className="subMainDiv">
                <h4>Main Todo List </h4>
                <input ref={input} onKeyDown={(e) => handleAddition(e)} type="text" />
            </div>
            <div style={{ margin: '1rem 0rem 0rem 12rem ' }} className='newTodoMainDiv'>

                {allTodos.map((todo, idx) => <div style={{ position: 'relative', top: '0rem', left: '-11rem' }}>
                    <h2> {h4[idx]} &nbsp;</h2>
                    {todo}
                </div>)}
            </div>
        </div>
    )
}
