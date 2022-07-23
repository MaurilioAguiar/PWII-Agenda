<template>
  <div class="container mt-2">
    <p style="font-size:2em; color:darkblue"><strong>Agenda</strong></p>
    <hr />
    <p v-if="numContatos <= 0">Adicione um contato na agenda...</p>
    <p v-else>Há {{ numContatos }} contatos na agenda.</p>
    <div v-for="(contato, index) in contatos" :key="index">
      <b-card class="mb-2">
        <b-card-text>Nome: <strong>{{contato.subject}}</strong> </b-card-text>
        <b-card-text>Telefone: <strong>{{contato.description}}</strong></b-card-text>

        <a href="#" class="mr-2" style="font-size:1.2em; color:orangered" @click="excluir(contato, index)"><strong>Excluir</strong></a>

        <a href="#" class="mr-2" style="font-size:1.2em" @click="editar(index)"><strong>Editar</strong></a>    
      </b-card>
    </div>
    <hr />
  </div>
</template>

<script>
export default{
  name: "ListaContatos",

  data (){
    return{
      contatos: [],
      selecionado: []
    }
  },
  created() {
    this.contatos = (localStorage.getItem("contatos")) ? JSON.parse(localStorage.getItem("contatos")) : [];
  },
  methods:{
    editar(index){
      this.$router.push({name: "cadastrar", params: {index}});
    },
    excluir(contato, index){
      this.selecionado = contato;
      this.selecionado.index = index;
      this.contatos.splice(this.selecionado.index, 1);
      localStorage.setItem("contatos", JSON.stringify(this.contatos));
    }
  },
  computed: {
      numContatos() {
        return this.contatos.length;
      }
    },
}
</script>
