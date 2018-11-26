import vueRouter from 'vue-router'
import Recommend from '../../components/index/Recommend.vue'
import seach from '../../components/index/seach.vue'
import Rankings from '../../components/index/Rankings.vue'
import playOne from '../../components/Recommend/playOne.vue'
import playTwo from '../../components/Recommend/playTwo.vue'
import classification from '../../components/index/classification.vue'
import MV from '../../components/index/MV.vue'
import singer from '../../components/index/singer.vue'
import singers from '../../components/Recommend/singers.vue'
export default new vueRouter({
	routes:[
		
		{
			path:'/Recommend',component:Recommend,
		},
		{
			path:'/seach',component:seach,
		},
		{
			path:'/Rankings',component:Rankings,
		},
		{
			path:'/playOne',component:playOne,
		},
		{
			path:'/playTwo',component:playTwo,
		},
		{
			path:'/classification',component:classification,
		},
		{
			path:'/MV',component:MV,
		},
		{
			path:'/singer',component:singer,
		},
		{
			path:'/singers',component:singers,
		},
		{
			path:'/*',redirect:'/Recommend'
		}
	]
})