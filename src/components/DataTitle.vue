<template>
    <div class="text-center">
        <h2 class="text-3xl font-semibold">{{ text }}</h2>
        <div class="text-2xl mt-4 mb-10">
            {{ timestamp }}
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import {computed} from "vue";

export default {
    name: "DataTitle",
    props: {
        text: {
            type: String
        },
        dataDate: {
            type: String
        }
    },

    setup({dataDate}) {
        const timestamp = computed(() =>
            moment(dataDate).format("MMMM Do YYYY, h:mm:ss a")
        )

        return {
            timestamp,
        }
    },

    // computed: {
    //     timestamp() {
    //         return moment(this.dataDate).format("MMMM Do YYYY, h:mm:ss a")
    //     }
    // }
}
</script>

<style scoped>

</style>