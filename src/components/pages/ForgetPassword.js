import React, { useEffect, useState } from 'react';
import {auth} from '../../Firebase';
import {toast} from 'react-toastify' ;
import {useSelector } from 'react-redux'
import {Button} from 'antd'
import "antd/dist/antd.css";

const ForgotPassword = ({history}) => {
    const [email,setemail] = useState("")
    const {user} = useSelector((state) =>({...state}));

    useEffect(()=>{
        if(user && user.token) history.push("/") ;
    },[user,history])
    const forgotpass = async(e) =>{
        e.preventDefault();
        
        const config = {
            // url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
             url: 'http://localhost:3000/Login',
             handleCodeInApp: true,
         };
         await auth.sendPasswordResetEmail(email , config)
         .then(()=>{
             setemail("")
             toast.success('Check your E-mail for password reset link');

         })
         .catch((error) =>{
             toast.error(error.message); 
         }) ;
 
    };

    return(
        <div className="container col-md-6 offset-md-3 p-5"> 
       <center> <h4>Fofrgot Password</h4> </center>  
       <form>
       <input type="email" className="form-control" placeholder="Enter E-mail" value={email} 
         onChange={(e) =>setemail(e.target.value) } autoFocus />
         <br></br>

         <center> <Button type="primary" className="mb-3" disabled={!email} onClick={forgotpass} block shape="round"  size="large" >Send Reset Link </Button></center> 

        </form>
        </div>
    );
   

};
export default ForgotPassword;