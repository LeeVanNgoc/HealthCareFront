export const handleRequestSort = (order, orderBy, setOrder, setOrderBy) => (event, property) => {
	const isAsc = orderBy === property && order === 'asc';
	setOrder(isAsc ? 'desc' : 'asc');
	setOrderBy(property);
  };
  
  export const handleSelectAllClick = (rows, selected, setSelected) => (event) => {
	if (event.target.checked) {
	  const newSelected = rows.map((n, index) => index);
	  setSelected(newSelected);
	} else {
	  setSelected([]);
	}
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
  
  export const isSelected = (selected) => (id) => {
	return selected.indexOf(id) !== -1;
  };
  