import React,{useEffect,useState} from 'react'
import {  Menu, Input } from 'antd'
import { listApprovedPets, paginationList, petCount, petFind, petLove } from '../../functions/pet';
import { useSelector } from 'react-redux';
import {toast} from 'react-toastify'
import { Select } from 'antd';
import PetCard from '../card/card';
import { Pagination } from 'antd';

const { Option } = Select;
export const Findcat = () => {
  const inits = {
    breed:[],
    petage:[],
    color:[],
    coatlength:[],
    petname:[],
    petgenre:[],

}

const { Search } = Input;
const [values,setvalues] = useState(inits);
const {SubMenu} = Menu;
const [pets,setpets] = useState([]);
const [loading,setloading] = useState();
const [defaultPagination,setdefaultPagination] = useState(false);
const {user} = useSelector((state)=>({...state}))

const [breed,setbreed] = useState('');
const [age,setage] = useState('');
const [gender,setgender] = useState('');
const [coatlength,setcoatlength] = useState('');
const [color,setcolor] = useState('');
const [petname,setpetname] = useState('');
const [page,setpage] = useState(1)
const [newpage,setnewpage] = useState(1)
const [allpetCount,setallpetCount] = useState(0)
const [searchpetCount,setsearchpetCount] = useState(0)


useEffect(()=>{
  petCount().then(res=>setallpetCount(res.data))
},[])

const loadpets=()=>{
  setnewpage(1)
  setloading(true)
  paginationList(page)
  .then((res)=>{
    setdefaultPagination(true)
    setloading(false)
  setpets(res.data)
  })
}
  useEffect(()=>{
  
    console.log(values)
  petFind(values,page)
  .then((res)=>{
    setpage(1)
    setdefaultPagination(false)
    setsearchpetCount(res.data.search.length)
    setpets(res.data.search)
  })
  if (breed.length==0 & age.length==0 & gender.length==0 & coatlength.length==0  & color.length==0 & petname.length==0){
    loadpets()
  }

  },[breed,age,gender,coatlength,color,petname,newpage])
useEffect(()=>{
  loadpets();
},[page])
useEffect(()=>{
  loadpets();
},[])

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
  })}
}

const handleBreedChange=(value) =>{
  setbreed(value)
  setvalues({...values,breed:value})

  console.log(breed)

}
const handleAgeChange=(value) =>{
  setage(value)
  setvalues({...values,petage:value})

}
const handleGenderChange=(value) =>{
  setgender(value)
  setvalues({...values,petgenre:value})

}
const handleCoatLength=(value) =>{
  setcoatlength(value)
  setvalues({...values,coatlength:value})

}
const handleColorChange=(value) =>{
  setcolor(value)
  setvalues({...values,color:value})

}
const handlePetNameChange =(value) =>{
  setpetname(value)
  setvalues({...values,petname:value})
}
    //   const fetchproduct = (arg) =>{
    //     getproductsbyfilter(arg).then((res)=>setproducts(res.data))
    // }


    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3 pt-3'>
                    <h4>Search/Filters</h4>
                    <hr/>
                    <Menu defaultOpenKeys={['1','2','3','4','5','6']} mode='inline' style={{ width: '100%' }}>
                        <SubMenu key='1' title='Breed'>
                        <div >
                   <Select
                      mode="multiple"
                      style={{ width: '100%' }}
                      placeholder="Select Breed "
                      onChange={handleBreedChange}
                      optionLabelProp="label"
                      name='breed'
                      id='breed'
                      key='az'
                      
                    >
                      <Option value="Domestic Short Hair" label="Domestic Short Hair">
                        <div className="demo-option-label-item">
                        Domestic Short Hair
                        </div>
                      </Option>
                      <Option value="Domestic Medium Hair" label="Domestic Medium Hair">
                        <div className="demo-option-label-item">
                        Domestic Medium Hair
                        </div>
                      </Option>
                      <Option value="American Shorthair" label="American Shorthair">
                        <div className="demo-option-label-item">
                          American Shorthair
                        </div>
                      </Option>
                      <Option value="Calico" label="Calico">
                        <div className="demo-option-label-item">  
                        Calico
                        </div>
                      </Option>
                    </Select>                
                        </div>
                        </SubMenu>



                        <SubMenu key='2' title='Age'>
                        <div >
                            

                       <Select
                      mode="multiple"
                      style={{ width: '100%' }}
                      placeholder="Select Age"
                      // defaultValue={['china']}
                      onChange={handleAgeChange}
                      optionLabelProp="label"
                      name='age'
                      id='breed'
                    >

                      <Option value="Kitten" label="Kitten">
                        <div className="demo-option-label-item">
                        Kitten
                        </div>
                      </Option>
                      <Option value="Young" label="Young">
                        <div className="demo-option-label-item">
                        Young
                        </div>
                      </Option>
                      <Option value="Adult" label="Adult">
                        <div className="demo-option-label-item">
                          Adult
                        </div>
                      </Option>
                      <Option value="Senior" label="Senior">
                        <div className="demo-option-label-item">  
                        Senior
                        </div>
                      </Option>
                    </Select>                
                        </div>
                        </SubMenu>



                        <SubMenu key='3' title='Gender'>
                        <div >     
                       <Select
                      mode="multiple"
                      style={{ width: '100%' }}
                      placeholder="Select Age"
                      // defaultValue={['china']}
                      onChange={handleGenderChange}
                      optionLabelProp="label"
                      name='gender'
                      id='breed'
                    >

                      <Option value="Male" label="Male">
                        <div className="demo-option-label-item">
                        Male
                        </div>
                      </Option>
                      <Option value="Female" label="Female">
                        <div className="demo-option-label-item">
                        Female
                        </div>
                      </Option>
                    </Select>                
                        </div>
                        </SubMenu>


                        <SubMenu key='4' title='Coat Length'>
                        <div>
                       <Select
                      mode="multiple"
                      style={{ width: '100%' }}
                      placeholder="Select Age"
                      // defaultValue={['china']}
                      onChange={handleCoatLength}
                      optionLabelProp="label"
                      name='coatlength'
                      id='breed'
                    >

                      <Option value="Hairless" label="Hairless">
                        <div className="demo-option-label-item">
                        Hairless
                        </div>
                      </Option>
                      <Option value="Short" label="Short">
                        <div className="demo-option-label-item">
                        Short
                        </div>
                      </Option>
                      <Option value="Medium" label="Medium">
                        <div className="demo-option-label-item">
                        Medium
                        </div>
                      </Option>
                      <Option value="Long" label="Long">
                        <div className="demo-option-label-item">
                        Long
                        </div>
                      </Option>
                    </Select>                
                        </div>
                        </SubMenu>


                        <SubMenu key='5' title='Color'>
                        <div >
                       <Select
                      mode="multiple"
                      style={{ width: '100%' }}
                      placeholder="Select Color"
                      // defaultValue={['china']}
                      onChange={handleColorChange}
                      optionLabelProp="label"
                      name='color'
                      id='breed'
                    >

                      <Option value="White" label="White">
                        <div className="demo-option-label-item">
                        White
                        </div>
                      </Option>
                      <Option value="Black" label="Black">
                        <div className="demo-option-label-item">
                        Black
                        </div>
                      </Option>
                      <Option value="Brown" label="Brown">
                        <div className="demo-option-label-item">
                        Brown
                        </div>
                      </Option>
                      <Option value="Black&White" label="Black&White">
                        <div className="demo-option-label-item">
                        Black&White
                        </div>
                      </Option>
                      <Option value="Gray&White" label="Gray&White">
                        <div className="demo-option-label-item">   
                        Gray & White
                        </div>
                      </Option>
                      <Option value="Gray" label="Gray">
                        <div className="demo-option-label-item">   
                        Gray
                        </div>
                      </Option>
                    </Select>                
                        </div>
                        </SubMenu>
                        <SubMenu key='6' title='Pet Name'>
                        <div >
                        <Search  placeholder="input search text" allowClear  onSearch={handlePetNameChange}  />
                        </div>
                        </SubMenu>
                    </Menu>
                </div>

                <div className='col  pt-2'>
                    {loading ? (<h4 className='text-danger'>Loading...</h4>) : (<h4 className='text-danger'>Pets</h4>)}
                    {pets.length <1 && <p>No Pets Found</p>}
                    <div className='row pb-5 pl-3'>
                        {pets.map((p)=>(
                            <div key={p._id} className='col-md-4 mt-3 '>
                                <PetCard p={p} handlepetlove={handlepetlove}/>
                            </div>
                        ))}

                    </div>
           {defaultPagination ? (  <div className='row'>
            <nav className='col-md-4 offset-md-4 text-center pt-5 p-3'>
            <Pagination  current={page} total={(allpetCount / 3)*10} onChange={(value)=>setpage(value)}/>
            </nav>

            </div>):( <div className='row'>
            <nav className='col-md-4 offset-md-4 text-center pt-5 p-3'>
            <Pagination  current={newpage} total={(searchpetCount / 3)*10} onChange={(value)=>setnewpage(value)}/>
            </nav>

            </div>)}
                </div>

            </div>
    
        </div>
    )
}
export default Findcat;