<template>
    <div class="musicBox">
        <span class="musicImg">
           <router-link to="/singers">
            <img :src="this.$store.state.counts" alt="" width="100%">
            </router-link>
        </span>
        <p class="musicTex">
            <span class="msTop" id="songNameid">{{this.$store.state.count}}-{{this.$store.state.countz}}</span>
        </p>
        <a href="" class="next">
            <img src="../../assets/images/playlist.png" width="100%">
        </a>
        <a href="" class="next">
            <img src="../../assets/images/next1.png" width="100%">
        </a>
        <a  class="play">

                <img :src="this.$store.state.imgplay" width="100%" @click="chang()">
        </a>
        
       <audio id="player" src="src/assets/mp3/1.mp3" >
        </audio>
    </div>
</template>
<script>
    export default{
        data(){
            return{
            }
        },
        methods:{
            chang(){
        
            console.log(this.$store.state.bf)
                var audio=document.getElementById('player')
                    if(this.$store.state.imgplay=='./src/assets/images/stop1.png'){
                        this.$store.state.imgplay='./src/assets/images/newplay.png';
                    }else{
                        this.$store.state.imgplay='./src/assets/images/stop1.png';
                    }
                        if(this.$store.state.bf==false){
                            audio.currentTime=0;
                            audio.play();
                            this.$store.state.bf=true
                        }else{
                            audio.pause();
                            this.$store.state.bf=false
                        }
                }
        },
        components:{
        },
        mounted(){
        },
        updated(){
           
        }
    }
</script>
<style scoped="">
.musicBox {
    height: 50px;;
    overflow: hidden;
    width: 94%;
    padding: 0 3%;
    background-color: #46b4e6;
    position: fixed;
    bottom: 0px;
    left: 0px;
    z-index: 99;
}
.musicImg {
    width: 35px;
    height: 35px;
    float: left;
    overflow: hidden;
    margin: 10px 15px 0 0;
}
.musicTex{
    width: 35%;
    height: 30px;;
    float: left;
    overflow: hidden;
}
.msTop {
    width: 100%;
    height: 30px;
    font: 12px "微软雅黑";
    color: #fff;
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height:30px;
}
.next {
    width: 25px;
    height: 25px;
    float: right;
    overflow: hidden;
    margin-top: 12px;
    margin-left: 32px;
}
.play {
    width: 30px;
    height: 30px;
    float: right;
    overflow: hidden;
    margin-top: 10px;
}
.play a, .next a{
    color: #b1a5a0;
    text-decoration: none;
}
</style>