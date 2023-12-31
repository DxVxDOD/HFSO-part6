import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const addAnecdotes = async (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
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