class SavedFlight {

	static saveFlight(flightId) {
		const userJSON = JSON.stringify({flight: flightId})
		const jwtToken = localStorage.getItem("jwt")
		return fetch(`http://localhost:3000/api/v1/add_flight`, {
			method: 'post',
			body: userJSON,
			headers: {
				"Authorization": `Bearer ${jwtToken}`,
				"Content-Type": "application/json",
				"Accept": "application/json"
			}
		}).then(res => res.json())
	}

	static deleteFlight(flightId) {
		const userJSON = JSON.stringify({ flight: flightId })
		const jwtToken = localStorage.getItem("jwt")

		return fetch (`http://localhost:3000/api/v1/delete_flight`, {
			method: 'delete',
			body: userJSON,
			headers: {
				"Authorization": `Bearer ${jwtToken}`,
				"Content-Type": "application/json",
				"Accept": "application/json"
			}
		}).then(res => res.json())
	}

}

export default SavedFlight

