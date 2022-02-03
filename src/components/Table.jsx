import React from 'react';
import PropTypes from 'prop-types';
import cars from './Form';

const Table = ({ tableData, headingColumns }) => {
    let tableClass = 'table-container__table';

    const data = tableData.map((row, index) => {
        let rowData = [];
        let i = 0;
        
        for (const key in row) {
            rowData.push({
                key: headingColumns[i],
                val: row[key]
            });
            i++;
        }

        for (const key in cars) {
            rowData.push({
                key: headingColumns[i],
                val: row[key]
            });
            i++;
        }

        return <tr key={index}>
            {rowData.map((data, index) => <td key={index} data-heading={data.key}>{data.val}</td>)}
        </tr>
    });

    return <div>
        <div className="table-container">
            <table className={tableClass}>
                <thead>
                    <tr>
                        {headingColumns.map((col, index) => (
                            <th key={index}>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </table>
      </div>
  </div>;
};


Table.propTypes = {
    tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
    headingColumns: PropTypes.arrayOf(PropTypes.string).isRequired
}

// if ((document.getElementTagName('td').innerHTML === '') || (document.getElementTagName('td').innerHTML === carData.data ) ) {
    // for (const key in cars) {
    //         rowData.push({
    //             key: headingColumns[i],
    //             val: row[key]
    //         });
    //         i++;
    //     }
// }





export default Table;
