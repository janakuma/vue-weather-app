<template>
    <header class="header">
        <h2>Weather Application</h2>
        <p>{{ username }} 반갑습니다.</p>
    </header>
</template>

<script>
export default {
    name: 'HeaderDisplay',
}
</script>

<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: linear-gradient(to right, orange 0%, red 100%);
        padding: 1em;
    }

    .header h2 {
        color: #fff;
    }

    .header p {
        font-size: 12px;
        color: #fff;
    }
</style>