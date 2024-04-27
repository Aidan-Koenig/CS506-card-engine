import React, { useState } from 'react';
import Modal from 'react-modal';
import closeModalBtn from '../../assets/close.svg';

import {ToastContainer, toast} from 'react-toastify';

function ChangeNameScreen({closeModal, user_id, currentUsername}){
    const [username, setUsername] = useState('');
    const [displayName, setDisplayName] = useState(currentUsername);
    
    
    
    const showToast = (message, type) => {
		toast[type](message);
	}

    const handleChange = () => {
        if(username == '')
        {
            alert("new username cannot be blank or empty!");
        }
        else{
            fetch(`http://localhost:8080/player/${user_id}/change-username?newUserName=${username}`, {method: 'POST'})
            .then(response => response.text())
                .then(data => {
                    if (data == 'successful') {
                        //alert("Username changes from " + displayName + "' to '" + username  + "'.");
                        showToast(`Successfully change username from ${displayName} to ${username}`, 'success');
                        setDisplayName(username);
                        setUsername('');
                    } 
                    else {
                        alert("Changing username is failed.");
                    }
                })
            .catch(error => {
                console.error('Error:', error);
        });
            
        }		
	};

    const handleClose = () => {
        closeModal(displayName);
    };

    
    return <>
        <ToastContainer 
			limit={5}
			stacked={true}
		/>
        <div>
            <div className='upper-bar'>
                <h2 style={{marginLeft: '1rem'}} className='menu-header'>Change Username.</h2>
                <img className='closeModalX' src={closeModalBtn} onClick={handleClose} alt='close'/>						
            </div>
            <div>
                <div style={{marginTop:40}}>
                    <label className='home' style={{fontSize:'40px',marginLeft: '1rem', marginRight:10}}>Current:</label>
                    <label style={{fontSize:'40px',marginBottom:20}}>{displayName}</label>
                </div>
                <div style={{marginTop:20}}>
                    <label className='home' style={{fontSize:'40px',marginLeft: '1rem',marginRight:50}}>New:</label>
                    <input
                        type="text"					
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}					
                        style={{fontSize:'40px',marginBottom:30}}
                    />
                    <button style={{ marginTop:10,marginBottom:20,marginLeft: '1rem',fontSize: '30px' }}  onClick={handleChange}>Change</button>
                </div>
                <div>
                    <button style={{border:'none',background:'none',marginTop:10, marginLeft: '1rem',fontSize: '40px' }}  onClick={handleGameScreen}>GameScreen</button>
                </div>
            </div>            
        </div>        
    </>

}

export default ChangeNameScreen;