import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Sidedbar from "../sidebar/sidedbar";
import { Table } from "reactstrap";
import { getUserPetCount, getUsers } from "../../functions/user";
import ModalImage from "react-modal-image";
import PetCount from "../petCount";

export const AdminAccountmangment = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [loading, setloading] = useState(false);
  const [users, setusers] = useState([]);
  const [petcount, setpetcount] = useState(0);
  const loadUsers = () => {
    {
      user &&
        user.token &&
        getUsers(user.token).then((res) => {
          setusers(res.data);
        });
    }
  };
  useEffect(() => {
    loadUsers();
  }, [user]);
  const getCount = (userId) => {
    return getUserPetCount(userId).then((res) => {});
  };
  return (
    <>
      <div className="container-fluid pt-5">
        <div className="row">
          <Sidedbar user={user} />

          <div className="col-md-6 offset-md-4 pt-5  ">
            <Table className="tbcustom" borderless>
              <thead>
                <tr>
                  <th>User Picture</th>
                  <th>User Name</th>
                  <th>Member Since</th>
                  <th>Owned Pets</th>
                  <th>Delete User</th>
                </tr>
              </thead>
              {/* {JSON.stringify(users)} */}
              <tbody>
                {users.map((u) => (
                  <tr>
                    <td>
                      <div style={{ width: "100px", height: "austo" }}>
                        <ModalImage small={u.picture} large={u.picture} />
                      </div>
                    </td>
                    <td>{u.fname}</td>
                    <td>{new Date(u.createdAt).toLocaleString()}</td>
                    <td>
                      <center>
                        <PetCount userId={u._id} />
                      </center>
                    </td>
                    <td>
                      <center>
                        <i
                          style={{ cursor: "pointer" }}
                          class="fas fa-trash-alt "
                        ></i>
                      </center>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminAccountmangment;
