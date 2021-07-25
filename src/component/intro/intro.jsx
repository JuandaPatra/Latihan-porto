import React,{useRef, useEffect} from "react"
import "./intro.scss"
import gambar from "../../assets/gambar.jpg"
import { init } from "ityped"

const Intro =()=>{
    const textRef = useRef()

    useEffect(()=>{
        init(textRef.current, { showCursor: false, strings: ['Frontend Developer', 'Backend Developer', 'FullStack Developer' ] })

    },[])
    return(
        <div className="intro" id="intro">
            <div className="left">
                <div className="ImgContainer">
                    <img src={gambar}/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello There I'm</h2>
                    <h1>Rahmad Juanda Patra</h1>
                    <p ref={textRef}></p>
                </div>
            </div>

        </div>
    )
}

export default Intro