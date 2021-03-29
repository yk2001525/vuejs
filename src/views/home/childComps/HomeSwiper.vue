<template>
  <swiper>
      <swiper-item v-for="item in banners">
        <a :herf="item.link">
          <img :src="item.image" alt="" @load="imageLoad"> 
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
    name:"HomeSwiper",
    props:{
        banners:{
            type:Array,
            default(){
                return[]
            }
        },
    },
    data(){
      return{
        isLoad:false  //记录轮播图是否加载完成，如果加载完成则不再发射swiperImageLoad事件
      }
    },
    components:{
        Swiper,
        SwiperItem
    },
    methods:{
      imageLoad(){
        if(!this.isLoad)
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }

}
</script>

<style>

</style>