<template><!--Aqui tenho a navegação superior da página-->
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <img src="../public/icons8-agenda-64.png" alt="Imagem de uma agenda">
      <b-navbar-brand><strong>CONTATOS</strong></b-navbar-brand>
      <b-navbar-brand></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/"><strong id="detalhe">Listar</strong></b-nav-item>
          <b-nav-item to="/cadastrar"><strong id="detalhe">Cadastrar</strong></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style>
#detalhe{
  background-color: aqua;
  color: rgb(20, 12, 12);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3em;
  padding-left: 0.7em;
  padding-right: 0.7em;
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  border-radius: 5px;
}
#detalhe:hover{
 background-color: rgba(179, 34, 34, 0.836);
  color: rgb(245, 242, 242);
  font-size: 1.3em;
}
</style>
