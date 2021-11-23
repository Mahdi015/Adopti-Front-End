import axios from "axios";

export const createUser = async (authtoken, fname, lname, adresse) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/user/createUser`,
    { fname, lname, adresse },
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const checkUser = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/user/checkUser`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const currUser = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/user/currUser`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const updateUserData = async (authtoken, userData, userId) => {
  return await axios.put(
    `${process.env.REACT_APP_API}/user/${userId}`,
    { userData },
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const getLovedPets = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/user/getLovedPets`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const removeLovedPet = async (authtoken, removedPet) => {
  return await axios.put(
    `${process.env.REACT_APP_API}/user/removeLovedPets/${removedPet}`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const getUsers = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/user/getUsers`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const getUserPetCount = async (userId) =>
  await axios.get(
    `${process.env.REACT_APP_API}/user/getUserPetCount/${userId}`,
    {}
  );

export const createApplication = async (authtoken, values) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/user/petApplication`,
    { values },
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const checkPetApplication = async (authtoken, petId) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/user/checkPetApplication`,
    { petId },
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const updateUserAdopterProfile = async (authtoken, values) => {
  return await axios.put(
    `${process.env.REACT_APP_API}/user/update/adopterProfile`,
    { values },
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const getAllUSers = async () =>
  await axios.get(`${process.env.REACT_APP_API}/user/getAllUsers`, {});
