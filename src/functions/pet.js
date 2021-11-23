import axios from 'axios'


export const createPet = async (pet,authtoken) => 
await axios.post(`${process.env.REACT_APP_API}/pet/createPet`,pet,{
    headers : {
        authtoken,
    },
});


export const listPets = async (sort,order) => 
await axios.post(`${process.env.REACT_APP_API}/pet/listPets`,{sort,order});


export const listPetsbylove = async () => 
await axios.post(`${process.env.REACT_APP_API}/pet/listPetsbylove`,{});


export const petLove = async (authtoken,petId) => 
await axios.put(`${process.env.REACT_APP_API}/pet/petlove/${petId}`,{},{
    headers : {
        authtoken,
    },
});


export const changestatus = async (authtoken,petId,reviewStatus) => 
await axios.put(`${process.env.REACT_APP_API}/pet/status/${petId}`,{reviewStatus},{
    headers : {
        authtoken,
    },
});
 
export const listApprovedPets = async (sort,order,max) => 
await axios.post(`${process.env.REACT_APP_API}/pet/listApprovedPets`,{sort,order,max});


export const petFind = async (values,page) => 
await axios.post(`${process.env.REACT_APP_API}/pet/find`,{values,page});


export const paginationList = async (page) => 
await axios.post(`${process.env.REACT_APP_API}/pet/paginationList`,{page});


export const petCount = async () => 
await axios.get(`${process.env.REACT_APP_API}/pet/count`,{});




export const getPetByOwner = async (authtoken) => 
await axios.post(`${process.env.REACT_APP_API}/pet/getPetByOwner`,{},{
    headers : {
        authtoken,
    },
});

export const removePet = async (authtoken,petId) => 
await axios.put(`${process.env.REACT_APP_API}/pet/deletePet/${petId}`,{},{
    headers : {
        authtoken,
    },
});

export const getPet = async (slug) => 
await axios.get(`${process.env.REACT_APP_API}/pet/${slug}`,{});

export const getPetApplication = async (authtoken,petId) => 
await axios.post(`${process.env.REACT_APP_API}/pet/petApplication/${petId}`,{},{
    headers : {
        authtoken,
    },
});

export const listPetApplications = async (authtoken,slug) => 
await axios.post(`${process.env.REACT_APP_API}/pet/listApps/${slug}`,{},{
    headers : {
        authtoken,
    },
});