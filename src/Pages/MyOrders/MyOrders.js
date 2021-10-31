import React, { useEffect, useState } from 'react';
import { Container, Dropdown, Table } from 'react-bootstrap';
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

    const handleUpdateStatus = (statusId) => {
        const data = myOrder;
        fetch(`http://localhost:5000/status/${statusId}`, {
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
            <h2 className="mt-5 mb-4">My Orders</h2>
            <h3 className="text-warning text-start"><i className="far fa-user"></i> {user.displayName}'s Orders</h3>
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

export default MyOrders;