<template>
    <select @change="onChange" v-model="selected" class="mt-10 block w-full md:w-64 border p-3 rounded">
        <option value="0">Select Country</option>
        <option v-for="(country, index) in countries" :key="index" :value="country.ID">{{ country.Country }}</option>
    </select>
</template>

<script>
import { ref } from 'vue'

export default {
    name: "CountryDropdown",
    props: {
        countries: {
            type: Array
        }
    },

    setup({countries}, {emit}) {
        const selected = ref(0)

        function onChange() {
            const country = countries.find((item) => item.ID === selected.value)

            emit('get-country', country)
        }

        return {
            selected,
            onChange
        }
    },

    // data() {
    //     return {
    //         selected: 0
    //     }
    // },

    // methods: {
    //     onChange() {
    //         const country = this.countries.find((item) => item.ID === this.selected)
    //
    //         this.$emit('get-country', country)
    //     }
    // }
}
</script>