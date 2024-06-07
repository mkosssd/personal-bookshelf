import React, { useRef } from 'react'
import './input.css'
import { createSearchParams, useNavigate } from 'react-router-dom'
export default function Input() {
    const navigate = useNavigate()
    const queryInputRef = useRef()

    const SubmitHandler = e => {
        e.preventDefault()
        const enteredQuery = queryInputRef.current.value.trim()
        if (enteredQuery !== '') {
          navigate({
            pathname: 'search',
            search: createSearchParams({
              query: enteredQuery
            }).toString()
          })
        } else {
          window.alert('Please enter a query!')
        }
      }

  return (
    <>
        <div className='input-field'>

                <label htmlFor="query">Search Books</label> <br/>
            <div className='form-input'>
                <input id='query' ref={queryInputRef}  placeholder='Search here…'
/>
            </div>
            <button onClick={SubmitHandler} className='btn'>Search</button>
        </div>
    </>
  )
}
