import { LinearProgress, Typography } from "@mui/material";

function PasswordStrength({ password }) {
  let strength = 0;
  let label = "";

  if (password.length >= 8) strength += 25;
  if (/[A-Z]/.test(password)) strength += 25;
  if (/[0-9]/.test(password)) strength += 25;
  if (/[^A-Za-z0-9]/.test(password)) strength += 25;

  if (strength <= 25)
    label = "Weak";
  else if (strength <= 50)
    label = "Medium";
  else if (strength <= 75)
    label = "Good";
  else
    label = "Strong";

  return (
    <>
      <Typography mt={2}>
        Password Strength : {label}
      </Typography>

      <LinearProgress
        variant="determinate"
        value={strength}
        sx={{
          height: 10,
          borderRadius: 5,
          mt: 1
        }}
      />
    </>
  );
}

export default PasswordStrength;