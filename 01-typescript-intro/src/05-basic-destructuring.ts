interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 30,
    song: "My song",
    details: {
        author: "My author",
        year: 2021
    }
}

const { audioVolume,  song: anotherSong, details } = audioPlayer;
const { author, year } = details;

console.log({anotherSong, audioVolume, author, year})

const dbz: string[] = ['Goku', 'Vegeta'];
const [ Goku,, Trunks  = 'not found'] = dbz;

console.log({Goku, Trunks})

export {}