

// 
var heading = document.querySelector('#heading-header h1');
var sideNav = document.querySelector('.side-navbar');
var nowPlayingNav = document.querySelector('.now-playing')
var mainContent = document.querySelector('.main-content');
var songItem = document.querySelectorAll('.item');
var thumbnailLayer = document.querySelectorAll('.thumbnail-layer');
var icons = document.querySelector('.icons');
var favorite = document.querySelectorAll('.bx-heart').forEach(addToFavorite);
var nowPlayingBtn = document.querySelector('.now-playing-btn');

// Tao bien dung de Lam hieu ung Click cho Button Gallery:
var galleryNext = document.querySelector('.bx-chevrons-right');
var galleryPrev = document.querySelector('.bx-chevrons-left');

// Tao bien cho Trending Section:
var trendingBtnNew = document.querySelector ('#trending-new');
var trendingBtnVn = document.querySelector ('#trending-vn');
var trendingBtnGlobal = document.querySelector ('#trending-global');
var trendingColumnNew = document.querySelector('.trending-items-new');
var trendingColumnVn = document.querySelector('.trending-items-vn');
var trendingColumnGlobal = document.querySelector('.trending-items-global');

// 2 cái ở dưới phải khai báo ở dưới cái function mới chạy được.
// var gallerySlider = document.querySelector('.slider-gallery');
// var galleryItem = document.querySelectorAll('.gallery-item');

// Tạo biến cho chức năng hover vào icon của Playlist:
var box = document.querySelectorAll('.box img');
var cursorSwitch = document.querySelectorAll('.box #layer');
var icons = document.querySelectorAll('.box #icon-container');

// Tune Top 10 Chart:
// var mainTop10Chart = document.querySelector('.main-chart');
// Tune Week Chart:
// var weekChartCol_1 = document.querySelector('.week-chart-column-1 .week-chart-items');
// var weekChartCol_2 = document.querySelector('.week-chart-column-2 .week-chart-items');
// var weekChartCol_3 = document.querySelector('.week-chart-column-3 .week-chart-items');

// Player Container
var musicPlayer = document.querySelector('.music-player');
var mainContainer = document.querySelector('.container');
var musicPlayerOpen = document.querySelector('.play-open');
var musicPlayerClose = document.querySelector('.music-player .bx-x-circle');
var play = document.querySelectorAll('.thumbnail-layer .bx-play');
var premiumBtn = document.querySelector('.premium button');

// PLAYER
var playBtn = document.querySelector('.playSong');
var pauseBtn = document.querySelector('.pauseSong');
var nextBtn = document.querySelector('.bx-skip-next');
var prevBtn = document.querySelector('.bx-skip-previous');
var replayBtn = document.querySelector('.repeat-all');
var replayBtnIcon = document.querySelector('.repeat-all i');
var replayOneBtn = document.querySelector('.repeat-one');
var shuffleBtn = document.querySelector('.bx-shuffle');
var volumeIcon = document.querySelector('.bx .bx-volume-full');
var volumeProgress = document.querySelector('#volume');

// Tạo biến cho cái slider thời gian của bài hát.
var timeSlider = document.querySelector('#time-slider');
var timePlaying = document.querySelector('.time-playing');
var timeDuration = document.querySelector('.time-duration');
let timer = setInterval(displayTimer, 500); // Phải lấy giá trị Interval là 0.5s vì khi ấn Play/Pause button là sau 0.5s nó ngưng đếm thời gian.

// Test Playing-Item (alternative)
let nowPlayingInfo = document.querySelector('.playing-info-para');
var startTitle = document.querySelector('.start__title');

// Tạo biến cho cái phần tên với tác giả bài hát.
const musicName = document.querySelector('.playing-info h4');
const musicArtist = document.querySelector('.playing-info p');
const musicThumbnail = document.querySelector('.playing-thumbnail img');

// Tạo biến cho link Audio và List nhạc.
var indexSong = 0;
var songNum = indexSong + 1;
var song = document.querySelector('#song');

var nowPlayingList = 0;
console.log('Now Playing List: none');

// 
let isRepeat = false;
let isMute = false;
const _this = this;

/* 
    1 bài nhạc sẽ được hiển thị với các thông tin sau:
        - Id
        - Tên bài
        - Nghệ sĩ
        - Source(src)
        - Thumbnail
*/


// const songLists = [
//     {
//         id: 1,
//         title: 'After Last Night',
//         artist: 'Bruno Mars' + ', ' + 'Anderson .Paak',
//         src: `afterlastnight.mp3`,
//         thumbnail: `/asset/img/thumbnail/afterlastnight_thumbnail.jpg`
//     },
//     {
//         id: 2,
//         title: 'Anh Không Thể',
//         artist: 'MONO',
//         src: `anhkhongthe.mp3`,
//         thumbnail: `/asset/img/thumbnail/mono_thumbnail.jpg`
//     },
//     {
//         id: 3,
//         title: 'As Long As You Love Me',
//         artist: 'Backstreet Boys',
//         src: `aslongasyouloveme.mp3`,
//         thumbnail: `/asset/img/thumbnail/aslongasyouloveme_thumbnail.jpg`
//     },
//     {
//         id: 4,
//         title: 'Attention',
//         artist: 'Charlie Puth',
//         src: `attention.mp3`,
//         thumbnail: `/asset/img/thumbnail/attention_thumbnail.png`
//     }
// ];

var playingLists = [
    {
        id: 1,
        title: 'After All',
        artist: 'Charlie Puth',
        src: `afterall.mp3`,
        thumbnail: `/asset/img/thumbnail/charlieputh_logo_1.jpg`
    },
    {
        id: 2,
        title: 'After Last Night',
        artist: 'Bruno Mars' + ', ' + 'Anderson .Paak',
        src: `afterlastnight.mp3`,
        thumbnail: `/asset/img/thumbnail/afterlastnight_thumbnail.jpg`
    },
    {
        id: 3,
        title: 'Anh Không Thể',
        artist: 'MONO',
        src: `anhkhongthe.mp3`,
        thumbnail: `/asset/img/thumbnail/mono_thumbnail.jpg`
    },
    {
        id: 4,
        title: 'As It Was (Cover)',
        artist: 'PREP',
        src: `AsItWas.mp3`,
        thumbnail: `/asset/img/thumbnail/asitwas_thumbnail.webp`
    },
    {
        id: 5,
        title: 'As Long As You Love Me',
        artist: 'Backstreet Boys',
        src: `aslongasyouloveme.mp3`,
        thumbnail: `/asset/img/thumbnail/aslongasyouloveme_thumbnail.jpg`
    },
    {
        id: 6,
        title: 'Attention',
        artist: 'Charlie Puth',
        src: `attention.mp3`,
        thumbnail: `/asset/img/thumbnail/attention_thumbnail.png`
    },
    {
        id: 7,
        title: 'Bad Boy',
        artist: 'bbno$' + ', ' + 'Yung Bae' + ', ' + 'Billy Marchiafava',
        src: `badboy.mp3`,
        thumbnail: `/asset/img/thumbnail/badboy_thumbnail.jpg`
    },
    {
        id: 8,
        title: 'Bad Habits',
        artist: 'Ed Sheeran',
        src: `badhabits.mp3`,
        thumbnail: `/asset/img/thumbnail/badhabits_thumbnail.jpg`
    },
    {
        id: 9,
        title: 'Bae Bae',
        artist: 'Big Bang',
        src: `baebae.mp3`,
        thumbnail: `/asset/img/thumbnail/bigbang_logo_2.jpg`
    },
    {
        id: 10,
        title: 'BigCityBoi',
        artist: 'Binz' + ', ' + 'Touliver',
        src: `bigcityboi.mp3`,
        thumbnail: `/asset/img/thumbnail/spacespeakers_logo_1.jpg`
    },
    {
        id: 11,
        title: 'BlackJack',
        artist: 'SOOBIN, Binz',
        src: `blackjack.mp3`,
        thumbnail: `/asset/img/thumbnail/spacespeakers_logo_1.jpg`
    },
    {
        id: 12,
        title: 'Know Me',
        artist: 'Gemini',
        src: `Knowme.mp3`,
        thumbnail: `/asset/img/thumbnail/knowme_thumbnail.jpg`
    },
    {
        id: 13,
        title: 'Black Mamba',
        artist: 'aespa',
        src: `blackmamba.mp3`,
        thumbnail: `/asset/img/thumbnail/aespa_logo_1.jpg`
    },
    {
        id: 14,
        title: 'Boy With Luv',
        artist: 'BTS, ' + 'Halsey',
        src: `boywithluv.mp3`,
        thumbnail: `/asset/img/thumbnail/bts_logo_1.jpg`
    },
    {
        id: 15,
        title: 'Buông Đôi Tay Nhau Ra',
        artist: 'Sơn Tùng M-TP',
        src: `buongdoitaynhaura.mp3`,
        thumbnail: `/asset/img/thumbnail/sontungmtp_logo_1.jpg`
    },
    {
        id: 16,
        title: 'Coffee',
        artist: 'N.T.K',
        src: `Coffee.mp3`,
        thumbnail: `/asset/img/thumbnail/coffee_poster.jpg`
    },
    {
        id: 17,
        title: 'CUA',
        artist: 'HIEUTHUHAI, MANBO',
        src: `cua.mp3`,
        thumbnail: `/asset/img/thumbnail/cua_thumbnail.jpg`
    },
    {
        id: 18,
        title: 'Dreams Come True',
        artist: 'aespa',
        src: `dreamscometrue.mp3`,
        thumbnail: `/asset/img/thumbnail/aespa_logo_1.jpg`
    },
    {
        id: 19,
        title: 'Dynamite',
        artist: 'BTS',
        src: `Dynamite.mp3`,
        thumbnail: `/asset/img/thumbnail/bts_logo_1.jpg`
    },
    {
        id: 20,
        title: 'ECNHQ (The Goodboy Flip)',
        artist: 'Sơn Tùng M-TP' + ', ' + 'ONNION.',
        src: `ECNHQ.mp3`,
        thumbnail: `/asset/img/thumbnail/sontungmtp_logo_1.jpg`
    },
    {
        id: 21,
        title: 'Em Không Cô Đơn',
        artist: 'Kha',
        src: `emkhongcodon.mp3`,
        thumbnail: `/asset/img/thumbnail/thumbnail_global.png`
    },
    {
        id: 22,
        title: 'Em Là',
        artist: 'MONO',
        src: `Emla.mp3`,
        thumbnail: `/asset/img/thumbnail/mono_thumbnail.jpg`
    }
];
// console.log(playingLists);

// ===== Trending Lists: =====
// NEW:
var trendingNewColumn_1 = [
    {
        id: 1,
        title: 'After All',
        artist: 'Charlie Puth' + ', ' + 'Elton John',
        src: `afterall.mp3`,
        thumbnail: `/asset/img/thumbnail/charlieputh_logo_1.jpg`
    },
    {
        id: 2,
        title: 'Dreams Come True',
        artist: 'Aespa',
        src: `dreamscometrue.mp3`,
        thumbnail: `/asset/img/thumbnail/aespa_logo_1.jpg`
    },
    {
        id: 3,
        title: 'Montero',
        artist: 'Lil Nas X',
        src: `montero.mp3`,
        thumbnail: `/asset/img/thumbnail/lilnasx_logo_1.jpg`
    },
    {
        id: 4,
        title: 'Until I Found You',
        artist: 'Stephen Sanchez, Em Beihold',
        src: `until_i_found_you.mp3`,
        thumbnail: `/asset/img/thumbnail/untilifoundyou_thumbnail.jpg`
    }
];
var trendingNewColumn_2 = [
    {
        id: 5,
        title: 'Anh Không Thể',
        artist: 'MONO',
        src: `anhkhongthe.mp3`,
        thumbnail: `/asset/img/thumbnail/mono_thumbnail.jpg`
    },
    {
        id: 6,
        title: 'There\'s No One At All (Another Version)',
        artist: 'Sơn Tùng M-TP',
        src: `noaa(a).mp3`,
        thumbnail: `/asset/img/thumbnail/noaa(a)_thumbnail.jpg`
    },
    {
        id: 7,
        title: 'Positions',
        artist: 'Ariana Grande',
        src: `positions.mp3`,
        thumbnail: `/asset/img/thumbnail/arianagrande_logo_1.jpg`
    },
    {
        id: 8,
        title: 'We Don\'t Talk Together',
        artist: 'Heize, Giriboy, Suga (BTS)',
        src: `We_Don\'t_Talk_Together.mp3`,
        thumbnail: `/asset/img/thumbnail/wedonttalktogether_thumbnail.jpg`
    }
];
var trendingNewColumn_3 = [
    {
        id: 9,
        title: 'After Last Night',
        artist: 'Bruno Mars' + ', ' + 'Anderson .Paak',
        src: `afterlastnight.mp3`,
        thumbnail: `/asset/img/thumbnail/afterlastnight_thumbnail.jpg`
    },
    {
        id: 10,
        title: 'Lặng Im',
        artist: 'N.T.K',
        src: `langim.wav`,
        thumbnail: `/asset/img/thumbnail/Langim_Poster_NCT_2.png`
    },
    {
        id: 11,
        title: 'Loser',
        artist: 'Charlie Puth',
        src: `loser.mp3`,
        thumbnail: `/asset/img/thumbnail/charlieputh_logo_1.jpg`
    },
    {
        id: 12,
        title: 'Obsession',
        artist: 'EXO',
        src: `obsession.mp3`,
        thumbnail: `/asset/img/thumbnail/exo_logo_1.jpg`
    }
];
var ab = [];
var trendingNewList = ab.concat(trendingNewColumn_1, trendingNewColumn_2, trendingNewColumn_3);

// VIETNAM:
var trendingVietnamColumn_1 = [
    {
        id: 1,
        title: 'Anh Không Thể',
        artist: 'MONO',
        src: 'anhkhongthe.mp3',
        thumbnail: '/asset/img/thumbnail/mono_thumbnail.jpg'
    },
    {
        id: 2,
        title: 'BlackJack',
        artist: 'SOOBIN',
        src: 'blackjack.mp3',
        thumbnail: '/asset/img/thumbnail/spacespeakers_logo_1.jpg'
    },
    {
        id: 3,
        title: 'There\'s No One At All (Another Version)',
        artist: 'Sơn Tùng M-TP',
        src: 'noaa(a).mp3',
        thumbnail: '/asset/img/thumbnail/noaa(a)_thumbnail.jpg'
    },
    {
        id: 4,
        title: 'Em Là',
        artist: 'MONO',
        src: 'emla.mp3',
        thumbnail: '/asset/img/thumbnail/mono_thumbnail.jpg'
    }
];
var trendingVietnamColumn_2 = [
    {
        id: 1,
        title: 'Hãy Trao Cho Anh',
        artist: 'Sơn Tùng M-TP ft Snoop Dogg',
        src: 'htca-o.mp3',
        thumbnail: '/asset/img/thumbnail/htca_thumbnail.jpg'
    },
    {
        id: 2,
        title: 'Lặng Im',
        artist: 'N.T.K',
        src: 'langim.wav',
        thumbnail: '/asset/img/thumbnail/Langim_Poster_NCT_2.png'
    },
    {
        id: 3,
        title: 'Quên Anh Đi',
        artist: 'MONO',
        src: 'quenanhdi.mp3',
        thumbnail: '/asset/img/thumbnail/mono_thumbnail.jpg'
    },
    {
        id: 4,
        title: 'Nắm Đôi Bàn Tay',
        artist: 'Kay Trần',
        src: 'namdoibantay.mp3',
        thumbnail: '/asset/img/thumbnail/namdoibantay_thumbnail.jpg'
    }
];
var trendingVietnamColumn_3 = [
    {
        id: 1,
        title: 'Coffee',
        artist: 'N.T.K',
        src: 'Coffee.mp3',
        thumbnail: '/asset/img/thumbnail/coffee_poster.jpg'
    },
    {
        id: 2,
        title: 'Em Không Cô Đơn',
        artist: 'Kha',
        src: 'emkhongcodon.mp3',
        thumbnail: '/asset/img/thumbnail/thumbnail_global.png'
    },
    {
        id: 3,
        title: 'Gene',
        artist: 'Binz, Touliver',
        src: 'gene.mp3',
        thumbnail: '/asset/img/thumbnail/spacespeakers_logo_1.jpg'
    },
    {
        id: 4,
        title: 'CUA',
        artist: 'HIEUTHUHAI, Manbo',
        src: 'cua.mp3',
        thumbnail: '/asset/img/thumbnail/cua_thumbnail.jpg'
    }
];
var ac = [];
var trendingVnList = ac.concat(trendingVietnamColumn_1, trendingVietnamColumn_2, trendingVietnamColumn_3);

// GLOBAL
var trendingGlobalColumn_1 = [
    {
        id: 1,
        title: 'After Last Night',
        artist: 'Bruno Mars' + ', ' + 'Anderson .Paak',
        src: `afterlastnight.mp3`,
        thumbnail: `/asset/img/thumbnail/afterlastnight_thumbnail.jpg`
    },
    {
        id: 2,
        title: 'We Don\'t Talk Together',
        artist: 'Heize, Giriboy, Suga(BTS)',
        src: 'We_Don\'t_Talk_Together.mp3',
        thumbnail: '/asset/img/thumbnail/wedonttalktogether_thumbnail.jpg'
    },
    {
        id: 3,
        title: 'Until I Found You',
        artist: 'Stephen Sanchez, Em Beihold',
        src: `until_i_found_you.mp3`,
        thumbnail: `/asset/img/thumbnail/untilifoundyou_thumbnail.jpg`
    },
    {
        id: 4,
        title: 'Montero',
        artist: 'Lil Nas X',
        src: `montero.mp3`,
        thumbnail: `/asset/img/thumbnail/lilnasx_logo_1.jpg`
    }
];
var trendingGlobalColumn_2 = [
    {
        id: 1,
        title: 'There\'s No One At All',
        artist: 'Sơn Tùng M-TP',
        src: `noaa.mp3`,
        thumbnail: `/asset/img/thumbnail/NOAA_thumbnail.jpg`
    },
    {
        id: 2,
        title: 'Waiting For You',
        artist: 'MONO',
        src: 'WaitingForYou.mp3',
        thumbnail: '/asset/img/thumbnail/mono_thumbnail.jpg'
    },
    {
        id: 3,
        title: 'Stay',
        artist: 'The Kid LAROI, Justin Bieber',
        src: `Stay.mp3`,
        thumbnail: `/asset/img/thumbnail/stay_thumbnail.png`
    },
    {
        id: 4,
        title: 'Loser',
        artist: 'Charlie Puth',
        src: `loser.mp3`,
        thumbnail: `/asset/img/thumbnail/charlieputh_logo_1.jpg`
    }
];
var trendingGlobalColumn_3 = [
    {
        id: 1,
        title: 'Peaches',
        artist: 'Justin Bieber, Daniel Caesar, Giveon',
        src: `peaches.mp3`,
        thumbnail: `/asset/img/thumbnail/peaches_thumbnail.png`
    },
    {
        id: 2,
        title: 'Obsession',
        artist: 'EXO',
        src: `obsession.mp3`,
        thumbnail: `/asset/img/thumbnail/exo_logo_1.jpg`
    },
    {
        id: 3,
        title: 'Panda',
        artist: 'Desiigner',
        src: `Panda.mp3`,
        thumbnail: `/asset/img/thumbnail/Desiigner-Panda_thumbnail.webp`
    },
    {
        id: 4,
        title: 'Know Me',
        artist: 'Gemini',
        src: `Knowme.mp3`,
        thumbnail: `/asset/img/thumbnail/knowme_thumbnail.jpg`
    }
];
var bc = [];
var trendingGlobalList = bc.concat(trendingGlobalColumn_1, trendingGlobalColumn_2, trendingGlobalColumn_3);

// Top 10 Main Chart
var top10MainChart = [
    {
        id: 1,
        title: 'Know Me',
        artist: 'Gemini',
        albumn: 'Know Me (2021)',
        src: `Knowme.mp3`,
        thumbnail: `/asset/img/thumbnail/knowme_thumbnail.jpg`
    },
    {
        id: 2,
        title: 'After Last Night',
        artist: 'Bruno Mars' + ', ' + 'Anderson .Paak',
        albumn: 'An Evening with Silk Sonic',
        src: `afterlastnight.mp3`,
        thumbnail: `/asset/img/thumbnail/afterlastnight_thumbnail.jpg`
    },
    {
        id: 3,
        title: 'Peaches',
        artist: 'Justin Bieber, Daniel Caesar, Giveon',
        albumn: 'Justice',
        src: `peaches.mp3`,
        thumbnail: `/asset/img/thumbnail/peaches_thumbnail.png`
    },
    {
        id: 4,
        title: 'We Don\'t Talk Together',
        artist: 'Heize, Giriboy, Suga(BTS)',
        albumn: 'We Don\'t Talk Together',
        src: 'We_Don\'t_Talk_Together.mp3',
        thumbnail: `/asset/img/thumbnail/wedonttalktogether_thumbnail.jpg`
    },
    {
        id: 5,
        title: 'Loser',
        artist: 'Charlie Puth',
        albumn: 'Charlie',
        src: `loser.mp3`,
        thumbnail: `/asset/img/thumbnail/charlieputh_logo_1.jpg`
    },
    {
        id: 6,
        title: 'THERE\'S NO ONE AT ALL',
        artist: 'Sơn Tùng M-TP',
        albumn: 'THERE\'S NO ONE AT ALL',
        src: `noaa.mp3`,
        thumbnail: `/asset/img/thumbnail/NOAA_thumbnail.jpg`
    },
    {
        id: 7,
        title: 'Waiting For You',
        artist: 'MONO',
        albumn: '22 (2022)',
        src: `waitingforyou.mp3`,
        thumbnail: `/asset/img/thumbnail/mono_thumbnail.jpg`
    },
    {
        id: 8,
        title: 'Until I Found You',
        artist: 'Stephen Sanchez, Em Beihold',
        albumn: 'Putzen & Aufräumen',
        src: `until_i_found_you.mp3`,
        thumbnail: `/asset/img/thumbnail/untilifoundyou_thumbnail.jpg`
    },
    {
        id: 9,
        title: 'STAY',
        artist: 'The Kid LAROI, Justin Bieber',
        albumn: 'STAY',
        src: `Stay.mp3`,
        thumbnail: `/asset/img/thumbnail/stay_thumbnail.png`
    },
    {
        id: 10,
        title: 'Obsession',
        artist: 'EXO',
        albumn: 'Obsession (2019)',
        src: `obsession.mp3`,
        thumbnail: `/asset/img/thumbnail/exo_logo_1.jpg`
    },
];
// Week Chart
var weekChartVn = [
    {
        id: 1,
        title: 'Hãy Trao Cho Anh',
        artist: 'Sơn Tùng M-TP ft Snoop Dogg',
        src: 'htca-o.mp3',
        thumbnail: '/asset/img/thumbnail/htca_thumbnail.jpg'
    },
    {
        id: 2,
        title: 'Waiting For You',
        artist: 'MONO',
        src: 'WaitingForYou.mp3',
        thumbnail: '/asset/img/thumbnail/mono_thumbnail.jpg'
    },
    {
        id: 3,
        title: 'Gene',
        artist: 'Binz',
        src: 'gene.mp3',
        thumbnail: '/asset/img/thumbnail/spacespeakers_logo_1.jpg'
    },
    {
        id: 4,
        title: 'CUA',
        artist: 'HIEUTHUHAI, Manbo',
        src: 'cua.mp3',
        thumbnail: '/asset/img/thumbnail/cua_thumbnail.jpg'
    },
    {
        id: 5,
        title: 'Lặng Im',
        artist: 'N.T.K',
        src: 'langim.wav',
        thumbnail: '/asset/img/thumbnail/Langim_Poster_NCT_2.png'
    }
];
var weekChartKpop = [
    {
        id: 1,
        title: 'Dynamite',
        artist: 'BTS',
        src: `Dynamite.mp3`,
        thumbnail: `/asset/img/thumbnail/bts_logo_1.jpg`
    },
    {
        id: 2,
        title: 'We Don\'t Talk Together',
        artist: 'Heize, Giriboy, Suga(BTS)',
        src: 'We_Don\'t_Talk_Together.mp3',
        thumbnail: '/asset/img/thumbnail/wedonttalktogether_thumbnail.jpg'
    },
    {
        id: 3,
        title: 'Obsession',
        artist: 'EXO',
        src: `obsession.mp3`,
        thumbnail: `/asset/img/thumbnail/exo_logo_1.jpg`
    },
    {
        id: 4,
        title: 'Know Me',
        artist: 'Gemini',
        src: `Knowme.mp3`,
        thumbnail: `/asset/img/thumbnail/knowme_thumbnail.jpg`
    },
    {
        id: 5,
        title: 'Bae Bae',
        artist: 'Big Bang',
        src: `baebae.mp3`,
        thumbnail: `/asset/img/thumbnail/bigbang_logo_2.jpg`
    }
];
var weekChartUsuk = [
    {
        id: 1,
        title: 'After All',
        artist: 'Charlie Puth',
        src: `afterall.mp3`,
        thumbnail: `/asset/img/thumbnail/charlieputh_logo_1.jpg`
    },
    {
        id: 2,
        title: 'Until I Found You',
        artist: 'Stephen Sanchez, Em Beihold',
        src: `until_i_found_you.mp3`,
        thumbnail: `/asset/img/thumbnail/untilifoundyou_thumbnail.jpg`
    },
    {
        id: 3,
        title: 'Loser',
        artist: 'Charlie Puth',
        src: `loser.mp3`,
        thumbnail: `/asset/img/thumbnail/charlieputh_logo_1.jpg`
    },
    {
        id: 4,
        title: 'Panda',
        artist: 'Desiigner',
        src: `Panda.mp3`,
        thumbnail: `/asset/img/thumbnail/Desiigner-Panda_thumbnail.webp`
    },
    {
        id: 5,
        title: 'Peaches',
        artist: 'Justin Bieber, Daniel Caesar, Giveon',
        src: `peaches.mp3`,
        thumbnail: `/asset/img/thumbnail/peaches_thumbnail.png`
    }
];

// Initial Playlist:
var a = [1, 2, 3]
var musicList = [];

// Test Repeat All Song:
console.log('Repeat all songs: false');


function checkInit()
{

}

// INIT
function initPlayingList(indexSong)
{
    nowPlayingList = 1;
    displayTimer();
    song.setAttribute("src", `./asset/audio/${playingLists[indexSong].src}`);
    musicThumbnail.setAttribute("src", playingLists[indexSong].thumbnail);
    musicName.textContent = playingLists[indexSong].title;
    musicArtist.textContent = playingLists[indexSong].artist;
}
function initTop10MainChart(indexSong)
{
    nowPlayingList = 2;
    displayTimer();
    song.setAttribute("src", `./asset/audio/${top10MainChart[indexSong].src}`);
    musicThumbnail.setAttribute("src", top10MainChart[indexSong].thumbnail);
    musicName.textContent = top10MainChart[indexSong].title;
    musicArtist.textContent = top10MainChart[indexSong].artist;
}
function initWeekChartVn(indexSong)
{
    nowPlayingList = 3;
    displayTimer();
    song.setAttribute("src", `./asset/audio/${weekChartVn[indexSong].src}`);
    musicThumbnail.setAttribute("src", weekChartVn[indexSong].thumbnail);
    musicName.textContent = weekChartVn[indexSong].title;
    musicArtist.textContent = weekChartVn[indexSong].artist;
}
function initWeekChartKpop(indexSong)
{
    nowPlayingList = 4;
    displayTimer();
    song.setAttribute("src", `./asset/audio/${weekChartKpop[indexSong].src}`);
    musicThumbnail.setAttribute("src", weekChartKpop[indexSong].thumbnail);
    musicName.textContent = weekChartKpop[indexSong].title;
    musicArtist.textContent = weekChartKpop[indexSong].artist;
}
function initWeekChartUsuk(indexSong)
{
    nowPlayingList = 5;
    displayTimer();
    song.setAttribute("src", `./asset/audio/${weekChartUsuk[indexSong].src}`);
    musicThumbnail.setAttribute("src", weekChartUsuk[indexSong].thumbnail);
    musicName.textContent = weekChartUsuk[indexSong].title;
    musicArtist.textContent = weekChartUsuk[indexSong].artist;
}
function initTrendingNew(indexSong)
{
    nowPlayingList = 6;
    displayTimer();
    song.setAttribute("src", `./asset/audio/${trendingNewList[indexSong].src}`);
    musicThumbnail.setAttribute("src", trendingNewList[indexSong].thumbnail);
    musicName.textContent = trendingNewList[indexSong].title;
    musicArtist.textContent = trendingNewList[indexSong].artist;
}
function initTrendingVn(indexSong)
{
    nowPlayingList = 7;
    displayTimer();
    song.setAttribute("src", `./asset/audio/${trendingVnList[indexSong].src}`);
    musicThumbnail.setAttribute("src", trendingVnList[indexSong].thumbnail);
    musicName.textContent = trendingVnList[indexSong].title;
    musicArtist.textContent = trendingVnList[indexSong].artist;
}
function initTrendingGlobal(indexSong)
{
    nowPlayingList = 8;
    displayTimer();
    song.setAttribute("src", `./asset/audio/${trendingGlobalList[indexSong].src}`);
    musicThumbnail.setAttribute("src", trendingGlobalList[indexSong].thumbnail);
    musicName.textContent = trendingGlobalList[indexSong].title;
    musicArtist.textContent = trendingGlobalList[indexSong].artist;
}


// Render Song Info:
// function init(indexSong)
// {
//     displayTimer();
//     song.setAttribute("src", `./asset/audio/${musicList[indexSong].src}`);
//     musicThumbnail.setAttribute("src", musicList[indexSong].thumbnail);
//     musicName.textContent = musicList[indexSong].title;
//     musicArtist.textContent = musicList[indexSong].artist;
// }


// ===== RENDER ALL ITEMS =====:
// Now Playing:
function renderItems()
{
    var playingItemList = document.querySelector('.playing');

    var innerItem = playingLists.map(function(playingList)
    {
        return `
        <div id="${playingList.id}" class="playing-next-item" >
            <!-- Thumbnail -->
            <div class="thumbnail">
                <div class="thumbnail-layer">
                    <i class='bx bx-play'></i>
                </div>
                <img src=${playingList.thumbnail} alt="icon">
            </div>
            <!-- Info -->
            <div class="info">
                <h4>${playingList.title}</h4>
                <p>${playingList.artist}</p>
            </div>
            <!-- Icons -->
            <div class="icons">
                <i class='bx bx-heart'></i>
                <i class='bx bx-dots-horizontal-rounded'></i>
            </div>
        </div>
        `;
    });

    // console.log(innerItem);
    playingItemList.innerHTML = innerItem.join('');

}
renderItems(playingLists);

// Trending NEW:
function renderNewTrendingItems()
{
    var itemColumn_1 = document.querySelector('.trending-items-new .column_1');
    var itemColumn_2 = document.querySelector('.trending-items-new .column_2');
    var itemColumn_3 = document.querySelector('.trending-items-new .column_3');
    var innerItemColumn_1 = trendingNewColumn_1.map(function(item)
    {
        return `<div class="item">

        <!-- Thumbnail -->
        <div class="thumbnail">
            <div class="thumbnail-layer">
                <i class='bx bx-play'></i>
            </div>
            <img src="${item.thumbnail}" alt="icon">
        </div>

        <!-- Info -->
        <div class="info">
            <h4>${item.title}</h4>
            <p>${item.artist}</p>
        </div>

        <!-- Icons -->
        <div class="icons">
            <i class='bx bx-heart'></i>
            <i class='bx bx-dots-horizontal-rounded'></i>
        </div>

    </div>`
    });
    var innerItemColumn_2 = trendingNewColumn_2.map(function(item)
    {
        return `<div class="item">

        <!-- Thumbnail -->
        <div class="thumbnail">
            <div class="thumbnail-layer">
                <i class='bx bx-play'></i>
            </div>
            <img src="${item.thumbnail}" alt="icon">
        </div>

        <!-- Info -->
        <div class="info">
            <h4>${item.title}</h4>
            <p>${item.artist}</p>
        </div>

        <!-- Icons -->
        <div class="icons">
            <i class='bx bx-heart'></i>
            <i class='bx bx-dots-horizontal-rounded'></i>
        </div>

    </div>`
    });
    var innerItemColumn_3 = trendingNewColumn_3.map(function(item)
    {
        return `<div class="item">

        <!-- Thumbnail -->
        <div class="thumbnail">
            <div class="thumbnail-layer">
                <i class='bx bx-play'></i>
            </div>
            <img src="${item.thumbnail}" alt="icon">
        </div>

        <!-- Info -->
        <div class="info">
            <h4>${item.title}</h4>
            <p>${item.artist}</p>
        </div>

        <!-- Icons -->
        <div class="icons">
            <i class='bx bx-heart'></i>
            <i class='bx bx-dots-horizontal-rounded'></i>
        </div>

    </div>`
    });

    // console.log(innerItemColumn_1);
    itemColumn_1.innerHTML = innerItemColumn_1.join('');
    itemColumn_2.innerHTML = innerItemColumn_2.join('');
    itemColumn_3.innerHTML = innerItemColumn_3.join('');
}
renderNewTrendingItems(trendingNewColumn_1, trendingNewColumn_2, trendingNewColumn_3);

// Trending VIETNAM:
function renderVietnamTrendingItems()
{
    var itemColumn_1 = document.querySelector('.trending-items-vn .column_1');
    var itemColumn_2 = document.querySelector('.trending-items-vn .column_2');
    var itemColumn_3 = document.querySelector('.trending-items-vn .column_3');
    var innerItemColumn_1 = trendingVietnamColumn_1.map(function(item)
    {
        return `<div class="item">

        <!-- Thumbnail -->
        <div class="thumbnail">
            <div class="thumbnail-layer">
                <i class='bx bx-play'></i>
            </div>
            <img src="${item.thumbnail}" alt="icon">
        </div>

        <!-- Info -->
        <div class="info">
            <h4>${item.title}</h4>
            <p>${item.artist}</p>
        </div>

        <!-- Icons -->
        <div class="icons">
            <i class='bx bx-heart'></i>
            <i class='bx bx-dots-horizontal-rounded'></i>
        </div>

    </div>`
    });
    var innerItemColumn_2 = trendingVietnamColumn_2.map(function(item)
    {
        return `<div class="item">

        <!-- Thumbnail -->
        <div class="thumbnail">
            <div class="thumbnail-layer">
                <i class='bx bx-play'></i>
            </div>
            <img src="${item.thumbnail}" alt="icon">
        </div>

        <!-- Info -->
        <div class="info">
            <h4>${item.title}</h4>
            <p>${item.artist}</p>
        </div>

        <!-- Icons -->
        <div class="icons">
            <i class='bx bx-heart'></i>
            <i class='bx bx-dots-horizontal-rounded'></i>
        </div>

    </div>`
    });
    var innerItemColumn_3 = trendingVietnamColumn_3.map(function(item)
    {
        return `<div class="item">

        <!-- Thumbnail -->
        <div class="thumbnail">
            <div class="thumbnail-layer">
                <i class='bx bx-play'></i>
            </div>
            <img src="${item.thumbnail}" alt="icon">
        </div>

        <!-- Info -->
        <div class="info">
            <h4>${item.title}</h4>
            <p>${item.artist}</p>
        </div>

        <!-- Icons -->
        <div class="icons">
            <i class='bx bx-heart'></i>
            <i class='bx bx-dots-horizontal-rounded'></i>
        </div>

    </div>`
    });

    // console.log(innerItemColumn_1);
    itemColumn_1.innerHTML = innerItemColumn_1.join('');
    itemColumn_2.innerHTML = innerItemColumn_2.join('');
    itemColumn_3.innerHTML = innerItemColumn_3.join('');
}
renderVietnamTrendingItems(trendingVietnamColumn_1, trendingVietnamColumn_2, trendingVietnamColumn_3);

// Trending GLOBAL:
function renderGlobalTrendingItems()
{
    var itemColumn_1 = document.querySelector('.trending-items-global .column_1');
    var itemColumn_2 = document.querySelector('.trending-items-global .column_2');
    var itemColumn_3 = document.querySelector('.trending-items-global .column_3');
    var innerItemColumn_1 = trendingGlobalColumn_1.map(function(item)
    {
        return `<div class="item">

        <!-- Thumbnail -->
        <div class="thumbnail">
            <div class="thumbnail-layer">
                <i class='bx bx-play'></i>
            </div>
            <img src="${item.thumbnail}" alt="icon">
        </div>

        <!-- Info -->
        <div class="info">
            <h4>${item.title}</h4>
            <p>${item.artist}</p>
        </div>

        <!-- Icons -->
        <div class="icons">
            <i class='bx bx-heart'></i>
            <i class='bx bx-dots-horizontal-rounded'></i>
        </div>

    </div>`
    });
    var innerItemColumn_2 = trendingGlobalColumn_2.map(function(item)
    {
        return `<div class="item">

        <!-- Thumbnail -->
        <div class="thumbnail">
            <div class="thumbnail-layer">
                <i class='bx bx-play'></i>
            </div>
            <img src="${item.thumbnail}" alt="icon">
        </div>

        <!-- Info -->
        <div class="info">
            <h4>${item.title}</h4>
            <p>${item.artist}</p>
        </div>

        <!-- Icons -->
        <div class="icons">
            <i class='bx bx-heart'></i>
            <i class='bx bx-dots-horizontal-rounded'></i>
        </div>

    </div>`
    });
    var innerItemColumn_3 = trendingGlobalColumn_3.map(function(item)
    {
        return `<div class="item">

        <!-- Thumbnail -->
        <div class="thumbnail">
            <div class="thumbnail-layer">
                <i class='bx bx-play'></i>
            </div>
            <img src="${item.thumbnail}" alt="icon">
        </div>

        <!-- Info -->
        <div class="info">
            <h4>${item.title}</h4>
            <p>${item.artist}</p>
        </div>

        <!-- Icons -->
        <div class="icons">
            <i class='bx bx-heart'></i>
            <i class='bx bx-dots-horizontal-rounded'></i>
        </div>

    </div>`
    });

    // console.log(innerItemColumn_1);
    itemColumn_1.innerHTML = innerItemColumn_1.join('');
    itemColumn_2.innerHTML = innerItemColumn_2.join('');
    itemColumn_3.innerHTML = innerItemColumn_3.join('');
}
renderGlobalTrendingItems(trendingGlobalColumn_1, trendingGlobalColumn_2, trendingGlobalColumn_3);

// Main Top 10 Chart:
function renderMainTop10Chart()
{
    var mainTop10Chart = document.querySelector('.main-chart');

    var innerItemMainChart = top10MainChart.map(function(item)
    {
        return `
        <!-- Main Chart Item -->
        <div class="main-chart-item">
            <div class="index">
                <h1>${item.id}</h1>
            </div>
            <div class="--">--</div>

            <!-- Item -->
            <div class="item" >
                <!-- Thumbnail -->
                <div class="thumbnail">
                    <div class="thumbnail-layer">
                        <i class='bx bx-play'></i>
                    </div>
                    <img src="${item.thumbnail}" alt="icon">
                </div>
                <!-- Info -->
                <div class="info">
                    <h4>${item.title}</h4>
                    <p>${item.artist}</p>
                </div>
            </div>

            <!-- In Albumn -->
            <div class="in-albumn">
                <p>${item.albumn}</p>
            </div>
            
            <!-- Icons -->
            <div class="chart-item-icons">
                <i class='bx bx-heart'></i>
                <i class='bx bx-dots-horizontal-rounded'></i>
            </div>
        </div>
        `;
    });

    mainTop10Chart.innerHTML = innerItemMainChart.join('');
}
renderMainTop10Chart(top10MainChart);

// Week Chart Vietnam:
function renderWeekChartVn()
{
    var weekChartCol_1 = document.querySelector('.week-chart-column-1 .week-chart-items');

    var innerWeekChartCol_1 = weekChartVn.map(function(item)
    {
        return `
            <!-- Week Chart Item -->
            <div class="week-chart-item">
                <div class="index">
                    <h1>${item.id}</h1>
                </div>
                <!-- <div class="--">-</div> -->

                <!-- Item -->
                <div class="item">
                    <!-- Thumbnail -->
                    <div class="thumbnail">
                        <div class="thumbnail-layer">
                            <i class='bx bx-play'></i>
                        </div>
                        <img src="${item.thumbnail}" alt="icon">
                    </div>
                    <!-- Info -->
                    <div class="info">
                        <h4>${item.title}</h4>
                        <p>${item.artist}</p>
                    </div>
                </div>

                <!-- Icons -->
                <div class="chart-item-icons">
                    <i class='bx bx-dots-horizontal-rounded'></i>
                </div>
            </div>
        `
    });

    weekChartCol_1.innerHTML = innerWeekChartCol_1.join('');
}
renderWeekChartVn(weekChartVn);

// Week Chart K-Pop:
function renderWeekChartKpop()
{
    var weekChartCol_2 = document.querySelector('.week-chart-column-2 .week-chart-items');

    var innerWeekChartCol_2 = weekChartKpop.map(function(item)
    {
        return `
            <!-- Week Chart Item -->
            <div class="week-chart-item">
                <div class="index">
                    <h1>${item.id}</h1>
                </div>
                <!-- <div class="--">-</div> -->

                <!-- Item -->
                <div class="item">
                    <!-- Thumbnail -->
                    <div class="thumbnail">
                        <div class="thumbnail-layer">
                            <i class='bx bx-play'></i>
                        </div>
                        <img src="${item.thumbnail}" alt="icon">
                    </div>
                    <!-- Info -->
                    <div class="info">
                        <h4>${item.title}</h4>
                        <p>${item.artist}</p>
                    </div>
                </div>

                <!-- Icons -->
                <div class="chart-item-icons">
                    <i class='bx bx-dots-horizontal-rounded'></i>
                </div>
            </div>
        `
    });

    weekChartCol_2.innerHTML = innerWeekChartCol_2.join('');
}
renderWeekChartKpop(weekChartKpop);

// Week Chart US-UK:
function renderWeekChartUsuk()
{
    var weekChartCol_3 = document.querySelector('.week-chart-column-3 .week-chart-items');

    var innerWeekChartCol_3 = weekChartUsuk.map(function(item)
    {
        return `
            <!-- Week Chart Item -->
            <div class="week-chart-item">
                <div class="index">
                    <h1>${item.id}</h1>
                </div>
                <!-- <div class="--">-</div> -->

                <!-- Item -->
                <div class="item">
                    <!-- Thumbnail -->
                    <div class="thumbnail">
                        <div class="thumbnail-layer">
                            <i class='bx bx-play'></i>
                        </div>
                        <img src="${item.thumbnail}" alt="icon">
                    </div>
                    <!-- Info -->
                    <div class="info">
                        <h4>${item.title}</h4>
                        <p>${item.artist}</p>
                    </div>
                </div>

                <!-- Icons -->
                <div class="chart-item-icons">
                    <i class='bx bx-dots-horizontal-rounded'></i>
                </div>
            </div>
        `
    });

    weekChartCol_3.innerHTML = innerWeekChartCol_3.join('');
}
renderWeekChartUsuk(weekChartUsuk);

// ============================================================================================

// Tạo biến trỏ vào Playing List:
var playNextItems = document.querySelectorAll('.playing-next-item');
// Log ra để xem cái biến này có kiểu dữ liệu là gì?
// console.log(playNextItems); // Thằng này là 1 nodelist! Ko phải là array... Nên không thể sử dụng array.map được nha má =)))).

// ===== Tạo chức năng ấn vào bài hát bất kỳ thì chơi bài đã bấm đó: =====
// Playing List:
playNextItems.forEach(function(element, index)
{
    nowPlayingList = 1;
    element.addEventListener('dblclick', function()
    {
        nowPlayingList = 1;
        console.log('nowPlayingList: ',nowPlayingList);
        console.log('Now Playing List: PlayingList');

        indexSong = index;
        var newSongNum = index + 1;
        console.log('Song number: ', newSongNum);
        // console.log(index); //

        // Render Song Info:
        initPlayingList(index);

        // Open Player:
        setTimeout(function()
        {
            if(!musicPlayer.classList.contains('mb90'))
            {
                musicPlayer.classList.remove('disappear');
                musicPlayer.classList.add('mb90');
                sideNav.classList.add('height_1');
                nowPlayingNav.classList.add('height_1');
                mainContainer.classList.add('height_1');
                mainContent.classList.add('height_2');
            }
        }, 500);

        // Change Play Icons:
        playBtn.classList.add('disappear');
        pauseBtn.classList.remove('disappear');

        // Play Song:
        setTimeout(function()
        {
            song.play();
        }, 500);
    });
});
// Top 10 Chart
var playTop10MainChart = document.querySelectorAll('.main-chart .item')
playTop10MainChart.forEach(function(element, index)
{
    nowPlayingList = 2;
    element.addEventListener('dblclick', function()
    {
        nowPlayingList = 2;
        console.log('nowPlayingList: ',nowPlayingList);
        console.log('Now Playing List: Top 10 Main Chart');

        indexSong = index;
        var newSongNum = index + 1;
        console.log('Song number: ', newSongNum);
        // console.log(index); //

        // Render Song Info:
        initTop10MainChart(index);

        // Open Player:
        setTimeout(function()
        {
            if(!musicPlayer.classList.contains('mb90'))
            {
                musicPlayer.classList.remove('disappear');
                musicPlayer.classList.add('mb90');
                sideNav.classList.add('height_1');
                nowPlayingNav.classList.add('height_1');
                mainContainer.classList.add('height_1');
                mainContent.classList.add('height_2');
            }
        }, 500);

        // Change Play Icons:
        playBtn.classList.add('disappear');
        pauseBtn.classList.remove('disappear');

        // Play Song:
        setTimeout(function()
        {
            song.play();
        }, 500);
    });
});
// Week Chart Vietnam
var playWeekChartVn = document.querySelectorAll('.week-chart-column-1 .item');
playWeekChartVn.forEach(function(element, index)
{
    nowPlayingList = 3;
    element.addEventListener('dblclick', function()
    {
        nowPlayingList = 3;
        console.log('nowPlayingList: ',nowPlayingList);
        console.log('Now Playing List: Week Chart Vietnam');

        indexSong = index;
        var newSongNum = index + 1;
        console.log('Song number: ', newSongNum);
        // console.log(index); //

        // Render Song Info:
        initWeekChartVn(index);

        // Open Player:
        setTimeout(function()
        {
            if(!musicPlayer.classList.contains('mb90'))
            {
                musicPlayer.classList.remove('disappear');
                musicPlayer.classList.add('mb90');
                sideNav.classList.add('height_1');
                nowPlayingNav.classList.add('height_1');
                mainContainer.classList.add('height_1');
                mainContent.classList.add('height_2');
            }
        }, 500);

        // Change Play Icons:
        playBtn.classList.add('disappear');
        pauseBtn.classList.remove('disappear');

        // Play Song:
        setTimeout(function()
        {
            song.play();
        }, 500);
    });
});
// Week Chart K-POP
var playWeekChartKpop = document.querySelectorAll('.week-chart-column-2 .item');
playWeekChartKpop.forEach(function(element, index)
{
    nowPlayingList = 4;
    element.addEventListener('dblclick', function()
    {
        nowPlayingList = 4;
        console.log('nowPlayingList: ',nowPlayingList);
        console.log('Now Playing List: Week Chart K-POP');

        indexSong = index;
        var newSongNum = index + 1;
        console.log('Song number: ', newSongNum);
        // console.log(index); //

        // Render Song Info:
        initWeekChartKpop(index);

        // Open Player:
        setTimeout(function()
        {
            if(!musicPlayer.classList.contains('mb90'))
            {
                musicPlayer.classList.remove('disappear');
                musicPlayer.classList.add('mb90');
                sideNav.classList.add('height_1');
                nowPlayingNav.classList.add('height_1');
                mainContainer.classList.add('height_1');
                mainContent.classList.add('height_2');
            }
        }, 500);

        // Change Play Icons:
        playBtn.classList.add('disappear');
        pauseBtn.classList.remove('disappear');

        // Play Song:
        setTimeout(function()
        {
            song.play();
        }, 500);
    });
});
// Week Chart US-UK
var playWeekChartUsuk = document.querySelectorAll('.week-chart-column-3 .item');
playWeekChartUsuk.forEach(function(element, index)
{
    nowPlayingList = 5;
    element.addEventListener('dblclick', function()
    {
        nowPlayingList = 5;
        console.log('nowPlayingList: ',nowPlayingList);
        console.log('Now Playing List: Week Chart US-UK');

        indexSong = index;
        var newSongNum = index + 1;
        console.log('Song number: ', newSongNum);
        // console.log(index); //

        // Render Song Info:
        initWeekChartUsuk(index);

        // Open Player:
        setTimeout(function()
        {
            if(!musicPlayer.classList.contains('mb90'))
            {
                musicPlayer.classList.remove('disappear');
                musicPlayer.classList.add('mb90');
                sideNav.classList.add('height_1');
                nowPlayingNav.classList.add('height_1');
                mainContainer.classList.add('height_1');
                mainContent.classList.add('height_2');
            }
        }, 500);

        // Change Play Icons:
        playBtn.classList.add('disappear');
        pauseBtn.classList.remove('disappear');

        // Play Song:
        setTimeout(function()
        {
            song.play();
        }, 500);
    });
});
// Trending New
var playTrendingNew = document.querySelectorAll('.trending-items-new .item');
playTrendingNew.forEach(function(element, index)
{
    nowPlayingList = 6;
    element.addEventListener('dblclick', function()
    {
        nowPlayingList = 6;
        console.log('nowPlayingList: ',nowPlayingList);
        console.log('Now Playing List: Trending New');

        indexSong = index;
        var newSongNum = index + 1;
        console.log('Song number: ', newSongNum);
        // console.log(index); //

        // Render Song Info:
        initTrendingNew(index);

        // Open Player:
        setTimeout(function()
        {
            if(!musicPlayer.classList.contains('mb90'))
            {
                musicPlayer.classList.remove('disappear');
                musicPlayer.classList.add('mb90');
                sideNav.classList.add('height_1');
                nowPlayingNav.classList.add('height_1');
                mainContainer.classList.add('height_1');
                mainContent.classList.add('height_2');
            }
        }, 500);

        // Change Play Icons:
        playBtn.classList.add('disappear');
        pauseBtn.classList.remove('disappear');

        // Play Song:
        setTimeout(function()
        {
            song.play();
        }, 500);
    });
});
// Trending Vietnam
var playTrendingVn = document.querySelectorAll('.trending-items-vn .item');
playTrendingVn.forEach(function(element, index)
{
    nowPlayingList = 7;
    element.addEventListener('dblclick', function()
    {
        nowPlayingList = 7;
        console.log('nowPlayingList: ',nowPlayingList);
        console.log('Now Playing List: Trending Vietnam');

        indexSong = index;
        var newSongNum = index + 1;
        console.log('Song number: ', newSongNum);
        // console.log(index); //

        // Render Song Info:
        initTrendingVn(index);

        // Open Player:
        setTimeout(function()
        {
            if(!musicPlayer.classList.contains('mb90'))
            {
                musicPlayer.classList.remove('disappear');
                musicPlayer.classList.add('mb90');
                sideNav.classList.add('height_1');
                nowPlayingNav.classList.add('height_1');
                mainContainer.classList.add('height_1');
                mainContent.classList.add('height_2');
            }
        }, 500);

        // Change Play Icons:
        playBtn.classList.add('disappear');
        pauseBtn.classList.remove('disappear');

        // Play Song:
        setTimeout(function()
        {
            song.play();
        }, 500);
    });
});
// Trending Global
var playTrendingGlobal = document.querySelectorAll('.trending-items-global .item');
playTrendingGlobal.forEach(function(element, index)
{
    nowPlayingList = 8;
    element.addEventListener('dblclick', function()
    {
        nowPlayingList = 8;
        console.log('nowPlayingList: ',nowPlayingList);
        console.log('Now Playing List: Trending Global');

        indexSong = index;
        var newSongNum = index + 1;
        console.log('Song number: ', newSongNum);
        // console.log(index); //

        // Render Song Info:
        initTrendingGlobal(index);

        // Open Player:
        setTimeout(function()
        {
            if(!musicPlayer.classList.contains('mb90'))
            {
                musicPlayer.classList.remove('disappear');
                musicPlayer.classList.add('mb90');
                sideNav.classList.add('height_1');
                nowPlayingNav.classList.add('height_1');
                mainContainer.classList.add('height_1');
                mainContent.classList.add('height_2');
            }
        }, 500);

        // Change Play Icons:
        playBtn.classList.add('disappear');
        pauseBtn.classList.remove('disappear');

        // Play Song:
        setTimeout(function()
        {
            song.play();
        }, 500);
    });
});


// Tạo mảng chứa 3 nứt thuộc chức năng replay.
var indexReplay = 0;
var replayBtnList = ['0', '1', '2'];

const itemPlaying = document.querySelector('#playing');


// Ẩn/Hiện thanh Navbar bên trái. 
// heading.addEventListener('click', function()
// {
//     console.log('header');
//     sideNav.classList.toggle('hide');
//     mainContent.classList.toggle('ml');
// });

// Ẩn/Hiện thanh Navbar bên phải.
nowPlayingBtn.addEventListener('click', function()
{
    var nowPlayingBtnContain = nowPlayingNav.classList.contains('mr');

    if(nowPlayingNav.classList.contains('mr'))
    {
        nowPlayingNav.classList.remove('mr');
        mainContent.classList.remove('width_2');
        mainContent.classList.add('width_1');
    }
    else
    {
        nowPlayingNav.classList.add('mr');
        mainContent.classList.add('width_2');
        mainContent.classList.remove('width_1');
    }
});


// Lưu vào yêu thích!
function addToFavorite(e)
{
    e.addEventListener('click', function()
    {
        // console.log('cliked');
        e.classList.toggle('choosed');
    });
}


// Lam hieu ung Click cho Button Gallery:
galleryNext.addEventListener('click', function()
{
    let galleryItem = document.querySelectorAll('.gallery-item');

    var gallerySlider = document.querySelector('.slider-gallery');
    gallerySlider.appendChild(galleryItem[0]);
});
galleryPrev.addEventListener('click', function()
{
    var galleryItem = document.querySelectorAll('.gallery-item');

    var gallerySlider = document.querySelector('.slider-gallery');
    gallerySlider.prepend(galleryItem[galleryItem.length - 1]);
});
setInterval(function()
{
    let galleryItem = document.querySelectorAll('.gallery-item');

    var gallerySlider = document.querySelector('.slider-gallery');
    gallerySlider.appendChild(galleryItem[0]);
}, 3000);


// 
trendingBtnNew.addEventListener('click', function()
{
    // Color Change:
    if(trendingBtnNew.classList.contains('all-choosed'))
    {
        console.log('Already choosed!')
        trendingBtnGlobal.classList.remove('all-choosed');
        trendingBtnVn.classList.remove('all-choosed');
    }
    else
    {
        trendingBtnNew.classList.add('all-choosed');
        trendingBtnGlobal.classList.remove('all-choosed');
        trendingBtnVn.classList.remove('all-choosed');
    }

    // Render Items:
    setTimeout(function()
    {
        if(trendingColumnNew.classList.contains('disappear'))
        {
            trendingColumnNew.classList.remove('disappear');
            // 
            if(trendingColumnVn.classList.contains('disappear'))
            {
                console.log('Trending VN already disabled!');
            }
            else
            {
                trendingColumnVn.classList.add('disappear');
            }
            // 
            if(trendingColumnGlobal.classList.contains('disappear'))
            {
                console.log('Trending Global already disabled!');
            }
            else
            {
                trendingColumnGlobal.classList.add('disappear');
            }
        }
        else
        {
            if(trendingColumnVn.classList.contains('disappear'))
            {
                console.log('Trending VN already disabled!');
            }
            else
            {
                trendingColumnVn.classList.add('disappear');
            }
            // 
            if(trendingColumnGlobal.classList.contains('disappear'))
            {
                console.log('Trending Global already disabled!');
            }
            else
            {
                trendingColumnGlobal.classList.add('disappear');
            }
        }
    }, 500);
});
trendingBtnVn.addEventListener('click', function()
{
    // Color Change
    if(trendingBtnVn.classList.contains('all-choosed'))
    {
        console.log('Already choosed!')
        trendingBtnGlobal.classList.remove('all-choosed');
        trendingBtnNew.classList.remove('all-choosed');
    }
    else
    {
        trendingBtnVn.classList.add('all-choosed');
        trendingBtnGlobal.classList.remove('all-choosed');
        trendingBtnNew.classList.remove('all-choosed');
    }

    // Render Items:
    setTimeout(function()
    {
        if(trendingColumnVn.classList.contains('disappear'))
        {
            trendingColumnVn.classList.remove('disappear');
            // 
            if(trendingColumnNew.classList.contains('disappear'))
            {
                console.log('Trending New already disabled!');
            }
            else
            {
                trendingColumnNew.classList.add('disappear');
            }
            // 
            if(trendingColumnGlobal.classList.contains('disappear'))
            {
                console.log('Trending Global already disabled!');
            }
            else
            {
                trendingColumnGlobal.classList.add('disappear');
            }
        }
        else
        {
            if(trendingColumnNew.classList.contains('disappear'))
            {
                console.log('Trending New already disabled!');
            }
            else
            {
                trendingColumnNew.classList.add('disappear');
            }
            // 
            if(trendingColumnGlobal.classList.contains('disappear'))
            {
                console.log('Trending Global already disabled!');
            }
            else
            {
                trendingColumnGlobal.classList.add('disappear');
            }
        }
    }, 500);
});
trendingBtnGlobal.addEventListener('click', function()
{
    // Clolor Change
    if(trendingBtnGlobal.classList.contains('all-choosed'))
    {
        console.log('Already choosed!')
        trendingBtnVn.classList.remove('all-choosed');
        trendingBtnNew.classList.remove('all-choosed');
    }
    else
    {
        trendingBtnGlobal.classList.add('all-choosed');
        trendingBtnVn.classList.remove('all-choosed');
        trendingBtnNew.classList.remove('all-choosed');
    }

    // Render Items:
    setTimeout(function()
    {
        if(trendingColumnGlobal.classList.contains('disappear'))
        {
            trendingColumnGlobal.classList.remove('disappear');
            // 
            if(trendingColumnNew.classList.contains('disappear'))
            {
                console.log('Trending New already disabled!');
            }
            else
            {
                trendingColumnNew.classList.add('disappear');
            }
            // 
            if(trendingColumnVn.classList.contains('disappear'))
            {
                console.log('Trending VN already disabled!');
            }
            else
            {
                trendingColumnVn.classList.add('disappear');
            }
        }
        else
        {
            if(trendingColumnNew.classList.contains('disappear'))
            {
                console.log('Trending New already disabled!');
            }
            else
            {
                trendingColumnNew.classList.add('disappear');
            }
            // 
            if(trendingColumnVn.classList.contains('disappear'))
            {
                console.log('Trending VN already disabled!');
            }
            else
            {
                trendingColumnVn.classList.add('disappear');
            }
        }
    }, 500);
});


// 
musicPlayerOpen.addEventListener('click', function()
{
    // console.log('opened');

    if(!musicPlayer.classList.contains('mb90'))
    {
        musicPlayer.classList.remove('disappear');
        musicPlayer.classList.add('mb90');
        sideNav.classList.add('height_1');
        nowPlayingNav.classList.add('height_1');
        mainContainer.classList.add('height_1');
        mainContent.classList.add('height_2');
    }

});
musicPlayerClose.addEventListener('click', function()
{
    // console.log('closed');

    if(musicPlayer.classList.contains('mb90'))
    {
        setTimeout(function()
        {
            musicPlayer.classList.add('disappear');
        }, 500);
        musicPlayer.classList.remove('mb90');
        sideNav.classList.remove('height_1');
        nowPlayingNav.classList.remove('height_1');
        mainContainer.classList.remove('height_1');
        mainContent.classList.remove('height_2');
    }
});


// PLAY / PAUSE btn:
playBtn.addEventListener('click', function()
{ 
    // console.log('pause');

    playBtn.classList.add('disappear');
    pauseBtn.classList.remove('disappear');

    setTimeout(function()
    {
        song.play()
    }, 500)
});
pauseBtn.addEventListener('click', function()
{
    // console.log('play');

    playBtn.classList.remove('disappear');
    pauseBtn.classList.add('disappear');
    song.pause()
});

// ============================================================================================


//                                  ===== Next/Prev Songs: =====

// setAttribute ở đây(trong trường hợp này) là set cái đường dẫn đến bài hát mặc định lúc reset lại trang web 
// song.setAttribute("src", `./asset/audio/newTest/${songLists[indexSong].src}`);
// Tạo cái EventListener cho 2 cái button Prev với Next thôi... Dùng cái function changeSong ở dưới để xác định direction.
nextBtn.addEventListener('click', function()
{
    changeSong(1); // Nhìn rồi tự hiểu đi nha =))))
    // console.log('Song number: ', songNum);
});
prevBtn.addEventListener('click', function()
{
    changeSong(-1); // Tương tự =))))
    // console.log('Song number: ', songNum);
});
// Tạo 1 cái function để làm chức năng cho 2 cái nút Prev với Next Song á!
function changeSong(direction) // Tạo 1 cái biến tên là direction(hướng đi).
{
    // Nếu thằng direction === 1, thì Next.
    if(direction == 1)
    {
        console.log('nowPlayingList: ',nowPlayingList);

        toggleShuffleSong(1);

        if(nowPlayingList == 1)
        {
            initPlayingList(indexSong);
        }
        else if(nowPlayingList == 2)
        {
            initTop10MainChart(indexSong);
        }
        else if(nowPlayingList == 3)
        {
            initWeekChartVn(indexSong);
        }
        else if(nowPlayingList == 4)
        {
            initWeekChartKpop(indexSong);
        }
        else if(nowPlayingList == 5)
        {
            initWeekChartUsuk(indexSong);
        }
        else if(nowPlayingList == 6)
        {
            initTrendingNew(indexSong);
        }
        else if(nowPlayingList == 7)
        {
            initTrendingVn(indexSong);
        }
        else if(nowPlayingList == 8)
        {
            initTrendingGlobal(indexSong);
        }
    }

    // Nếu thằng direction === -1, thì Prev.
    if(direction == -1)
    {
        console.log('nowPlayingList: ',nowPlayingList);

        toggleShuffleSong(-1);

        if(nowPlayingList == 1)
        {
            initPlayingList(indexSong);
        }
        else if(nowPlayingList == 2)
        {
            initTop10MainChart(indexSong);
        }
        else if(nowPlayingList == 3)
        {
            initWeekChartVn(indexSong);
        }
        else if(nowPlayingList == 4)
        {
            initWeekChartKpop(indexSong);
        }
        else if(nowPlayingList == 5)
        {
            initWeekChartUsuk(indexSong);
        }
        else if(nowPlayingList == 6)
        {
            initTrendingNew(indexSong);
        }
        else if(nowPlayingList == 7)
        {
            initTrendingVn(indexSong);
        }
        else if(nowPlayingList == 8)
        {
            initTrendingGlobal(indexSong);
        }
    }
    // Tại sao lại cho thằng song.setAttribute này ở đây? Là vì khi nhấn vào Prev hay Next đi chăng nữa thì cái song.setAttribute nó vẫn sẽ dẫn vào thư mục audio/newTest ở trong file asset của máy. Khi đó, các bài hát vẫn sẽ được chạy ở trong file mp3. 
    // song.setAttribute("src", `./asset/audio/mp3/${songLists[indexSong].src}`);
    // Bỏ thằng ở trên, thay bằng thằng ở dưới (thằng "init(indexSong)" á!).

    setTimeout(function()
    {
        song.play();
    }, 500);
}

// ============================================================================================


//              ===== Làm chức năng khi bài hát chạy hết thì làm hành động gì đó... =====

// Này là lúc chưa làm chức năng Shuffle và Replay: (Not in Use!)
// song.addEventListener('ended', function()
// {
//     if(indexSong >= songLists.length)
//     {
//         indexSong = 0;
//         songNum = indexSong + 1;
//         song.pause();
//     }
//     else
//     {
//         changeSong(1); // Nhìn rồi tự hiểu đi nha =))))
//     }
// });

// Này là lúc đã làm chức năng Shuffle và Replay:
function replaySongLists()
{
    if(replayBtn.classList.contains('choosed'))
    {
        // console.log('selected');

        if (nowPlayingList == 1)
        {
            if(indexSong >= playingLists.length)
            {
                indexSong = 0;
                songNum = indexSong + 1;
                changeSong(1); // Nhìn rồi tự hiểu đi nha =))))
            }
            else
            {
                changeSong(1); // Nhìn rồi tự hiểu đi nha =))))
            }
        }
        else if (nowPlayingList == 2)
        {
            if(indexSong >= top10MainChart.length)
            {
                indexSong = 0;
                songNum = indexSong + 1;
                changeSong(1); // Nhìn rồi tự hiểu đi nha =))))
            }
            else
            {
                changeSong(1); // Nhìn rồi tự hiểu đi nha =))))
            }
        }
        else if (nowPlayingList == 3)
        {
            if(indexSong >= weekChartVn.length)
            {
                indexSong = 0;
                songNum = indexSong + 1;
                changeSong(1); // Nhìn rồi tự hiểu đi nha =))))
            }
            else
            {
                changeSong(1); // Nhìn rồi tự hiểu đi nha =))))
            }
        }
        else if (nowPlayingList == 4)
        {
            if(indexSong >= weekChartKpop.length)
            {
                indexSong = 0;
                songNum = indexSong + 1;
                changeSong(1); // Nhìn rồi tự hiểu đi nha =))))
            }
            else
            {
                changeSong(1); // Nhìn rồi tự hiểu đi nha =))))
            }
        }
        else if (nowPlayingList == 5)
        {
            if(indexSong >= weekChartUsuk.length)
            {
                indexSong = 0;
                songNum = indexSong + 1;
                changeSong(1); // Nhìn rồi tự hiểu đi nha =))))
            }
            else
            {
                changeSong(1); // Nhìn rồi tự hiểu đi nha =))))
            }
        }
        else if (nowPlayingList == 6)
        {
            if(indexSong >= trendingNewList.length)
            {
                indexSong = 0;
                songNum = indexSong + 1;
                changeSong(1); // Nhìn rồi tự hiểu đi nha =))))
            }
            else
            {
                changeSong(1); // Nhìn rồi tự hiểu đi nha =))))
            }
        }
        else if (nowPlayingList == 7)
        {
            if(indexSong >= trendingVnList.length)
            {
                indexSong = 0;
                songNum = indexSong + 1;
                changeSong(1); // Nhìn rồi tự hiểu đi nha =))))
            }
            else
            {
                changeSong(1); // Nhìn rồi tự hiểu đi nha =))))
            }
        }
        else if (nowPlayingList == 8)
        {
            if(indexSong >= trendingGlobalList.length)
            {
                indexSong = 0;
                songNum = indexSong + 1;
                changeSong(1); // Nhìn rồi tự hiểu đi nha =))))
            }
            else
            {
                changeSong(1); // Nhìn rồi tự hiểu đi nha =))))
            }
        }
    }

    else
    {
        // console.log('not selected');

        if (nowPlayingList == 1)
        {
            if(indexSong >= playingLists.length - 1) // Thề éo có cái "... - 1" thì nó éo ăn đâu =)))
            {
                song.pause();
                indexSong = 0;
                songNum = indexSong + 1;
                playBtn.classList.remove('disappear');
                pauseBtn.classList.add('disappear');
            }
            else
            {
                changeSong(1); // Nhìn rồi tự hiểu đi nha =))))
            }
        }
        else if (nowPlayingList == 2)
        {
            if(indexSong >= top10MainChart.length - 1) // Thề éo có cái "... - 1" thì nó éo ăn đâu =)))
            {
                song.pause();
                indexSong = 0;
                songNum = indexSong + 1;
                playBtn.classList.remove('disappear');
                pauseBtn.classList.add('disappear');
            }
            else
            {
                changeSong(1); // Nhìn rồi tự hiểu đi nha =))))
            }
        }
        else if (nowPlayingList == 3)
        {
            if(indexSong >= weekChartVn.length - 1) // Thề éo có cái "... - 1" thì nó éo ăn đâu =)))
            {
                song.pause();
                indexSong = 0;
                songNum = indexSong + 1;
                playBtn.classList.remove('disappear');
                pauseBtn.classList.add('disappear');
            }
            else
            {
                changeSong(1); // Nhìn rồi tự hiểu đi nha =))))
            }
        }
        else if (nowPlayingList == 4)
        {
            if(indexSong >= weekChartKpop.length - 1) // Thề éo có cái "... - 1" thì nó éo ăn đâu =)))
            {
                song.pause();
                indexSong = 0;
                songNum = indexSong + 1;
                playBtn.classList.remove('disappear');
                pauseBtn.classList.add('disappear');
            }
            else
            {
                changeSong(1); // Nhìn rồi tự hiểu đi nha =))))
            }
        }
        else if (nowPlayingList == 5)
        {
            if(indexSong >= weekChartUsuk.length - 1) // Thề éo có cái "... - 1" thì nó éo ăn đâu =)))
            {
                song.pause();
                indexSong = 0;
                songNum = indexSong + 1;
                playBtn.classList.remove('disappear');
                pauseBtn.classList.add('disappear');
            }
            else
            {
                changeSong(1); // Nhìn rồi tự hiểu đi nha =))))
            }
        }
        else if (nowPlayingList == 6)
        {
            if(indexSong >= trendingNewList.length - 1) // Thề éo có cái "... - 1" thì nó éo ăn đâu =)))
            {
                song.pause();
                indexSong = 0;
                songNum = indexSong + 1;
                playBtn.classList.remove('disappear');
                pauseBtn.classList.add('disappear');
            }
            else
            {
                changeSong(1); // Nhìn rồi tự hiểu đi nha =))))
            }
        }
        else if (nowPlayingList == 7)
        {
            if(indexSong >= trendingVnList.length - 1) // Thề éo có cái "... - 1" thì nó éo ăn đâu =)))
            {
                song.pause();
                indexSong = 0;
                songNum = indexSong + 1;
                playBtn.classList.remove('disappear');
                pauseBtn.classList.add('disappear');
            }
            else
            {
                changeSong(1); // Nhìn rồi tự hiểu đi nha =))))
            }
        }
        else if (nowPlayingList == 8)
        {
            if(indexSong >= trendingGlobalList.length - 1) // Thề éo có cái "... - 1" thì nó éo ăn đâu =)))
            {
                song.pause();
                indexSong = 0;
                songNum = indexSong + 1;
                playBtn.classList.remove('disappear');
                pauseBtn.classList.add('disappear');
            }
            else
            {
                changeSong(1); // Nhìn rồi tự hiểu đi nha =))))
            }
        }
    }
}
song.addEventListener('ended', function()
{
    if(isRepeat)
    {
        // repeat song.
        setTimeout(function()
        {
            song.play();
        }, 500);
    }
    else
    {
        replaySongLists(indexSong);
    }
});

// ============================================================================================


//                  ===== Làm cái hiệu ứng đổi màu khi ấn vào cái button ===== 

// Set cái Attribute(Giá trị của mảng tại cái button đó).
replayBtn.setAttribute("name", `${replayBtnList[indexReplay]}`);

// Chức năng chơi lại bài hát/ danh sách:
function toggleReplay(indexReplay)
{
    if(indexReplay == 1)
    {
        replayBtn.classList.add('choosed');
        replayBtnIcon.classList.add('choosed');

        isRepeat = false;
        console.log('function:')
        console.log('Repeat one song: ', isRepeat);
        console.log('Repeat all songs: true');
    }

    if(indexReplay == 2)
    {
        replayBtnIcon.classList.remove('choosed');
        replayBtn.classList.remove('choosed');
        replayOneBtn.classList.add('choosed');
        replayBtn.classList.add('disappear');
        replayOneBtn.classList.remove('disappear');

        // Kích hoạt chơi lại 1 bài:
        isRepeat = true;
        console.log('function:')
        console.log('Repeat one song: ', isRepeat);
        console.log('Repeat all songs: false');
    }

    // console.log(indexReplay);
    // console.log(`${replayBtnList[indexReplay]}`);
}

// Chơi lại từ đầu khi hết danh sách:
replayBtn.addEventListener('click', function()
{
    // replayBtn.classList.toggle('selected');
    replayOneBtn.classList.remove('choosed');
    indexReplay++;
    toggleReplay(indexReplay);

    // Hủy kích hoạt chơi lại 1 bài:
    // isRepeat = false;
});

// Chơi lại 1 bài lặp đi lặp lại:
replayOneBtn.addEventListener('click', function()
{
    indexReplay++;
    if(indexReplay > replayBtnList.length - 1)
    {
        indexReplay = 0;
        replayOneBtn.classList.add('disappear');
        replayOneBtn.classList.remove('choosed');
        replayBtn.classList.remove('disappear');
    }

    // 
    isRepeat = false;
    console.log('Repeat one song: ', isRepeat);
    console.log('Repeat all songs: false');
    // console.log(indexReplay);
});

// Chơi nhạc ngẫu nhiên.
shuffleBtn.addEventListener('click', function()
{
    shuffleBtn.classList.toggle('choosed');
    if(shuffleBtn.classList.contains('choosed'))
    {
        console.log('Shuffle: On');
    }
    else
    {
        console.log('Shuffle: Off');
    }
});


// Chức năng trộn bài hát:
function toggleShuffleSong(isShuffle)
{
    // = 1 khi nhấn Next.
    if(isShuffle == 1)
    {
        if(shuffleBtn.classList.contains('choosed'))
        {
            console.log('isShuffled: True');

            // Next Song
            playBtn.classList.add('disappear');
            pauseBtn.classList.remove('disappear');

            if(nowPlayingList == 1)
            {
                // ++ để tăng thêm 1... nghĩa là qua bài có index kế tiếp.
                // indexSong++;
                songNum++;
                var shuffleIndex = Math.floor(Math.random() * (playingLists.length - 1))
                indexSong = shuffleIndex;
                // songNum = shuffleIndex + 1;
                // console.log('Song number: ', songNum);

                if(indexSong >= playingLists.length)
                {
                    indexSong = 0;
                    songNum = indexSong + 1;
                    // song.pause;
                }
            }
            else if(nowPlayingList == 2)
            {
                // ++ để tăng thêm 1... nghĩa là qua bài có index kế tiếp.
                // indexSong++;
                songNum++;
                var shuffleIndex = Math.floor(Math.random() * (top10MainChart.length - 1))
                indexSong = shuffleIndex;
                // songNum = shuffleIndex + 1;
                // console.log('Song number: ', songNum);

                if(indexSong >= top10MainChart.length)
                {
                    indexSong = 0;
                    songNum = indexSong + 1;
                    // song.pause;
                }
            }
            else if(nowPlayingList == 3)
            {
                // ++ để tăng thêm 1... nghĩa là qua bài có index kế tiếp.
                // indexSong++;
                songNum++;
                var shuffleIndex = Math.floor(Math.random() * (weekChartVn.length - 1))
                indexSong = shuffleIndex;
                // songNum = shuffleIndex + 1;
                // console.log('Song number: ', songNum);

                if(indexSong >= weekChartVn.length)
                {
                    indexSong = 0;
                    songNum = indexSong + 1;
                    // song.pause;
                }
            }
            else if(nowPlayingList == 4)
            {
                // ++ để tăng thêm 1... nghĩa là qua bài có index kế tiếp.
                // indexSong++;
                songNum++;
                var shuffleIndex = Math.floor(Math.random() * (weekChartKpop.length - 1))
                indexSong = shuffleIndex;
                // songNum = shuffleIndex + 1;
                // console.log('Song number: ', songNum);

                if(indexSong >= weekChartKpop.length)
                {
                    indexSong = 0;
                    songNum = indexSong + 1;
                    // song.pause;
                }
            }
            else if(nowPlayingList == 5)
            {
                // ++ để tăng thêm 1... nghĩa là qua bài có index kế tiếp.
                // indexSong++;
                songNum++;
                var shuffleIndex = Math.floor(Math.random() * (weekChartUsuk.length - 1))
                indexSong = shuffleIndex;
                // songNum = shuffleIndex + 1;
                // console.log('Song number: ', songNum);

                if(indexSong >= weekChartUsuk.length)
                {
                    indexSong = 0;
                    songNum = indexSong + 1;
                    // song.pause;
                }
            }
            else if(nowPlayingList == 6)
            {
                // ++ để tăng thêm 1... nghĩa là qua bài có index kế tiếp.
                // indexSong++;
                songNum++;
                var shuffleIndex = Math.floor(Math.random() * (trendingNewList.length - 1))
                indexSong = shuffleIndex;
                // songNum = shuffleIndex + 1;
                // console.log('Song number: ', songNum);

                if(indexSong >= trendingNewList.length)
                {
                    indexSong = 0;
                    songNum = indexSong + 1;
                    // song.pause;
                }
            }
            else if(nowPlayingList == 7)
            {
                // ++ để tăng thêm 1... nghĩa là qua bài có index kế tiếp.
                // indexSong++;
                songNum++;
                var shuffleIndex = Math.floor(Math.random() * (trendingVnList.length - 1))
                indexSong = shuffleIndex;
                // songNum = shuffleIndex + 1;
                // console.log('Song number: ', songNum);

                if(indexSong >= trendingVnList.length)
                {
                    indexSong = 0;
                    songNum = indexSong + 1;
                    // song.pause;
                }
            }
            else if(nowPlayingList == 8)
            {
                // ++ để tăng thêm 1... nghĩa là qua bài có index kế tiếp.
                // indexSong++;
                songNum++;
                var shuffleIndex = Math.floor(Math.random() * (trendingGlobalList.length - 1))
                indexSong = shuffleIndex;
                // songNum = shuffleIndex + 1;
                // console.log('Song number: ', songNum);

                if(indexSong >= trendingGlobalList.length)
                {
                    indexSong = 0;
                    songNum = indexSong + 1;
                    // song.pause;
                }
            }
        }
        else
        {
            console.log('isShuffled: False');
            songNum = indexSong + 1;
            // 
            // replaySongLists()

            // Next Song
            playBtn.classList.add('disappear');
            pauseBtn.classList.remove('disappear');

            // ++ để tăng thêm 1... nghĩa là qua bài có index kế tiếp.

            // Shuffled:
            // var shuffleIndex = Math.floor(Math.random() * (songLists.length - 1))
            // indexSong = shuffleIndex;
            // songNum = shuffleIndex + 1;

            if(nowPlayingList == 1)
            {
                indexSong++;
                songNum++;

                if(indexSong >= playingLists.length)
                {
                    indexSong = 0;
                    songNum = indexSong + 1;
                    // song.pause;
                }
                else
                {

                }
            }
            else if(nowPlayingList == 2)
            {
                indexSong++;
                songNum++;

                if(indexSong >= top10MainChart.length)
                {
                    indexSong = 0;
                    songNum = indexSong + 1;
                    // song.pause;
                }
                else
                {

                }
            }
            else if(nowPlayingList == 3)
            {
                indexSong++;
                songNum++;

                if(indexSong >= weekChartVn.length)
                {
                    indexSong = 0;
                    songNum = indexSong + 1;
                    // song.pause;
                }
                else
                {

                }
            }
            else if(nowPlayingList == 4)
            {
                indexSong++;
                songNum++;

                if(indexSong >= weekChartKpop.length)
                {
                    indexSong = 0;
                    songNum = indexSong + 1;
                    // song.pause;
                }
                else
                {

                }
            }
            else if(nowPlayingList == 5)
            {
                indexSong++;
                songNum++;

                if(indexSong >= weekChartUsuk.length)
                {
                    indexSong = 0;
                    songNum = indexSong + 1;
                    // song.pause;
                }
                else
                {

                }
            }
            else if(nowPlayingList == 6)
            {
                indexSong++;
                songNum++;

                if(indexSong >= trendingNewList.length)
                {
                    indexSong = 0;
                    songNum = indexSong + 1;
                    // song.pause;
                }
                else
                {

                }
            }
            else if(nowPlayingList == 7)
            {
                indexSong++;
                songNum++;

                if(indexSong >= trendingVnList.length)
                {
                    indexSong = 0;
                    songNum = indexSong + 1;
                    // song.pause;
                }
                else
                {

                }
            }
            else if(nowPlayingList == 8)
            {
                indexSong++;
                songNum++;

                if(indexSong >= trendingGlobalList.length)
                {
                    indexSong = 0;
                    songNum = indexSong + 1;
                    // song.pause;
                }
                else
                {

                }
            }
            // console.log('Song number: ', songNum);
        }
    }

    //  = -1 khi nhấn Prev.
    if(isShuffle == -1)
    {
        if(shuffleBtn.classList.contains('choosed'))
        {
            console.log('isShuffled: True');

            // Prev Song
            playBtn.classList.add('disappear');
            pauseBtn.classList.remove('disappear');

            if(nowPlayingList == 1)
            {
                // ++ để tăng thêm 1... nghĩa là qua bài có index kế tiếp.
                // indexSong++;
                songNum++;
                var shuffleIndex = Math.floor(Math.random() * (playingLists.length - 1))
                indexSong = shuffleIndex;
                // songNum = shuffleIndex + 1;
                console.log('Song number: ', songNum);

                if(indexSong >= playingLists.length)
                {
                    indexSong = 0;
                    songNum = indexSong + 1;
                    // song.pause;
                }
            }
            else if(nowPlayingList == 2)
            {
                // ++ để tăng thêm 1... nghĩa là qua bài có index kế tiếp.
                // indexSong++;
                songNum++;
                var shuffleIndex = Math.floor(Math.random() * (top10MainChart.length - 1))
                indexSong = shuffleIndex;
                // songNum = shuffleIndex + 1;
                console.log('Song number: ', songNum);

                if(indexSong >= top10MainChart.length)
                {
                    indexSong = 0;
                    songNum = indexSong + 1;
                    // song.pause;
                }
            }
            else if(nowPlayingList == 3)
            {
                // ++ để tăng thêm 1... nghĩa là qua bài có index kế tiếp.
                // indexSong++;
                songNum++;
                var shuffleIndex = Math.floor(Math.random() * (weekChartVn.length - 1))
                indexSong = shuffleIndex;
                // songNum = shuffleIndex + 1;
                console.log('Song number: ', songNum);

                if(indexSong >= weekChartVn.length)
                {
                    indexSong = 0;
                    songNum = indexSong + 1;
                    // song.pause;
                }
            }
            else if(nowPlayingList == 4)
            {
                // ++ để tăng thêm 1... nghĩa là qua bài có index kế tiếp.
                // indexSong++;
                songNum++;
                var shuffleIndex = Math.floor(Math.random() * (weekChartKpop.length - 1))
                indexSong = shuffleIndex;
                // songNum = shuffleIndex + 1;
                console.log('Song number: ', songNum);

                if(indexSong >= weekChartKpop.length)
                {
                    indexSong = 0;
                    songNum = indexSong + 1;
                    // song.pause;
                }
            }
            else if(nowPlayingList == 5)
            {
                // ++ để tăng thêm 1... nghĩa là qua bài có index kế tiếp.
                // indexSong++;
                songNum++;
                var shuffleIndex = Math.floor(Math.random() * (weekChartUsuk.length - 1))
                indexSong = shuffleIndex;
                // songNum = shuffleIndex + 1;
                console.log('Song number: ', songNum);

                if(indexSong >= weekChartUsuk.length)
                {
                    indexSong = 0;
                    songNum = indexSong + 1;
                    // song.pause;
                }
            }
            else if(nowPlayingList == 6)
            {
                // ++ để tăng thêm 1... nghĩa là qua bài có index kế tiếp.
                // indexSong++;
                songNum++;
                var shuffleIndex = Math.floor(Math.random() * (trendingNewList.length - 1))
                indexSong = shuffleIndex;
                // songNum = shuffleIndex + 1;
                console.log('Song number: ', songNum);

                if(indexSong >= trendingNewList.length)
                {
                    indexSong = 0;
                    songNum = indexSong + 1;
                    // song.pause;
                }
            }
            else if(nowPlayingList == 7)
            {
                // ++ để tăng thêm 1... nghĩa là qua bài có index kế tiếp.
                // indexSong++;
                songNum++;
                var shuffleIndex = Math.floor(Math.random() * (trendingVnList.length - 1))
                indexSong = shuffleIndex;
                // songNum = shuffleIndex + 1;
                console.log('Song number: ', songNum);

                if(indexSong >= trendingVnList.length)
                {
                    indexSong = 0;
                    songNum = indexSong + 1;
                    // song.pause;
                }
            }
            else if(nowPlayingList == 8)
            {
                // ++ để tăng thêm 1... nghĩa là qua bài có index kế tiếp.
                // indexSong++;
                songNum++;
                var shuffleIndex = Math.floor(Math.random() * (trendingGlobalList.length - 1))
                indexSong = shuffleIndex;
                // songNum = shuffleIndex + 1;
                console.log('Song number: ', songNum);

                if(indexSong >= trendingGlobalList.length)
                {
                    indexSong = 0;
                    songNum = indexSong + 1;
                    // song.pause;
                }
            }
        }
        else
        {
            console.log('isShuffled: False');

            // songNum--;
            if(nowPlayingList == 1)
            {
                // Prev Song
                indexSong--;

                if(indexSong < 0)
                {
                    indexSong = playingLists.length - 1;
                    songNum = indexSong + 1;
                }
            }
            else if(nowPlayingList == 2)
            {
                // Prev Song
                indexSong--;

                if(indexSong < 0)
                {
                    indexSong = top10MainChart.length - 1;
                    songNum = indexSong + 1;
                }
            }
            else if(nowPlayingList == 3)
            {
                // Prev Song
                indexSong--;

                if(indexSong < 0)
                {
                    indexSong = weekChartVn.length - 1;
                    songNum = indexSong + 1;
                }
            }
            else if(nowPlayingList == 4)
            {
                // Prev Song
                indexSong--;

                if(indexSong < 0)
                {
                    indexSong = weekChartKpop.length - 1;
                    songNum = indexSong + 1;
                }
            }
            else if(nowPlayingList == 5)
            {
                // Prev Song
                indexSong--;

                if(indexSong < 0)
                {
                    indexSong = weekChartUsuk.length - 1;
                    songNum = indexSong + 1;
                }
            }
            else if(nowPlayingList == 6)
            {
                // Prev Song
                indexSong--;

                if(indexSong < 0)
                {
                    indexSong = trendingNewList.length - 1;
                    songNum = indexSong + 1;
                }
            }
            else if(nowPlayingList == 7)
            {
                // Prev Song
                indexSong--;

                if(indexSong < 0)
                {
                    indexSong = trendingVnList.length - 1;
                    songNum = indexSong + 1;
                }
            }
            else if(nowPlayingList == 8)
            {
                // Prev Song
                indexSong--;

                if(indexSong < 0)
                {
                    indexSong = trendingGlobalList.length - 1;
                    songNum = indexSong + 1;
                }
            }
        }
    }
}

// ============================================================================================


//                          ===== Làm cái volume cho slider Volume =====

// On/Off volume:
// volumeIcon.addEventListener('click', function()
// {
//     _this.isMute = !_this.isMute;
    
//     if(_this.isMute)
//     {
//         song.volume = 0;
//     }
//     else
//     {
//         song.volume = _this.volume / 100;
//         volumeProgress.value = _this.value;
//     }
// });

// // Tăng / Giảm âm lượng:
// volumeProgress.onchange  = function(e)
// {
//     _this.volume = e.target.value;
//     song.volume = e.target.value / 100;
//     if(e.target.value == 0)
//     {
//         _this.isMute = true;
//     }
//     else
//     {
//         _this.isMute = false;
//     }
// }


// ============================================================================================


//          ===== Làm cái chức năng kéo thả cho slider thời gian của bài nhạc =====

// Tạo 1 cái function để hiển thị thời gian chạy của bài hát:
function displayTimer()
{
    // console.log(song.duration, song.currentTime); // console.log ra để coi nó có trỏ vào cái bài nhạc đó ko?
    // Destructurer trong Object... có gì quên thì lên GG học lại nha!
    const {duration, currentTime} = song;
    timeSlider.max = duration;
    timeSlider.value = currentTime;
    // 
    timePlaying.textContent = formatTimer(currentTime);
    // 
    if(!duration)
    {
        timeDuration.textContent = "00:00";
    }
    else
    {
        timeDuration.textContent = formatTimer(duration); 
    }
}
displayTimer();

// 
function formatTimer(num) // Làm tròn giá trị thời gian mặc định trong JS về số phút: giây.
{
    const min = Math.floor(num / 60);
    const sec = Math.floor(num - min * 60);
    return `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;
}

// Đồng bộ thời gian bài hát với giá trị của thanh Slider:
timeSlider.addEventListener('change', function()
{
    // Set cái thời gian của bài nhạc(song.currentTime) = value của cái timeSlider đó(timeSlider.value)... ghi ngược lại là code ko chạy đâu nhá!
    song.currentTime = timeSlider.value;
});


// ============================================================================================


//                  ===== Làm cái chức năng hover vào Playlist Item bất kỳ =====







