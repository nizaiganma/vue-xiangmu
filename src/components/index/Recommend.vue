<template>
	<div>
		<mt-swipe :auto="3000">
			<mt-swipe-item><img src="../../assets/images/1453347776330_.jpg" alt=""></mt-swipe-item>
			<mt-swipe-item><img src="../../assets/images/1480909297444_.jpg" alt=""></mt-swipe-item>
			<mt-swipe-item><img src="../../assets/images/1482312358874_.jpg" alt=""></mt-swipe-item>
			<mt-swipe-item><img src="../../assets/images/1482482412398_.jpg" alt=""></mt-swipe-item>
			<mt-swipe-item><img src="../../assets/images/1542366750288_.jpg" alt=""></mt-swipe-item>
			<mt-swipe-item><img src="../../assets/images/1542437570974_.jpg" alt=""></mt-swipe-item>
			<mt-swipe-item><img src="../../assets/images/1542439085847_.jpg" alt=""></mt-swipe-item>
			<mt-swipe-item><img src="../../assets/images/1542506724829_.jpg" alt=""></mt-swipe-item>
		</mt-swipe>
		<div class="newMc">
			<p class="titTex">每日新歌</p>
				<ul class="newlist">
					<li v-for="(v,i) in msg"  class="newBs" @click="cli(i)">
						<router-link to="/playOne">
							<img :src="v.src" alt="">
							<span class="newImg">
								<img :src="v.img" alt="">
							</span>
						</router-link>
					</li>
				</ul>
		</div>
		<div class="newMc">
			<p class="titTex">歌单推荐</p>
				<ul class="newlist">
					<li v-for="v in msg2"  class="newBs2">
						<router-link to="/playOne">
							<img :src="v.src" alt="">
							<span class="newBtex">{{v.con}}</span>
						</router-link>
					</li>
				</ul>
		</div>
		<div class="newMc">
			<p class="titTex">精彩节目</p>
				<ul class="newlist">
					<li v-for="v in msg3"  class="newBs2">
						<router-link to="/playOne">
							<img :src="v.src" alt="">
							<span class="newBtex">{{v.con}}</span>
						</router-link>
					</li>
				</ul>
		</div>	
		<div class="newMc">
			<p class="titTex">推荐主播</p>
				<ul class="newlist">
					<li v-for="v in msg4"  class="newBs2">
						<router-link to="/playOne">
							<img :src="v.src" alt="">
							<span class="newBtex">{{v.con}}</span>
						</router-link>
					</li>
				</ul>
		</div>
		<div class="newMc">
			<div class="newList">
				<p class="titTex">推荐主播</p>
				<p class="hotBox">甜蜜</p>
				<p class="hotBox">流行</p>
				<p class="hotBox">网络</p>
				<p class="hotBox">影视</p>
				<p class="hotBox">DJ</p>
				<p class="hotBox">经典</p>
			</div>
		</div>
		<div class="newMc">
			<div class="newList-vedio">
				<p class="titTex">最新MV</p>
				<div class="newBs3-rec">
					<img src="../../assets/images/3203571739.jpg" alt="">
					<span class="newBtex">从无到有</span>
					<img src="../../assets/images/playHover.png" alt="" class="playhover">
				</div>
				<div class="newBs4-rec">
					<img src="../../assets/images/1539856031203_.jpg" alt="">
					<span class="newBtex">阿杜《我不该躲》-睽违6年的重磅回归</span>
					<img src="../../assets/images/playHover.png" alt="" class="playhover">
				</div>
			</div>
		</div>		
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				msg:[],
				msg2:[],
				msg3:[],
				msg4:[]
			}
		},
		methods:{
			cli(a){
		          this.$store.commit('increment3',this.msg[a].name)
       		}
		},
		mounted(){
			this.$http.get('./src/assets/json/Recommend.json',{
					params:{
						
					}
				})
				.then((res)=>{
				console.log(res)
					this.msg=res.data.list;
					this.msg2=res.data.list2;
					this.msg3=res.data.list3;
					this.msg4=res.data.list4;
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
.mint-swipe{
	height:0px;
	width:100%;
	padding-bottom:30%;
}
.mint-swipe-items-wrap{
	height:0px;
	width:100%;
	padding-bottom:30%;
}
.mint-swipe img{
	width:100%;
}
.newMc{
    width: 94%;
    padding: 0 3%;
    overflow: hidden;
}
.newlist{
	width:110%;
}
.newBs{
    width: 26%;
    float: left;
    height: 0px;
    padding-bottom:26%;
    overflow: hidden;
    position: relative;
    margin-right: 7%;
}
.newBs img{
	width: 100%;
}
.newImg{
    width: 88%;
    height: 88%;
    overflow: hidden;
    position: absolute;
    top: 2%;
    left: 5.5%;
    display: block;
    cursor: pointer;
}
.newImg img {
    width: 95%;
    border: 1px solid rgba(0,0,0,0.2);
    min-height: 72px;
}
.titTex{
    height: 1.56rem;
    padding: 0 2%;
    font: 16px "微软雅黑";
    color: #46b4e6;
    margin:10px 0px;
}
.newBs2 {
    width: 23%;
    overflow: hidden;
    position: relative;
    margin: 0 9% .62rem 1%;
    float: left;
    cursor: pointer;
}
.newBs2 img {
    overflow: hidden;
    display: block;
    border: 1px solid rgba(0,0,0,0.2);
    min-height: 74px;
    width:100%;
    margin:5px;
}
.newBtex{
    width: 100%;
    font: 16px "微软雅黑";
    color: #000;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
overflow: hidden;
    height: 40px;
}
.hotBox{
	width: 25.5%;
    overflow: hidden;
    float: left;
    border: 1px solid #d0e3ee;
    height: 24px;
    background: #fff;
    font: 16px "微软雅黑";
    color: #333;
    text-align: center;
    margin: 0 3% 0.5% 3.5%;
    white-space: nowrap;
}
.newlist-vedio{
	width:100%;
}
.newBs3-rec{
	width:45%;
	float:left;
	position: relative;
}
.newBs4-rec{
	width:45%;
	float:right;
	position: relative;
}
.newBs3-rec img{
	width:100%;
}
.newBs4-rec img{
	width:100%;
}
img.playhover{
	position: absolute;
	top:50%;
	left:50%;
	width:5%;
	height:5%;
	margin-left:-26px;
	margin-top:-26px;
}
</style>
