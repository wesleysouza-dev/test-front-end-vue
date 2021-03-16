<template>
    <b-container>
        <b-card no-body>
            <b-tabs card align="center">
                <b-tab title="Países da América" active>
                    <b-card-text>
                        <CountriesAmerica/>
                    </b-card-text>
                </b-tab>
                <b-tab title="Buscar país">
                    <b-card-text>
                        <SearchName/>
                        
                    </b-card-text>
                </b-tab>
                <b-tab title="Gráfico">
                    <b-card-text>
                        <Bars/>
                    </b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>

        


       
    </b-container>
</template>

<script>

import SearchName from '@/components/SearchName';
import CountriesAmerica from '@/components/CountriesAmerica';
import Bars from '@/components/Bars';


export default {
  name: 'CountriesInfo',
  props: {
    title: String,
    msg: String,
  },
  components: {
     SearchName,
     CountriesAmerica,
     Bars
  },
    data() {
        return {
            searchList: [],
            form: {
                name: ''
            },
        }
    },
    methods: {
       
    },
    mounted() {
       
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h6{
        font-size: 24px;
    }
    .text-bold{
        font-weight: bold;
    }


    .form-group--error input, .form-group--error textarea, .form-group--error input:focus, .form-group--error input:hover{
        border-color: #f79483;
    }
</style>
