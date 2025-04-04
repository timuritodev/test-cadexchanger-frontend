import { AppBar, Button, Toolbar } from '@mui/material';
import Link from 'next/link';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  position: sticky;
  top: 0;
  z-index: 1100;
`;

const Header = () => (
	<StyledAppBar>
		<Toolbar>
			<Link href="/" passHref>
				<Button color="inherit">Home</Button>
			</Link>
			<Link href="/contact" passHref>
				<Button color="inherit">Contact Us</Button>
			</Link>
		</Toolbar>
	</StyledAppBar>
);

export default Header;
