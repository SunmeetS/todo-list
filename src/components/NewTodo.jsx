import React, { useEffect, useRef, useState } from 'react'
import { NestedTodo } from './NestedTodo';

export const NewTodo = () => {

  let input = useRef(null);
  let [nestedTodo, setNestedTodo] = useState([<NestedTodo />])
  let [h4, setH4] = useState([])

  useEffect(() => {
    input.current.focus()
  }, [])

  let handleAddition = (e) => {
    if (e.key === 'Enter') {
      setNestedTodo([...nestedTodo, <NestedTodo />])
      setH4([...h4, ' ', input.current.value])
    }
  }

  return (
    <div className='mainNewTodo'>
      <h4>Nested List</h4>
      <div className='subNewTodo'>
        <div style={{ display: 'flex' }}>
          <input ref={input} onKeyDown={(e) => handleAddition(e)} type="text" />
          <input type="checkbox" />
        </div>
        {h4.map((ele, idx) => <div style={{display: 'flex'}}>
          <h4>
            {ele}
          </h4>
        </div>
        )}
      </div>
    </div>
  )
}
