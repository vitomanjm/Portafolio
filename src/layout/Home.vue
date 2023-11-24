<template>
    <div class="flex">
        <div class="rounded-xl text-2xl mt-2">
            <slot>
                <div class="flex justify-center">
                    <h1>Portfolio</h1>
                </div>
               <div class="grow grid grid-rows-2 grid-flow-col gap-1">
                <div class="card w-auto bg-neutral text-neutral-content m-8">
                        <div class="card-body items-center ">
                            <p class="text-center">
                              Greetings! This is my professional portafolio.
                            </p>
                        </div>
                    </div>  
                        <div class="card w-auto bg-neutral text-neutral-content m-8">
                            <div  class="card-body items-center text-center">
                                <p> Feel free to check out my projects and contact information.</p>
                            </div>
                        </div>
                        <div class="card w-auto bg-neutral text-neutral-content m-8">
                            <div  class="card-body items-center text-center">
                                <p>I have developed this website using Vue.js, Tailwind and DaisyUI library for styling. </p>
                            </div>
                        </div>
                        <div class="card w-auto bg-neutral text-neutral-content m-8">
                            <div  class="card-body items-center text-center">
                                <p>Any information please write at vmjm325@gmail.com</p>
                            </div>
                        </div>
                    </div>
            </slot>
        </div>
    </div>
</template>

<script>
</script>


