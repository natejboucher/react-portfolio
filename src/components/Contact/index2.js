
// <form id='contact-form' onSubmit={handleSubmit} class="text-center border border-light p-5" action="#!">

//     <p class="h4 mb-4">Contact me</p>

//     {/* <!-- Name --> */}
//     <input type="text" defaultValue={name} id="defaultContactFormName" class="form-control mb-4" onBlur={handleChange} placeholder="Name">

//     {/* <!-- Email --> */}
//     <input type="email" defaultValue={email} id="defaultContactFormEmail" class="form-control mb-4" onBlur={handleChange} placeholder="E-mail">

//     {/* <!-- Message --> */}
//     <div class="form-group">
//         <textarea name='message' defaultValue={message} onBlur={handleChange} class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Message"></textarea>
//     </div>
//     {errorMessage && (
//                     <div>
//                         <p className='error-text'>{errorMessage}</p>
//                     </div>
//                 )}
//     {/* <!-- Send button --> */}
//     <button data-testId='button' class="btn btn-info btn-block" type="submit">Send</button>

// </form>