import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Alert
} from "@mui/material";

import PasswordStrength from "./PasswordStrength";

function ValidationForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

    setSuccess(false);
  };

  const validate = () => {

    let temp = {};

    const nameRegex = /^[A-Za-z ]{3,}$/;

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!nameRegex.test(form.name))
      temp.name =
        "Name should contain only letters (Min 3 chars)";

    if (!emailRegex.test(form.email))
      temp.email =
        "Enter valid email";

    if (!passwordRegex.test(form.password))
      temp.password =
        "Password must contain uppercase, number & special character";

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (validate()) {

      setSuccess(true);

      setForm({
        name: "",
        email: "",
        password: ""
      });

      setErrors({});
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      mt={5}
    >

      <Paper
        elevation={5}
        sx={{
          p:4,
          width:450
        }}
      >

        <Typography
          variant="h4"
          align="center"
          gutterBottom
        >
          React Form Validation
        </Typography>

        {success &&
          <Alert severity="success">
            Form Submitted Successfully!
          </Alert>
        }

        <form onSubmit={handleSubmit}>

          <TextField
            label="Full Name"
            fullWidth
            margin="normal"
            name="name"
            value={form.name}
            onChange={handleChange}
            error={Boolean(errors.name)}
            helperText={errors.name}
          />

          <TextField
            label="Email"
            fullWidth
            margin="normal"
            name="email"
            value={form.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            name="password"
            value={form.password}
            onChange={handleChange}
            error={Boolean(errors.password)}
            helperText={errors.password}
          />

          <PasswordStrength
            password={form.password}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ mt:3 }}
            type="submit"
          >
            Submit
          </Button>

        </form>

      </Paper>

    </Box>
  );
}

export default ValidationForm;