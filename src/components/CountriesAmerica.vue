<template>
    <div>
        <b-table striped hover :items="items" :fields="fields">
            <template #cell(name)="data">
                <a href="javascript:void(3);" v-b-modal.modal-xl.modal-0 @click="sendInfo(data.item.name,data.item.latlng)">{{ data.item.name }}</a>
            </template>
        </b-table>

         <b-modal id="modal-0" size="xl" centered :title="'Google Maps - '+ country_name" ok-only>
              <ModalGoogleMaps :lati="location.lat" :lngt="location.lng"/>
        </b-modal>
    </div>
</template>

<script>
import ModalGoogleMaps from '@/components/ModalGoogleMaps';

const endpoint_region = 'https://restcountries.eu/rest/v2/region/Americas';

export default {
  name: 'CountriesAmerica',
  props: {
    
  },
  components: {
     ModalGoogleMaps
  },
    data() {
        return {
            fields: [
                { key: 'name', label: 'Nome' },
                { key: 'capital', label: 'Capital' },
            ],
            items: [],
            location: {
                lat: '-34',
                lng: '-64'
            },
            notFound: false,
            loading: false,
            country_name: ''
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

         sendInfo(item,latlng) {
            this.country_name = item;
            this.location.lat = latlng[0];
            this.location.lng = latlng[1];
        },
    },
    mounted() {
        this.apiRegion();
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>