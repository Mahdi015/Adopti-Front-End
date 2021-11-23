// import React,{useEffect, useState} from 'react'
// import {
//     Button,
//     Card,
//     CardHeader,
//     CardBody,
//     CardTitle,
//     CardText,
//     CardFooter
//   } from "reactstrap";  
// import { Form,FloatingLabel,Col,Row  } from "react-bootstrap";

// export const Completepetpost =() =>{
  
//   const [qst,setqst]=useState()
//   const init = {
//     // qs1  : JSON.parse(localStorage.getItem('qs1')),
//     qs2:"",
//     qs3: "",
//     qs4: "",
//     phonenumber: "",
//     zipcode: "",
//     city: "",
//     state:"",
//     petname: "",
//     pettype: "",
//     petgender: "",
//     petage: "",
//     petcolor: "",
//     pethair: "",
//     pics: [],
//     qs6: "",
//     qs7: "",
//     qs8: "",
//     petstory: "",
//     petdiet: "", 
//   }
//   const [values,setvalues] = useState(init);
 

 
// const getData=()=>{
//   let qs3=[]
//   if(typeof window !== 'undefined'){
//     //Get cart from loclal
//     if (localStorage.getItem("qs3")){
//       qs3=localStorage.getItem("qs3")
//       setvalues({qs3,qs3})
//       //console.log(qs2)
//       //values.push([`qs2`)
//     }
//   }
//   console.log(values)
// }
//     return (
//         <>

// <div className="container p-5" >
//         <div className="row">
//              <div className="col-md-6 offset-md-3">
//         <Form>
//           <Card>
//             <CardHeader><center>Rehome Your Pet</center></CardHeader>
//             <CardBody>
//               <CardTitle>
//                 <h4>Help Us Support Other Pets In Need</h4>
//                 <p>To post your pet on Rehome, you must read and agree to the following: </p>
//                 <br></br>              
//                 <ol>
//                     <li>The adoption fee is set by Adopti. I agree not to charge any additional fees.</li>
//                     <li>The adoption fee will be paid by the adopter on the Rehome website only. I agree not to collect the fee.</li>
//                 </ol>
//                 (All fees are donated by Rehome to support animal shelters and rescues.)

              
//               <Form.Check onChange={(e)=>setqst(e.target.value)} 
//                 inline
//                 label="Yes, I agree not to collect any fees."
//                 value='Yes'
//                 name="qs"
//                 type='radio'
//                 id={`inline-1`}
//             />


//             </CardBody>
//             <CardFooter>
          
//             <center>  <Button onClick={getData}   disabled={qst !== 'Yes'}  className='float-left' >Submit Your Post</Button></center> 
//             </CardFooter>

//           </Card>
   
           
     
           
//         </Form>
//         </div>
//         </div>
//         </div>

//         </>
//     )
// }
// export default Completepetpost;