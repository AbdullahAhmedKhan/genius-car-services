import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className='container'>
            <h1 className='services-title mt-5 text-center'>
                <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon> 
                Our Services<FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                </h1>
            <hr className='mb-5'/>
            
            <div className='services-container mb-5 pb-5'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;