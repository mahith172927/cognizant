import React from "react";

export function Scorebelow70(props)
{
    var players70=[];

    props.players.map((item)=>
    {
        if(item.score<=70)
        {
            players70.push(item);
        }
    });

    return(
        players70.map((item)=>
        {
            return(
                <div>
                    <li>
                        Mr. {item.name}
                        <span> {item.score}</span>
                    </li>
                </div>
            )
        })
    )
}