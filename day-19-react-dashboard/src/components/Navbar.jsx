import {
AppBar,
Toolbar,
Typography,
IconButton,
Badge
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Navbar(){

return(

<AppBar
position="static"
color="transparent"
elevation={1}
>

<Toolbar>

<Typography
variant="h6"
sx={{flexGrow:1}}
>
Dashboard
</Typography>

<IconButton>

<Badge
badgeContent={4}
color="error"
>

<NotificationsIcon/>

</Badge>

</IconButton>

</Toolbar>

</AppBar>

);

}