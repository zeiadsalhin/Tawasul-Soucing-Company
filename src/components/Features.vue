<script setup>

</script>
<template>
    <div class="justify-center mx-auto p-2 mt-20  md:w-2/3 w-11/12">

        <div class="images mt-20 md:flex md:space-x-8 justify-center mx-auto text-center">
            <div class="img md:w-1/2 h-22 m-2 p-5 shadow-xl bg-gray-200  rounded-xl"><img class="mx-auto m-8" width="100"
                    height="100" src="/target.svg">
                <p class="py-2 font-bold text-xl">Our Target</p>
                <p class="p-2"> Suspendisnc aliquam consequat. Quisque a tempor dui. Cras placerat, tortor a
                    varius scelerisque at bibendum tortor ante a diam.</p>
            </div>
            <div class="img md:w-1/2 h-22 m-2 p-5 shadow-xl scale-110 bg-slate-900 text-white rounded-xl"><img
                    class="mx-auto m-8 invert" width="100" height="100" src="/sound.svg">
                <p class="py-2 font-bold text-xl">Our Mission</p>
                <p class="p-2"> Suspendisnc aliquam consequat. Quisque a tempor dui. Cras placerat, tortor a
                    varius scelerisque at bibendum tortor ante a diam.</p>
            </div>
            <div class="img md:w-1/2 h-22 m-2 p-5 shadow-xl bg-gray-200  rounded-xl"><img class="mx-auto m-8" width="100"
                    height="100" src="/bino.svg">
                <p class="py-2 font-bold text-xl">Our Vision</p>
                <p class="p-2"> Suspendisnc aliquam consequat. Quisque a tempor dui. Cras placerat, tortor a
                    varius scelerisque at bibendum tortor ante a diam.</p>
            </div>
        </div>
    </div>
    <div class="line3 flex bg-white w-full h-48 shadow-md"></div>
</template>
<style>
.line3 {
    overflow: hidden;
    position: absolute;
    z-index: 1;
    transform: SkewY(-3deg);
    margin-top: -5rem;
}

.images {
    position: relative;
    z-index: 2;
}
</style>