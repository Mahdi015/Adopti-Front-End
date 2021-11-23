import React,{useState,useEffect} from 'react'
import { getLovedPets, removeLovedPet } from '../../functions/user';
import {toast} from 'react-toastify'
import {useSelector} from 'react-redux'
import Loadingcard from '../card/loadingcard';
import { petLove } from '../../functions/pet';
import PetWishListCard from '../card/petwishlistcard';

export const Petwishlist = () => {
    const {user} = useSelector((state)=>({...state}))
    const {token} = user
    const [pets,setpets] = useState([])
    const [loading,setloading] = useState(true)
    const loadPets = () =>{
        user && user.token &&
         getLovedPets(user.token)
         .then((res)=>{
            setloading(false)
            setpets(res.data.PetWhishlist)
         })
    }
    useEffect(()=>{
        loadPets()
    },[user])
    
  const handlepetlove =(p) =>{
    if (user && user.token){
    petLove(user.token,p._id)
    .then((res)=>{
      if (res.data.ok){
        toast.warning(`${p.petname} Already Loved !!`)
      }else
     { console.log(res.data)
      toast.success(`${p.petname} Loved !`)

    }
    })
  }
  }

  const removePet =(token,petid,petname) =>{
    removeLovedPet(token,petid)
    .then((res)=>{
      toast.success(`${petname} Removed From Your WishLIst`)
      loadPets()
      console.log(res.data)
    })
  }
    return (
        <div className='container'>

                    {pets && pets.length>0 ? (<center><h1>Pet WishList</h1></center>) : 
                    (<center><h1>You Don 't Have Any Pet On Your WishList </h1> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></center>)}
                    {loading ? 
        ( <div className='row'>
          {pets.map((pets)=>(<div key={pets._id} className=' col-md-3 m-5'>
            <Loadingcard />
          </div>))}
        </div>)
         :
        (<div className='row'>
        {pets.map((p)=>(<div key={pets._id} className=' col-md-3 m-5'>
          <PetWishListCard handlepetlove={handlepetlove}  p={p} removePet={removePet} token={token} />
        </div>))}
        </div>) 
}

        </div>
    )
}

export default Petwishlist ;