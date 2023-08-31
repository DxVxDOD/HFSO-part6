import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    
    const dispatch = useDispatch()

    const addAnecdotes = (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        console.log(content)
        e.target.anecdote.value = ''
        dispatch(createAnecdote(content))
      }

  return (
    <>
        <h2>create new</h2>
        <form onSubmit={addAnecdotes} >
            <input name='anecdote' />
            <button type='submit'>create</button>
        </form>
    </>
  )
}

export default AnecdoteForm