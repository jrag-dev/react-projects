import { SongArtist } from "./SongArtist.jsx"
import { SongLyric } from "./SongLyric.jsx"

export const SongDetail = ({ search, lyric, bio }) => {

	return (
		<section>
			<h2>Detalles</h2>
			<SongArtist />
			<SongLyric/>
		</section>
		)
}