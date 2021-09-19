<template>
<div>
    <router-view></router-view>
</div>
</template>

<script>
import Homes from './components/Homes.vue'

	export default {
		name:'App',
        components:{
            Homes
        },
	}
</script>
<style>


</style>