<template>
<div>
		<div class="newMc2">
			<div class="newlist2">
				<p class="titTex">排行榜(新2018)</p>
				<router-link to="/playTwo" class="fhgh">
					<p class="hotBox2">官方榜</p>
					<p class="hotBox2">特色榜</p>
					<p class="hotBox2">全球榜</p>
				</router-link>
			</div>
		</div>
		<div class="newMc2">
			<div class="newlist2">
				<p class="titTex">专区</p>
			</div>
		</div>
		<div class="newMc2">
			<div class="newlist2">
				<p class="titTex">热门</p>
				<router-link to="/playTwo">
					<ul>
						<li v-for="v in list">
							<p class="hotBox2">{{v.txt}}</p>
						</li>
					</ul>
				</router-link>
			</div>
		</div>
		<div class="newMc2">
			<div class="newlist2">
				<p class="titTex">心情</p>
				<router-link to="/playTwo">
					<ul>
						<li v-for="v in list2">
							<p class="hotBox2">{{v.txt}}</p>
						</li>
					</ul>
				</router-link>
			</div>
		</div>
		<div class="newMc2">
			<div class="newlist2">
				<p class="titTex">场景</p>
				<router-link to="/playTwo">
					<ul>
						<li v-for="v in list3">
							<p class="hotBox2">{{v.txt}}</p>
						</li>
					</ul>
				</router-link>
			</div>
		</div>
		<div class="newMc2">
			<div class="newlist2">
				<p class="titTex">主题</p>
				<router-link to="/playTwo">
					<ul>
						<li v-for="v in list4">
							<p class="hotBox2">{{v.txt}}</p>
						</li>
					</ul>
				</router-link>
			</div>
		</div>
		<div class="newMc2">
			<div class="newlist2">
				<p class="titTex">语言</p>
				<router-link to="/playTwo">
					<ul>
						<li v-for="v in list5">
							<p class="hotBox2">{{v.txt}}</p>
						</li>
					</ul>
				</router-link>
			</div>
		</div>
		<div class="newMc2">
			<div class="newlist2">
				<p class="titTex">特色</p>
				<router-link to="/playTwo">
					<ul>
						<li v-for="v in list6">
							<p class="hotBox2">{{v.txt}}</p>
						</li>
					</ul>
				</router-link>
			</div>
		</div>
		<div class="newMc2">
			<div class="newlist2">
				<p class="titTex">曲风流派</p>
				<router-link to="/playTwo">
					<ul>
						<li v-for="v in list7">
							<p class="hotBox2">{{v.txt}}</p>
						</li>
					</ul>
				</router-link>
			</div>
		</div>
		<div class="newMc2">
			<div class="newlist2">
				<p class="titTex">盗墓笔记之3云顶天宫</p>
			</div>
		</div>
		<div class="newMc2">
			<div class="newlist2">
				<p class="titTex">盗墓笔记之1七星鲁王宫</p>
			</div>
		</div>
		<div class="newMc2">
			<div class="newlist2">
				<p class="titTex">刘兰芳更多</p>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				list:[
					{
						id:1,
						"txt":"热门",
					},
					{
						id:2,
						"txt":"最新",
					},
					{
						id:3,
						"txt":"网络",
					},
					{
						id:4,
						"txt":"铃声",
					},
					{
						id:5,
						"txt":"经典",
					},
					{
						id:6,
						"txt":"影视",
					},
					{
						id:7,
						"txt":"动漫",
					},
					{
						id:8,
						"txt":"中国风",
					},
					{
						id:9,
						"txt":"轻音乐",
					},
					{
						id:10,
						"txt":"小清新",
					},
					{
						id:11,
						"txt":"90后",
					},
					{
						id:12,
						"txt":"80后",
					},
					{
						id:13,
						"txt":"70后",
					},
					{
						id:14,
						"txt":"儿歌",
					},
					{
						id:15,
						"txt":"胎教",
					},
					{
						id:16,
						"txt":"DJ",
					},
				],
				list2:[
					{
						id:1,
						"txt":"伤感",
					},
					{
						id:2,
						"txt":"温暖",
					},
					{
						id:3,
						"txt":"郁闷",
					},
					{
						id:4,
						"txt":"思念",
					},
					{
						id:5,
						"txt":"开心",
					},
					{
						id:6,
						"txt":"治愈",
					},
					{
						id:7,
						"txt":"疲惫",
					},
					{
						id:8,
						"txt":"寂寞",
					},
					{
						id:9,
						"txt":"安静",
					},
					{
						id:10,
						"txt":"怀旧",
					},
					{
						id:11,
						"txt":"甜蜜",
					},
					{
						id:12,
						"txt":"兴奋",
					},
					{
						id:13,
						"txt":"励志",
					}
				],
				list3:[
					{
						id:1,
						"txt":"运动",
					},
					{
						id:2,
						"txt":"夜店",
					},
					{
						id:3,
						"txt":"咖啡厅",
					},
					{
						id:4,
						"txt":"聚会",
					},
					{
						id:5,
						"txt":"开车",
					},
					{
						id:6,
						"txt":"工作",
					},
					{
						id:7,
						"txt":"旅行",
					},
					{
						id:8,
						"txt":"亲热",
					},
					{
						id:9,
						"txt":"清晨",
					},
					{
						id:10,
						"txt":"睡前",
					}
				],
				list4:[
					{
						id:1,
						"txt":"金曲捞",
					},
					{
						id:2,
						"txt":"围炉音乐会",
					},
					{
						id:3,
						"txt":"歌手2017",
					},
					{
						id:4,
						"txt":"厉害了，我的歌！",
					},
					{
						id:5,
						"txt":"影视",
					},
					{
						id:6,
						"txt":"DJ舞曲",
					},
					{
						id:7,
						"txt":"情歌",
					},
					{
						id:8,
						"txt":"劲爆",
					},
					{
						id:9,
						"txt":"梦想的声音",
					},
					{
						id:10,
						"txt":"中国新歌声",
					},
					{
						id:11,
						"txt":"我是歌手",
					},
					{
						id:12,
						"txt":"燃烧吧少年",
					},
					{
						id:13,
						"txt":"校园",
					},
					{
						id:14,
						"txt":"对唱",
					},
					{
						id:15,
						"txt":"卡拉OK",
					},
					{
						id:16,
						"txt":"军旅",
					},
					{
						id:15,
						"txt":"广场舞",
					},
					{
						id:16,
						"txt":"佛教",
					},
					{
						id:17,
						"txt":"蒙面歌王",
					},
					{
						id:18,
						"txt":"广告歌曲",
					}
				],
				list5:[
					{
						id:1,
						"txt":"华语",
					},
					{
						id:2,
						"txt":"欧美",
					},
					{
						id:3,
						"txt":"韩国",
					},
					{
						id:4,
						"txt":"日本",
					},
					{
						id:5,
						"txt":"粤语",
					},
					{
						id:6,
						"txt":"闽南语",
					},
					{
						id:7,
						"txt":"小语种",
					}
				],
				list6:[
					{
						id:1,
						"txt":"戏剧",
					},
					{
						id:2,
						"txt":"民歌",
					},
					{
						id:3,
						"txt":"民乐",
					},
					{
						id:4,
						"txt":"器乐",
					},
					{
						id:5,
						"txt":"人群",
					}
				],
				list7:[
					{
						id:1,
						"txt":"R&B",
					},
					{
						id:2,
						"txt":"流行",
					},
					{
						id:3,
						"txt":"摇滚",
					},
					{
						id:4,
						"txt":"嘻哈",
					},
					{
						id:5,
						"txt":"爵士",
					},
					{
						id:6,
						"txt":"R&电子",
					},
					{
						id:7,
						"txt":"乡村",
					},
					{
						id:8,
						"txt":"民谣",
					},
					{
						id:9,
						"txt":"古典",
					},
					{
						id:10,
						"txt":"世界",
					}
				]
			}
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
.newMc2 {
    width: 94%;
    padding: 0 3%;
    overflow: hidden;
}
.newList2 {
    width: 100%;
    overflow: hidden;
}
.fhgh{
	display:block;
	width:100%;
	margin: 0 auto;
	height:30px;
}
.titTex {
    height: 1.56rem;
    padding: 0 3%;
    font: 1rem/ 1.56rem "微软雅黑";
    color: #46b4e6;
}
.hotBox2 {
    width: 26%;
    overflow: hidden;
    float: left;
    border: 1px solid #d0e3ee;
    height: 1.68rem;
    background: #fff;
    font: 1rem/ 1.68rem "微软雅黑";
    color: #333;
    text-align: center;
    margin:0 3% 10px 3%;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>