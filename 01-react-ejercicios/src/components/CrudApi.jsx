import {CrudForm} from "./CrudForm.jsx";
import {CrudTable} from "./CrudTable.jsx";
import {useState, useEffect} from "react";
import {helpHttp} from "../helpers/helpHttp.js";
import {Loader} from "./Loader.jsx";
import {Message} from "./Message.jsx";



export const CrudApi = () => {
	const [db, setDb] = useState(null)
	const [dataToEdit, setDataToEdit] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)
	
	let api = helpHttp()
	let url = "http://localhost:5000/santos"
	
	useEffect(() => {
		setLoading(true)
		
		helpHttp().get(url)
			.then( res => {
				if (!res.err) {
					setDb(res)
				} else {
					setDb(null)
					setError(res)
				}
				setLoading(false)
			})
	}, [url])
	
	const createData = (data) => {
		data.id = Date.now()
		
		api.post(url, { body: data })
			.then(res => {
				if (!res.err) {
					setDb([...db, res])
				} else {
					setError(res)
				}
			})
	}
	
	const updateData = (data) => {
		let endpoint = `${url}/${data.id}`;

		let options = {
			body: data,
		};

		helpHttp().put(endpoint, { body: data }).then((res) => {
			//console.log(res);
			if (!res.err) {
				let newData = db.map((el) => (el.id === data.id ? data : el));
				setDb(newData);
			} else {
				setError(res);
			}
		});
	};
	
	const deleteData = (id) => {
		let isDelete = window.confirm(
			`¿Estás seguro de eliminar el registro con el id: ${id}?`
		)
		
		if (isDelete) {
			let endpoint = `${url}/${id}`;
			let options = {
				headers: { "content-type": "application/json" },
			};

			api.del(endpoint, options).then((res) => {
				//console.log(res);
				if (!res.err) {
					let newData = db.filter((el) => el.id !== id);
					setDb(newData);
				} else {
					setError(res);
				}
			});
		} else {
			return;
		} 
	}
	
	return (
		<section className="crud-app container">
			<h2>CRUD API</h2>
			<CrudForm
				dataToEdit={dataToEdit}
				setDataToEdit={setDataToEdit}
				createData={createData}
				updateData={updateData}
			/>
			{
				loading && <Loader/>
			}
			{
				error && (
					<Message
						msg={`Error ${error.status} : ${error.statusText}`}
						bgColor="#dc3545"
					/>
				)
			}
			{
				db && (
					<CrudTable
						data={db}
						setDataToEdit={setDataToEdit}
						deleteData={deleteData}
					/>
				)
			}
		</section>
	)
}