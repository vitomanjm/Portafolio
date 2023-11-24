<template>

    <input @click="toggleStyle" type="checkbox" class="toggle" checked />
 
</template>

<script>

export default {

    methods: {
        toggleStyle() {
            const htmlSelector = document.querySelector('html');
            
            htmlSelector.setAttribute('data-theme', htmlSelector.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
            
        }
    }
}
</script>

<style></style>