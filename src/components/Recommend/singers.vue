<template>
    <div class="con">
      <div class="header">
      <router-link to="/Recommend" ><img src="../../assets/images/back.png" alt="" ></router-link><span>{{this.$store.state.count}}</span>
      </div>
      <div class="Lyrics">
               <p class="lyrImg"><img id="lrcartpicid" :src="this.$store.state.counts" width="100%"></p>
               <div class="playLine">
               <span class="playLa" id="currTimeId">01:30</span>
                    <div class="playBox">
                         <em class="playRadius" id="ydbtnid" ></em>
                         <p class="playLb" id="totalwid"><span id="youwid" style="width: 30%; height: 4px; background: rgb(228, 103, 3); float: left;"></span></p>
                         <p class="playLb" id="totalwid"><span id="youwid" style="width: 70%; height: 4px; background: rgb(237, 237, 237); float: right;"></span></p>
                    </div>
                    <span class="playLa" id="currTimeId">04:30</span>
               </div>
               <div class="playList">
                    <p class="playBefor">
                         <a href="" class="playBf"><img src="../../assets/images/bluepre.png" width="100%"></a>
                    </p>
                    <p class="playBefor">
                         <a href="" class="playMon"><img  src="../../assets/images/bluestop.png"  width="100%"></a>
                    </p>
                    <p class="playBefor">
                        <a href="" class="playBf"><img  src="../../assets/images/bluenext.png" width="100%"></a>
                    </p>
               </div>
      </div>
      <div class="downLoad"><img src="../../assets/images/downBtn.png" alt="" >免费下载这首歌</div>     
    </div>
</template>

<script type="text/javascript">
    export default{
        data(){
            return {
                msg:[]
            }
        },
        methods:{
            
        },
        mounted(){
            this.$http.get('./src/assets/json/playTwo.json',{
                    params:{
                        
                    }
                })
                .then((res)=>{
                    this.msg=res.data.list;
                    console.log(res)
                },function(){
                    
                })
        }
    }
</script>
<style>
*{
  margin:0px;
  padding:0px;
  list-style:none;
  text-decoration: none;
}
.con{
  width:100%;
  height:100%;
  left:0px;
  top:0px;
  position: fixed;
  background:#f8f8f8;
  z-index:100;
}
.header{
  width:90%;
  padding-left:5%;
  padding-right:5%;
  background-color:#ededed;
  height:50px;
  line-hright:50px;
  position: fixed;
  top:0px;
  left:0px;
  z-index:100;
}
.header a{
  display:block;
  padding-top:10px;
  width:40px;
  float:left;
}
.header span{
  line-height:50px;
}
.header img{
  width:30px;
  height:30px;
}
.downLoad {
    width: 100%;
    height: 45px;
    background: #46b4e6;
    position: fixed;
    bottom: 0;
    left: 0;
    font: 18px "微软雅黑";
    color: #fff;
    text-align: center;
    line-height:45px;
}
.downLoad img{
    width: 20px;
    vertical-align: middle;
}
.Lyrics{
    width:90%;
    overflow:hidden;
    margin:0 auto;
}
.lyrImg{
    width:129px;
    height:129px;
    overflow:hidden;
    border-radius:129px;
    margin-top:60px;
    margin-bottom:10px;
    margin-left:auto;
    margin-right:auto;
}
.playLa{
   width:15%;
   height:15px;
   float:left;
   font:12px "微软雅黑";
   color:#333;
   text-align:center; 
   margin-top:-5px;
}
.playLine{
    height:15px;
    width:100%;
    position:fixed;
    bottom:100px;
    left:0px;
}
.playBox{
   width:70%;
   float:left;
   height:15px;
   position:relative;
}
.playRadius{
    width:13px;
    height:13px;
    display:block;
    background:#fff;
    border:1px solid #9c9c9c;
    border-radius:15px;
    position:absolute;
    top:-5px;
    left:30%;
}
.playList {
    height: 35px;
    overflow: hidden;
    width: 70%;
    padding: 0 15%;
    position:fixed;
    bottom:60px;
    left:0px;
}
.playBefor {
    width: 33.33%;
    height: 35px;
    float: left;
    overflow: hidden;
}
.playBf {
    width: 30px;
    height: 30px;
    margin: 3px auto 0 auto;
    display: block;
    overflow: hidden;
}
.playMon {
    width: 35px;
    height: 35px;
    margin: 0 auto;
    display: block;
    overflow: hidden;
}
</style>
