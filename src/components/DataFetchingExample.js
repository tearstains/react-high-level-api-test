import React, { useEffect, useState, useReducer } from 'react'

function client(url) {
	return fetch(url).then(async respone => {
		const data = await respone.json();
		if(respone.ok){
			return data
		} else {
			return Promise.reject(`fetch ${url} error `)
		}
	})
}

function useFeatchReducer (state, action) {
	switch (action.type) {
		case 'init' :
			return {
				...state,
				isLoading: true,
				isError: false
			}
		case 'resloved' :
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload
			}
		case 'rejected' :
			return {
				...state,
				isLoading: false,
				isError: true,
			}
		default: 
			throw Error('unexpected action type')
	}
}

function useFetch(initUrl, initData) {
	// const [ data , setData ] = useState(initData)
	const [ url , setUrl ] = useState(initUrl)
	// const [ isLoading, setIsLoading] = useState(false)
	// const [ isError, setIsError] = useState(false)

    const [state, dispatch] = useReducer(useFeatchReducer, {
		isLoading: false,
		isError: false,
		data: initData
	})

	useEffect(()=>{
		async function fetchData() {
			// setIsLoading(true)
			dispatch({type: 'init'})
			try {
				const data = await client(url)
				dispatch({type: 'resloved', payload: data})
				// setIsLoading(false)
				// setIsError(false)
				// setData(data)
			} catch (e) {
				// setIsLoading(false)
				// setIsError(false);
				dispatch({type: 'rejected'})
			}

		}

		fetchData()

	}, [url])

	const { data, isLoading, isError } = state
	return {data, setUrl, isLoading, isError}
}

export default function DataFetchingExample() {
	// const [list, setList] = useState([])
	// const {data: { users: list = []} = {}, isLoading, isError } = useFetch('/api/users', {})
	const {data: { users: list = []} = {}, isLoading, isError } = useFetch('/api/users-error', {})

	if(isLoading) return <div>Loading ...</div>
	if(isError) return <div>Erro</div>
// debugger
	// useEffect(() => {
	// 	// get users
	// 	async function getUserList() {
	// 		console.log('getUserList')
	// 		return await fetch('/api/users');
	// 	}

	// 	// get users, but api return 500
	// 	async function getUserListFail() {
	// 		console.log('getUserListFail')
	// 		return await fetch('/api/users-error');
	// 	}

	// 	getUserList()
	// 		.then((res)=> {
	// 			if (!res.ok) {
	// 				throw Error(res.statusText);
	// 			}
	// 			return res.json()
	// 		})
	// 		.then((data) => {
	// 			setList(data.users)
	// 		})
	// 		.catch((res) => {
	// 			console.log('fetch article list lisk error ');
	// 		});

	// 	getUserListFail()
	// 		.then((res)=> {
	// 			if (!res.ok) {
	// 				throw Error(res.statusText);
	// 			}
	// 			return res.json()
	// 		})
	// 		.then((data) => {
	// 			console.log(data);
	// 		})
	// 		.catch((message) => {
	// 			console.log('fetch api error with error message = ', message);
	// 		});


	// }, []);

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