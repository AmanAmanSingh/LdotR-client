import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";

const Home = () => {
	return (
		<>
        <div className="wrapper">
			<h1>Welcome to the Home Page</h1>

			<Button variant="contained" component={Link} to="/users">
				Go to Users
			</Button>
        </div>
		</>
	);
};

export default Home;
