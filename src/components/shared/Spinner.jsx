import spinner from '../assets/loading-buffering.gif'

function Spinner() {
  return <img 
            src={spinner} 
            alt="Loading..." 
            style={
                {
                    width: '100px',
                    margin: '100px auto',
                    display: 'block'
                }
            }/>
}

export default Spinner