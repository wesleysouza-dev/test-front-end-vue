<template>
  <b-container>
    <h6 class="text-black text-bold">{{ title }}</h6>
    <p>
      {{ msg }}
    </p>

    <div>
        <b-form 
        @reset="resetForm" 
        v-if="show" 
        novalidate 
        @submit.stop.prevent="onSubmit"
        id="formulario-cliente"
        class="text-left mb-5 pb-5">
       
           
            <b-row>
                <b-col cols="12">

                    <b-form-group id="example-input-group-1" label="Nome Completo" label-for="example-input-1">
                        <b-form-input
                        id="name"
                        name="name"
                        v-on:keyup='validateFullname()'
                        v-model="form.name"
                        :class="validations.name"
                        ></b-form-input>

                        <b-form-invalid-feedback
                        id="input-name-live-feedback"
                        >Digite um nome e sobrenome válido</b-form-invalid-feedback>
                    </b-form-group>
                </b-col>

                <b-col cols="12" lg="3">
                    <b-form-group
                        id="input-group-1"
                        label="Data Nascimento:"
                        label-for="input-birthdate"
                        description="*Apenas número"
                    >
                        <b-form-input
                        id="input-birthdate"
                        type="text"
                        placeholder=""
                        v-model="form.birthdate"
                        v-on:keyup="validateBirthDate()"
                        :class="validations.birthdate"
                        v-mask="'##/##/####'"
                        ></b-form-input>

                        <b-form-invalid-feedback v-if='ageAccept'
                            id="input-name-live-feedback"
                        >Selecione uma data válida - Ex: 10/03/1992
                        </b-form-invalid-feedback>

                         <b-form-invalid-feedback v-if='!ageAccept'
                            id="input-name-live-feedback"
                        >Sua idade tem que estar entre 18 e 65 anos
                        </b-form-invalid-feedback>
                    </b-form-group>
                    
                </b-col> 

                <b-col cols="12" lg="3">
                    <b-form-group
                        id="input-group-1"
                        label="CPF:"
                        label-for="input-1"
                        description="*Apenas número"
                    >
                        <b-form-input
                        id="input-cpf"
                        v-model="form.cpf"
                        type="text"
                        placeholder=""
                        v-on:keyup="validateCpf()"
                        v-mask="'###.###.###-##'"
                        :class="validations.cpf"
                        required
                        ></b-form-input>
                        
                        <b-form-invalid-feedback
                            id="input-cpf-live-feedback"
                        >Insira um cpf válido
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>

                <b-col cols="12" lg="3">
                    <b-form-group id="input-group-species" label="Espécie do Pet:" label-for="input-3">
                        <b-form-select
                        id="input-species"
                        v-model="form.species"
                        :options="species"
                        v-on:change="speciesSelected()"
                        :class="validations.species"
                        required
                        ></b-form-select>

                        <b-form-invalid-feedback
                            id="input-breed-live-feedback"
                        >Selecione uma opção
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>

                <b-col cols="12" lg="3">
                    <b-form-group id="input-group-3" label="Raça do Pet:" label-for="input-breed">
                        <b-form-select
                        id="input-breed"
                        v-model="form.breed"
                        :disabled='disabledBreed'
                        @change="breedSelected()"
                        :class="validations.breed"
                        required
                        >

                        <option 
                            v-for="(item,key) in breedAwait" 
                            :value="item.value" 
                            :key="key"
                        >
                            {{item.text}}
                        </option>
                       
                        </b-form-select>
                        
                         <b-form-invalid-feedback
                            id="input-breed-live-feedback"
                        >Selecione uma opção
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>


                <b-col cols="12" lg="12" v-if="form.species !== null && form.breed === 'Outro'">
                    <b-form-group
                        id="input-otherbreed"
                        label="Qual é a raça do seu pet?"
                        label-for="input-otherBreed"
                        description=""
                    >
                        <b-form-input
                        id="input-otherBreed"
                        type="text"
                        v-model="form.otherBreed"
                        placeholder=""
                        :class="validations.otherBreed"
                        v-on:keyup="validateOtherBreed()"
                        required
                        ></b-form-input>

                        <b-form-invalid-feedback
                            id="input-otherBreed-live-feedback"
                        >Informe a raça do seu pet
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>


                <b-col cols="12" lg="3">
                    <b-form-group
                        id="input-income"
                        label="Renda Mensal:"
                        label-for="input-income"
                        description="*Apenas número"
                    >
                        <b-form-input 
                        id="input-income"
                        v-on:keyup='validateIncome()'
                        v-model="form.income"
                        v-money="money"
                        type="text"
                        placeholder=""
                        :class="validations.income"
                        required
                        ></b-form-input >

                        <b-form-invalid-feedback
                            id="input-income-live-feedback"
                        >Informe um valor acima de R$999,99
                        </b-form-invalid-feedback>
                    </b-form-group>

                </b-col>


                <b-col cols="12" lg="3">
                    <b-form-group
                        id="input-zipcode"
                        label="CEP:"
                        label-for="input-zipcode"
                        description="*Apenas número"
                    >
                        <b-form-input
                        id="input-zipcode"
                        v-on:blur='validateZipCode()'
                        v-model="form.addressFields.zipcode"
                        type="text"
                        placeholder=""
                        v-mask="'#####-###'"
                        :class="validations.zipcode"
                        required
                        ></b-form-input>

                        <b-form-invalid-feedback
                            id="input-zipcode-live-feedback"
                        >Informe um CEP válido
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>

                <b-col cols="12" lg="6">
                    <b-form-group
                        id="input-address"
                        label="Endereço:"
                        label-for="input-address"
                        description=""
                    >
                        <b-form-input
                        id="input-address"
                        v-model="form.addressFields.address"
                        type="text"
                        placeholder="Aguardando CEP"
                        :class="validations.address"
                        required
                        disabled
                        ></b-form-input>

                         <!-- <b-form-invalid-feedback
                            id="input-address-live-feedback"
                        >Informe um endereço válido
                        </b-form-invalid-feedback> -->
                    </b-form-group>
                </b-col>

                <b-col cols="12" lg="3">
                    <b-form-group
                        id="input-number"
                        label="Número:"
                        label-for="input-number"
                        description=""
                    >
                        <b-form-input
                        id="input-number"
                        v-on:keyup='validateNumber()'
                        v-model="form.addressFields.number"
                        type="number"
                        placeholder=""
                        :class="validations.number"
                        required
                        ></b-form-input>

                        <b-form-invalid-feedback
                            id="input-number-live-feedback"
                        >Informe o nº da residência
                        </b-form-invalid-feedback>
                    </b-form-group>
                </b-col>


                 <b-col cols="12" lg="3">
                    <b-form-group
                        id="input-neighborhood"
                        label="Bairro:"
                        label-for="input-neighborhood"
                        description=""
                    >
                        <b-form-input
                        id="input-neighborhood"
                        v-model="form.addressFields.neighborhood"
                        type="text"
                        placeholder="Aguardando CEP"
                        :class="validations.neighborhood"
                        required
                        disabled
                        ></b-form-input>
                    </b-form-group>
                </b-col>


                <b-col cols="12" lg="3">
                    <b-form-group
                        id="input-city"
                        label="Cidade:"
                        label-for="input-city"
                        description=""
                    >
                        <b-form-input
                        id="input-city"
                        v-model="form.addressFields.city"
                        type="text"
                        placeholder="Aguardando CEP"
                        :class="validations.city"
                        required
                        disabled
                        ></b-form-input>
                    </b-form-group>
                </b-col>


                <b-col cols="12" lg="3">
                    <b-form-group
                        id="input-state"
                        label="Estado:"
                        label-for="input-state"
                        description=""
                    >
                        <b-form-input
                        id="input-state"
                        v-model="form.addressFields.state"
                        type="text"
                        placeholder="Aguardando CEP"
                        :class="validations.state"
                        required
                        disabled
                        ></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            
            
            <b-button type="submit" variant="primary">Cadastrar</b-button>
            <b-button type="reset" variant="danger" class="ml-2">Limpar campos</b-button>
            </b-form>


            <!-- debug -->
            <!-- <b-card class="mt-3" header="Form Data Result">
                <pre class="m-0">{{ form }}</pre>
                <pre class="m-0">validations: {{ validations }}</pre>
            </b-card> -->
    </div>
  </b-container>
</template>

<script>

import {VMoney} from 'v-money'

const isValid = 'is-valid';
const inValid = 'is-invalid';
const textSelectAwait = [{ text: 'Aguardando espécie...', value: null }];
const breedDefault = [{ text: 'Outro', value:"Outro" }];

export default {
  name: 'AddUser',
  props: {
    title: String,
    msg: String,
  },
  components: {
     
  },
    data() {
        return {
            ageAccept: true,
            disabledBreed: true,
            selectedBreed: null,
            errors: [],

            price: 0,
            money: {
                decimal: ',',
                thousands: '.',
                prefix: 'R$ ',
                suffix: '',
                precision: 2,
                masked: false /* doesn't work with directive */
            },
            
            validations: {
                name: null,
                birthdate: null,
                cpf: null,
                species: null,
                breed: null,
                otherBreed: null,
                income: null,
                zipcode: null,
                address: null,
                number: null,
                neighborhood: null,
                city: null,
                state: null,
            },
            
            form: {
                name: null,
                birthdate: null,
                cpf: null,
                species: null,
                breed: textSelectAwait[0].value,
                otherBreed: null,
                income: 0,
                addressFields: {
                    zipcode: null,
                    address: null,
                    number: null,
                    neighborhood: null,
                    city: null,
                    state: null,
                },
            },
            species: [{ text: 'Selecione uma opção', value: null }, 'Cão', 'Gato'],
            breedAwait: textSelectAwait,
            breedCat: [
                { text: 'Angorá', value: 'Angorá', },
                { text: 'Exótico', value: 'Exótico'},
                { text: 'Gato de Bengala', value: 'Gato de Bengala' },
                { text: 'Persa',value: 'Persa' },
                { text: 'Siamêz', value: 'Siamêz' },
                breedDefault[0]
            ],
            breedDog: [
                { text: 'Buldogue', value: 'Buldogue' },
                { text: 'Dobermamm', value: 'Dobermamm' },
                { text: 'Dogue Alemão', value: 'Dogue Alemão' },
                { text: 'Labrador', value: 'Labrador' },
                { text: 'Pastor Alemão', value: 'Pastor Alemão' },
                breedDefault[0]],
            show: true,
            show_alerts: false,
        }
    },

    directives: {money: VMoney},
   
    methods: {

        /* nome e sobrenome */
        validateFullname() {
            if (this.form.name === null) { return; }
            
            if (this.form.name.length > 0) { 
                let fullName = this.form.name;
                let splitName = fullName.split(' ');
                return (splitName.length >= 2 && splitName[1].length >= 2) ? this.validations.name = isValid : this.validations.name = inValid;
            }
            return this.validations.name = false;
        },
        
        /* calcula idade */
        validateBirthDate() {
            if (this.form.birthdate === null) { return; }
            if (this.form.birthdate.length >= 10) {

                let formatValidate = this.formatValidate(this.form.birthdate);
                this.form.birthdate = formatValidate;
                let ageEnd = this.CalculateAge(formatValidate);
                
               if (ageEnd >= 18 && ageEnd <= 65) {
                   this.validations.birthdate = isValid;
               } else {
                   this.ageAccept = false; 
                   this.validations.birthdate = inValid;
               }
             return  ;
            }

            this.ageAccept = true; 
            this.validations.birthdate = inValid;
           
        },

        CalculateAge(dateBirth){ 
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            let yearBirthParts = dateBirth.split('/');
            let dayBirth =yearBirthParts[0];
            let monthBirth =yearBirthParts[1];
            let yearBirth =yearBirthParts[2];
            let age = currentYear - yearBirth;
            const currentMonth = currentDate.getMonth() + 1; 
            if(currentMonth < monthBirth){
                age--; 
            } else {
                if(currentMonth == monthBirth){ 
                    if(new Date().getDate() < dayBirth ){ 
                        age--; 
                    }
                }
            } 
            return age; 
        },

        formatValidate(date) {
            let dateParts = date.split('/');
            let {day,month} = '';

           
            if (Array.isArray(dateParts)) {
                (dateParts[0] !== undefined && dateParts[0] <= 31) ? day = dateParts[0] : day = 31;
                (dateParts[1] !== undefined && (dateParts[1] <= 12 && dateParts[1] >= 1)) ? month = dateParts[1] : month = 12;
            }

            return day+'/'+month+'/'+dateParts[2] ?? '2020';
        },
        /* fim calcula idade */


        /* cpf */
        validateCpf () {
            if (this.form.cpf !== null ) {

                this.validations.cpf = inValid;

                if ( this.form.cpf.length >= 14) {

                    let cpf = this.form.cpf.replace(/[^0-9]/g, '').toString();

                    if( cpf.length == 11 ) {
                        let v = [];
            
                        //Calcula o primeiro dÃ­gito de verificaÃ§Ã£o.
                        v[0] = 1 * cpf[0] + 2 * cpf[1] + 3 * cpf[2];
                        v[0] += 4 * cpf[3] + 5 * cpf[4] + 6 * cpf[5];
                        v[0] += 7 * cpf[6] + 8 * cpf[7] + 9 * cpf[8];
                        v[0] = v[0] % 11;
                        v[0] = v[0] % 10;
            
                        //Calcula o segundo dÃ­gito de verificaÃ§Ã£o.
                        v[1] = 1 * cpf[1] + 2 * cpf[2] + 3 * cpf[3];
                        v[1] += 4 * cpf[4] + 5 * cpf[5] + 6 * cpf[6];
                        v[1] += 7 * cpf[7] + 8 * cpf[8] + 9 * v[0];
                        v[1] = v[1] % 11;
                        v[1] = v[1] % 10;
            
                        //Retorna Verdadeiro se os dÃ­gitos de verificaÃ§Ã£o sÃ£o os esperados.
                        if ( (v[0] != cpf[9]) || (v[1] != cpf[10]) ) {
                            return this.validations.cpf = inValid;
                        }
                    } else {
                        return  this.validations.cpf = inValid;
                    }

                    return this.validations.cpf = isValid;
                }
            }

        },
        /* fim cpf */


        /* espécie */
        speciesSelected () {
            let species = this.form.species;
            textSelectAwait[0].value = null;

            this.validations.species = (species === null) ? inValid : isValid;
            this.validations.otherBreed = false;

            if (species !== null ) {
                this.disabledBreed = false;
               
                this.breedAwait = textSelectAwait;

                if (species === 'Cão') {
                    this.breedAwait = this.breedDog;
                } else {
                    this.breedAwait = this.breedCat;
                }

                this.form.breed = this.breedAwait[0].text;
                this.validations.breed = isValid;

            } else {
                textSelectAwait[0].value = textSelectAwait[0].text;
                this.disabledBreed = true;
                this.breedAwait = textSelectAwait;
                this.validations.breed = inValid;
                this.form.breed = textSelectAwait[0].text;
            }
        },
        /* fim espécie */


        /* raça */
        breedSelected () {
           let breedSpecie = this.form.breed;

           if (breedSpecie === null) { 
               this.validations.breed = inValid; 
            } else if (breedSpecie === 'Outro') {
                this.validations.otherBreed = true; 
            } else{
                this.validations.otherBreed = false;
            }
        },

        validateOtherBreed() {
           this.validations.otherBreed = (this.form.otherBreed !== null && this.form.otherBreed.length > 0) ? isValid : inValid;
        },
        /* fim raça */

        /* valida renda */
        validateIncome() {
            let valueNumber = this.form.income.replace(/\D/gim, '');
            this.validations.income = (valueNumber < 100000) ? inValid :  isValid;
        },

        /* valida zipCode */
        async validateZipCode() {
            
            if (this.form.addressFields.zipcode === null) { return; }

            let zipcode = this.form.addressFields.zipcode.replace(/\D/gim, '');

            if (zipcode.length === 8) {

                fetch('https://viacep.com.br/ws/'+ zipcode +'/json')
                .then(async response => {
                    
                    const data = await response.json();

                    if (!response.ok || data['erro']) {
                        const error = (data && data.message) || response.statusText;
                        this.validations.zipcode = inValid;
                        return Promise.reject(error);
                    }
                    
                    this.validations.zipcode = isValid;

                    //preencher os campos de forma manual 
                    this.form.addressFields.address = data.logradouro;
                    this.form.addressFields.neighborhood = data.bairro;
                    this.form.addressFields.city = data.localidade;
                    this.form.addressFields.state = data.uf;

                    //campos ok isValid
                    this.validations.address = this.validations.neighborhood = this.validations.city = this.validations.state = isValid; 

                })
                .catch(error => {
                        this.errorMessage = error;
                        this.validations.address = this.validations.neighborhood = this.validations.city = this.validations.state = null; 
                        console.error("CEP Inválido ou API indisponível", error);
                });
                
                return;
            }

            this.form.addressFields.address = this.form.addressFields.neighborhood = this.form.addressFields.city = this.form.addressFields.state = null;
            this.validations.zipcode = this.validations.address = this.validations.neighborhood = this.validations.city = this.validations.state = null; 
            
        },

        /* valida numero */
        validateNumber() {
            let value = this.form.addressFields.number;
            (!isNaN(parseFloat(value)) && isFinite(value)) ? this.validations.number = isValid : this.validations.number = inValid;
        },
        
        onSubmit() {
           
            this.errors = [];

            for (var k in this.validations) {
                if (this.validations[k] !== 'is-valid') {
                    this.validations[k] = 'is-invalid';
                    this.errors.push(k);
                }
            }

           (this.errors.length > 0) ? '' : console.log((this.form));
            
        },
      resetForm(event) {
        event.preventDefault();

        this.breedAwait = textSelectAwait;
        this.disabledBreed = true;

        this.form.email = this.form.name = this.form.birthdate = this.form.cpf = this.form.species = this.form.icome = this.form.addressFields.zipcode = this.form.addressFields.address = 
        this.form.addressFields.number = this.form.addressFields.neighborhood = this.form.addressFields.city = this.form.addressFields.state = null;

        for (var k in this.validations) {
            this.validations[k] = null;
            this.errors.push(k);
        }

        this.$nextTick(() => {

        });
      }
    }
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
