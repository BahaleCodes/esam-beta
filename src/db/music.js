// import axios from 'axios';

let musicDB = [
    // axios.get('http://127.0.0.1:8000/api/content/songs/')
    //     .then(resp => console.log(resp.data))
    //     .then(res => musicDB = res);
    // getSongs();
    {
        id: 0,
        title: "Halala",
        song_file: "http://127.0.0.1:8000/media/y2mate.com_-_God_Save_The_King_feat_AReece_Qwi5faY.mp3",
        image: "http://127.0.0.1:8000/media/mqdefault.jpg",
        description: "Description",
        published: "2022-02-18T22:36:47Z",
        artist: "Mr Jazziq",
        song_type: "mixtape",
        album: "The Journey sessions",
        genre: "Amapiano",
        user: 2
    },
    {
        id: 1,
        title: "Ocean Views",
        artist: "Nipsey Hussle",
        album: "Slausin Boy 2",
        image: "/assets/img/nip2.jpg",
        timesPlayed: 0,
        genre: "Rap",
        song_file: "/assets/music/OceanViews.mp3",
        song_type: "mixtape",
        attribution: {
            song: "Ocean Views",
            musicBy: "All Money In Records",
            download: "https://mixtapemonkey.com/mixtapes/Nipsey_Hussle-Slauson_Boy_2.zip",
            stream: "https://www.youtube.com/watch?v=q_P8UMMbbdg"
        }
    },
    {
        id: 2,
        title: "Ma'Dice(Ft Madglera Doe Boy)",
        artist: "Wordz Tha Prince",
        image: "/assets/img/popm.jpg",
        lang: null,
        timesPlayed: 0,
        genre: "instruassets/music/mental",
        song_file: "/assets/music/dice.mp3",
        song_type: "song",
        attribution: {
            song: "Games Worldbeat",
            musicBy: "mixkit",
            download: null,
            stream: null
        }
    },
    {
        id: 3,
        title: "Vuk'esofeni",
        artist: "Kid X",
        image: "/assets/img/foz.jpg",
        genre: "electronic",
        timesPlayed: 0,
        song_file: "/assets/music/vuk.mp3",
        song_type: "song",
        attribution: {
            song: "ROY KNOX - Over My Head (Feat. Mike Robert) [NCS Release]",
            musicBy: "NoCopyrightSounds",
            download: "http://ncs.io/OverMyHead",
            stream: null
        }
    },

    {
        id: 4,
        title: "Adiwele",
        artist: "Young Stunna",
        image: "/assets/img/young.jpg",
        timesPlayed: 0,
        genre: "electronic",
        song_file: "/assets/music/adiwele.mp3",
        song_type: "song",
        attribution: {
            song: "Midranger - Apocalypse [NCS Release]",
            musicBy: "NoCopyrightSounds",
            download: "http://ncs.io/Apocalypse",
            stream: "http://youtu.be/Whw1sWDpAvE"
        }
    },
    {
        id: 5,
        title: "Kabza Unrealesed",
        artist: "Kabza",
        image: "/assets/img/notAvailable.jpg",
        timesPlayed: 0,
        genre: "electronic",
        song_file: "/assets/music/.mp3",
        song_type: "song",
        attribution: {
            song: "N3WPORT - Alive (feat. Neoni) [NCS Release]",
            musicBy: "NoCopyrightSounds",
            download: "http://ncs.io/NAlive",
            stream: "http://youtu.be/vJAcXd_UtWQ"
        }
    },
    {
        id: 6,
        title: "Impact Moderato",
        artist: "Kevin MacLeod",
        image: "/assets/img/notAvailable.jpg",
        timesPlayed: 0,
        genre: "instrumental",
        song_file: "/assets/music/impact.mp3",
        song_type: "song",
        attribution: {
            song: "Impact Moderato",
            musicBy: "Kevin MacLeod",
            download: null,
            stream: null
        }
    },
    {
        id: 7,
        title: "Impact Moderato 2",
        artist: "Kevin MacLeod",
        image: "/assets/img/notAvailable.jpg",
        timesPlayed: 0,
        genre: "instrumental",
        song_file: "/assets/music/impact2.mp3",
        song_type: "song",
        attribution: {
            song: "Impact Moderato",
            musicBy: "Kevin MacLeod",
            download: null,
            stream: null
        }
    },
    {
        id: 8,
        title: "Turf Luck",
        artist: "A-Reece x Jay Jody",
        image: "/assets/img/turfLuck.jpg",
        timesPlayed: 0,
        genre: "electronic",
        song_file: "/assets/music/tl.mp3",
        song_type: "song",
        attribution: {
            song: "Heuse & Tom Wilson - Ignite [NCS Release]",
            musicBy: "NoCopyrightSounds",
            download: "http://ncs.io/Ignite",
            stream: "http://youtu.be/zbqgv0mMfwk"
        }
    }
]


export default musicDB;