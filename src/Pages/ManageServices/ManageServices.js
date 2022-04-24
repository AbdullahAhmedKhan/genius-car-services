import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                })

        }
    }

    return (
        <div className='container my-5 w-75 text-center'>
            <h2 className='mb-5 text-info'>Manage your services</h2>
            {
                services.map(service => <div className='border m-2 rounded bg-light w-50 mx-auto' key={service._id}>
                    <h4 className='my-5 d-inline'>{service.name}</h4>
                    <button className='btn btn-danger m-4' onClick={() => handleDelete(service._id)}>X</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;