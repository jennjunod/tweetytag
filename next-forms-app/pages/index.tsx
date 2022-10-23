import Link from 'next/link'
import { FormEvent } from 'react'
import styles from '../styles/Home.module.css'

export default function PageWithJSbasedForm() {
  // Handle the submit event on form submit.
  const handleSubmit = async (event: FormEvent) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Cast the event target to an html form
    const form = event.target as HTMLFormElement

    // Get data from the form.
    const data = {
      twitterHandle: form.twitterHandle.value as string,
     // last: form.last.value as string,
    }

    // Send the form data to our API and get a response.
    const response = await fetch('/api/form', {
      // Body of the request is the JSON data we created above.
      body: JSON.stringify(data),
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // The method is POST because we are sending data.
      method: 'POST',
    })

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your Twitter handle? ${result.data}`)
  }
  return (
    <div className="container">
      <h1 className={styles.title}>
        Get tagged in the weekly Twitter Space
      </h1>
      <h3> #mentalhealth & #neurodiversity in #tech
      </h3>

      {/* <p className={styles.description}>
        Get started by looking at{' '}
        <code className={styles.code}>pages/js-form.js</code>
      </p> */}

      <form onSubmit={handleSubmit}>
        <label htmlFor="twitterHandle">Twitter Handle</label>
        <input type="text" id="twitterHandle" name="twitterHandle" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
