import React, { useContext } from 'react';
import { RoutesContext } from './configs/routeConfig';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const List = styled.li`
	display: block;
`;

// List all high level api routes
const ListRoutes = () => {
	const routes = useContext(RoutesContext).slice().reverse();
	return <ul>
		{
			routes.map((r, idx) => (
				<List key={idx}>
					<Link to={r.path}> {r.name}</Link>
				</List>
			))
		}
	</ul>
}

export default function Home(props) {
	return (
		<div>
			<h1>This is home page</h1>
			<ListRoutes />
		</div>
	);
}