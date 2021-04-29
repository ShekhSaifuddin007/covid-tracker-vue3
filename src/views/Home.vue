<template>
    <div v-if="! loading">
        <DataTitle :text="title" :data-date="dataDate"/>

        <DataBoxes :stats="stats"/>

        <CountryDropdown @get-country="getCountry" :countries="countries"/>

        <button
            v-if="stats.Country"
            class="bg-green-700 text-white rounded p-3 mt-10 focus:outline-none hover:bg-green-600"
            @click="clearCountryData"
        >
            Clear Country
        </button>
    </div>
    <div v-else class="flex flex-col items-center justify-center text-center">
        <div class="text-gray-500 text-3xl mt-10 mb-6">
            Fetching Data
        </div>
        <img :src="loadingImg" alt="" class="w-24 m-auto">
    </div>
</template>

<script>
import DataTitle from "@/components/DataTitle";
import DataBoxes from "../components/DataBoxes";
import CountryDropdown from "../components/CountryDropdown";

export default {
    name: 'Home',
    components: {
        CountryDropdown,
        DataBoxes,
        DataTitle
    },

    data() {
        return {
            loading: true,
            title: 'Global',
            dataDate: '',
            stats: {},
            countries: [],
            loadingImg: require('../assets/hourglass.gif')
        }
    },

    mounted() {
        this.fetchCovidData()
    },

    methods: {
        fetchCovidData() {
            axios.get('https://api.covid19api.com/summary')
                .then(({data}) => {
                    // console.log(data)
                    this.dataDate = data.Date
                    this.stats = data.Global
                    this.countries = data.Countries
                    this.loading = false
                })
        },
        getCountry(country) {
            this.stats = country
            this.title = country.Country
        },

        async clearCountryData() {
            this.loading = true
            await this.fetchCovidData()
            this.title = 'Global'
            this.loading = false
        }
    }
}
</script>
