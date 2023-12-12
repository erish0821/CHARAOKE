<template>
    <div class="container">
        <slot name="title"></slot>
        <slot name="artist"></slot>
    </div>
</template>

<script>
export default {
    setup() {
      
    },
}
</script>

<style scoped>
*{
    margin: 0;
}

.container{
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 10px;
    height: 100px;
    box-shadow: 0 0 5px #c9c1c1;
    padding: 10px 15px;
    border-radius: 25px;
    background-color: #ffffff;
    transition: background-color 0.3s ease;
    transition: .4s;
    margin-bottom: 20px; /* 각 노래 목록 사이의 간격 */
}

.container:hover{
    box-shadow: 0 0 5px #8a8686;
    
}


</style>