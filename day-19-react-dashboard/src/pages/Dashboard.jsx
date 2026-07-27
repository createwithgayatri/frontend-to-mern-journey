import {
    Box,
    Grid
} from "@mui/material";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import SalesChart from "../components/SalesChart";
import OrdersTable from "../components/OrdersTable";

function Dashboard() {

    return (

        <Box sx={{display:"flex"}}>

            <Sidebar/>

            <Box sx={{flexGrow:1,p:3}}>

                <Navbar/>

                <Grid container spacing={3} mt={2}>

                    <Grid item xs={12} sm={6} md={3}>
                        <DashboardCard
                            title="Revenue"
                            value="$15,420"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <DashboardCard
                            title="Orders"
                            value="258"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <DashboardCard
                            title="Users"
                            value="3,245"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <DashboardCard
                            title="Profit"
                            value="$8,920"
                        />
                    </Grid>

                </Grid>

                <Box mt={5}>
                    <SalesChart/>
                </Box>

                <Box mt={5}>
                    <OrdersTable/>
                </Box>

            </Box>

        </Box>

    );
}

export default Dashboard;