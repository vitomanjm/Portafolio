<template>
    <div class=" flex">
        <div class="navbar mt-4">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 20 20"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </label>
                    <ul tabindex="0"
                        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        <router-link to="/about">
                            <button>
                                <li class="m-1 p-1"><a>About me</a></li>
                            </button>
                        </router-link>

                        <router-link to="/projects">
                            <button>
                                <li class="m-1 p-1"><a>Projects</a></li>
                            </button>
                        </router-link>

                        <router-link to="/contact">
                            <button>
                                <li class="m-1 p-1"><a>Contact information</a></li>
                            </button>
                        </router-link>

                    </ul>
                </div>
            </div>

            <div class="flex navbar-center">
                <router-link class="btn btn-ghost normal-case text-4xl " :to="{ name: 'Home' }">VICKTOR JAIMES</router-link>
            </div>

            <div class="navbar-end">
                <toggleButton></toggleButton>
            </div>

        </div>

    </div>

    <div class="flex-none">
        <slot></slot>
    </div>

</template>

<script>
import toggleButton from "../components/toggleButton.vue";

export default {

    components: {

        toggleButton,
    },

};

</script>

<style>
.navbar-start {
    width: 45%
}
</style>



