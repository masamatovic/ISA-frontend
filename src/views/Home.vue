<template>
  <div class="home">
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link :to="{name: 'Home'}" class="nav-link">Home </router-link>
            <span class="sr-only">(current)</span>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Login'}" class="nav-link">Login </router-link>
            <span class="sr-only">(current)</span>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Registracija'}" class="nav-link">Registracija </router-link>
            <span class="sr-only">(current)</span>
          </li>
        </ul>
      </div>
    </nav>
    

    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
