<template>
  <div class="music-list">
    <div class="list-top">
      <h1 class="title">Charaoke</h1>
      <hr class="separation"/>
    </div>
    <div class="items">
      <MusicItem v-for="song in songData" :key="song" @click="sendData(song)">
        <template v-slot:title>
           <h4>{{ song.title }}</h4>
        </template>

        <template v-slot:artist>
          <span>{{ song.artist }}</span>
        </template>
      </MusicItem>
    </div>
  </div>
</template>

<script>
import MusicItem from './MusicItem.vue'
import {reactive, ref} from 'vue'

export default {
  name: 'HelloWorld',
  components:{
    MusicItem
  },
  methods:{
    sendData(song) {
      this.$emit('sendData', song); // 이벤트 발생 및 데이터 전달
    }
  },
  props:{
    songData: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.music-list::-webkit-scrollbar {
  width:10px;
  bottom:0px;
  height:580px;
}


.music-list::-webkit-scrollbar-thumb {
  background: rgb(155, 155, 155); /* 스크롤바 색상 */
  border-radius: 15px; /* 스크롤바 둥근 테두리 */
}

.music-list::-webkit-scrollbar-track {
  background: #c6cbd4;  /*스크롤바 뒷 배경 색상*/
  border-radius: 15px; /* 스크롤바 배경 둥근 테두리 */
}


.music-list{
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.list-top{
  position: sticky;
  top: 0px;
  z-index:1;
  height:100px;
  background-color: #F5F8FF;
}

.title{
  margin:0;
  text-align: center;
  font-family: 'Opificio', sans-serif;
  font-weight: 700;
  font-size: 48px
}

.separation{
  background-color: #fff;
  padding: 0;
  border: 0;
  height: 2px;
  background-image: linear-gradient(to right, #F0F2FC, #E0DFE4, #F0F2FC);
}

.items{
  /* position: fixed; */
  width: 100%;
  height: 580;
  padding: 0 10px;
  
}

h4,span{
  margin: 0;
}
</style>
