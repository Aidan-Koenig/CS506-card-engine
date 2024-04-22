import { useEffect, useState } from 'react';
import closeModalBtn from '../../assets/close.svg';
import notifSVG from '../../assets/notif-icon.svg';
import { Client } from '@stomp/stompjs';
import './LobbyScreen.css';

function LobbyScreen({ closeModal, selectedGameId }) {

	/*

	function handleGameStatus(message) {
        const { gameId, status, players } = message;
        const playerNamesArray = players.map(player => player.username);
        const readyStatusObj = {};
        players.forEach(player => {
            readyStatusObj[player.id] = player.readyToStart;
        });
        setPlayerNames(playerNamesArray);
        setPlayerReadyStatus(readyStatusObj);
        setWebSocketMessage(message);
    }

	const handleCheckboxChange = (playerIndex, checked) => {
		const payload = {
			gameId: selectedGameId,
			userId: Current user's ID ,
			readyToStart: checked,
			playerIndex: playerIndex + 1, // Assuming player indices start from 1
		};
		if (checked) {
			stompClient.send(
				'/app/games/euchre/vote-start',
				{},
				JSON.stringify(payload)
			);
		}
		else {
			stompClient.send(
				'/app/games/euchre/vote-not-start',
				{},
				JSON.stringify(payload)
			);
		}
	};
	*/

	const [gameInfo, setGameInfo] = useState(null);
	const [gameStatus, setGameStatus] = useState('');
	const [players, setPlayers] = useState([]);
	const [webSocketMessage, setWebSocketMessage] = useState(null); //gets set initally when subscribing to the game endpoint

	useEffect(() => {
		const fetchGameInfo = async () => {
			try {
				const response = await fetch(`http://localhost:8080/games/euchre/${selectedGameId}`);
				if (!response.ok) {
					throw new Error('Failed to fetch game info');
			}
			const data = await response.json();
			setGameInfo(data);
			// console.log(data); debug only
			} catch (error) {
				console.error('Error fetching game info:', error);
			}
		};
	
		fetchGameInfo();
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
					setWebSocketMessage(JSON.parse(message.body)); //id, status, Players[0:playerID, username, readytToStart, score, hand]
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

	// TODO: need another use effect for the websockets
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

	// had to do this monstrosity to render only names that are in the game
	const playerNames = (gameInfo?.player1_name?.trim() ||
		gameInfo?.player2_name?.trim() ||
		gameInfo?.player3_name?.trim() ||
		gameInfo?.player4_name?.trim())
		? [
			gameInfo.player1_name,
			gameInfo.player2_name,
			gameInfo.player3_name,
			gameInfo.player4_name,
			].filter(name => name?.trim())
		: [];
	
	// Loading indicator while it's waiting for the game info
	if (!gameInfo) {
		return <div>Loading...</div>;
	}

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
				{playerNames.map((name) => (
					<div key={name} style={{ marginLeft: '1rem' }}>
						<span style={{ width: '45%', display: 'inline-block', fontSize: '32px', marginBottom: '1rem' }}>{name}</span>
						<input style={{ width: '45%', display: 'inline-block' }} type="checkbox" />
						{/* Need to update input to show based on the player ready status
							<input
								style={{ width: '45%', display: 'inline-block' }}
								type="checkbox"
								checked={playerReadyStatus[index + 1]}
								disabled={name !== current user's name}
								onChange={(e) => handleCheckboxChange(index, e.target.checked)}
							/>
						
						*/}
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