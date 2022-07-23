<template>
  <div class="container mt-2">
    <div>
      <p style="color: #000000"><strong>Cadastrar os contatos:</strong></p>
    </div>
    <b-form>
      <b-form-group label-for="subject">
        <b-form-input id="subject" v-model="form.subject" type="text" placeholder="Nome" required></b-form-input>
      </b-form-group>
      <b-form-group label-for="description">
        <b-form-input id="description" v-model="form.description" type="text" placeholder="Telefone" required></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="outline-primary" @click="salvarContato">Salvar</b-button>
    </b-form>
  </div>
</template>
<script>

export default{
  name: "Cadastrar",

  data(){
    return{
      form:{
        subject: "",
        description: ""
      },
      metodoSalvar: "novo"
      
    }      
  },
  
  created(){
      if(this.$route.params.index === 0 || this.$route.params.index !== undefined){
          this.metodoSalvar = "atualizar";
          let contatos = JSON.parse(localStorage.getItem("contatos"));
          this.form = contatos[this.$route.params.index];
      }
  },
  methods:{
    salvarContato(){
      
      if(this.form.subject ==="" || this.form.description === ""){
        this.$router.push({name: "listacontatos"});
        return;

      }else if(this.metodoSalvar === "atualizar"){
        let contatos = JSON.parse(localStorage.getItem("contatos"));
        contatos[this.$route.params.index] = this.form;
        localStorage.setItem("contatos", JSON.stringify(contatos));
        this.$router.push({name: "listacontatos"});
        return;

      }
        let contatos = (localStorage.getItem("contatos")) ? JSON.parse(localStorage.getItem("contatos")) : [];
        contatos.push(this.form);
        localStorage.setItem("contatos", JSON.stringify(contatos));
        this.$router.push({name: "listacontatos"});
      
    }
  }
}
</script>
