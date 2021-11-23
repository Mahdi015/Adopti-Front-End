import React,{useState,useEffect} from 'react'
import {Card,CardText,FormGroup,Input,Label} from "reactstrap"; 
import {useSelector} from 'react-redux'
import { Checkbox,Button } from 'antd';
import { createApplication } from '../../functions/user';
import {toast} from 'react-toastify'
import { curruser } from '../../functions/auth';
import { Form  } from "react-bootstrap";


export const Intreducemyself = ({match,history}) => {
    const {slug} = match.params
    const {user} = useSelector((state)=>({...state}))
    const[userinfo,setuserinfo] = useState([])
    const inits = {
        introduction:'',
        phonenumber:'',
        petName:slug

    }
    useEffect(()=>{
       {user && user.token && curruser(user.token)
        .then((res)=>{
            setuserinfo(res.data)
        })}
        
    },[user])
    const [values,setvalues] = useState(inits);
    const [petowner,setpetowner] = useState([])
    const [checkbox,setcheckbox] = useState(false)

    const handlechange=(e) =>{
        setvalues({...values , [e.target.name]: e.target.value})
        console.log(values)
       
    }
    const handleSubmit = () =>{
        createApplication(user.token,values)
        .then((res)=>{
            
            console.log(res.data.petowner.postedBy[0].email)
         
            toast.success('Application Sent !')
            history.push('/home')

        })
    }
    const handleCheckChange =()=>{
        setcheckbox(!checkbox)
    }
    return (
        <div className='container p-4'>
            <div className='row'>
                <div className="col-md-6 offset-md-3">
                    <Card>
                        <div className='p-3 pt-5 '>
                        <CardText>
                            <h2 style={{color:'#4D4751',fontWeight:'bold'}} className='customh2'>Send Your Introduction</h2>
                        </CardText>
                        <i style={{fontSize:'small',color:'#7d7d7d'}} >Review your information which will be sent to the shelter</i>
                        </div>
                        <div className='p-3 pt-3'>
                        <CardText>
                             {  user &&   <h4 style={{color:'#4D4751',fontWeight:'bold'}} className='customh2'>More About {user.fname}</h4>}</CardText>
                             <h4 style={{fontSize:'small',color:'#666666'}}>Desired Pet : {userinfo.qs1}</h4> 
                             <h4 style={{fontSize:'small',color:'#666666'}}>Pet Owner's : {userinfo.qs2}</h4> 
                             <h4 style={{fontSize:'small',color:'#666666'}}>Type of pet owner : {userinfo.qs3}</h4>
                             <h4 style={{fontSize:'small',color:'#666666'}}>Current pet at home : {userinfo.qs4}</h4>
                             <h4 style={{fontSize:'small',color:'#666666'}}>Private Outdoor spaces : {userinfo.qs5}</h4>
                        </div>
                        <div className='p-3 pt-3 '>
                        <CardText>
                      
                            <h4 style={{color:'#4D4751',fontWeight:'bold'}} className='customh2'>Personolize Your Introduction <i style={{fontSize:'x-small'}}>(optional)</i></h4> 
                            </CardText>
                        <FormGroup>
                            <Label for="exampleText"><h4 style={{fontSize:'small',color:'#666666'}}>Briefly tell the shelter why you are a good fit for {slug}
                                . Please do not share email addresses or website links here. The email address you use 
                                for your Adopti  account will be shared in your introduction.</h4></Label>
                            <Input  onChange={(e)=>handlechange(e)} type="textarea" name="introduction" id="exampleText" placeholder={`I Think I am A Good Fit For ${slug} because`} />
                        </FormGroup>
                        </div>

                        <div className='p-3 pt-3'>
                            <CardText>
                            <h2 style={{color:'#4D4751',fontWeight:'bold'}} className='customh2'>Contact Info</h2>
                            </CardText>
                          {user && user.fname &&  <CardText>
                            <h6 style={{color:'#4D4751'}} className='customh2'>First name</h6>
                            {user.fname}
                            </CardText>}
                           
                          { user && user.email && <CardText>
                            <h6 style={{color:'#4D4751'}} className='customh2'>Email</h6>
                            {user.email}
                            </CardText>}
                            <CardText>
                            <h6 style={{color:'#4D4751'}} className='customh2'>Phone Number <i style={{fontSize:'x-small'}}>(optional)</i></h6>
                            </CardText>
                              <FormGroup>
                                <Input
                                onChange={(e)=>handlechange(e)}
                                type="number"
                                name="phonenumber"
                                id="exampleNumber"
                                placeholder="number placeholder"
                                />
                            </FormGroup>
                            <CardText>
                            <h6 style={{color:'#4D4751'}} className='customh2'>Please acknowledge the following in order to continue:</h6>
                            </CardText>
                
<Form.Check 
                        inline
                        onChange={handleCheckChange}
                        label="I understand this form is only an introduction and is NOT an application for adoption.


                        I understand that information I submit is going both to Petfinder and to the shelter, and that Adopti is not responsible for interactions with the shelter."
                        value={checkbox}
                        name="button"
                        type='radio'
                        id={`inline-1`}
                    />   
                       <center>       <Button  disabled={!checkbox} onClick={()=>handleSubmit()} type="primary" shape="round"  >
          Send Your Intro
        </Button></center>
                        </div>
                           
                    </Card>
                </div>

            </div>
        </div>
    )
}
export default Intreducemyself 