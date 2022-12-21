
import React, { useEffect, useRef, useState } from 'react'

export const NestedTodo = () => {

  let input = useRef(null);
  let [nestedTodo, setNestedTodo] = useState([])
  let [h4, setH4] = useState([])

  useEffect(() => {
    input.current.focus()
  }, [])

  let handleAddition = (e) => {
    if (e.key === 'Enter') {
      setH4([...h4, input.current.value])
      setNestedTodo([...nestedTodo, 'asd'])
    }
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={{
        display: 'flex', flexDirection: 'column'
      }}>
        <input ref={input} onKeyDown={(e) => handleAddition(e)} type="text" />
        <input type="checkbox" />
        {h4.map((ele) => ele)}
      </div>
      {nestedTodo.map((nestedTodo) => nestedTodo)}
    </div>
  )
}
