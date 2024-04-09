import React, { useState } from 'react';
import Modal from 'react-modal';
import ChangeNameScreen from './ChangeNameScreen';


function SettingScreen({ closeModal, username }) {

    //State variables for ChangeNameScreen modal and present username
    const [changeNameScreenModalIsOpen, setChangeNameScreenModalIsOpen] = useState(false);
    const [presentUsername, setPresentUsername] = useState(username);

    const deleteAccount = () => {
            alert("Account has been deleted. This will return to Login screen.");
            //Call middle-tier service(API) function to delete account in database
            setPresentUsername('*GoTo-Login*');
            closeModal('*GoTo-Login*');
        }
    const resetStats = () => {
            alert("Reset Stats is sent to backend. Stats have been reset. Game stats should be cleared in History screen")
            //Call middle-tier service(API) function to reset stats in database
        }
    
    const changeUser = () => {
            //Set flag to open ChangeNameScreen modal
            setChangeNameScreenModalIsOpen(true);
        }

    const closeChangeNameScreenModal = (value) => {
            //Set flag to close ChangeNameScreen modal
            setPresentUsername(value);
            setChangeNameScreenModalIsOpen(false);            
        };
    
    const closeSetting = () => {
            //Set flag to close SettingScreen modal
            closeModal(presentUsername);            
        }
    
        return (
            <>
                <div>
                    <div className='upper-bar'>
                        <h2 style={{marginLeft: '1rem'}} className='menu-header'>Setting.</h2>						
                    </div>   

                    {/* Button to change username */}
                    <div>
                        <button style={{border:'none',background:'none',marginTop:10, marginLeft: '1rem',fontSize: '40px' }}  onClick={changeUser}>Change Username</button>
                    </div>

                    {/* Button to reset user game history */}
                    <div>
                        <button style={{border:'none',background:'none',marginTop:5, marginLeft: '1rem',fontSize: '40px' }}  onClick={resetStats}>Reset Stats</button>
                    </div>

                    {/* Button to delete account then go back to login */}
                    <div>
                        <button style={{ border:'none',background:'none',marginTop:5,marginLeft: '1rem',fontSize: '40px' }}  onClick={deleteAccount}>Delete Account</button>
                    </div>

                    {/* Button to close the settings */}
                    <div>
                        <button style={{ marginTop:60,marginLeft: '1rem',fontSize: '20px' }}  onClick={closeSetting}>Close</button>
                    </div>  

                    <Modal
                        isOpen={changeNameScreenModalIsOpen}
                        onRequestClose={closeChangeNameScreenModal} //formatting for change the name of the user
                        contentLabel="Change username Modal"
                        style={{
                            overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            },
                            content: {
                            width: '900px',
                            height: '700px',
                            margin: 'auto',
                            borderRadius: '10px',
                            },
                        }}
                    >
                        {/* Changes name of user */}
                        <ChangeNameScreen closeModal={closeChangeNameScreenModal} currentUsername={presentUsername} />
                    </Modal>
                </div>            
            </>
        );
        
}

export default SettingScreen;
