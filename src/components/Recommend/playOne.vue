<template>
	<div class="box">
      <div class="header">
      <router-link to="/Recommend" ><img src="../../assets/images/back.png" alt="" ></router-link><span>{{this.$store.state.county}}</span>
      </div>
      		<div class="singDom">
		         <span class="singDomImg" id="gdztpicid"><img src="../../assets/images/1542600913582_132026710_150.jpg" width="100%"></span>
		         <p class="singDomImgRi">
		              <span class="singLe" id="gdinfoid">《天使》是王源于2018年11月17日“王源BORNFREE生日演唱会”后发布的全新EP专辑。收录了《天使》和《孤注...</span>
		         <a href="" class="singPlay"><img src="../../assets/images/singPlay.png" width="100%"></a>
		         </p>
		    </div>
		    <div class="singList">
		    	<ul>
		    		<li  v-for="(v,i) in msg" class="singBox" @click="nn(i)">
		    				<div class="singTex">
		    					<div class="singTexUp">
		    						<p class="singTexUp2">
		    						<img :src="v.src2" width="20" align="absmiddle" v-show="n==i">
		    						{{v.name}}	
		    						</p>
                    <span class="spanSing">
                        <img :src="v.src" width="100%">
                    </span>
		    					</div>
		    					<p class="singName">{{v.txt}}</p>
		    				</div>
		    				<a href="" class="singDom2"><img :src="v.img" width="100%"></a>
		    				<a href="" class="singMv"><img :src="v.video" width="100%"></a>
		    		</li>
		    	</ul>
		    </div>
    </div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				msg:[],
        n:0,
			}
		},
		methods:{
			 nn(a){

       
       var audio=document.getElementById('player')
          this.n=a
          this.$store.commit('increment',this.msg[a].name)
          this.$store.commit('increment2',this.msg[a].img2)
          this.$store.commit('increment4',this.msg[a].txt)
                  audio.currentTime=0
                  audio.play()
                  this.$store.state.imgplay='./src/assets/images/newplay.png';
                  console.log(this.$store.state.imgplay)
                  this.$store.state.bf="true"
       }
		},
		mounted(){
			this.$http.get('./src/assets/json/playOne.json',{
					params:{
						
					}
				})
				.then((res)=>{
					this.msg=res.data.list;
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
.box{
  width:100%;
  height:100%;
  position: relative;
  background:#fafafa;
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
.singDom {
    height: 100%;
    width: 92%;
    padding: 0 4%;
    overflow: hidden;
    position: absolute;
    left: 0px;
    top: -38px;
    opacity: 1.0;
    background: rgba(0,0,0,1);
    height:130px;
}
.singDomImg {
    height: 90px;
    width: 90px;
    overflow: hidden;
    float: left;
    margin: 20px 10px 0 10px;
}
.singDomImgRi {
    width: 60%;
    overflow: hidden;
    float: left;
}
.singLe {
    width: 100%;
    height: 60px;
    float: left;
    overflow: hidden;
    font: 14px/20px "微软雅黑";
    color: #fff;
    padding-top: 2px;
    margin-top: 20px;
}
.singPlay {
    width: 33px;
    height: 33px;
    float: right;
    overflow: hidden;
    margin-top: 3px;
}
.singList {
    width: 92%;
    margin: 0 auto;
    overflow: hidden;
	backgroud-color:#fefefe;
	padding-top: 100px;
}
.singBox {
    width: 100%;
    height: 40px;
    overflow: hidden;
    border-bottom: 1px solid #dfdfdf;
    padding: 10px 0;
}
.singTex {
    width: 75%;
    height: 40px;
    overflow: hidden;
    float: left;
}
.singTexUp {
    width: 100%;
    height: 20px;
    overflow: hidden;
}
.singTexUp2 {
    max-width: 50%;
    height: 20px;
    font: 14px "微软雅黑";
    color: #000;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    float:left;
}
.spanSing {
    display:block;
    width: 30px;
    height: 18px;
    margin-left: 5px;
    float:left;
}
.singName {
    width: 100%;
    height: 20px;
    font: 12px/24px "微软雅黑";
    color: #636363;
    }
.singDom2 {
    width: 20px;
    height: 20px;
    float: right;
    padding: 10px 8px;
    overflow: hidden;
}
.singMv{
    width: 20px;
    height: 20px;
    float: right;
    padding: 10px 8px;
    overflow: hidden;
}
</style>
