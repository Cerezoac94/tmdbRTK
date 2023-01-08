// formateo de fecha => yyyy-mm-dd
// convertir fecha actual
export function dates () {
	function formatDate(date) {
		// El método toISOString convierte una fecha a string, pero también, el mes (Jan, Feb, Mar...) lo transforma a número:
		// Input Jan 06 2023  => Output: "2023-01-06".
		return date.toISOString().split("T")[0];
	}

	let dateNow = new Date();
	const endDate = formatDate(dateNow);

	// convertir fecha inicial
	const dateBefore = new Date();
	dateBefore.setDate(dateNow.getDate() - 6);
	const startDate = formatDate(dateBefore);

	return { endDate, startDate};
};
