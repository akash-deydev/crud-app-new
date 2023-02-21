import {FormGroup, FormControl, InputLabel, Input, Button, styled, Typography} from "@mui/material";
import {useState} from "react"
import { addUser } from "../service/api";
import {useNavigate} from "react-router-dom"


const StyledForm = styled(FormGroup)`
  width: 50%;
  margin: 20px auto 0 auto;
`;

const InputFields = styled(FormControl)`
  margin-top: 20px;
`;

const initialValue = {
  name:'',
  username:'',
  email:'',
  phone:''
}


const AddUser = () => {

  const [user, setUser] = useState(initialValue);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const addUserDetails = () => {
   addUser(user);
   navigate('/all');
  }

  return (
    <StyledForm>
      <Typography textAlign="center" variant="h4">Add User</Typography>
      <InputFields>
        <InputLabel>Name</InputLabel>
        <Input name="name" onChange={(e) => handleChange(e)}></Input>
      </InputFields>
      <InputFields>
        <InputLabel>Username</InputLabel>
        <Input name="username" onChange={(e) => handleChange(e)}></Input>
      </InputFields>
      <InputFields>
        <InputLabel>Email</InputLabel>
        <Input name="email" onChange={(e) => handleChange(e)}></Input>
      </InputFields>
      <InputFields>
        <InputLabel>Phone</InputLabel>
        <Input name="phone" onChange={(e) => handleChange(e)}></Input>
      </InputFields>
      <InputFields>
        <Button variant="contained" onClick={() => addUserDetails()}>Add User</Button>
      </InputFields>
    </StyledForm>
  )
}

export default AddUser