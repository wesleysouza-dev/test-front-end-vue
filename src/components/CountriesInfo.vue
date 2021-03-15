<template>
    <b-container>
        <b-card no-body>
            <b-tabs card align="center">
                <b-tab title="Países da América" active>
                    <b-card-text>
                        <b-table striped hover :items="items" :fields="fields"></b-table>
                    </b-card-text>
                </b-tab>
                <b-tab title="Buscar país">
                    <b-card-text>Tab contents 2</b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>
    </b-container>
</template>

<script>

const endpoint_region = 'https://restcountries.eu/rest/v2/region/Americas';

export default {
  name: 'CountriesInfo',
  props: {
    title: String,
    msg: String,
  },
  components: {
     
  },
    data() {
        return {
            fields: [
                { key: 'name', label: 'Nome' },
                { key: 'capital', label: 'Capital' },
            ],
            
            items: [
                
            ]
        }
    },
    methods: {
        apiRegion() {
            fetch(endpoint_region)
                .then(async response => {
                    
                    const data = await response.json();

                    if (!response.ok || data['erro']) {
                        const error = (data && data.message) || response.statusText;
                        return Promise.reject(error);
                    }

                    if (data.length > 0) {
                        console.log(data);
                        this.items = data;
                    }
                })
                .catch(error => {
                        this.errorMessage = error;
                        console.error("Erro ao recuperar dados da requisião por Região", error);
                });
        }
    },
    mounted() {
        //popula paises da America e suas capitais
        this.apiRegion();
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
