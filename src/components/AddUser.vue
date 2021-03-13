<template>
  <b-container>
    <h6 class="text-black text-bold">{{ title }}</h6>
    <p>
      {{ msg }}
    </p>

    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="text-left">
            <b-row>
                <b-col cols="12">
                    <b-form-group
                        id="input-group-1"
                        label="Nome completo:"
                        label-for="input-1"
                        description=""
                    >
                        <b-form-input
                        id="input-name"
                        v-model="form.name"
                        type="text"
                        placeholder=""
                        required
                        ></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col cols="12" lg="3">
                    <b-form-group
                        id="input-group-1"
                        label="Idade:"
                        label-for="input-age"
                        description=""
                    >
                        <b-form-input
                        id="input-1"
                        v-model="form.age"
                        type="number"
                        placeholder=""
                        required
                        ></b-form-input>
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
                        type="number"
                        placeholder=""
                        required
                        ></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col cols="12" lg="3">
                    <b-form-group id="input-group-3" label="Espécie do Pet:" label-for="input-3">
                        <b-form-select
                        id="input-species"
                        v-model="form.species"
                        :options="species"
                        required
                        ></b-form-select>
                    </b-form-group>
                </b-col>

                <b-col cols="12" lg="3">
                    <b-form-group id="input-group-3" label="Raça do Pet:" label-for="input-3">
                        <b-form-select
                        id="input-breed"
                        v-model="form.breed"
                        :options="breed"
                        :disabled="true"
                        required
                        ></b-form-select>
                    </b-form-group>
                </b-col>


                <b-col cols="12" lg="3">
                    <b-form-group
                        id="input-income"
                        label="Renda Mensal:"
                        label-for="input-income"
                        description=""
                    >
                        <b-form-input
                        id="input-income"
                        v-model="form.income"
                        type="number"
                        placeholder=""
                        required
                        ></b-form-input>
                    </b-form-group>
                </b-col>


                <b-col cols="12" lg="3">
                    <b-form-group
                        id="input-zipcode"
                        label="CEP:"
                        label-for="input-zipcode"
                        description=""
                    >
                        <b-form-input
                        id="input-zipcode"
                        v-model="form.zipcode"
                        type="text"
                        placeholder=""
                        required
                        ></b-form-input>
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
                        v-model="form.address"
                        type="text"
                        placeholder=""
                        required
                        ></b-form-input>
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
                        v-model="form.number"
                        type="text"
                        placeholder=""
                        required
                        ></b-form-input>
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
                        v-model="form.neighborhood"
                        type="text"
                        placeholder=""
                        required
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
                        v-model="form.city"
                        type="text"
                        placeholder=""
                        required
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
                        v-model="form.state"
                        type="text"
                        placeholder=""
                        required
                        ></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            
            
            <b-button type="submit" variant="primary">Cadastrar</b-button>
            <b-button type="reset" variant="danger" class="ml-2">Limpar campos</b-button>
            </b-form>
            <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
            </b-card>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'AddUser',
  props: {
    title: String,
    msg: String,
  },
  data() {
      return {
        form: {
          email: '',
          name: '',
          species: null,
          breed: null,
          income: null,
          zipcode: null,
          address: null,
          number: null,
          neighborhood: null,
          city: null,
          state: null,
          checked: [],
        },
        species: [{ text: 'Selecione uma opção', value: null }, 'Cão', 'Gato'],
        breed: [{ text: 'Aguardando espécie...', value: null }, '', ''],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.species = null
        this.form.breed = null
        this.form.icome = null
        this.form.zipcode = null
        this.form.address = null
        this.form.number = null
        this.form.neighborhood = null
        this.form.city = null
        this.form.state = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
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
</style>
