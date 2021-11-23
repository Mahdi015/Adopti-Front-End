import React from 'react'
import { useHistory } from 'react-router-dom'
import { sidebardata } from './sidebardata'
import { useSelector } from 'react-redux';
function Sidedbar  ({user})  {
let history = useHistory()
    return (
        <div className='Sidebarwioiuw'>
            {user && user.email ?  <div className='custemedtext p-3'>Welcome Admin :  {'  ' }   {user.email.split('@')[0].toUpperCase()} </div> :''}
            <ul className='SideBarListwioiuw'>
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
export default Sidedbar
