import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email is invalid!");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };
  return (
    <section className='contact'>
      <div className='contact-form'>
        <form
          id='contact-form'
          onSubmit={handleSubmit}
          className='text-center border border-light p-5'
          action='#!'
        >
          <p className='h2 mb-4'>Contact me</p>
          <input
            name='name'
            type='text'
            defaultValue={name}
            id='defaultContactFormName'
            className='form-control form-el'
            onBlur={handleChange}
            placeholder='Name'
          />
          <input
            name='email'
            type='email'
            defaultValue={email}
            id='defaultContactFormEmail'
            className='form-control form-el'
            onBlur={handleChange}
            placeholder='E-mail'
          />
          <div className='form-group mt-5 form-el'>
            <textarea
              name='message'
              defaultValue={message}
              onBlur={handleChange}
              className='form-control rounded-0'
              id='exampleFormControlTextarea2'
              rows='3'
              placeholder='Message'
            ></textarea>
          </div>
          {errorMessage && (
            <div>
              <p className='error-text'>{errorMessage}</p>
            </div>
          )}
          <button
            data-testid='button'
            className='btn btn-primary btn-block'
            type='submit'
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
