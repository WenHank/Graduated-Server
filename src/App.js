import "./App.css";
import { db } from "./firebase";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
import { useEffect, useState } from "react";
// import { createMuiTheme, ThemeProvider } from "@material-ui/core";
// import AudioPlayer from "material-ui-audio-player";

function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [song, setSong] = useState("");
  const [img, setImg] = useState("");
  // const muiTheme = createMuiTheme({});
  const src = [`../video/${song}.mp4`];
  const [flag1, setFlag1] = useState(0);
  const [flag2, setFlag2] = useState(0);
  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      Object.values(data).map((obj) => {
        if (obj.uuid === "06f2462716c") {
          setRed(Number(obj.red));
          setGreen(Number(obj.green));
          setBlue(Number(obj.blue));
        }
        if (obj.uuid === "39822c4b746") {
          setSong(obj.song);
          if (obj.song === "part1") {
            setFlag1(1);
            setFlag2(0);
            console.log("do part1");
          } else {
            setFlag1(0);
            setFlag2(1);
            console.log("do part2");
          }
          // setImg(`../Img/${obj.song}.jpeg`);
        }
      });
    });
  }, []);
  console.log(flag1);
  console.log(flag2);
  console.log(song);
  return (
    <section style={{ background: `rgb(${red}, ${green}, ${blue})` }}>
      <h1>Server</h1>
      <div style={{ display: flag1 ? "block" : "none" }}>
        <video autoPlay muted loop controls width="300">
          <source src={"../video/part1.mp4"} />
        </video>
      </div>
      <div style={{ display: flag2 ? "block" : "none" }}>
        <video autoPlay muted loop controls width="300">
          <source src={"../video/part2.mp4"} />
        </video>
      </div>
      {/* <div className="blobs">
        <img className="albumImg" src={img} />
        <div className="blob">
          <svg
            viewBox="0 0 800 500"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%"
            id="blobSvg"
          >
            <g transform="translate(145.2598876953125, 12.940910339355469)">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "rgb(255, 161, 175)" }}
                  ></stop>
                  <stop
                    offset="100%"
                    style={{ stopColor: "rgb(196, 224, 229)" }}
                  ></stop>
                </linearGradient>
              </defs>
              <path fill="url(#gradient)">
                <animate
                  attributeName="d"
                  dur="10000ms"
                  repeatCount="indefinite"
                  values="M415.5,300.5Q389,351,350.5,395Q312,439,254,428.5Q196,418,132.5,399.5Q69,381,55,315.5Q41,250,79,202Q117,154,156,117.5Q195,81,250,81Q305,81,355.5,108.5Q406,136,424,193Q442,250,415.5,300.5Z;

                M450,317Q435,384,379,429Q323,474,262.5,436Q202,398,137.5,388.5Q73,379,73,314.5Q73,250,90.5,198.5Q108,147,146.5,98Q185,49,242,73.5Q299,98,354,116Q409,134,437,192Q465,250,450,317Z;

                M434.5,297.5Q380,345,341,378Q302,411,247,420.5Q192,430,142,397.5Q92,365,52,307.5Q12,250,32,178Q52,106,122,88Q192,70,258.5,45.5Q325,21,374,73Q423,125,456,187.5Q489,250,434.5,297.5Z;

                M438.5,318Q437,386,382,437Q327,488,258.5,461Q190,434,125.5,410.5Q61,387,55.5,318.5Q50,250,61.5,185.5Q73,121,133,98Q193,75,258.5,48.5Q324,22,369,76.5Q414,131,427,190.5Q440,250,438.5,318Z;
                
                M436.5,302Q392,354,355.5,408Q319,462,252,456.5Q185,451,152,398Q119,345,88.5,297.5Q58,250,84,199Q110,148,151,109.5Q192,71,245,87Q298,103,355,118Q412,133,446.5,191.5Q481,250,436.5,302Z"
                ></animate>
              </path>
            </g>
          </svg>
        </div>
        <div className="blob">
          <svg
            viewBox="0 0 800 500"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%"
            id="blobSvg"
          >
            <g transform="translate(145.2598876953125, 12.940910339355469)">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "rgb(76, 161, 175)" }}
                  ></stop>
                  <stop
                    offset="100%"
                    style={{ stopColor: "rgb(196, 224, 229)" }}
                  ></stop>
                </linearGradient>
              </defs>
              <path fill="url(#gradient)">
                <animate
                  attributeName="d"
                  dur="10000ms"
                  repeatCount="indefinite"
                  values="M415.5,300.5Q389,351,350.5,395Q312,439,254,428.5Q196,418,132.5,399.5Q69,381,55,315.5Q41,250,79,202Q117,154,156,117.5Q195,81,250,81Q305,81,355.5,108.5Q406,136,424,193Q442,250,415.5,300.5Z;

                M450,317Q435,384,379,429Q323,474,262.5,436Q202,398,137.5,388.5Q73,379,73,314.5Q73,250,90.5,198.5Q108,147,146.5,98Q185,49,242,73.5Q299,98,354,116Q409,134,437,192Q465,250,450,317Z;

                M434.5,297.5Q380,345,341,378Q302,411,247,420.5Q192,430,142,397.5Q92,365,52,307.5Q12,250,32,178Q52,106,122,88Q192,70,258.5,45.5Q325,21,374,73Q423,125,456,187.5Q489,250,434.5,297.5Z;

                M438.5,318Q437,386,382,437Q327,488,258.5,461Q190,434,125.5,410.5Q61,387,55.5,318.5Q50,250,61.5,185.5Q73,121,133,98Q193,75,258.5,48.5Q324,22,369,76.5Q414,131,427,190.5Q440,250,438.5,318Z;
                
                M436.5,302Q392,354,355.5,408Q319,462,252,456.5Q185,451,152,398Q119,345,88.5,297.5Q58,250,84,199Q110,148,151,109.5Q192,71,245,87Q298,103,355,118Q412,133,446.5,191.5Q481,250,436.5,302Z"
                ></animate>
              </path>
            </g>
          </svg>
        </div>
      </div>
      <div className="musicControler">
        <ThemeProvider theme={muiTheme}>
          <AudioPlayer
            elevation={1}
            width="100%"
            variation="default"
            spacing={3}
            download={true}
            autoplay={false}
            order="standart"
            preload="auto"
            loop={true}
            src={src}
          />
        </ThemeProvider>
      </div> */}
    </section>
  );
}

export default App;
