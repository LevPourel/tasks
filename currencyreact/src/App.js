import './App.css';
import React, {useState , useEffect} from "react";

function App() {
    async function getLink() {
        let linkAPI =  await fetch('https://random.dog/woof.json').then(function (data){ return data.json().then(function (data){
            return data['url']
        })})
        return await linkAPI;
    }

    const link = getLink()
    console.log(link)
    return (
        <div className="App">
            <header className="App-header">
                <div className="menu">
                    <div className="menuItem">
                        <img src={link} className="imgTarget"></img>
                    </div>
                </div>
                <button className="Button">Random</button>
            </header>
        </div>
    );
}

export default App;
