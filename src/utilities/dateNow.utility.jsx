import {formatDate} from 'formatDateYYYYMMDD.utility'

export const dateNow =()=>{
// convertir fecha actual
	let dateNow = new Date();
	const endDate = formatDate(dateNow);

	// convertir fecha inicial
	const dateBefore = new Date();
	dateBefore.setDate(dateNow.getDate() - 6);
	const startDate = formatDate(dateBefore);
}