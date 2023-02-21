import {Button, FormControl, FormGroup, Input, InputLabel, styled, Typography} from "@mui/material";
import {useState, useEffect} from 'react';
import {getUser, editUser} from "../service/api";
import {useParams, useNavigate} from "react-router-dom";

const StyledForm = styled(FormGroup)`
  width: 50%;
  margin: 20px auto 0 auto; 
`

const FormInput = styled(FormControl)`
    margin-top: 20px;
`

const initialValues = {
    name: '',
    username: '',
    email: '',
    phone: ''
}
 
const EditUser = () => {

    const [user, setUser] = useState(initialValues);
    const {id} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        getUserData();
    }, [])

    const getUserData = async () => {
        let res = await getUser(id);
        setUser(res.data);
    }

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const editUserDetails =  async (id) => {
        await editUser(id, user);
        navigate("/all");
    }

  return (
    <StyledForm>
        <Typography variant="h4" textAlign="center">Edit User</Typography>
        <FormInput>
            <InputLabel>Name</InputLabel>
            <Input name="name" value={user.name} onChange={(e) => handleChange(e)}></Input>
        </FormInput>
        <FormInput>
            <InputLabel>Username</InputLabel>
            <Input name="username" value={user.username} onChange={(e) => handleChange(e)}></Input>
        </FormInput>
        <FormInput>
            <InputLabel>Email</InputLabel>
            <Input name="email" value={user.email} onChange={(e) => handleChange(e)}></Input>
        </FormInput>
        <FormInput>
            <InputLabel>Phone</InputLabel>
            <Input name="phone" value={user.phone} onChange={(e) => handleChange(e)}></Input>
        </FormInput>
        <FormInput>
            <Button variant="contained" onClick={() => editUserDetails(user.id)}>Edit User</Button>
        </FormInput>
    </StyledForm>
  )
}

export default EditUser