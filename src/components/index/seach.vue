<template>
  <div class="box">
      <div class="header">
      <router-link to="/Recommend" ><img src="../../assets/images/back.png" alt="" ></router-link><span>搜索</span>
      </div>
      <div class="singerlist">
          <p class="seackLe">
              <input type="text" id="searchvalueId" placeholder="歌手/歌名/歌词" class="seack" value="">
          </p>
          <p  class="seackBtn"">搜索</p>
      </div>
      <div class="seackCov">
      <p class="seackTle">
      <router-link to="/">我的童年  王源</router-link><br>
      <router-link to="/">张艺兴</router-link><br>
      <router-link to="/">由你音乐榜</router-link><br>
      <router-link to="/">赵丽颖</router-link><br>
      <router-link to="/">李荣浩 贝贝</router-link>
      </p>
      <p class="seackTri">
      <router-link to="/">陈立农 我是你的</router-link><br>
      <router-link to="/">火箭少女101</router-link><br>
      <router-link to="/">你敢不敢再傻一次</router-link><br>
      <router-link to="/">朱一龙 榜样阅读</router-link><br>
      <router-link to="/">悟 吴亦凡</router-link>
      </p>
      </div>
      <p class="nulla">请输入歌曲名和歌手名</p>
  </div>
</template>
<script type="text/javascript">
  export default{
    data(){
      return {
        list:['热门推荐','智能组菜','异国风味','传统中餐']
      }
    },
    methods:{
      back(){
        this.$router.go(-1)
      }
    },
    mounted(){
      $('.seackBtn').click(function(){
        if($(this).siblings('p').children('input').val()==''){
        $('.nulla').show();
          setTimeout(function(){
              $('.nulla').fadeOut();
          },2500);
        }
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
  position: fixed;
  background:#fafafa;
  top:0px;
  left:0px;
}
.header{
  width:90%;
  padding-left:5%;
  padding-right:5%;
  background-color:#ededed;
  height:50px;
  line-hright:50px;
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
.singerlist{
  height: 32px;
  overflow: hidden;
  width: 90%;
  margin-top: 15px;
  padding-left:5%;
  padding-right:5%;
}
.seackLe{
    width: 79%;
    height: 30px;
    border: 1px solid #a0a0a0;
    border-radius: 3px;
    background: #fff;
    float:left;
}
.seackLe input{
    width: 94%;
    height: 30px;
    border: 0;
    display: block;
    overflow: hidden;
    font: 14px "微软雅黑";
    padding: 0 3%;
    border-radius: 3px;
    float: left;
}
.seackCov{
    width:90%;
    padding-left:5%;
    padding-right:5%;
    overflow: hidden;
}
.seackTle{
    width: 45%;
    overflow: hidden;
    float: left;
    text-align: right;
    font: 14px "微软雅黑";
    color: #000;
}
.seackTri{
    width: 45%;
    overflow: hidden;
    float: right;
    font: 14px "微软雅黑";
    color: #000;
}
.seackTle a, .seackTri a {
    color: #000;
    line-height:40px;
}
.seackBtn {
    width: 50px;
    height: 32px;
    background: #46b4e6;
    font: 14px "微软雅黑";
    color: #fff;
    border-radius: 3px;
    float: right;
    text-align: center;
    line-height:32px;
}
.nulla{
  width:200px;
  height:25px;
  line-height:25px;
  text-align:center;
  position: fixed;
  bottom:10%;
  left:50%;
  margin-left:-50px;
  background-color:#646464;
  color:#fff;
  border-radius:3px;
  display:none;
}
</style>