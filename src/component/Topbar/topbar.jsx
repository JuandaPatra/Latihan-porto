import React from "react"
import "./topbar.scss"

const Topbar =({menuOpen,setMenuOpen})=>{
    return(
        <div className={"topbar " +(menuOpen && "active")} >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro">RAHMAD JUANDA PATRA</a>
                </div>
                <p>Hale</p>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line-1"></span>
                        <span className="line-2"></span>
                        <span className="line-3"></span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Topbar