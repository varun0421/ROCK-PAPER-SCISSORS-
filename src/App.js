import React, {useState,useEffect} from 'react'
import './App.css';

function App() {
  const [userChoice,setUserChoice] = useState('ROCK')
  const [computerChoice,setComputerChoice] = useState('ROCK')
  const [userPoints,setUserPoints]=useState(0)
  const [computerPoints,setComputerPoints]=useState(0)
  const [ turnResult,setTurnResult]=useState(null)
  const [result, setResult] = useState('Let\'s see who wins')
  const [gameOver,setGameOver]=useState(false)

  const choices = ['ROCK','PAPER','SCISSORS']

  const handleOnClick = (choice) => {
    setUserChoice(choice)
    generateComputerChoice()
  }
  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  const reset =() => {
    window.location.reload()
  }

  useEffect(() => {
    const comboMoves = userChoice + computerChoice
    if(userPoints <=2 && computerPoints <=2){
      if (comboMoves === 'ROCKSCISSORS' || comboMoves === 'PAPERROCK' || comboMoves === 'SCISSORSPAPER'){
        const updatedUserPoints = userPoints + 1
        setUserPoints(updatedUserPoints)
        setTurnResult('User got the point')
        if (updatedUserPoints === 3){
          setGameOver(true)
          setResult('User Wins')
          const gameOff = true
          setGameOver(gameOff)
        }
      }

      if(comboMoves === 'PAPERSCISSORS' || comboMoves === 'SCISSORSROCK' || comboMoves === 'ROCKPAPER'){
        const updatedComputerPoints = computerPoints + 1
        setComputerPoints(updatedComputerPoints)
        setTurnResult('Computer got the point')
        if (updatedComputerPoints === 3){
          setGameOver(true)
          setResult('Computer Wins')
          const gameOff = true
          setGameOver(gameOff)
        }
      }

      if(comboMoves === 'paperpaper' ||comboMoves === 'rockrock' || comboMoves === 'scissorsscissors'){
        setResult('No one gets a point !')
      }
    }
  },[userChoice,computerChoice])

  return (
    <div className="App">
      <h1 className='heading'>Rock Paper Scissor</h1>
      <div className='score'>
        <h1>User Points : {userPoints}</h1>
        <h1>Computer Points : {computerPoints}</h1>
      </div>
      <div className='choice'>
        <div className='choice-user'>
          <img className='user-hand' src={`../images/${userChoice}.png`}/>
        </div>
        <div className='choice-computer'>
          <img className='computer-hand' src={`../images/${computerChoice}.png`}/>
        </div>
      </div>

      <div children='button-div'>
        {choices.map((choice,index) => 
          <button className='button' key={index} onClick={()=> handleOnClick(choice)}>
            {choice}
          </button>)}
      </div>

      <div className='result'>
        <h1>Turn Result : {turnResult}</h1>
        <h1>Final Result : {result}</h1>
      </div>
      
      <div className='button-div'>
        {gameOver && 
          <button className='button' onClick={() => reset()}>Restart Game?</button>
        }
      </div>
    </div>
  );
}

export default App;
