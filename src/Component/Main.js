import React from 'react';
import petit from "../img/petit.PNG";

const Main = () => {
    return (
        <div>
            <div>
            <h1>Votre nom ici</h1>
            <br/>
            <img src="/image/badboy.jpg" alt="badboy"/>
            <br/>
            <img src={petit} alt="petit"/>
            </div>
        </div>
    );
};

export default Main;