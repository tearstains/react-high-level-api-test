import React, { useEffect, useState } from 'react'

export default function DataFetchingExample() {
	const [list, setList] = useState([])

	useEffect(() => {
		// get users
		async function getUserList() {
			return await fetch('/api/users');
		}

		// get users, but api return 500
		async function getUserListFail() {
			return await fetch('/api/users-error');
		}

		getUserList()
			.then((res)=> {
				if (!res.ok) {
					throw Error(res.statusText);
				}
				return res.json()
			})
			.then((data) => {
				setList(data.users)
			})
			.catch((res) => {
				console.log('fetch article list lisk error ');
			});

		getUserListFail()
			.then((res)=> {
				if (!res.ok) {
					throw Error(res.statusText);
				}
				return res.json()
			})
			.then((data) => {
				console.log(data);
			})
			.catch((message) => {
				console.log('fetch api error with error message = ', message);
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