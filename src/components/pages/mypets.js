import React,{useState,useEffect} from 'react'
import {Card, Table} from "reactstrap"; 
import {Badge,Modal,ModalFooter,ModalTitle,ModalBody } from 'react-bootstrap'
import { getPetApplication, getPetByOwner, removePet } from '../../functions/pet';
import Usersidebar from '../sidebar/usersidebar';
import {useSelector} from 'react-redux'
import ModalImage from 'react-modal-image'
import { Button } from 'antd';
import {Spinner} from 'react-bootstrap'
import {toast, Toast} from 'react-toastify'
import PetApplicationCount from '../petApplicationCount';

export const Mypets = ({history}) => {

    const {user} = useSelector((state)=>({...state}))
    const [pets,setpets] = useState([])
    const [currPet,setcurrPet] = useState("")
    const [show, setShow] = useState(false);
    const [currPetId, setcurrPetId] = useState("");

    const[loading,setloading] = useState(true)
const loadPets = () =>{
    getPetByOwner(user.token)
    .then((res)=>{
        setloading(false)
        setpets(res.data)
        
    })
}
useEffect(()=>{
    
   { user && user.token && loadPets()
}
},[user])
const customBadge =(status) =>{
    switch(status) {
        case 'Waiting Review':
            return (<Badge bg="primary">Waiting Review</Badge>)
        case 'Approved':
           return  (<Badge bg="success">Approved</Badge> )
        case 'Cancelled':
            return(<Badge bg="danger">Cancelled</Badge>)
      }
}

const handleClose = () => setShow(false);
const handleRemove =(name,id) =>{
    setShow(true)
    setcurrPet(name)
    setcurrPetId(id)
}
const removeMyPet =(id)=>{
    removePet(user.token,id)
    .then((res)=>{
        toast.success(`${res.data.petname} is Deleted`)
        loadPets()
    })
    setShow(false)

}
    return (
        <div className='container-fluid'>
        <div className='row'>
            <div className='col-sm-2 pt-4'>
        <Card>
            <Usersidebar/>
      </Card>
           </div>
            <div className='col-md-6 offset-md-2 pt-3   '>
{ pets.length>0 ?        (<Table className='tbcustom'  borderless  >
  <thead>
    <tr>
      <th>Pet Picture</th>
      <th>Pet Name</th>
      <th>Posted On</th>
      <th>Viewrs</th>
      <th>Applications</th>
      <th>Status</th>
      <th>Edit</th>
      <th>Remove</th>
    </tr>
  </thead>

  <tbody>
      <tr>
          <td colSpan='6'>{loading ?  ( <center><Spinner animation="border" role="status">
                                <span className="visually-hidden pr-2 pl-2">Loading...</span>
                                </Spinner></center>) : ('')}</td>
      </tr>
      {pets.map((p)=>(
          <tr>
                 <td>
                    <div style={{width:'100px',height:'austo'}}>
                        <ModalImage small={p.pics[0].url} large={p.pics[0].url}/>
                    </div>
                </td>
                <td>{p.petname}</td>
                <td>{new Date(p.createdAt).toLocaleString() }</td>
                <td>0 <i class="fas fa-eye"></i></td>
                <td><center><PetApplicationCount petname={p.petname} user={user} petId={p._id}/> </center></td>
                <td>{customBadge(p.reviewStatus)}</td>
                <td><center><i onClick={()=>history.push(`/pets/${p.slug}`)} style={{cursor:'pointer'}}  class="fas fa-edit"></i></center></td>
                <td><center><i onClick={()=>handleRemove(p.petname,p._id)} style={{cursor:'pointer'}}  class="fas fa-trash-alt "></i></center></td>
          </tr>
      ))}

  </tbody>
</Table>) : <> <center><h1>You Don't Have Pets</h1></center> <br/>
   <center> <Button onClick={()=>history.push('/petrehome')} type="primary">Add Pets</Button></center>

 </>}
        </div>
        </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remove Pet</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure To Remove Your Pet {currPet}!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>removeMyPet(currPetId)}>
            Yes
          </Button>
          <Button variant="primary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
}
export default Mypets