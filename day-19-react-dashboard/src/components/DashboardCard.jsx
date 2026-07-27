import {
Card,
CardContent,
Typography
} from "@mui/material";

export default function DashboardCard({title,value}){

return(

<Card>

<CardContent>

<Typography
variant="h6"
>

{title}

</Typography>

<Typography
variant="h4"
>

{value}

</Typography>

</CardContent>

</Card>

);

}