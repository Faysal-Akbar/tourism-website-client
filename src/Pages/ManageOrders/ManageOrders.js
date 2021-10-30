import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const ManageOrders = () => {
    const [manageOrders, setManageOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/manageOrders')
        .then(res => res.json())
        .then(data => setManageOrders(data))
    }, []);

    const handleDeleteOrder = (id) => {
        const isDelete = window.confirm("Are You Sure to Delete?");
        if(isDelete){
            fetch(`http://localhost:5000/myOrders/${id}`, {
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
    return (
        <Container>
            <h2 className="mt-5 mb-4">Manage All Orders</h2>
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
                    <td><button className="btn btn-success">Pending</button></td>
                    <td><button onClick={()=> handleDeleteOrder(order._id)} className="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>)
                }
            </Table>
        </Container>
    );
};

export default ManageOrders;