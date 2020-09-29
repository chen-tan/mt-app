<template>
    <div class="top-geo">
        <i class="el-icon-location-outline icon-location" />
        <span>{{ curGeo.city }}</span>
        <router-link to="/switchCity" class="switchCity">切换城市</router-link>
        [
            <router-link 
             v-for="neigbor in curGeo.neigbors"
             :key="neigbor"
             class="neigbor"
             to="/"
            >{{ neigbor }}</router-link>
        ]
    </div>
</template>
<script>
export default {
    data(){
        return {
            curGeo:{
                city:'上海',
                neigbors:['彰化','宜兰','太仓']
            }
        }
    }
}
</script>

<style lang="scss">
</style>