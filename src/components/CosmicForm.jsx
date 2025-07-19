import React, { useRef, useState } from 'react'
import "../css/CosmicForm.css"
import CosmicCalculator from '../utils/cosmicCalculator';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setCosmicData } from '../redux/features/cosmicSlice';
import { useNavigate } from 'react-router-dom';


const CosmicForm = () => {
    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const today = new Date().toISOString().split('T')[0];


const dispatch = useDispatch();
const navigate = useNavigate();
    const dataRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            // console.log('Enter your name!');
            toast.warn("Enter Your Fullname!");
            return
        }
        if (!birthDate) {
            // console.log("Select your date of birth");
            toast.warn("Choose Your DOB!");

            return;
        }

        const result = CosmicCalculator(name, birthDate);
        toast.success("Congratulations!")
        dispatch(setCosmicData(result));
        navigate("/cosmic");
        
    }

    const handleDateButtonClick = () => {

        dataRef.current.showPicker?.();
        dataRef.current.click();
        // console.log("data button clicked!");
    }
    return (
        <div className='cosmic-form'>
            <form action="" onSubmit={handleSubmit}>

                <h1> <span className='lg-txt'>Know Your</span>  <br />  Hidden Secrets</h1>
                <div className="form-control">
                    <input type="text" className='username' placeholder='Enter your fullname' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="date-control">
                    <input className='hide-date-input' max={today} type="date" value={birthDate} placeholder='Enter your fullname' ref={dataRef} onChange={(e) => { setBirthDate(e.target.value) }} />

                    <span>{birthDate ? birthDate : "Choose Your DOB"}</span> : <button type='button' onClick={handleDateButtonClick}><i className="fa-solid fa-calendar-days"></i></button>
                </div>


                <div className="btn-control">
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CosmicForm