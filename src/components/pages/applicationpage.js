import React,{useEffect,useState} from 'react'
import {Card,CardText} from "reactstrap"; 
import { listPetApplications } from '../../functions/pet';
import {useSelector} from 'react-redux'
import { Button } from 'antd';
import {Image} from 'react-bootstrap'


export const Applicationpage = ({match}) => {
    const [apps,setapps] = useState([])
    const [index,setindex] = useState(0)
    const {slug} = match.params
    const {user} = useSelector((state)=>({...state}))
    const loadApps= () =>{
        {user && user.token &&
            listPetApplications(user.token,slug)
            .then((res)=>{
                setapps(res.data)
            })
        }
    }
    useEffect(()=>{
        loadApps()
    },[slug])
    const nextbutton =() =>{
        window.scrollTo(0, 0)
        setindex(index+1)
}
const previousbutton =() =>{
    window.scrollTo(0, 0)
    setindex(index-1)
}
    return (
       <div className='container-fluid'>
           <div className='row'>
                <div className='col-md-6 offset-md-3 pt-4 pb-4'>
                  
                    
                           
                       {apps[index] && <Card>
                           <CardText>
                               <div className='p-2 text-center'><h1 style={{color:'#4D4751'}}>{apps[index].UserRequested[0].fname}'s Application</h1></div>
                           </CardText>
                           <CardText>
                               <div className='pl-2 '>
                               <h4 style={{color:'#4D4751'}}> {apps[index].UserRequested[0].fname} Picture</h4>
                               <center><Image src={apps[index].UserRequested[0].picture} roundedCircle /></center>
                                   <h4 style={{color:'#4D4751'}}>More About {apps[index].UserRequested[0].fname}</h4>
                                   <div className='pl-3'>
                                   <h4 style={{fontSize:'small',color:'#4D4751'}}>Desired Pet : {apps[index].UserRequested[0].qs1}</h4> 
                             <h4 style={{fontSize:'small',color:'#4D4751'}}>Pet Owner's : {apps[index].UserRequested[0].qs2}</h4> 
                             <h4 style={{fontSize:'small',color:'#4D4751'}}>Type of pet owner : {apps[index].UserRequested[0].qs3}</h4>
                             <h4 style={{fontSize:'small',color:'#4D4751'}}>Current pet at home : {apps[index].UserRequested[0].qs4}</h4>
                             <h4 style={{fontSize:'small',color:'#4D4751'}}>Private Outdoor spaces : {apps[index].UserRequested[0].qs5}</h4>
                                    </div>
                                </div>
                           </CardText>
                           <CardText>
                               <div className='pl-2 '><h4 style={{color:'#4D4751'}}>Application Introduction</h4>
                               {apps[index].introduction}
                               </div>
                           </CardText>
                           <CardText>
                               <div className='pl-2 '><h4 style={{color:'#4D4751'}}>{apps[index].UserRequested[0].fname}'s Phone Number</h4>
                               {apps[index].phonenumber}
                               </div>
                           </CardText>
                           <Button shape="round" type="success">Accept Application</Button>
                                <br/>
                           {index<apps.length-1? <Button onClick={nextbutton} type="primary" shape="round" icon={<i class="fas fa-arrow-circle-right"></i>}> Next Application</Button>
:(<Button disabled type="primary" shape="round" icon={<i class="fas fa-arrow-circle-right"></i>}>Next Application</Button>)}
                           <br/>
                            {index != 0 ? ((<Button onClick={previousbutton} type="primary" shape="round" icon={<i class="fas fa-arrow-circle-left"></i>}> Previous Application</Button>)):
                            (<Button disabled onClick={previousbutton} type="primary" shape="round" icon={<i class="fas fa-arrow-circle-left"></i>}> Previous Application</Button>)}
                      

                       </Card> }
                   {apps.length == 0 && <h1 className='text-center p-5'>No Application for {slug} <br/><br/><br/><br/><br/><br/><br/></h1>}
                </div>
           </div>
       </div>
    )
}
export default Applicationpage ;