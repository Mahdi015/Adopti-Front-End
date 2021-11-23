import React, { useState,useEffect } from 'react'
import { getUserPetCount } from '../functions/user';

export const PetCount = ({userId}) => {
    const[countPet,setcountPet] = useState(0)
    const count = () =>{
        getUserPetCount(userId)
        .then((res)=>{
            setcountPet(res.data)
        })
    }
    useEffect(()=>{
        count()
    },[])
    return (<div>{countPet}</div>)
}
export default PetCount;