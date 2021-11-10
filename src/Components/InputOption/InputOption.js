import React from 'react'
import '../InputOption/InputOption.css'

function InputOption({Icon, title, color}) {
    return (
        <div className="inputOption">
            <Icon stye={{color: color}}/>
            <h4>{title}</h4>

        </div>
    )
}

export default InputOption
