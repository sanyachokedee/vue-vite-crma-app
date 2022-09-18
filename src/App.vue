<template lang="">
<router-view></router-view>
</template>
<script>

let brand = " | VUE CRM APP "
export default {
    watch: {
        $route(to) {
            // ตรวจสอบค่า to
            // console.log(' route to : '+ JSON.stringify(to))
        document.title = to.meta.title + brand
    }
  }
}
</script>
<style>
  
</style>