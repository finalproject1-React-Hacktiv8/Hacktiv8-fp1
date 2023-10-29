import { useDispatch } from "react-redux";
import { deleteSaved } from "../../redux/NewsSlice";
import Table from "react-bootstrap/Table";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TableSection = ({ headers, datas }) => {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteSaved(id));
           toast("News Deleted")
            }

    return (
        <Table striped bordered hover className="m-4" style={{ width: "95%" }}>
            <thead>
                <tr>
                    {
                        headers.map((header, headerIdx) => {
                            return <th key={headerIdx}>{header}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    datas?.map((data, dataIdx) => {
                        return (
                            <tr key={dataIdx}>
                                <td>{data.source.name}</td>
                                <td>{data.title}</td>
                                <td>{data.description}</td>
                                <td style={{ color: "red", cursor: "pointer" }} onClick={() => handleDelete(data.id)}>Delete</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    );
}

export default TableSection;