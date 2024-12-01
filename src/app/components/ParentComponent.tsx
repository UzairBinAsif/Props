import React from "react"
import ChildComponent from "./ChildComponent"

const ParentComponent = (props: any) => {

    let myName = "Uzair Bin Asif";
    let doing = "programmer";
    let working = "eating"

    return(
        <div className="flex flex-col items-center justify-around h-screen">
            <ChildComponent x={myName}/>
            <ChildComponent x={doing}/>
            <ChildComponent x={working}/>
        </div>
    )
}

export default ParentComponent