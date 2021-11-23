import React,{useEffect,useState} from 'react'
import { getPet, petLove } from '../../functions/pet'
import Carousel  from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {Card,CardText} from "reactstrap"; 
import ViewPetCard from '../card/viewpetcard';
import {useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import { checkPetApplication } from '../../functions/user';



export const Viewpet = ({match}) => {

    const {slug} = match.params
    const [pet,setpet] = useState([])
    const [value,setvalue] = useState(0)

    const [button,setbutton] = useState(false)
    const {user} = useSelector((state)=>({...state}))

    useEffect(()=>{
        loadPet()
    

     
    },[slug])
    useEffect(()=>{
        checkApp()
    },[user,pet])

    const checkApp =() =>{
        {user && pet && 
            checkPetApplication(user.token,pet._id)
            .then((res)=>{
                if (res.data == 1){
                    setbutton(true)
                }
            })
        }
    }
 

    const loadPet = () =>{
        getPet(slug)
        .then((res)=>{
            setpet(res.data)
        })
    }
        
    const handlepetlove =(p) =>{
        if (user && user.token){
        petLove(user.token,p._id)
        .then((res)=>{
          if (res.data.ok){
            toast.warning(`${p.petname} Already Loved !!`)
          }else
         { console.log(res.data)
          toast.success(`${p.petname} Loved !`)
          loadPet()
        }
        })
      }
      }
        
      
    return (
        <div className='container'>
         <div className='row'>

            <div className='col'>

           
                {pet && pet.pics &&  
                <Carousel    plugins={['arrows']}>
                    <img  src={pet.pics[0].url} />
                    <img src={pet.pics[1].url} />
                </Carousel>
                                
                }

             </div>

             <div className='col pb-5 pt-3'>
                <Card>
                    <CardText><h3 style={{color:'#4D4751'}} className='pt-4 pl-4'>{pet.petname}</h3></CardText>
                    <span>

                    <a className='pl-4' href={`/pet-breed/${pet.breed}`}>{pet.breed}</a>  . {pet.city} , {pet.state}
                   </span>
                   <hr></hr>
                   <span style={{color:'#4D4751'}} className='pl-4'>{pet.petage} . {pet.petgender} . {pet.petcolor}</span>
                   <hr></hr>
                   <CardText><h4 style={{color:'#4D4751'}} className='pt-2 pl-4'>About</h4></CardText>
                   <span style={{color:'#4D4751'}} className=' pl-4'>COAT LENGTH</span>
                   <span style={{color:'#4D4751',fontSize:'small'}} className='pl-4'>{pet.coatlength} </span>
                   <span style={{color:'#4D4751'}} className='pt-3 pl-4'>HOUSE-TRAINED</span>
                   <span style={{color:'#4D4751',fontSize:'small'}} className='pl-4'>{pet.qs2} </span>
                   <span style={{color:'#4D4751'}} className='pt-3 pl-4'>HEALTH</span>
                   <span style={{color:'#4D4751',fontSize:'small'}} className='pl-4'>{pet.qs3} </span>
                   <span style={{color:'#4D4751'}} className='pt-3 pl-4'>GOOD IN A HOME WITH</span>
                   <span style={{color:'#4D4751',fontSize:'small'}} className='pl-4'>{pet.qs4} </span>
                   <span style={{color:'#4D4751'}} className='pt-3 pl-4'>PREFERS A HOME WITHOUT</span>
                   <span style={{color:'#4D4751',fontSize:'small'}} className='pl-4'>{pet.qs6} </span>
                   <hr></hr>
                   <span >
                    <h6 className='pl-4' style={{fontStyle:'italic',fontSize:'15px',color:'#7f7a82',textAlign:'justify'}}> <i class="fas fa-bell"></i> Adopti recommends that you should always take reasonable security steps before making online payments.</h6>
                   </span>
                   <hr></hr>
                   <CardText><h4 style={{color:'#4D4751'}} className='pt-2 pl-4'>Meet {pet.petname}</h4></CardText>
                   <span><p className='pl-4' style={{color:'#4D4751'}}>{pet.petstory}</p>
                   <br></br>
                   <p className='pl-4' style={{color:'#4D4751'}}>If you are interested in adopting {pet.petname}, please contact us at adopti-tn@gmail.com. The adoption fee is $125 for one and $200 for two.</p>
                   </span>



                </Card>
             </div>
             <div  className='col-md-4 pt-5'>
                <ViewPetCard  button={button} p={pet} handlepetlove={handlepetlove}/>
             </div>

        </div>
        </div>
    )
}

export default Viewpet;