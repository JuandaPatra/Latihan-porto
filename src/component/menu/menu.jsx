import React from "react"
import "./menu.scss"

const Menu =({menuOpen, setMenuOpen})=>{
    return(
        <div className={"menu " + (menuOpen && "active")}>
            <a href="#intro" onClick={()=>setMenuOpen(false)}>HOME</a>
            <a href="#portfolio">PORTFOLIO</a>
            <a href="#testimonial">TESTIMONIALS</a>
            <a href="#contact">CONTACT</a>
            <a href="#works">WORKS</a>

        </div>
    )
}
export default Menu