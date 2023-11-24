<template>
    <div class="flex ml-48">
        <div class="w-auto h-auto rounded-xl text-2xl m-2">

            <slot>
                <div class="flex justify-center w-auto h-auto ">
                    <h1>WELCOME</h1>
                </div>
               <div class="grow grid grid-rows-2 grid-flow-col gap-1">
                <div class="card w-72 bg-neutral text-neutral-content m-8">
                        <div class="card-body items-center text-center">
                            <p class="text-center">
                              Greetings! This is my professional portafolio.
                            </p>
                        </div>
                    </div>  
                        <div class="card w-72 bg-neutral text-neutral-content m-8">
                            <div  class="card-body items-center text-center">
                                <p> Feel free to check out my projects and contact information.</p>
                            </div>
                        </div>
                        <div class="card w-72 bg-neutral text-neutral-content m-8">
                            <div  class="card-body items-center text-center">
                                <p>I have developed this website using Vue.js and Tailwind's library for styling. </p>
                            </div>
                        </div>
                        <div class="card w-72 bg-neutral text-neutral-content m-8">
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


