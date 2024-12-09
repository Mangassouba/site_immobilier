<template>
  <header id="header">
    <div class="navbar">
      <div class="hader-nav">
        <div class="logo">
          <img src="" alt="Logo" />
        </div>
        <nav class="nav_bar" :class="{ responsive: isMenuOpen }">
          <ul>
            <li>
              <RouterLink to="/" class="active" href="index.html"
                >Home</RouterLink
              >
            </li>
            <li><RouterLink to="/about" href="#services">About</RouterLink></li>
            <li>
              <RouterLink to="/service" href="#abouts">Service</RouterLink>
            </li>
            <li>
              <RouterLink to="/propertiers" href="#contact"
                >Propertiers</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/agents" href="signup.html">Agents</RouterLink>
            </li>
            <li class="appoinment">
              <RouterLink to="/contact" class="login" href="login.html"
                >Contact</RouterLink
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="menu_toggle" @click="toggleMenu"></div>
    </div>
  </header>
  <!-- <div class="container"> -->
  <RouterView />
  <!-- </div> -->
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
#header {
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  z-index: 1;
}
#header .navbar {
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  background-color: #fff;
  z-index: 5;
}
#header .navbar .hader-nav {
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
#header .navbar .hader-nav .nav_bar ul {
  display: flex;
}
#header .navbar .hader-nav .nav_bar ul li {
  margin: 0 20px;
  list-style-type: none;
}
#header .navbar .hader-nav .nav_bar ul li a {
  text-decoration: none;
  color: #000;
}


@media (max-width: 992px){
    .navbar .logo img{
        width: 150px;
    }
    .navbar ul li{
        padding: 10px;
        margin: 10px;
        list-style-type: none;
    }
    .header-contents{
    display: flex;
    align-items: center;
    width: 90%;
    padding-top: 160px;
    /* margin-left: 60px; */
    /* z-index: -1; */
    }
    .header-content{
        /* margin: 20px; */
        font-size: 1em;
        width: 50%;
    }
    .header-contents img{
        width: 400px;
        border-radius: 50px;
    }
  }

@media (max-width: 768px) {
  .navbar .logo img {
    width: 150px;
  }
  .navbar .hader-nav {
    display: flex;
    justify-content: space-between;
    padding: 0 60px;
  }
  .navbar .menu_toggle {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    right: 60px;
    cursor: pointer;
    /* background-color: #f5f; */
  }
  .navbar .menu_toggle::before {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    content: "";
    width: 30px;
    height: 2;
    border: 1px solid rgb(114, 197, 114);
    background-color: rgb(114, 197, 114);
    box-shadow: 0 10px 0 rgb(114, 197, 114);
    transform: translateY(-10px);
  }
  .navbar .menu_toggle.active::before {
    transform: translateY(0) rotate(135deg);
    box-shadow: 0 0 0 rgb(114, 197, 114);
  }
  .navbar .menu_toggle::after {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    content: "";
    width: 30px;
    height: 2;
    background-color: rgb(114, 197, 114);
    border: 1px solid rgb(114, 197, 114);
    /* box-shadow: 0 10px 0  var(--primary); */
    transform: translateY(10px);
  }
  .navbar .menu_toggle.active::after {
    transform: translateY(0) rotate(-135deg);
    box-shadow: 0 0 0 rgb(114, 197, 114);
  }
  .nav_bar.responsive {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 50px;
    left: 0;
    right: 0;
    background-color: white;
    box-shadow: 0 0 2px white;
    z-index: 100000px;
  }
  .nav_bar ul {
    display: flex;
    flex-direction: column;
  }
  .nav_bar ul li {
    text-align: center;
  }

  .header-img {
    width: 100%;
  }

  .navbar nav {
    display: none;
  }
}

@media (max-width : 576px){
    .header-contents{
        display: flex;
        flex-direction: column;
    }
    .header-content{
        /* margin: 20px; */
        font-size: 0.9em;
        width: 80%;
    }
  }
</style>
