import React from 'react';

const TableShiftsCol = ({ values }) => {
	return (
		<div className='w-44 py-6'>
			<p>{values.date}</p>
			<h5>{values.shift}</h5>
		</div>
	);
};

export default TableShiftsCol;
