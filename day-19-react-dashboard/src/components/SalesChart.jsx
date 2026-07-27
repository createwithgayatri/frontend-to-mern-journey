import {
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip
} from "recharts";

const data=[
{name:"Jan",sales:400},
{name:"Feb",sales:700},
{name:"Mar",sales:600},
{name:"Apr",sales:900},
{name:"May",sales:1200},
];

export default function SalesChart(){

return(

<LineChart
width={700}
height={300}
data={data}
>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>

<Line
type="monotone"
dataKey="sales"
stroke="#1976d2"
/>

</LineChart>

);

}