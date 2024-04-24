import { tableData } from "../data";

function Tables() {
    return (
        <div className="table-container">
            <table className="custom-table" style={{ width: '50%' }}>
                <thead>
                    <tr>
                        <th colSpan="3" style={{backgroundColor:'#28658d'}}>Total Orders</th>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((props,id) => {
                        return (
                            <tr key={id}>
                                <td>{props.name}</td>
                                <td>{props.age}</td>
                                <td>{props.email}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Tables;
