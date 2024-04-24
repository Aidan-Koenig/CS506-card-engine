import React, { useState } from 'react';
import { Link,Route} from 'react-router-dom';


function SettingScreen(props) {
    
    /*This redirect to the login screen if the account has been deleted*/
    const deleteAccount = () => {
            alert("Account has been deleted. This will return to Login screen.");
            window.location.href = '/Login'
        }
    
    /* This will reset the player's game history and statistics to start player's record from scratch*/
    const resetStats = () => {
            //console.log("Reset Stats is called")
            alert("Reset Stats is sent to backend. Stats have been reset. Game stats should be cleared in History screen")
        }
    
    const changeUser = () => {
            //Go to change user name screen
            window.location.href = '/changename'
        }
    
        /*Format for settings screen to have respective characteristics to be displayed on the screen*/
    return(
        <>
            <div>
                <h2 className='home' style={{fontSize:'80px',textAlign: 'center', marginBottom:120}}>Setting</h2>
            </div>            
            <div>
                <button style={{border:'none',background:'none',marginTop:10, marginLeft:30,fontSize: '40px' }}  onClick={changeUser}>Change Username</button>
            </div>
            <div>
                <button style={{border:'none',background:'none',marginTop:5, marginLeft:30,fontSize: '40px' }}  onClick={resetStats}>Reset Stats</button>
            </div>
            <div>
                <button style={{ border:'none',background:'none',marginTop:5,marginLeft:30,fontSize: '40px' }}  onClick={deleteAccount}>Delete Account</button>
            </div>         
        </>
    );
}

export default SettingScreen;

{/* <div>
    <Link to='/changename' style={{ marginTop:10,marginLeft:30, fontSize: '40px' }} >Change Username</Link>
</div> */}
