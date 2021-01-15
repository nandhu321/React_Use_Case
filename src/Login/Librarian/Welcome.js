import React from 'react'

import './Welcome.css'

const Welcome =(props)=>
{
    const date =new Date()
    const hours=date.getHours()
    let msg
    if(hours<12)
    {
        msg="Good morning "
    }
    else if(hours>=12 && hours<16 )
    {
        msg="Good Afternoon "
    }
    else
    {
        msg="Good Evening "
    }
    return(
        <div class="alert alert-info" id="sa" role="alert">
        <b>{msg}{props.user}, Welcome to National Library</b>
      </div>
    )
}

export default Welcome