import React, { useEffect, useState } from 'react';
import { Container, Dropdown, Table } from 'react-bootstrap';

const ManageOrders = () => {
    const [manageOrders, setManageOrders] = useState([]);

    useEffect(() => {
        fetch('https://ghoulish-moonlight-52209.herokuapp.com/manageOrders')
        .then(res => res.json())
        .then(data => setManageOrders(data))
    }, []);

    const handleDeleteOrder = (id) => {
        const isDelete = window.confirm("Are You Sure to Delete?");
        if(isDelete){
            fetch(`https://ghoulish-moonlight-52209.herokuapp.com/myOrders/${id}`, {
            method:'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Successfully Deleted');
                const remaining = manageOrders.filter(order => order._id !== id);
                setManageOrders(remaining);
            }
        })
        }
    }

    const handleUpdateStatus = (statusId) => {
        const data = manageOrders;
        fetch(`https://ghoulish-moonlight-52209.herokuapp.com/status/${statusId}`, {
            method:'PUT',
            headers:{'content-type':'application/json'},
            body: JSON.stringify({
                data,
                status : 'Approved'
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Successfully Approved');
            }
        })
    }

    return (
        <Container>
            <h2 className="mt-5 mb-4">Manage All Orders</h2>
            <h3 className="text-warning text-start"><i className="fas fa-users"></i> All Users Order</h3>
            <hr />
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Place Name</th>
                    <th>Offer Price</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                </thead>
                {
                    manageOrders.map((order, index) => <tbody key={order._id}>
                    <tr>
                    <td>{index + 1}</td>
                    <td>{order.name}</td>
                    <td>{order.placeName}</td>
                    <td>${order.offerPrice}</td>
                    <td>{order.placeDescription}</td>
                    <td>
                    <Dropdown>
                        <Dropdown.Toggle variant="warning" id="dropdown-basic">
                            {order.status}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={()=> handleUpdateStatus(order._id)} href="#/action-1">Approved</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </td>
                    <td><button onClick={()=> handleDeleteOrder(order._id)} className="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>)
                }
            </Table>
        </Container>
    );
};

export default ManageOrders;