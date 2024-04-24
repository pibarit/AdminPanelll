import { useState } from "react";
import { pageData } from "../data";
import { phaseData } from "../data";
import { merchantTableData } from "../data";
import {BsFillPencilFill} from 'react-icons/bs'


function Merchantlist() {
    const [data, setData] = useState(merchantTableData);
    const [filterCriteria, setFilterCriteria] = useState("");

    const handleChange = (e) => {
        setFilterCriteria(e.target.value);
    };

    const handleTable = (e) => {
        e.preventDefault();
        const filteredData = data.filter((item) =>
        item.store.includes(filterCriteria) ||
        item.email.includes(filterCriteria) ||
        item.contactNumber.includes(filterCriteria));
    setData(filteredData);
    };

    const handleReset = (e) => {
        e.preventDefault();
        setFilterCriteria("");
        setData(merchantTableData);
    };

    return (
        <>
            <div className="main">
                <form action="" className="merchantList">
                    <select name="Page" id="page">
                        {pageData.map((props) => {
                            const { id,value, title } = props;
                            return (
                                <div key={id}>
                            <option value={value}>{title}</option>
                            </div>
                            );
                        })}
                    </select>
                    <div className="exportData"><a href="/" style={{ color: '#83bc2d' }}>Export Data</a></div>
                    <select name="Phase" id="phase">
                        <option value="">---Select timezone---</option>
                        {phaseData.map((props) => {
                            const { id,value, title } = props;
                            return (
                            <div key={id}>
                                <option value={value}>{title}</option>
                            </div>);
                        })}
                    </select>
                    <input type="text" placeholder="name email or number" value={filterCriteria} onChange={handleChange} />
                    <button className="go" onClick={handleTable}><b>GO</b></button>
                    <button className="reset" onClick={handleReset}><b>Reset</b></button>
                </form>
                <table className="merchanttable" style={{ width: '50%' }}>
                    <thead>
                    <tr>
                        <th>Store</th>
                        <th>Operating Zone</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>Location</th>
                        <th>Create At</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr></thead>
                    <tbody>
                    {data.map((props) => {
                        const { id, store, operatingZone, email, contactNumber, location, createAt, status } = props;
                        return (
                            <tr key={id}>
                                <td>{store}</td>
                                <td>{operatingZone}</td>
                                <td>{email}</td>
                                <td>{contactNumber}</td>
                                <td>{location}</td>
                                <td>{createAt}</td>
                                <td>{status}</td>
                                <td><BsFillPencilFill className="edit-btn"/></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Merchantlist;
