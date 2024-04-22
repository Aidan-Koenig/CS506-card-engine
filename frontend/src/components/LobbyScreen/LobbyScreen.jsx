import { useEffect, useState } from 'react';
import closeModalBtn from '../../assets/close.svg';
import notifSVG from '../../assets/notif-icon.svg';
import { Client } from '@stomp/stompjs';
import './LobbyScreen.css';

function LobbyScreen({ closeModal, selectedGameId, username, userID }) {

	const [gameStatus, setGameStatus] = useState('');
	const [players, setPlayers] = useState([]);
	const [webSocketMessage, setWebSocketMessage] = useState(null); //gets set initally when subscribing to the game endpoint

	useEffect(() => {
		const stompClient = new Client({
			brokerURL: 'ws://localhost:8080/full-house-bucky-websocket',
			// debug: (str) => {
			// 	console.log(str);
			// },
			reconnectDelay: 5000, // Automatically reconnect after 5 seconds if the connection is lost
			heartbeatIncoming: 4000, // Expected heartbeat interval from the server (in milliseconds)
			heartbeatOutgoing: 4000, // Outgoing heartbeat interval (in milliseconds)
			onConnect: () => {
				console.log('STOMP client connected');
				stompClient.subscribe(`/topic/games/euchre/${selectedGameId}`, (message) => {
					setWebSocketMessage(JSON.parse(message.body)); //id, status, Players[0:playerID, username, readyToStart, score, hand]
					const data = JSON.parse(message.body);
					setGameStatus(data.status);
					setPlayers(data.players);
					console.log(data); // logging websocketMessage
				}, (error) => {
					console.error('Error subscribing to topic:', error);
				});
			}
		});
		
		stompClient.activate();
		// TODO: need to subscribe to websocket here
		// setGameInfo to this GameMessage and from there parse the player names and ready statuses
		// might not even need to do the fetch since you get the game lobby info from the websocket connection
	}, [selectedGameId]);

	const handleCheckboxChange = (playerIndex, checked) => {
		const payload = {
			userId: userID ,
		};
		if (checked) {
			stompClient.send(
				`/app/games/euchre/${selectedGameId}/vote-start`,
				{},
				JSON.stringify(payload)
			);
		}
		else {
			stompClient.send(
				`/app/games/euchre/${selectedGameId}/vote-not-start`,
				{},
				JSON.stringify(payload)
			);
		}
	};

	// TODO: need another use effect for the websockets, maybe not, got live updates
	// useEffect(() => {
	//     if (webSocketMessage) {
	//         const { gameId, status, players } = webSocketMessage;
	//         const playerNamesArray = players.map(player => player.username);
	//         const readyStatusObj = {};
	//         players.forEach(player => {
	//             readyStatusObj[player.id] = player.readyToStart;
	//         });
	//         setPlayerNames(playerNamesArray);
	//         setPlayerReadyStatus(readyStatusObj);
	//     }
	// }, [webSocketMessage]);

	// showing player names from websockets, had to filter for null players
	const playerNames = players.filter(player => player !== null).map(player => player.username);

	return(
		<>
			<div className='lobby'>
				<div className='upper-bar'>
					<h2 className='menu-header'>Lobby.</h2>
					<img className='closeModalX' src={closeModalBtn} onClick={closeModal} alt='close'/>
				</div>
				<div style={{ marginLeft: '1rem' }}>
					<h4 style={{ width: '45%', display: 'inline-block'}}>Players:</h4>
					<h4 style={{ width: '45%', display: 'inline-block', textAlign: 'center' }}>Ready:</h4>
				</div>
				{playerNames.map((name, index) => (
					<div key={name} style={{ marginLeft: '1rem' }}>
						<span style={{ width: '45%', display: 'inline-block', fontSize: '32px', marginBottom: '1rem' }}>{name}</span>
							<input
								style={{ width: '45%', display: 'inline-block' }}
								type="checkbox"
								checked={players[index]?.readyToStart || false}
								disabled={name !== username}
								onChange={(e) => handleCheckboxChange(index, e.target.checked)}
							/> 
							{/* TODO: need to allow user to check if they are the user, rn can't because of checked prop */}
					</div>
				))}
				<div className="notif-box" style={{display: 'flex', justifyContent: 'space-between', marginTop: '1rem'}}>
					<div style={{border: 'dashed', width: '30%'}}>
						<img src={notifSVG} />
						Your game will start filled with bots.
					</div>
					<button>Start game &gt;</button> 
					{/* whenver all ready from websocket start game, voteToStart, voteNotToStartGame 
						so whenever the game status changes from Lobby to Game, then start the game
					*/}
				</div>
			</div>
		</>
	);
}

export default LobbyScreen;