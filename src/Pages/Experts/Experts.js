import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import expert1 from '../../images/experts/expert-1.jpg';
import expert2 from '../../images/experts/expert-2.jpg';
import expert3 from '../../images/experts/expert-3.jpg';
import expert4 from '../../images/experts/expert-4.jpg';
import expert5 from '../../images/experts/expert-5.jpg';
import expert6 from '../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const experts =[
    {id:1,name:'Will Smith',img:expert1},
    {id:2,name:'Chris Rock',img:expert2},
    {id:3,name:'Dwayne Rock',img:expert3},
    {id:4,name:'Mustafa',img:expert4},
    {id:5,name:'Fazle Rabbi',img:expert5},
    {id:6,name:'Alaina',img:expert6},
]

const Experts = () => {
    return (
        <div className='container'>
            <h2 className='text-center mt-5'>
                <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>Our Experts
                <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></h2>
            <hr />
            <div className="row pb-5">
                {
                    experts.map(expert=><Expert 
                    key={expert.id}
                    expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;