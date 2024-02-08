<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import Swiperview from './components/Swiperview.vue'
import About from './components/About.vue'
import Features from './components/Features.vue'
import Liner from './components/Services.vue'
// import Map from './components/Map.vue'
// import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
function m() {
  const menu = document.querySelector("#menu")
  menu.classList.toggle("active")
  document.body.style.overflow = document.body.style.overflow ? null : 'hidden';
}
</script>

<template>
  <a href="#" class="whatsapp fixed bottom-14 right-5 rounded-full shadow-md "><img class="" width="70" height=""
      src="/whatsapp.svg" alt=""></a>
  <Swiperview />

  <!--mob-->
  <div class="dim mobile">
    <div class=" flex justify-center">
      <div class="menu notactive space-y-3 bg-gray-600 text-xl font-semibold bg-transparent text-gray-300 bg-gray-00 "
        id="menu">

        <div class="options mt-10 mb-10 space-y-2">
          <RouterLink to="/" @click="m"><a href="#" class="block -mb-6">Home</a></RouterLink>
          <!-- <hr class="border-1 rounded border-gray-400 m- opacity-50 "> -->
          <RouterLink to="/" @click="m" id="menub" class="block p-2">Our Services</RouterLink>
          <RouterLink to="/" @click="m" id="menub" class="block p-2">Our Work</RouterLink>
          <RouterLink to="/" @click="m" id="menub" class="block p-2">Required Documents</RouterLink>
          <RouterLink to="/" @click="m" id="menub" class="block p-2">How to get a contract</RouterLink>
          <RouterLink to="/" @click="m" id="menub" class="block p-2">Member SignIn</RouterLink>
          <RouterLink to="/" @click="m" id="menub" class="block p-2">Demanding Jobs</RouterLink>
          <a href="#" @click="m" class="block p-4 bg-slate-800 font-medium w-11/12 mx-auto rounded-lg">Contact</a>
        </div>
        <hr class="border-1 rounded border-gray-600 m-10 opacity-50 ">
        <div class="mb mt-20">
          <button @click="m" id="menub" class="md:hidde justify-between hover:bg-transparent">
            <div class="container dark:invert px-4">
              <div class="bar11"></div>
              <div class="bar22"></div>
              <div class="bar33"></div>
            </div>
          </button>
        </div>
      </div>

    </div>

    <nav class="nav bg-gray-500 bg-transparent text-gray-200 md:hidde justify-between font-semibold ">
      <div class="flex justify-between">
        <a href="https://pactel.info" onclick=""> <img src="/logo.svg" width="80" height="60" class="justify-between m-4"
            alt="logo"></a>
        <!-- <h1 style="font-weight: 800;" class="p-3 text-3xl text-gray-300">Courses</h1> -->
        <button @click="m" id="menub" class="md:hidde justify-between hover:bg-transparent">
          <div class="container dark:invert px-4">
            <div class="bar1">
              <hr class="border-2 bg-black border-black">
            </div>
            <!-- <div class="bar2">
              <hr class="border-2 bg-black border-black">
            </div> -->
            <div class="bar3">
              <hr class="border-2 bg-black border-black">
            </div>
          </div>
        </button>
      </div>

    </nav>
  </div>
  <!---->
  <RouterView />
  <!-- <div class="bar"></div> -->
  <header class=" flex-col justify-center mx-auto text-black bg-gray-200 shadow-lg desktop">
    <div class="up flex justify-around -space-x-32 bg-slate-950 text-white p-2">
      <div class="flex justify-start mr-96"><img alt="logo" class="logo" width="70" height="100" src="/logo.svg">
      </div>

      <div class="contact flex justify-center space-x-5">
        <div class="p1 flex my-auto">
          <img class="my-auto" width="20" height="" src="/phone.svg">
          <p class="p-1 text-lg">+20 1000440033</p>
        </div>
        <div class="p2 flex my-auto">
          <img class="my-auto" width="20" height="" src="/phone.svg">
          <p class="p-1 text-lg">+20 100033033</p>
        </div>
        <div class="email flex my-auto">
          <img class="my-auto" width="20" height="" src="/email.svg">
          <p class="p-1 text-lg">info@tawasol.corp</p>
        </div>
        <div class="social flex space-x-3 my-auto">
          <button class="hover:bg-transparent"><img class="my-auto" width="20" height="" src="/facebook.svg"></button>
          <button class="hover:bg-transparent"><img class="my-auto" width="20" height="" src="/x.svg"></button>
          <button class="hover:bg-transparent"><img class="my-auto" width="20" height="" src="/instagram.svg"></button>
        </div>
      </div>
    </div>

    <div class="flex justify-center space-x-28 p-2.5">
      <div class="my-auto">
        <nav class="text-lg font-semibold flex justify-center space-x-7">
          <RouterLink to="/" active-class="text-blue-800" class="hover:text-blue-800">Home
          </RouterLink>
          <RouterLink to="/1" active-class="text-blue-800" class="hover:text-blue-800">Our Services
          </RouterLink>
          <RouterLink to="/2" active-class="text-blue-800" class="hover:text-blue-800">Our Work
          </RouterLink>
          <RouterLink to="/3" active-class="text-blue-800" class="hover:text-blue-800">Required Documents
          </RouterLink>
          <RouterLink to="/4" active-class="text-blue-800" class="hover:text-blue-800">How to get a contract
          </RouterLink>
          <RouterLink to="/5" active-class="text-blue-800" class="hover:text-blue-800">Member SignIn
          </RouterLink>
          <RouterLink to="/7" active-class="text-blue-800" class="hover:text-blue-800">Demanding Jobs
          </RouterLink>
        </nav>
      </div>
      <div class="nav my-auto space-x-4">
        <button href="#" class="px-5 py-1 bg-blue-600 text-white font-medium rounded-full">Contact</button>
        <button href="#" class="px-2 py-1 hover:bg-transparent font-medium rounded-full">عربي</button>
      </div>
    </div>
  </header>


  <RouterView />
  <div
    class="flex-col justify-center md:translate-x-52 text-2xl space-y-5 md:p-8 p-5 md:mt-36 rounded-sm mt-28 md:mb-48 mb-32 text-center bg-white text-slate-900 md:w-1/3 w-11/12 mx-auto shadow-3xl font-bold">

    <p class="md:text-3xl font-extrabold p-2">We have a large Database Worldwide
    <div class="line mt-5 mx-auto rounded-full w-1/2 h-1 bg-slate-500"></div>
    </p>
    <p class="text-lg font-medium">Praesent ultrices, sapien sit amet pharetra blandit, nibh nisi auctor tellus, at
      mollis
      nisl nibh
      congue
      nisi. Sed tellus augue, lacinia eget metus sed, ornare vulputate tortor. Sed eleifend ultricies erat
      molestie ultrices.</p>
    <button class="bg-blue-700 text-white font-medium text-lg px-5 py-1 rounded-sm">Know More</button>
  </div>
  <About />
  <Features />
  <Liner />
  <Map />
  <Contact />
  <Information />
  <Footer />
</template>

<style scoped>
.whatsapp {
  position: fixed;
  z-index: 99999;
}

/* .router-link-exact-active div {
  width: 50%;
  height: 0.25rem;
  margin-top: 0.25rem;
  margin-left: auto;
  margin-right: auto;
  border-radius: 9999px;
  background-color: #0d47a1;
} */

.notactive {
  text-align: center;
  z-index: 9999999;
  position: absolute;
  overflow-y: hidden;
  width: 100%;
  height: 0%;
  transition: ease-in-out 0.2s;
}

.active {
  top: 0;
  height: 100vh;
  width: 100%;
  background: #040404;
}

.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 3px;
  background-color: #0c0c0c;
  margin: 8px 5px;
  transition: 0s;
}

.bar11,
.bar22,
.bar33 {
  width: 50px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
  background-color: #ffff;

}

.bar11 {
  transform: translate(0, 11px) rotate(-45deg);
}

.bar22 {
  opacity: 0;
}

.bar33 {
  transform: translate(0, -11px) rotate(45deg);
}
</style>
