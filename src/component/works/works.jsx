import React from "react"
import "./works.scss"

const Works =()=>{
    const data =[
        {
            "name" : "Keyboard",
            "image" : "https://images.unsplash.com/photo-1619683172106-ff242162eb4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
            "description" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, suscipit!"
        },
        {
            "name" : "Keyboard",
            "image" : "https://images.unsplash.com/photo-1625397251660-ea04c904b016?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=639&q=80",
            "description" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, suscipit!"
        },
        {
            "name" : "Keyboard",
            "image" : "https://images.unsplash.com/photo-1515849430397-7aee921bbea1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            "description" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, suscipit!"
        },
        {
            "name" : "Keyboard",
            "image" : "https://images.unsplash.com/photo-1552548329-64471f10571f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
            "description" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, suscipit!"
        }

        

    ]

    return(
        <div className="works" id="works">
            <div className="arrow">
                <h1>Kiri</h1>
            </div>
            <div className="slider" style={{transform: "translateX"}}>
                {data.map(item => {
                    return(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <p>{item.description}.</p>
                            </div>
                        </div>
                        <div className="right">
                            <img src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                        </div>
                    </div>
                </div>)}
                )}
            </div>
            <div className="arrow">
                <h1>Kanan</h1>
            </div>

        </div>
    )
}

export default Works