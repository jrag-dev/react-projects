import {useState, useEffect} from "react";
import {SongForm} from "./SongForm.jsx";
import {SongDetail} from "./SongDetail.jsx";
import { Loader } from "./Loader.jsx"
import { helpHttp } from "../helpers/helpHttp.js"

export const SongSearch = () => {
	const [search, setSearch] = useState(null)
	const [lyric, setLyric] = useState(null)
	const [bio, setBio] = useState(null)
	const [loading, setLoading] = useState(false)
	
	useEffect(() => {
		if (search === null) return;
    	
    	const getData = async () => {
    		const { artist, title } = search
    		const apiAudioDB = `theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
			const lyricApi = `https://api.lyrics.ovh/v1/${artist}/${title}`
      		
      		setLoading(true)
      		
      		const [ artistResponse, songResponse ] = await Promise.all([
      			helpHttp().get(apiAudioDB),
      			helpHttp().get(lyricApi)
      		])
      		
      		setLoading(false)
      		setBio(artistResponse)
      		setLyric(songResponse)
      		console.log(artistResponse, songResponse)
    	}
    	
    	getData()
    	
	}, [search])
	
	const handleSearch = (data) => {
		const { artist, title } = data
		
		setSearch(data)
	}
	
	return (
		<section>
			<h2 className="text-center py-4 font-extrabold text-2xl">Buscador de Canciones</h2>
			<SongForm
				handleSearch={handleSearch}
			/>
			{
				loading && <Loader/>
			}
			<SongDetail
				search={search}
				lyric={lyric}
				bio={bio}
			/>
		</section>
	)
}