import { deleteDoctor } from "./config";
export const handleRequestSort = (order, orderBy, setOrder, setOrderBy) => (event, property) => {
	const isAsc = orderBy === property && order === 'asc';
	setOrder(isAsc ? 'desc' : 'asc');
	setOrderBy(property);
};

export const handleSelectAllClick = (rows, selected, setSelected) => (event) => {
	if (event.target.checked) {
	const newSelected = rows.map((n, index) => index);
	setSelected(newSelected);
	return;
	}
	setSelected([]);
};

export const handleClick = (selected, setSelected) => (event, id) => {
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

export const handleChangePage = (setPage) => (event, newPage) => {
	setPage(newPage);
};

export const handleChangeRowsPerPage = (setRowsPerPage, setPage) => (event) => {
	setRowsPerPage(parseInt(event.target.value, 10));
	setPage(0);
};

export const handleChangeDense = (setDense) => (event) => {
	setDense(event.target.checked);
};

export const isSelected = (selected) => (id) => selected.indexOf(id) !== -1;



export const handleDeleteSelected = (selected, rows, setRows, setSelected) => async () => {
	
	const deletePromises = selected.map(index => {
		const doctor = rows[index];
		alert('Delete user succees')
		return deleteDoctor(doctor.email)
	});

	try {
	  await Promise.all(deletePromises);
	  const newRows = rows.filter((row, index) => !selected.includes(index));
		
	  setRows(newRows);
	  setSelected([]);
	} catch (error) {
	  console.error('Failed to delete selected doctors:', error);
	}
};
  
