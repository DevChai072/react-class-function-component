import React from 'react'

export default function Greet(props) {
    return (
        <div>
            <h1>{props.data}</h1>
            <ul>
                { props.movie.map(item => 
                    <div className="gridContent" key={item.id}>
                        <img src={item.posterUrl}></img>
                    </div>
                ) }
            </ul>
        </div>
    )
}
