<template>
  <div>
      <div class="row">
          <div class="col-12">
               
            <b-form 
                inline
                novalidate 
                @submit.stop.prevent="onSubmit"
                id="formulario-cliente"
                class="text-left mb-5"
            >
               <b-form-select class="mx-auto"
                    id="input-selectedRegional"
                    v-model="selectedRegional"
                    @change="selectedRegionalBlock()"
                    required
                    >

                    <option 
                        v-for="(item,key) in regionalBloc" 
                        :value="item.value" 
                        :key="key"
                    >
                        {{item.text}}
                    </option>
               </b-form-select>
            </b-form>
          </div>

         <div class="col-12 mb-4">
             <h4 v-if="selectedRegional">Resultados para Região "{{selectedRegional}}"</h4>
             <h4 v-else>Aguardando seleção da Região</h4>
         </div>

         <b-spinner label="Loading..." v-if="loading" class="mx-auto"></b-spinner>


        <div class="col-12">
            <apexchart width="1000" type="bar" :options="chartOptions" :series="series" v-if="Object.keys(this.chartOptions.xaxis.categories).length > 0"></apexchart>
            <hr class="my-5">
            <apexchart width="1000" type="bar" :options="chartOptions" :series="series2" v-if="Object.keys(this.chartOptions.xaxis.categories).length > 0"></apexchart>
        </div>
        </div>
   
  </div>
</template>



<script>
const endpoint_search_regionalBloc = 'https://restcountries.eu/rest/v2/regionalbloc/';

export default {
    name: 'Bars',
    props: {
    
    },
    components: {
    },
    data() {
        return {
            regionalBloc: [
                { text: 'Selecione uma região', value: null, },
                { text: 'EU', value: 'EU', },
                { text: 'EFTA', value: 'EFTA', },
                { text: 'CARICOM', value: 'CARICOM', },
                { text: 'PA', value: 'PA', },
                { text: 'AU', value: 'AU', },
                { text: 'USAN', value: 'USAN', },
                { text: 'EEU', value: 'EEU', },
                { text: 'AL', value: 'AL', },
                { text: 'ASEAN', value: 'ASEAN', },
                { text: 'CAIS', value: 'CAIS', },
                { text: 'CEFTA', value: 'CEFTA', },
                { text: 'NAFTA', value: 'NAFTA', },
                { text: 'SAARC', value: 'SAARC', },
            ],

            loading: false,
            selectedRegional : null,

          series: [],
          series2: [],
          chartOptions: {
            chart: {
              type: 'bar',
              height: 430
            },
            plotOptions: {
              bar: {
                horizontal: false,
                dataLabels: {
                  position: 'top',
                },
              }
            },
            dataLabels: {
              enabled: true,
              offsetX: -6,
              style: {
                fontSize: '12px',
                colors: ['#fff']
              }
            },
             legend: {
                position: 'top'
            },
            stroke: {
              show: true,
              width: 1,
              colors: ['#fff']
            },
            tooltip: {
              shared: true,
              intersect: false
            },
            xaxis: {
              categories: [],
            },
          },
        }
    },
    methods: {
        selectedRegionalBlock() {
            this.loading = true;
            this.chartOptions.xaxis.categories = [];
            fetch(endpoint_search_regionalBloc + this.selectedRegional)
                .then(async response => {
                    
                    const data = await response.json();

                    if (!response.ok || data['erro']) {
                        const error = (data && data.message) || response.statusText;
                        return Promise.reject(error);
                    }

                    if (data.length > 0) {
                        this.loading = false;

                        //console.log(data)

                        const countries = [];
                        const dataSerie = [
                            {
                                name:'População',
                                data: [],
                            },
                            {
                                name:'',
                                data: [],
                            }
                        ];
                        const dataSerie2 = [ 
                        {
                            name:'Área',
                            data: [],
                            
                        },
                        {
                                name:'',
                                data: [],
                            }
                        ];

                         data.forEach(function (value, i) {
                            i;
                             let name = value.name;
                             countries.push(name)

                            dataSerie[0].data.push(value.population);
                            dataSerie2[0].data.push(value.area);

                         });

                        this.series = dataSerie;
                        this.series2 = dataSerie2;
                        this.chartOptions.xaxis.categories = countries;
                        
                    }
                })
                .catch(error => {
                    this.errorMessage = error;
                    console.error("Erro ao recuperar dados da busca.", error);
                    this.loading = false;
                });
                
        },

        onSubmit() {

        }
    },
    
    mounted() {
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .apexcharts-legend div:last-child{
        display: none!important;
    }
</style>

<style scoped>

    select{
        font-size: 18px;
        text-align: left;
        min-width: 280px;
    }

    .label{
        font-size: 16px;
    }

    .progress.mb-3{
        margin-bottom: 4px!important;
    }
</style>