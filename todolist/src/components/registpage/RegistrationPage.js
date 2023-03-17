import React, { useState } from 'react'
import './styles.css'
import { useForm } from 'react-hook-form'

function RegistrationPage() {
   const [result, setResult] = useState('')
   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm({ mode: 'onBlur' })
   const onsubmit = (data) => {
      console.log(data)
   }

   return (
      <div className="body">
         <div className="itemMenu">
            <h1 className="itemHeader">Registration</h1>
            <div className="regMenu">
               <form
                  onSubmit={handleSubmit(onsubmit)}
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}
               >
                  <input
                     className="inputForm"
                     placeholder="Log in"
                     {...register('username', {
                        required: 'Field empty',
                        minLength: {
                           value: 5,
                           message: 'Too short',
                        },
                     })}
                  />
                  <div
                     style={{
                        height: 40,
                        color: 'red',
                        textAlign: 'center',
                        fontFamily: 'Roboto',
                        fontWeight: 'bolder',
                     }}
                  >
                     {errors?.username && <p>{errors?.username?.message || 'Error!'}</p>}
                  </div>
                  <input
                     className="inputForm"
                     placeholder="E-mail"
                     {...register('email', {
                        required: 'Field empty',
                        minLength: {
                           value: 5,
                           message: 'Too short',
                        },
                        pattern: {
                           value: /[a-z0-9]+@[a-z]+.[a-z]{2,3}/i,
                           message: 'Is not E-Mail',
                        },
                     })}
                  />
                  <div
                     style={{
                        height: 40,
                        color: 'red',
                        textAlign: 'center',
                        fontFamily: 'Roboto',
                        fontWeight: 'bolder',
                     }}
                  >
                     {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
                  </div>
                  <input
                     className="inputForm"
                     placeholder="Password"
                     {...register('password', {
                        required: 'Field empty',
                        minLength: {
                           value: 8,
                           message: 'Password must have more than 8 symbols',
                        },
                     })}
                  />
                  <div
                     style={{
                        height: 40,
                        color: 'red',
                        textAlign: 'center',
                        fontFamily: 'Roboto',
                        fontWeight: 'bolder',
                     }}
                  >
                     {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
                  </div>
                  <input
                     className="inputForm"
                     placeholder="Confirm password"
                     {...register('confirm', {
                        required: 'Field empty',
                        minLength: {
                           value: 8,
                           message: 'Password must have more than 8 symbols',
                        },
                     })}
                  />
                  <div
                     style={{
                        height: 40,
                        color: 'red',
                        textAlign: 'center',
                        fontFamily: 'Roboto',
                        fontWeight: 'bolder',
                     }}
                  >
                     {errors?.confirm && <p>{errors?.confirm?.message || 'Error!'}</p>}
                  </div>
                  <button type="submit" className="button">
                     OK
                  </button>
               </form>
               <div>
                  <p className="resultPar">{result}</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default RegistrationPage
