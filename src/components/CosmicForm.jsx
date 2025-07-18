import React, { useRef, useState } from 'react'

const CosmicForm = () => {
    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState("DOB");

    const dataRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("form submitted!")
    }

    const handleDateButtonClick = () => {
        dataRef.current.showPicker?.();
        dataRef.current.click();
        // console.log("data button clicked!");
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-control">
                    <input type="text" placeholder='Enter your fullname' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-control">
                    <input style={{display:"none"}}  type="date" value={birthDate} placeholder='Enter your fullname' ref={dataRef} onChange={(e) => { setBirthDate(e.target.value) }} />

                    <span>{birthDate}</span> : <button type='button' onClick={handleDateButtonClick}>Click to pick</button>
                </div>


                <div className="btn-control">
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CosmicForm