
// let currentAudio = null;  // Variable to track the currently playing audio

// function playAudio(audioId, audioSrc) {
//     // Pause the current audio if it's playing
//     if (currentAudio && !currentAudio.paused) {
//         currentAudio.pause();
//         currentAudio.currentTime = 0;  // Reset the current audio
//     }

//     // Get the new audio element by its ID and set its source
//     let newAudio = document.getElementById(audioId);
//     newAudio.setAttribute('src', audioSrc);

//     // Play the new audio and set it as the current one   
//     newAudio.play();
//     currentAudio = newAudio;
// }

// function playDrum() {
//     playAudio('drum', './drum-sound.wav');
// }

// function playFlute() {
//     playAudio('flute', './flute-sound.wav');
// }

// function playGuitar() {
//     playAudio('guitar', './guitar-sound.wav')
// }

//  --------------- OLD METHOD --------------------------

//    function c() {
//     document.getElementById('flute').play()
   
//     document.addEventListener("keypress",(e)=>{
//        if(e.key== "  "){

//            document.getElementById('flute').pause()
   
//        }
//     })
//    }




function createSpotifyCard(imageSrc, titleText, descriptionText, playId) {
    const container = document.createElement('div');
    container.classList.add('item');

    const img = document.createElement('img');
    img.src = imageSrc;
    container.appendChild(img);

    const playDiv = document.createElement('div');
    playDiv.classList.add('play');

    const playIcon = document.createElement('span');
    playIcon.id = playId;
    playIcon.classList.add('fa', 'fa-play');
    playDiv.appendChild(playIcon);

    container.appendChild(playDiv);

    const title = document.createElement('h4');
    title.textContent = titleText;
    container.appendChild(title);

    const description = document.createElement('p');
    description.textContent = descriptionText;
    container.appendChild(description);

    return container;
}

function createPlaylistSection(title, playlists, containerSelector) {
    const section = document.createElement('div');
    section.classList.add('spotify-playlists');

    const heading = document.createElement('h2');
    heading.textContent = title;
    section.appendChild(heading);

    const list = document.createElement('div');
    list.classList.add('list');
    
    playlists.forEach(playlist => {
        const card = createSpotifyCard(playlist.image, playlist.title, playlist.description, playlist.playId);
        list.appendChild(card);
    });

    section.appendChild(list);
    document.querySelector(containerSelector).appendChild(section);
    
}

// Example playlists
// const trendingPlaylists = [
//     { image: './images/Bollywood&Chill.jpg', title: 'Bollywood & Chill', description: "Sit back, and chill with Bollywood's easygoing hits.", playId: 'First' },
//     { image: './images/Trending.jpg', title: 'Trending Valentine Hits', description: "India's Ultimate Love Playlist.", playId: 'Second' },
//     { image: './images/Hindi-Hot-hits.jpg', title: 'Hindi-Hot-hits', description: "Hottest Hindi music that India is listening to. Cover - Stree 2.", playId: 'Third' }
// ];

// const focusPlaylists = [
//     { image: './images/Peaceful Piano.jpg', title: 'Peaceful Piano', description: "Peaceful piano to help you slow down, breathe...", playId: 'Focus1' },
//     { image: './images/Deep Focus.jpg', title: 'Deep Focus', description: "Keep calm and focus with ambient and post-...", playId: 'Focus2' }
// ];

// const soundOfIndiaPlaylists = [
//     { image: './images/mumbai.png', title: 'The Sound of Mum...', description: "The songs that define, unite and distinguish...", playId: 'India1' },
//     { image: './images/kolkata.png', title: 'The Sound of Kolka...', description: "The songs that define, unite and distinguish...", playId: 'India2' }
// ];

// Append playlist sections
document.addEventListener("DOMContentLoaded", () => {
    createPlaylistSection('Trending Playlists', trendingPlaylists, '.main-container');
    createPlaylistSection('Focus', focusPlaylists, '.main-container');
    createPlaylistSection('Sound of India', soundOfIndiaPlaylists, '.main-container');
});
