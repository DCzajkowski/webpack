<template>
    <div id="app">
        {{#router}}
        <router-view></router-view>
        {{else}}
        <HelloWorld/>
        {{/router}}
    </div>
</template>

<script>
    {{#unless router}}
    import HelloWorld from './components/HelloWorld'

    {{/unless}}
    export default {
        name: 'App',{{#unless router}}
        components: {
            HelloWorld,
        },{{/unless}}
    }
</script>

{{#tailwindcss}}<style src="./styles/app.css"></style>
{{/tailwindcss}}
<style>
    /* */
</style>
