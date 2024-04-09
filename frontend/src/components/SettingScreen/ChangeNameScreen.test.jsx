import React, { useState } from 'react';

function ChangeNameScreen({closeModal, currentUsername}){
    const [username, setUsername] = useState('');
    const [displayName, setDisplayName] = useState(currentUsername);
    

    //Logic for implementing a username. Username can be letters, characters,etc.
    const handleChange = () => {
        if(username == '')
        {
            alert("new username cannot be blank or empty!");
        }
        else{
            alert("Change is send to backend!Changing username from current: '" + displayName + "' to new: '" + username  + "'.");
            setDisplayName(username);
            setUsername('');
        }		
	};

    const handleClose = () => {
         
        closeModal(displayName); //Set flag to close ChangeNameScreen modal
    };
    
    return (
        <>
            <div>
                <div className='upper-bar'>
                    <h2 style={{marginLeft: '1rem'}} className='menu-header'>Change Username.</h2>						
                </div>
                {/* Container for current and new username sections */}
                <div>
                    <div>
                        {/* Label for indicating current username */}
                        <label className='home' style={{fontSize:'30px',marginLeft: '1rem', marginTop:40, marginRight:10}}>Current:</label>
                        {/* Displaying the current username */}
                        <label style={{fontSize:'30px',marginBottom:20}}>{displayName}</label>
                    </div>
                    <div>
                        {/* Label for indicating new username */}
                        <label className='home' style={{fontSize:'30px',marginLeft: '1rem',marginRight:50}}>New:</label>
                        {/* Input field for entering new username */}
                        <input
                            type="text"					
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}					
                            style={{fontSize:'30px',marginBottom:30}}
                        />
                        {/* Button to trigger the username change */}
                        <button style={{ marginTop:10,marginBottom:20,marginLeft: '1rem',fontSize: '30px' }}  onClick={handleChange}>Change</button>
                    </div>
                    <div>
                        {/* Button to close the settings screen */}
                        <button style={{ marginTop:30,marginBottom:20,marginLeft: '1rem',fontSize: '20px' }}  onClick={handleClose}>Close</button>
                    </div>
                </div>
            </div>
        </>
    );
    
}

export default ChangeNameScreen;
