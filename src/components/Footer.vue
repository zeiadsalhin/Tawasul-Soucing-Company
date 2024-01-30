<script setup>
</script>
<template>
    <div class="main bg-slate-950 text-white md:flex justify-around -mt-40">
        <div class="mt-40 mb-10 w-11/12 mx-auto text-center md:p-20 md:flex justify-between">
            <div class="1 px-5 py-10 mx-auto flex-col justify-center md:w-1/4 mt-12">
                <p class="text-2xl font-bold md:mb-10">Who we are</p>
                <img class="bg-white md:mx-10 mx-auto  my-5 rounded-lg" width="100" height="" src="/logo.svg" alt="">
                <p class="md:text-lg">Praesent ultrices, sapien sit amet pharetra blandit, nibh nisi auctor tellus, at
                    mollis
                    nisl nibh
                    congue
                    nisi. Sed tellus augue, lacinia eget metus sed, ornare vulputate tortor. Sed eleifend ultricies erat
                    molestie ultrices.</p>
            </div>
            <div class="2 px-5 py-10 mx-auto flex-col justify-center md:w-1/4 md:mt-10">
                <h1 class="text-xl font-bold py-5">QR CODE</h1>
                <img class="mx-auto" width="200" height="" src="/qr.svg">
            </div>
            <div class="3 px-5 py-10 mx-auto flex-col justify-center md:w-1/4 md:mt-10">
                <h1 class="text-xl font-bold py-5">Newsletter</h1>
                <div class="2 mx-auto flex-col justify-center md:w-full">
                    <input type="email"
                        class="p-3 my-2 md:w-11/12 w-full rounded-sm text-black placeholder-slate-700 outline-0"
                        placeholder="Email">
                    <button class="p-2 my-2 w-11/12 bg-slate-800 rounded-sm">Subscribe</button>
                </div>
            </div>
            <div class="4 px-5 py-10 mx-auto flex-col justify-center md:mt-10">
                <h1 class="text-xl font-bold py-5">Contact Us</h1>
                <div class="contacts flex justify-center mx-auto space-x-2">
                    <a href="#"><img class="p-2 rounded-xl" width="50" height="" src="/facebook.svg" alt=""></a>
                    <a href="#"><img class="p-2 rounded-xl" width="50" height="50" src="/x.svg" alt=""></a>
                    <a href="#"><img class="p-2 rounded-xl" width="50" height="" src="/instagram.svg" alt=""></a>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-slate-950 -mt-2">
        <div class="w-11/12 h-1 bg-slate-900 mx-auto rounded-full"></div>
    </div>
    <div class="bottom md:flex justify-between my-auto p-4 md:px-10 space-y-5 md:space-y-0 bg-slate-950 text-white">
        <p class="md:text-lg text-center">&copy;2024 Tawasul For Sourcing - شركة تواصل لتوريد العمالة</p>

        <div class="credits flex space-x-2 text-center justify-center">
            <a href="https://github.com/zeiadsalhin" class="">Designed by Ziad</a> <img class="invert" width="20" height=""
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg">
        </div>
    </div>
</template>
<style>
.main {
    overflow: hidden;
    position: relative;
    z-index: -99999;
}
</style>