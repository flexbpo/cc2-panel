export const date = (oneHour = false) => {
	const fechaHoraActual = new Date();

	if(oneHour) fechaHoraActual.setTime(fechaHoraActual.getTime() + (1 * 3600 * 1000));

	const dia = fechaHoraActual.getDate();
	const mes = fechaHoraActual.getMonth() + 1;
	const anio = fechaHoraActual.getFullYear();
	const horas = fechaHoraActual.getHours();
	const minutos = fechaHoraActual.getMinutes();
	const segundos = fechaHoraActual.getSeconds();


	const fechaFormateada = `${dia}/${mes}/${anio}`;
	const horaFormateada = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
	const fechaHoraFormateada = `${fechaFormateada}, ${horaFormateada}`;

	return {
		fechaHoraFormateada,
		fechaFormateada,
		horaFormateada
	}
}


