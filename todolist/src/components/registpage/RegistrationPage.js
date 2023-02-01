import React, {useState} from "react";
import './styles.css'
import {useForm} from "react-hook-form";

function RegistrationPage() {
    const [result, setResult] = useState('');
    function createNewProfile(){
        const userName = document.getElementById('username')
        const email = document.getElementById('email')
        const password = document.getElementById('password')
        const pswrdConf = document.getElementById('pswrdConf')
        checkData(userName.value, email.value , password.value, pswrdConf.value);
        function checkData(userName , email , password , pswrdConf){
            const dataArr = []
            dataArr.push(userName , email , password , pswrdConf)
            for(let i = 0; i<=3; i++){
                if(!dataArr[i]){
                    setResult('Данные пусты')
                    return;
                }

            }
            if(email.indexOf('@')<0){
                setResult('Не верно указана почта')
                return;
            }
            else if(password !== pswrdConf){
                setResult('Пароли не совпадают')
                return
            }
            else {setResult('Регистрация успешна')
            }
            return;
        }
    }
    return (
        <div className='body'>
            <div className='itemMenu'>
                <h1 className='itemHeader'>Registration</h1>
                <div className='regMenu'>
                    <input name='userName' placeholder='Enter your login' className='regInp' id='username'></input>
                    <input name='email' placeholder='Enter your email ' className='regInp' id='email'></input>
                    <input name='password' placeholder='Enter your password ' type='password' className='regInp' id='password'></input>
                    <input name='email' placeholder='Confirm your password ' type='password' className='regInp' id='pswrdConf'></input>
                    <button className='regButt' onClick={createNewProfile}>OK</button>
                    <div><p className='resultPar'>{result}</p></div>
                </div>
            </div>
        </div>)

}

export default RegistrationPage