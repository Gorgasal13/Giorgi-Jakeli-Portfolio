import React, { useRef } from "react";

import useInput from "../../hooks/use-input";

import "./contact.css";

import emailjs from "@emailjs/browser";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const Contact = (props) => {
  const form = useRef();

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: phoneValue,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: descValue,
    isValid: descIsValid,
    hasError: descHasError,
    valueChangeHandler: descChangeHandler,
    inputBlurHandler: descBlurHandler,
    reset: resetDesc,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (nameIsValid && phoneIsValid && emailIsValid) {
    formIsValid = true;
  }

  const nameInputRef = useRef();
  const numberInputRef = useRef();
  const emailInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetEmail();
    resetName();
    resetPhone();
    resetDesc();

    const enteredName = nameInputRef.current.value;
    const enteredNumber = numberInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const formData = {
      name: enteredName,
      phone_number: enteredNumber,
      email: enteredEmail,
      message: enteredDescription,
    };
    props.onAddMeetup(formData);

    emailjs
      .sendForm(
        "service_n5qnqh6",
        "template_8sxm8cq",
        form.current,
        "l3ZQbOvOUji1tdq22"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Send");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactpage">
      <div id="contact">
        <h1 className="clientpagetitle">Contact Me</h1>
        <span className="contactdesc">
          Please fill out the from below discuss any work opportunities.
        </span>
        <form className="contactform" ref={form} onSubmit={submitHandler}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="name"
            required
            ref={nameInputRef}
            value={nameValue}
            onBlur={nameBlurHandler}
            onChange={nameChangeHandler}
          />
          {nameHasError && <p className="error">please entered name</p>}
          <input
            type="text"
            className="name"
            placeholder="Your Phone"
            name="phone"
            required
            ref={numberInputRef}
            value={phoneValue}
            onBlur={phoneBlurHandler}
            onChange={phoneChangeHandler}
          />
          {phoneHasError && <p className="error">please entered phone</p>}
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="email"
            required
            ref={emailInputRef}
            value={emailValue}
            onBlur={emailBlurHandler}
            onChange={emailChangeHandler}
          />
          {emailHasError && <p className="error">please entered valid email</p>}
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Message"
            required
            ref={descriptionInputRef}
            value={descValue}
            onBlur={descBlurHandler}
            onChange={descChangeHandler}
          />

          <button type="submit" value="send" className="submitbutton">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
