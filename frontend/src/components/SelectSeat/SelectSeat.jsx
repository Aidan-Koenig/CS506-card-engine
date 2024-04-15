import closeModalBtn from '../../assets/close.svg';
import { useEffect } from 'react';

function SelectSeat({ gameId }) {

    const [gameInfo, setGameInfo] = useState(null);

    useEffect(() => {
        const fetchGameInfo = async () => {
          try {
            const response = await fetch(`http://localhost:8080/games/euchre/${gameId}`);
            if (!response.ok) {
              throw new Error('Failed to fetch game info');
            }
            const data = await response.json();
            setGameInfo(data);
          } catch (error) {
            console.error('Error fetching game info:', error);
          }
        };
    
        fetchGameInfo();
    }, [gameId]);

    return(
        <>
        
        </>
    );
}

export default SelectSeat;