<template>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style scoped>
.container{
    width: 100%;
    height: 700px;
    border: 1px solid black;
    border-radius: 15px;
    margin-top: 10px
}

.lyrics-viewer::-webkit-scrollbar {
  width:10px;
  bottom:0px;
  height:580px;
}


.lyrics-viewer::-webkit-scrollbar-thumb {
  background: rgb(155, 155, 155); /* 스크롤바 색상 */
  border-radius: 15px; /* 스크롤바 둥근 테두리 */
}

.lyrics-viewer::-webkit-scrollbar-track {
  background: #c6cbd4;  /*스크롤바 뒷 배경 색상*/
  border-radius: 15px; /* 스크롤바 배경 둥근 테두리 */
}
</style>

