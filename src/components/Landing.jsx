import React from "react";
import '../assets/stylesheets/landing.css'

function Landing() {

    function changeLang(){
        alert(" ola")
    }

    return (
        <>
            <div className="landing">
                <span id="greeting">Hola, mi nombre es</span>
                <span id="name">Adolfo Juárez</span>
                <span id="career">Programador Web</span>
            </div>
        </>
    );
}

export default Landing;