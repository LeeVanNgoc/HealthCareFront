import {getAllDoctor} from './config';

export const getDataInDoctor = async () => {
	const doctocs = await getAllDoctor('ALL');
	return doctocs;
}