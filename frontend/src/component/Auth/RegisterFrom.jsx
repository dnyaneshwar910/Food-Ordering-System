import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../State/Authentication/Action';
import { useDispatch } from 'react-redux';

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: ""
};

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const handleSubmit = (values) => {
    console.log("from values",values);
     dispatch(registerUser({userData:values, navigate}))
  };

  return (
    <div>
      <Typography variant="h5" className="text-center">
        Register
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            name="fullName"
            as={TextField}
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Field
            name="email"
            as={TextField}
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Field
            name="password"
            as={TextField}
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="role-simple-select-label">Role</InputLabel>
            <Field
              name="role"
              as={Select}
              labelId="role-simple-select-label"
              id="role-simple-select"
            >
              <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
              <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
            </Field>
          </FormControl>
          <Button sx={{ mt: 2, padding: "1rem" }} fullWidth type="submit" variant="contained">
            Register
          </Button>
        </Form>
      </Formik>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Already have an account?
        <Button size="small" onClick={() => navigate("account/login")}>Login</Button>
      </Typography>
    </div>
  );
};

export default RegisterForm;
