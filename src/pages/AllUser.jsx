import {Table,TableRow, TableHead, TableBody, TableCell, Button, styled} from "@mui/material";
import {useEffect, useState} from "react";
import {getUsers, deleteUser} from "../service/api";
import { Link} from "react-router-dom"


const StyledTable = styled(Table)`
  width: 90%;
  margin: 20px auto 0 auto;
`
 



const AllUser = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  },[])

  const getAllUsers = async () => {
    const res = await getUsers();
    setUsers(res.data)
  }

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  }


  return (
    <StyledTable>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody> 
        {
          users.map((user) => {

            return (
          <TableRow key={user.id}>
        <TableCell>{user.id}</TableCell>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.username}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.phone}</TableCell>
        <TableCell>
        <Button variant="contained" style={{marginRight:"10px"}} component={Link} to={`/edit/${user.id}`} >Edit</Button> 
        <Button variant="contained" color="secondary" onClick={() => deleteUserData(user.id)}>Delete</Button> 
        </TableCell>
        </TableRow>

            )
          })
        }
        
      </TableBody>
    </StyledTable>
  )
}

export default AllUser