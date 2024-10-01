<script setup>
import Header from '../components/Header/Header.vue';
import Container from '../components/Container/Container.vue';
import Section from '../components/Section/Section.vue';
import Form from '../components/Form/Form.vue';
import Footer from '@/components/Footer/Footer.vue';
import Galeria from '@/components/Galeria/Galeria.vue';
</script>

<template>
  <Header />
  <Container>
    <Section titulo="Mis productos">
      <Suspense>
        <Galeria />
      </Suspense>
    </Section>
    <Section titulo="Agregar producto">
      <Form />
    </Section>
  </Container>
  <Footer />

  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
</template>

<style scoped></style>
