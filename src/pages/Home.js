import { useEffect } from "react";
import Button from "components/Utilities/Button";
import "styles/pages/Home.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import KUTE from "kute.js";
import Wave from "react-wavify";

function Home() {
  useEffect(() => {
    // const waveDuration = 2000;
    // const repeat = 150;
    // KUTE.allFromTo(
    //   "#waveFrom1",
    //   { path: "#waveFrom1" },
    //   { path: "#waveTo1" },
    //   { repeat: repeat, yoyo: true, duration: waveDuration }
    // ).start();
    // KUTE.allFromTo(
    //   "#waveFrom2",
    //   { path: "#waveFrom2" },
    //   { path: "#waveTo2" },
    //   { repeat: repeat, yoyo: true, duration: waveDuration }
    // ).start();
    // KUTE.allFromTo(
    //   "#waveFrom3",
    //   { path: "#waveFrom3" },
    //   { path: "#waveTo3" },
    //   { repeat: repeat, yoyo: true, duration: waveDuration }
    // ).start();
    // KUTE.allFromTo(
    //   "#waveFrom4",
    //   { path: "#waveFrom4" },
    //   { path: "#waveTo4" },
    //   { repeat: repeat, yoyo: true, duration: waveDuration }
    // ).start();
    // console.log("End");
  }, []);
  return (
    <div className="wrapper">
      <div className="landing">
        <h1>
          Welcome to <span className="highlightText">Shop!t</span>
        </h1>
        <br />
        <p>
          The one stop solution to all your shopping needs.
          <br />
        </p>
        <Button to="/app" variant="swipe">
          Shop Now
          <ArrowForwardIcon />
        </Button>
        <Waves/>
      </div>
    </div>
  );
}

function Waves() {
  return (
    <>
      <Wave
        className="wave1"
        fill="#334dc050"
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.35,
          points: 3,
        }}
      />
      <Wave
        className="wave2"
        fill="#90caf970"
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 5,
        }}
      />
      <Wave
        className="wave4"
        fill="#526ed5"
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 4,
        }}
      />
      <Wave
        className="wave5"
        fill="#5e35b160"
        paused={false}
        options={{
          height: 20,
          amplitude: 15,
          speed: 0.15,
          points: 5,
        }}
      />
    </>
  );
}

export default Home;
