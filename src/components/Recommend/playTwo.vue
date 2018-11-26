<template>
	<div class="box">
      <div class="header">
      <router-link to="/Recommend" ><img src="../../assets/images/back.png" alt="" ></router-link><span>官方榜</span>
      </div>
		    <div class="singList2">
		    	<ul>
		    		<li  v-for="v in msg" class="singBox2">
            <p class="singerZjImg">
                <img :src="v.src" width="100%">
            </p>
                <p class="singerRiTex2">
                  <span class="singerRiName">{{v.txt}}</span>
                  <span class="singerRiName2">{{v.txt2}}</span>
                </p>
		    		</li>
		    	</ul>
		    </div>
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
.singList2 {
    width: 92%;
    margin: 0 auto;
    overflow: hidden;
	backgroud-color:#fefefe;
	margin-top: -37px;
}
.singBox2 {
    width: 100%;
    height: 101px;
    overflow: hidden;
    border-bottom: 1px solid #dfdfdf;
    padding: 10px 0;
}
.singerZjImg {
    width: 75px;
    height: 75px;
    float: left;
    overflow: hidden;
    border: 1px solid #87818a;
    margin: 12px 10px 0 0;
}
.singerRiTex2 {
    width: 65%;
    height: 75px;
    float: left;
    overflow: hidden;
    margin-top: 13px;
    font: 16px/75px "微软雅黑";
    color: #000;
    font-weight: bold;
}
.singerRiName {
    width: 100%;
    height: 20px;
    font: 16px/20px "微软雅黑";
    font-weight: bold;
    overflow: hidden;
    margin-top: 18px;
    display: block;
}
.singerRiName2 {
    width: 100%;
    height: 20px;
    font: 12px/20px "微软雅黑";
    overflow: hidden;
    margin-top: 3px;
    display: block;
    color: #6c6c6c;
}
</style>
