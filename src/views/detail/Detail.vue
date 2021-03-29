<template>
  <div id="detail">
      <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>
    import DetailNavBar from './childComps/DetailNavBar'

    export default {
    name:"Detail",
    components:{
        DetailNavBar
    },
    data(){
        return {
            iid:null
        }
    },
    created(){
        //1.
        this.iid = this.$route.params.iid
    }   
}
</script>

<style>

</style>