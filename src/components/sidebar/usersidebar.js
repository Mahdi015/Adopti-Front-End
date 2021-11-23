import React from 'react'
import { useHistory } from 'react-router-dom'
import { sidebardata } from './usersidebardata'

function Usersidebar  ({user})  {
let history = useHistory()
    return (
        <div className='UserSideBarwoiuw'>
            {user && user.email ?  <div className='custemedtext pt-2'>Welcome Admin :  {'  ' }   {user.email.split('@')[0].toUpperCase()} </div> :''}
            <ul className='UserSideBarListwioiuw'>
            {sidebardata.map((val,key)=>{
                return(
                    <li id={window.location.pathname == val.links ? "active" :''} className='rowwioiuw' key={key} onClick={()=>history.push(`${val.links}`)}>
                        <div id='icon'>{val.icon}</div><div id='title'>{val.title}</div>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}
export default Usersidebar
