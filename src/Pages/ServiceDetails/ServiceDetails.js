import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service,setService]=useState({});
    useEffect(()=>{
        const url=`http://localhost:5000/service/${serviceId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    
    return (
        <div className='text-center my-5'>
            <h2>You are about to book: {service.name}</h2>
            <Link to='/checkout'>
                <button className='btn btn-primary'>Proceed checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;