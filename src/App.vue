<template>
  <div id="app">
  	<div class="head">
  		<a href="" class="logo"><img src="./assets/images/logo.png" alt="" ></a>
  		<p class="intPocm">下载手机App版</p>
  		<router-link to="/seach"><p class="seach"><img src="./assets/images/seach.png" alt=""></p></router-link>
  	</div>
  	<ul class="nav">
  	<li><router-link to="/Recommend">推荐</router-link></li>
  	<li><router-link to="/Rankings">排行</router-link></li>
  	<li><router-link to="/classification">分类</router-link></li>
  	<li><router-link to="/singer">歌手</router-link></li>
  	<li><router-link to="/MV">MV</router-link></li>
    </ul>
    <router-view></router-view>
    <div class="numm"></div>
    <v-footer></v-footer>
  </div>
</template>
<script>
import vfooter from './components/index/footer.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    	'v-footer':vfooter
  	}
}
</script>

<style scoped="">
*{
	margin:0px;
	padding:0px;
	list-style:none;
	text-decoration: none;
}
#app{
	margin:-8px;
}
.head{
	width:90%;
	padding-left:5%;
	padding-right:5%;
	background-color:#ededed;
	height:50px;
}
.logo{
	float:left;
	width:90px;
	height:34px;
	margin-right:4%;
	margin-top:8px;
}
.logo img{
	width:90px;
	height:34px;
}
.intPocm{
	float:left;
	width:97px;
	height:25px;
	border: 1px solid #dd9c7a;
    background: #fff2ce;
    text-align: center;
    font-style: "微软雅黑";
    color: #ff7831;
    cursor: pointer;
    font-size:13px;
    line-height:25px;
    border-radius:1.8rem;
    margin-top:13px;
}
.seach{
	float:right;
	width:21px;
	height:21px;
	margin-top:15px;
}
.seach img{
	width:21px;
	height:21px;
}
.nav{
	width:90%;
	padding-left:5%;
	padding-right:5%;
	background-color:#46b4e6;
	height:45px;
	display:flex;
}
.nav li{
	flex:1;
}
.nav a{
	display:block;
	width:100%;
	height:29px;
	text-align: center;
	padding-top:5px;
	line-height:29px;
	margin-right:5%;
	color:#fff;
}
.router-link-active{
	border-bottom:1px solid #fff;
}
.numm{
	width:100%;
	height:50px;
}
</style>