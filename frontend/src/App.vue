<template>
  <li class="container">
    
    <div class="item">
      <!-- 노래 리스트뷰 -->
      <MusicList :songData="songs.data" @sendData="handleSongData"></MusicList>
    </div>

    <div class="item">
      <!-- 가사 뷰어 -->
      <p v-for="lyric in songs.currentSongLyrics" :key="lyric">{{lyric}}</p>
      
    </div>

    <div class="item song-info">
      <h3 id="song-title">{{songs.currentSongTitle}}</h3>
        <p id="artist">{{songs.currentSongArtist}}</p>
    </div>

    <div class="item">
      <audio id="audio-player" controls controlsList="noplaybackrate nodownload nofullscreen" :src="songs.currentSongAudioSrc"></audio>
    </div>
  </li>

</template>

<script>
import {reactive, onMounted} from 'vue'
import MusicList from './components/MusicList.vue'
import axios from 'axios'

export default {
  components: {
    MusicList, 
  }, 
  setup() {
    const songs = reactive({
      data: [],
      currentSongTitle: "",
      currentSongArtist: "",
      currentSongLyrics: [],
      currentSongAudioSrc: ""
    });

    const handleSongData = (song) => {
      // console.log(song)
      songs.currentSongTitle = song.title
      songs.currentSongArtist = song.artist
      songs.currentSongAudioSrc = song.audioSrc
      songs.currentSongLyrics = []

      let arr = song.lyrics.split('\n')
      for(let i = 0; i < arr.length; i += 2){
        songs.currentSongLyrics.push(arr[i] + ' ' + arr[i+1])
      }
    }

    onMounted(() => {
      let formattedData = [];
      axios.get('/api/')
        .then(res => {
          res.data.forEach(element => {
            const dataObj = {
              id: element[0],
              title: element[1],
              artist: element[2],
              lyrics: element[3],
              audioSrc: element[4],
            }

            formattedData.push(dataObj)  
          });

          songs.data = formattedData;
          console.log('Data Loaded Successfully')
          console.log(songs.data)
        })
        .catch(e => {
          console.log(e)
        })
  });
  
    return {
      songs,
      handleSongData
    }
  },
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #F5F8FF;
  
}

.container{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 80% 20%;
  grid-template-columns: 25% 75%;
}
.item{
  box-shadow: 0 0 5px #c9c1c1;
  background-color: #F5F8FF;
  border-radius: 15px;
  padding: 10px;
  margin: 15px;
}

.item:nth-child(2){
  padding: 30px;
  overflow-y: auto;
  text-align: center;
}

.song-info{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.song-info > *{
  margin: 0;
}

#audio-player {
    width: 100%;
    margin-top: 20px;
  }
 
  #audio-player::-webkit-media-controls-current-time-display,
  #audio-player::-webkit-media-controls-time-remaining-display {
    color: #000000; /* 시간 표시 텍스트 색상 변경 */
  }
  
  .audio-info {
    width: 92%;
    height: 80%;
    display: grid;
    grid-template-rows: 80% 20%;
    grid-template-columns: 25% 75%;
    background-color: #F5F8FF;
    border-radius: 20px;
    box-shadow: 0 0 5px #c9c1c1;
    padding: 10px;
    margin: 15px;
}

#audio-info h3 {
    margin: 0;
    font-size: 16px;
}

#audio-info p {
    margin: 0;
    font-size: 14px;
}
  
</style>
