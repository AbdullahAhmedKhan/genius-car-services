import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';

const AddService = () => {
    const [user, loading] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert('Service added');
            })
    };
    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className='w-50 mx-auto py-5'>
            <h2>Please add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='border mb-2 rounded p-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='border mb-2 rounded p-2' placeholder='Description' {...register("description")} />
                <input className=' border mb-2 rounded p-2' placeholder='Price' type="number" {...register("price")} />
                <input className=' border mb-2 rounded p-2' placeholder='Photo Url' type="text" {...register("img")} />
                <input className='btn btn-primary' type="submit" value='Add Service' />
            </form>
        </div>
    );

};

export default AddService;