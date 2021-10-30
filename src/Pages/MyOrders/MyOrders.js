import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth();
    const email = user.email;
    const [myOrder, setMyOrder] = useState([]);

    useEffect( () => {
        fetch(`http://localhost:5000/myOrders/${email}`)
        .then(res => res.json())
        .then(data => setMyOrder(data))
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
                const remaining = myOrder.filter(order => order._id !== id);
                setMyOrder(remaining);
            }
        })
        }
    }

    return (
        <Container>
            <h2 className="mt-5 mb-4">My Orders</h2>
            <h3 className="text-warning text-start">{user.displayName}'s Orders</h3>
            <hr />
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Place Name</th>
                    <th>Offer Price</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                </thead>
                {
                    myOrder.map((order, index) => <tbody key={order._id}>
                    <tr>
                    <td>{index + 1}</td>
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

export default MyOrders;