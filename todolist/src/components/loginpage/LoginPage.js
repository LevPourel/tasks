import React, {useState} from "react";
import './styles.css'
function LoginPage (props) {
    const[result , setResult] = useState('')
    function getNext() {
        const password = document.getElementById('password')
        const username = document.getElementById('login')
        const userName = username.value
        const passWord = password.value;
        if(!userName && !passWord) {
            setResult('Empty field')
        }
        else if(userName !=='Lev'){
            setResult('Unused login')
        }
        else if(passWord !=='123'){
            setResult('Invalid password')
        }
        else { setResult('Succes')}
    }
    return (
        <div className='body'>
            <div className='loginMenu'>
                <div className='form'>
                    <p>Log In</p>
                    <input className='inputForm'
                           type='text'
                           id='login'
                           placeholder='Username'
                           name='login'>
                    </input>
                    <input className='inputForm'
                           type='text'
                           id='password'
                           placeholder='Password'
                           name='Password'>
                    </input>
                    <button className='button' onClick={getNext}>Login</button>
                    <div className='resultPar'><p>{result}</p></div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage