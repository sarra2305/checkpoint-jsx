import logo from './logo.svg';
import './App.css';
import art from '../src/Adam-god.jpg';
import './style.css';



function App() {
  return (
 <><div style={{ border: "solid 1 black", maxWidth: "100vw" }}>

      <h1 className="title red">Your name here</h1>

      <br />

      <img src={art} alt="Adam-god" />

      <br />

      <img src="/music.jpg" alt="music" />

    </div><video width={320} height={240} controls>
        <source src="./myVideo.mp4" type="video/mp4" />
      </video></>
}

export default App;
