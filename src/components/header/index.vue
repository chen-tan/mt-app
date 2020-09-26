<template>
    <div class="default-header">
        <top-bar />
        <search-bar />
    </div>
</template>
<script>
import topBar from '@/components/header/topBar.vue';
import searchBar from '@/components/header/searchBar';
export default {
    components:{
        topBar,
        searchBar
    }
}
</script>