import { useState } from "react";
import { useDispatch } from "react-redux";
import { postTweet } from "./store/tweet";

export default function CreateTweet() {

    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()

    dispatch(postTweet({
        message: message
    }))
  }
  return (
    <>
      <h1>Create a New Tweet</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="message">Insert your Tweet message</label>
        <input
          id="message"
          name="message"
          placeholder="insert your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        <button>Create</button>
      </form>
    </>
  );
}
