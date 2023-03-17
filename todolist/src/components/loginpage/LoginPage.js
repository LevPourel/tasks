import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles.css'
import { userLogin } from '../../services/user/users'
import { Navigate } from 'react-router-dom'

function LoginPage(props) {
   const [result, setResult] = useState('')
   const [error, setError] = useState('')
   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm({ mode: 'onBlur' })

   const onsubmit = (data) => {
      userLogin(data).then((r) => {
         if (r['access_token'] !== undefined) {
            localStorage.setItem('jwtToken', r['access_token'])
            setResult(<Navigate to="/TodoList" />)
         } else {
            setResult(r.message)
         }
      })
   }
   return (
      <div className="body">
         <div className="loginMenu">
            <div className="form">
               <p>Log In</p>
               <form
                  onSubmit={handleSubmit(onsubmit)}
                  style={{
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'space-evenly',
                     height: '80%',
                  }}
               >
                  <input
                     className="inputForm"
                     type="text"
                     id="login"
                     placeholder="Username"
                     name="login"
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
                  ></input>
                  <input
                     className="inputForm"
                     type="text"
                     id="password"
                     placeholder="Password"
                     name="Password"
                     {...register('password', {
                        required: 'Field empty',
                        minLength: {
                           value: 8,
                           message: 'Password must have more than 8 symbols',
                        },
                     })}
                  ></input>
                  <button className="button" type="submit">
                     Login
                  </button>
               </form>
               <div className="resultPar">
                  <p id="error">{result}</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default LoginPage
