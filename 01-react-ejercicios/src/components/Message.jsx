

export function Message ({msg, bgColor}) {
	let styles = {
		padding: "1rem",
		marginBottom: "1rem",
		textAlign: "center",
		color: "#FFF",
		fontWeight: "600",
		backgroundColor: bgColor,
		width: "100%"
	}
	
	return (
		<div className="message" style={styles}>
			<p>{msg}</p>
		</div>
	)
}