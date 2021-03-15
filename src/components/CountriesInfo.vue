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
                    <b-card-text>
                        <b-form inline
                            novalidate 
                            @submit.stop.prevent="onSubmit"
                            id="formulario-cliente"
                            class="text-center mt-3 pb-5 justify-content-center"
                        >
                        <label class="sr-only" for="inline-form-input-username">Nome do País</label>
                        <b-input-group prepend="País" class="mb-2 mr-sm-2 mb-sm-0">
                            <b-form-input 
                                id="inline-form-input-username" placeholder="nome do país..."
                                v-model="form.name"
                                :class="validations.name"
                            >
                        </b-form-input>
                        
                        </b-input-group>

                            <b-button type="submit" variant="primary" :disabled="(form.name == '') ? true : false">Buscar país</b-button>
                            
                        </b-form>

                        
                       <b-alert show variant="warning" dismissible v-if="notFound">
                            Nenhum país com o termo buscado foi encontrado.
                        </b-alert>

                        <b-spinner label="Loading..." v-if="loading"></b-spinner>

                        <b-table responsive  striped hover :items="searchList" :fields="fieldsSearch" v-if="Object.keys(searchList).length > 0">

                            <template #cell(language)="data">
                                <a href="javascript:void(3);" v-b-modal.modal-1 @click="sendInfo(data.item.codeLanguage,data.item.language)">{{ data.item.language }}</a>
                            </template>

                        </b-table>

                    </b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>

        <b-modal id="modal-1" centered :title="'Países por Idioma - '+ language_name" ok-only>
            <b-list-group>
                <b-list-group-item button
                    v-for="(item,key) in listByLanguage" 
                    :key="key"
                >{{item.name}}</b-list-group-item>
            </b-list-group>
        </b-modal>

        <!-- debug -->
            <b-card class="mt-3" header="Form Data Result">
                <pre class="m-0">{{ form }}</pre>
                <!-- <pre class="m-0">{{  items }}</pre> -->
                <pre class="m-0">Busca país: {{ searchList }}</pre>
            </b-card>
    </b-container>
</template>

<script>

const endpoint_region = 'https://restcountries.eu/rest/v2/region/Americas';
const endpoint_search_name = 'https://restcountries.eu/rest/v2/name/';
const endpoint_search_language = 'https://restcountries.eu/rest/v2/lang/';

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
            fieldsSearch: [
                { key: 'name', label: 'Nome do País' },
                { key: 'language', label: 'Idiomas' },
            ],
            items: [],
            searchList: [],
            titleModal: '',
            language_code: '',
            language_name: '',
            listByLanguage: [],
            notFound: false,
            loading: false,
            form: {
                name: ''
            },
            validations: {
                name: null
            }
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
                        this.items = data;
                    }
                })
                .catch(error => {
                        this.errorMessage = error;
                        console.error("Erro ao recuperar dados da requisião por Região", error);
                });
        },

        apiSearch() {

            this.loading = true;

            fetch(endpoint_search_name + this.form.name)
                .then(async response => {
                    
                    const data = await response.json();

                    if (!response.ok || data['erro']) {
                        const error = (data && data.message) || response.statusText;
                        return Promise.reject(error);
                    }

                    if (data.length > 0) {

                        let resp = [];

                        data.forEach(function (value, i) {
                            let item = {
                                key: i,
                                name: value.name,
                                codeLanguage: value.languages[0].iso639_1,
                                language: value.languages[0].name 
                            }
                            resp.push(item);
                        });

                        this.notFound = false;
                        this.searchList = resp;
                        this.loading = false;
                    }
                   

                })
                .catch(error => {
                    this.errorMessage = error;
                    this.searchList = [];
                    console.error("Erro ao recuperar dados da busca.", error);
                    this.notFound = true;
                    this.loading = false;
                });

          
        },

        apiSearchLanguage() {

            this.loading = true;

            fetch(endpoint_search_language + this.language_code)
                .then(async response => {
                    
                    const data = await response.json();

                    if (!response.ok || data['erro']) {
                        const error = (data && data.message) || response.statusText;
                        return Promise.reject(error);
                    }

                    if (data.length > 0) {
                        this.notFound = false;
                        this.listByLanguage = data;
                        this.loading = false;
                    }
                })
                .catch(error => {
                    this.errorMessage = error;
                    this.searchList = [];
                    console.error("Erro ao recuperar dados da busca.", error);
                    this.notFound = true;
                    this.loading = false;
                });

          
        },

        sendInfo(item,name) {
            this.listByLanguage = [];
            this.language_code = item;
            this.language_name = name;
            this.apiSearchLanguage();
        },

        onSubmit() {
            this.searchList = [];
            //popula paises após a busca
            this.apiSearch();
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
