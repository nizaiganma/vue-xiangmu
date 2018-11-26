<template>
	<div class="newMc-mv">
		<ul class="newlist-mv">
			<li v-for="v in msg" class="newBs2-mv">
				<router-link to="/playOne">
					<img :src="v.img" alt="">
					<span class="newtxt-mv">{{v.con}}</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				msg:[]
			}
		},
		mounted(){
			this.$http.get('./src/assets/json/MV.json',{
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
.newMc-mv {
    width: 94%;
    padding: 0 3%;
    overflow: hidden;
}
.newList-mv {
    width: 110%;
    overflow: hidden;
    height:0px;
    padding-top:30%;
}
.newBs2-mv{
    width: 25%;
    overflow: hidden;
    position: relative;
    margin: 10px 4% .62rem 4%;
    float: left;
    cursor: pointer;
}
.newBs2-mv img{
    overflow: hidden;
    display: block;
    border: 1px solid rgba(0,0,0,0.2);
    min-height: 74px;
    width:100%;
}
.newtxt-mv{
	display:block;
	height:40px;
	color:#000;
	margin-top:6px;
}
</style>