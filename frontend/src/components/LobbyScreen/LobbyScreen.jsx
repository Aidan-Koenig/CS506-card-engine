import { useEffect, useState } from 'react';
import closeModalBtn from '../../assets/close.svg';
import notifSVG from '../../assets/notif-icon.svg';
// import { Client } from '@stomp/stompjs'; TODO: Uncomment when this is being implemented for websockets
import './LobbyScreen.css';

function LobbyScreen({ closeModal, selectedGameId }) {

	/*
	const stompClient = new Client({
		brokerURL: 'ws://localhost:8080/full-house-bucky-websocket'
	});
	*/

	/**
	 * @function
	 * @description Handles subscribing to a Euchre games websocket when joining a lobby
	 * @param {int} gameID - The ID of the game to join
	const handleSubscribeLobby = (gameID) => {
		stompClient.subscribe('/topic/games/euchre/' + gameID, (message) => {
			handleGameStatus(JSON.parse(message.body).content);
		});
	}

	function handleGameStatus(message){
		console.log(message)
	}
	*/

	const [gameInfo, setGameInfo] = useState(null);
	// const [playerReadyStatus, setPlayerReadyStatus] = useState({});
	// const [webSocketMessage, setWebSocketMessage] = useState(null);

	useEffect(() => {
		const fetchGameInfo = async () => {
			try {
				const response = await fetch(`http://localhost:8080/games/euchre/${selectedGameId}`);
				if (!response.ok) {
					throw new Error('Failed to fetch game info');
			}
			const data = await response.json();
			setGameInfo(data);
			console.log(data);
			// TODO: need to subscribe to websocket here
			} catch (error) {
				console.error('Error fetching game info:', error);
			}
		};
	
		fetchGameInfo();
	}, [selectedGameId]);

	// useEffect(() => {
	// 	if (webSocketMessage) {
	// 		setGameInfo(webSocketMessage);
	// 		setPlayerNames([webSocketMessage.player1_name, webSocketMessage.player2_name, webSocketMessage.player3_name, webSocketMessage.player4_name].filter(Boolean));
	// 		setPlayerReadyStatus({
	// 			1: webSocketMessage.player1_ready,
	// 			2: webSocketMessage.player2_ready,
	// 			3: webSocketMessage.player3_ready,
	// 			4: webSocketMessage.player4_ready,
	// 		});
	// 	}
	// }, [webSocketMessage]);

	// TODO: need another use effect for the websockets

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
					</div>
				))}
				<div className="notif-box" style={{display: 'flex', justifyContent: 'space-between', marginTop: '1rem'}}>
					<div style={{border: 'dashed', width: '30%'}}>
						<img src={notifSVG} />
						Your game will start filled with bots.
					</div>
					<button>Start game &gt;</button> 
					{/* whenver all ready from websocket start game, voteToStart, voteNotToStartGame */}
				</div>
			</div>
		</>
	);
}

export default LobbyScreen;