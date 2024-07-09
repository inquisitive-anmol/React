import React from 'react'
import {useForm } from "react-hook-form";

const From = ({handleFormSubmit}) => {
    const {register, handleSubmit, reset} = useForm();
    const handleForm = (data) => {
       handleFormSubmit(data);
       reset();
    }
  return (
    <div>
        <form className='flex gap-2' action="" onSubmit={handleSubmit(data => handleForm(data))}>
            <input {...register('name')} className='outline-none bg-sky-200 rounded px-1' type="text" placeholder='name' />
            <input {...register('email')} className='outline-none bg-sky-200 rounded px-1' type="email" placeholder='email' />
            <input {...register('image')} className='outline-none bg-sky-200 rounded px-1' type="text" placeholder='image url' />
            <input className='bg-sky-500 rounded px-2 py-1 text-sm' type="submit" />
        </form>
    </div>
  )
}

export default From


// why we are talking about form handling topic specially in react?
// It is because when we use form handling normally, then page reloads and violates the basic behavior of react. So, in order to avoid that we use form handling in quite different ways.
// There are three different ways in which we can handle form in react: 
// 1.useRef
// 2. controlled components
// 3. react hook form 

// above code is an example of react hook form.

// form handling by useRef:
// is tareeke me har input ko select kar lete hain and unki value tab nikalte hain jab form submit hota hai.

