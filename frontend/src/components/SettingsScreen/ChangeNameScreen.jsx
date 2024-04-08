import React, { useState } from 'react';
//import { Link  } from 'react-router-dom';

/*Set the Username to change when it appears on the screen */
function ChangeNameScreen(props){
    const [username, setUsername] = useState('');
    const [displayName, setDisplayName] = useState(props.name);
    

    /*If there is input for username, this will communicate to be put on the database*/
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
    
    /*This is a format for settings characteristics assuming username has been developed through login */
    return <>
        <div>
            <h2 className='home' style={{fontSize:'80px',textAlign: 'center', marginBottom:120}}>Change Username</h2>
        </div>
        <div>
            <div>
                <label className='home' style={{fontSize:'30px',marginLeft:25, marginRight:10}}>Current:</label>
                <label style={{fontSize:'30px',marginBottom:20}}>{displayName}</label>
            </div>
            <div>
                <label className='home' style={{fontSize:'30px',marginLeft:20,marginRight:50}}>New:</label>
                <input
					type="text"					
					value={username}
                    onChange={(e) => setUsername(e.target.value)}					
                    style={{fontSize:'30px',marginBottom:30}}
				/>
                <button style={{ marginTop:10,marginBottom:20,marginLeft:20,fontSize: '30px' }}  onClick={handleChange}>Change</button>
            </div>
            <div>
                <Link to='/setting' style={{ marginTop:10,marginBottom:20,marginLeft:30,marginRight:40, fontSize: '30px' }} >Back to Setting</Link>
			</div>
        </div>
    </>

}

export default ChangeNameScreen;
