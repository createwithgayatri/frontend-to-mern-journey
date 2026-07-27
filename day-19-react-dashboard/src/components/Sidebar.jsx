import {
Drawer,
List,
ListItem,
ListItemText
} from "@mui/material";

const items=[
"Dashboard",
"Orders",
"Products",
"Customers",
"Reports"
];

export default function Sidebar(){

return(

<Drawer
variant="permanent"
>

<List>

{items.map((item)=>(

<ListItem button key={item}>
<ListItemText primary={item}/>
</ListItem>

))}

</List>

</Drawer>

);

}