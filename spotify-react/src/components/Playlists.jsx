import React from "react";
import "./Playlist.css";

// Import all images (works if they're in src/assets/images)
import BollywoodChill from "../assets/images/BollywoodChill.jpg";
import Trending from "../assets/images/Trending.jpg";
import HindiHotHits from "../assets/images/Hindi-Hot-hits.jpg";
import TopTracks from "../assets/images/TopTracks2024-india.jpg";
import YourInLove from "../assets/images/yourinlove.jpg";
import IPopSuperHits from "../assets/images/I-popsuperhits.jpg";
import SongsThatBroke from "../assets/images/SongsThatbroke.jpg";
import PeacefulPiano from "../assets/images/PeacefulPiano.jpg";
import DeepFocus from "../assets/images/DeepFocus.jpg";
import Instrument from "../assets/images/instrument.png";
import FocusFlow from "../assets/images/FocusFlow.jpg";
import BeatsToThink from "../assets/images/BeatsToThingsto.png";
import ReadingAdventure from "../assets/images/ReadingAdventur.png";
import Workday from "../assets/images/workday.png";
import Mumbai from "../assets/images/mumbai.png";
import Kolkata from "../assets/images/kolkata.png";
import Delhi from "../assets/images/delhi.png";
import Bengaluru from "../assets/images/bengaluru.png";
import Chennai from "../assets/images/chennai.png";
import Hyderabad from "../assets/images/Hyderabad.png";

const playlistData = [
  {
    title: "Trending Playlists",
    items: [
      { img: BollywoodChill, title: "Bollywood & Chill", desc: "Sit back, and chill with Bollywood's easygoing hits." },
      { img: Trending, title: "Trending Valentine Hits", desc: "India's Ultimate Love Playlist." },
      { img: HindiHotHits, title: "Hindi-Hot-hits", desc: "Hottest Hindi music that India is listening to. Cover - Stree 2." },
      { img: TopTracks, title: "Top-Tracks 2024 India", desc: "The most streamed songs of 2024 in India. #SpotifyWrapped Cover - Animal" },
      { img: YourInLove, title: "Pov: You're In Love", desc: "Uff, you've fallen! 💜" },
      { img: IPopSuperHits, title: "I-pop Superhits", desc: "Only hits! Cover- 'Sahiba' by Jasleen Royal and Stebin Ben" },
      { img: SongsThatBroke, title: "Songs that Broke internet 2024", desc: "Viral songs that kept the internet buzzing in 2024 #SpotifyWrapped." },
    ],
  },
  {
    title: "Focus",
    items: [
      { img: PeacefulPiano, title: "Peaceful Piano", desc: "Peaceful piano to help you slow down, breathe..." },
      { img: DeepFocus, title: "Deep Focus", desc: "Keep calm and focus with ambient and post-..." },
      { img: Instrument, title: "Instrumental Study", desc: "Focus with soft study music in the background." },
      { img: FocusFlow, title: "Focus Flow", desc: "Uptempo instrumental hip hop beats" },
      { img: BeatsToThink, title: "Beats to think to", desc: "Focus with melodic techno and tech house." },
      { img: ReadingAdventure, title: "Reading Adventure", desc: "Scores and soundtracks for daring quests, epic..." },
      { img: Workday, title: "Workday Lounge", desc: "Lounge and chill out music for your workday" },
    ],
  },
  {
    title: "Sound of India",
    items: [
      { img: Mumbai, title: "The Sound of Mum...", desc: "The songs that define, unite and distinguish..." },
      { img: Kolkata, title: "The Sound of Kolka...", desc: "The songs that define, unite and distinguish..." },
      { img: Delhi, title: "The Sound of Delhi...", desc: "The songs that define, unite and distinguish..." },
      { img: Bengaluru, title: "The Sound of Ben...", desc: "The songs that define, unite and distinguish..." },
      { img: Chennai, title: "The Sound of Chen...", desc: "The songs that define, unite and distinguish..." },
      { img: Hyderabad, title: "The Sound of Hyde...", desc: "The songs that define, unite and distinguish..." },
    ],
  },
];

export default function Playlists() {
  return (
    <div className="main-container">
      {playlistData.map((section, idx) => (
        <div className="spotify-playlists" key={idx}>
          <h2>{section.title}</h2>
          <div className="list">
            {section.items.map((item, index) => (
              <div className="item" key={index}>
                <img src={item.img} alt={item.title} />
                <div className="play">
                  <span className="fa fa-play"></span>
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
