import {getAllDoctor} from './config'

export const handleRequestSort1 = (order, orderBy, setOrder, setOrderBy) => (even, property) =>{
	const isAsc = orderBy === property && order === 'asc';
	setOrder(isAsc ? 'desc' : 'asc');
	setOrderBy(property);
};

export const handleSelectAllClick1 = (rows, setSelected) => (event) => {
	if (event.target.checked) {
	const newSelected = rows.map((n) => n.id);
	setSelected(newSelected);
	return;
	}
	setSelected([]);
};

export const handleClick1 = (selected, setSelected) => (event, id) => {
	const selectedIndex = selected.indexOf(id);
	let newSelected = [];

	if (selectedIndex === -1) {
	newSelected = newSelected.concat(selected, id);
	} else if (selectedIndex === 0) {
	newSelected = newSelected.concat(selected.slice(1));
	} else if (selectedIndex === selected.length - 1) {
	newSelected = newSelected.concat(selected.slice(0, -1));
	} else if (selectedIndex > 0) {
	newSelected = newSelected.concat(
		selected.slice(0, selectedIndex),
		selected.slice(selectedIndex + 1),
	);
	}
	setSelected(newSelected);
};

export const handleChangePage1 = (setPage) => (event, newPage) => {
	setPage(newPage);
};

export const handleChangeRowsPerPage1 = (setRowsPerPage, setPage) => (event) => {
	setRowsPerPage(parseInt(event.target.value, 10));
	setPage(0);
};

export const handleChangeDense1 = (setDense) => (event) => {
	setDense(event.target.checked);
};

export const isSelected1 = (selected) => (id) => selected.indexOf(id) !== -1;

export const handleGetDoctors = async () => {
	const response = await getAllDoctor('ALL');
	console.log(response)
	
}
