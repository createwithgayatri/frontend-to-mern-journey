import {
Table,
TableBody,
TableCell,
TableContainer,
TableHead,
TableRow,
Paper
} from "@mui/material";

const rows=[

{
id:1,
customer:"John",
amount:"$120",
status:"Completed"
},

{
id:2,
customer:"Alice",
amount:"$95",
status:"Pending"
},

{
id:3,
customer:"David",
amount:"$310",
status:"Completed"
}

];

export default function OrdersTable(){

return(

<TableContainer component={Paper}>

<Table>

<TableHead>

<TableRow>

<TableCell>ID</TableCell>

<TableCell>Customer</TableCell>

<TableCell>Amount</TableCell>

<TableCell>Status</TableCell>

</TableRow>

</TableHead>

<TableBody>

{rows.map((row)=>(

<TableRow key={row.id}>

<TableCell>{row.id}</TableCell>

<TableCell>{row.customer}</TableCell>

<TableCell>{row.amount}</TableCell>

<TableCell>{row.status}</TableCell>

</TableRow>

))}

</TableBody>

</Table>

</TableContainer>

);

}