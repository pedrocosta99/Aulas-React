import React, {Fragment, useState} from 'react'
import { createElement } from 'react'

const Form = () => {
  const [name, setName] = useState('')
  const handleNameChange = e => setName(e.target.value)

  const [body, setBody] = useState('')
  const handleBodyChange = e => setBody(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    const blog = {name, body}

    const newPost = document.createElement('li')
    newPost.innerHTML = `${blog.name}: ${blog.body}`

    const lista = document.getElementById('lista')
    lista.appendChild(newPost)
    console.log(blog);

  }


  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="Body">Body: </label>
          <textarea value={body} onChange={handleBodyChange}
          id="body" cols="30" rows="5"></textarea>
        </div>
        <br />
        <input type="submit" />
      </form>

      <p>{name}</p>
      <p>{body}</p>

      <ol id='lista'></ol>
    </Fragment>
  )
}

export default Form
