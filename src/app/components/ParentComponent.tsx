import React from "react"
import ChildComponent from "./ChildComponent"

const ParentComponent = () => {

    const myName = "Uzair Bin Asif";
    const doing = "programmer";
    const working = "eating"

    return(
        <div className="flex flex-col items-center justify-around h-screen">
            <ChildComponent name={myName}/>
            <ChildComponent name={doing}/>
            <ChildComponent name={working}/>
        </div>
    )
}

export default ParentComponent