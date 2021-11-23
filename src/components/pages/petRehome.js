import React, { useState } from 'react'
import Firstform from './firstform'



export const PetRehome = () => {

const [page,setpage]=useState(1)





    return (
        <div>

       <div>Progresse Bar
           <form/>
       </div>
        {page === 1 && <Firstform page={page} setpage={setpage}/>}
        {page === 2 && <div>2nd Form</div>}
        </div>
        
    )


}


export default PetRehome


