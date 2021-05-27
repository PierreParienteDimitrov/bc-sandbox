import { useMemo } from 'react';
import { useTable } from 'react-table';
import SectionTitle from '../../Titles/SectionTitle';
import TableShiftsCol from './TableShiftsCol';

const Dasboard = () => {
	const data = useMemo(
		() => [
			{
				col1: { date: 'Tuesday May 11', shift: 'SHIFT 1' },
				col2: 'no appointment available',
				col3: 'no appointment available',
				col4: 'no appointment available',
				col5: 'no appointment available',
				col6: 'no appointment available',
				col7: 'no appointment available',
				col8: 'no appointment available',
				col9: 'no appointment available',
			},
			{
				col1: { date: 'Tuesday May 11', shift: 'SHIFT 2' },
				col2: 'no appointment available',
				col3: 'no appointment available',
				col4: 'no appointment available',
				col5: 'no appointment available',
				col6: 'no appointment available',
				col7: 'no appointment available',
				col8: 'no appointment available',
				col9: 'no appointment available',
			},
		],
		[]
	);

	const columns = useMemo(
		() => [
			{
				Header: 'AVAILABLE TERMINALS',
				accessor: 'col1', // accessor is the "key" in the data
				Cell: ({ cell: { value } }) => <TableShiftsCol values={value} />,
			},
			{
				Header: 'PIER A',
				accessor: 'col2', // accessor is the "key" in the data
			},
			{
				Header: 'PIER E',
				accessor: 'col3',
			},
			{
				Header: 'EVERPORT',
				accessor: 'col4', // accessor is the "key" in the data
			},
			{
				Header: 'PIER 300',
				accessor: 'col5',
			},
			{
				Header: 'YTI',
				accessor: 'col6', // accessor is the "key" in the data
			},
			{
				Header: 'WBCT',
				accessor: 'col7',
			},
			{
				Header: 'PCT',
				accessor: 'col8', // accessor is the "key" in the data
			},
			{
				Header: 'PIER 400',
				accessor: 'col9',
			},
		],
		[]
	);

	const tableInstance = useTable({ columns, data });

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		tableInstance;

	return (
		<div>
			<SectionTitle title={'Dasboard'} />

			{/* TABLE */}
			<div>
				{/* apply the table props */}
				<table {...getTableProps()}>
					<thead>
						{
							// Loop over the header rows
							headerGroups.map((headerGroup) => (
								// Apply the header row props
								<tr {...headerGroup.getHeaderGroupProps()}>
									{
										// Loop over the headers in each row
										headerGroup.headers.map((column) => (
											// Apply the header cell props
											<th
												{...column.getHeaderProps()}
												className='text-sm text-left font-semibold'
											>
												{
													// Render the header
													column.render('Header')
												}
											</th>
										))
									}
								</tr>
							))
						}
					</thead>
					{/* Apply the table body props */}
					<tbody {...getTableBodyProps()}>
						{
							// Loop over the table rows
							rows.map((row) => {
								// Prepare the row for display
								prepareRow(row);
								return (
									// Apply the row props
									<tr {...row.getRowProps()}>
										{
											// Loop over the rows cells
											row.cells.map((cell) => {
												// Apply the cell props
												return (
													<td {...cell.getCellProps()}>
														{
															// Render the cell contents
															cell.render('Cell')
														}
													</td>
												);
											})
										}
									</tr>
								);
							})
						}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Dasboard;
