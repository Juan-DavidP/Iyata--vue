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
      <!-- <Banner nombre="hola" valor="60.00" imagen="/casco.svg" /> -->
    </Section>
    <Section titulo="Agregar producto">
      <Form> </Form>
    </Section>
    <Footer />
  </Container>

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
