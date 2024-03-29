import {useEffect, useState} from "react";


export const useUsers = () => {
	const [ userDB, setUserDB ] = useState([])
	
	useEffect(() => {
		let url = 'https://reqres.in/api/users?page=2'

		async function getUsers (url) {
			const response = await fetch(url)
			const json = await response.json()

			setUserDB(json.data)
		}

		getUsers(url)
	}, [])
	
	return {
		userDB
	}
}