 import React, {useState} from "react";
 import './styles.css';
 import {BrowserRouter, Link} from "react-router-dom";
function HomePage(props) {
    const registration = {
        userName: 'buttons',
        passWord: 'buttons'
    }
    const [style, setStyle] = useState({registr:'buttons', login:'buttons'})
    function makeActive(key) {
        setStyle(prevState => ({...prevState, [key]:'activebutton'}));
        console.log(key)
    }
    function makeInactive(key) {
        setStyle(prevState => ({...prevState, [key]:'buttons'}));
    }
    return (
        <div className='body'>
            <div className='Main'>
                <div className='content'><h1> Todo List</h1></div>
                <div className='menu'>
                    <div className={style.login} onMouseEnter={()=> makeActive('login')} onMouseLeave={() => makeInactive('login')}>
                            <Link to='/login' className='link'>Login</Link>
                    </div>
                    <div className={style.registr}  onMouseEnter={()=> makeActive('registr')} onMouseLeave={() => makeInactive('registr')}>
                        <Link to='/register' className='link'>Registr</Link></div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;