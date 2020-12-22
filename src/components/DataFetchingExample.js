import React, { useEffect, useState } from 'react'

export default function DataFetchingExample() {
	const [list, setList] = useState([])

	useEffect(() => {
		async function getArticleList() {
			const response = await fetch('/api/users');
			return response
		}

		getArticleList()
			.then((res) => {
				const { users = [] } = JSON.parse(res._bodyText);
				setList(users)
			})
			.catch((res) => {
				console.log('fetch article list error = ', res);
			});

	}, []);

	return (
		<div>
			API fetch list:
			{
				list.map(({ name, id }) => {
					return <div key={id}>{name}</div>
				})
			}
		</div>
	)
}