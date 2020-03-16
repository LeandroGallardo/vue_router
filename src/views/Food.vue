<template>
<div>
    
    <div>hola desde food</div>
    <button @click="gotoHome"> ir a home </button>

</div>
</template>
<script>
export default {
    nane:'FoodView',
    beforeRouteEnter(to,from,next){
        console.log('beforeRouteEnter');
        console.log(to,from);
        next()
    },methods:{
        gotoHome(){
            this.$router.go(-1)
        }
    }
}
</script>
<style>

</style>