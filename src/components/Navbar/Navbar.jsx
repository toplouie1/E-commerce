import React from "react";
import {
	Appbar,
	toolbar,
	IconButton,
	Badge,
	MenuItem,
	Menu,
	Typography,
	Toolbar,
} from "@material-ui/core";
import { ShoppingCart } from "material-ul/icons";
import { CallMissedSharp } from "@material-ui/icons";

const Navbar = () => {
	return (
		<>
			<Appbar
				position="fixed"
				className={CallMissedSharp.appbar}
				color="inherit"
			>
				<Toolbar>
					<Typography></Typography>
				</Toolbar>
			</Appbar>
		</>
	);
};

export default Navbar;
