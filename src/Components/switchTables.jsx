import React from "react";
import { switchtablesdata } from "../data";

const SwitchTables = ({status}) => {
    const filteredTable = switchtablesdata.filter((table) => table.status.toLowerCase() === status.toLowerCase());

    return (
        <>
                <table className="custom-table" style={{margin:'20px'}}>
                    <thead>
                        <tr style={{ backgroundColor: '#28658d', color: 'white' }}>
                            <th>Products</th>
                            <th>Category</th>
                            <th>Prize</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {filteredTable.map((table) => (
                    <tbody>    
                        <tr key={table.id}>
                            <td>{table.products}</td>
                            <td>{table.category}</td>
                            <td>{table.prize}</td>
                            <td>{table.cond}</td>
                        </tr>
                    </tbody>
            ))}
                </table>

        </>
    );
};

export default SwitchTables;