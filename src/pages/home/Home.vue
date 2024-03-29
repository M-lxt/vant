<script setup lang="ts">
import { ref } from 'vue'
const active = ref(0);
</script>

<template>
    <div class="box">
        <div class="main"><RouterView></RouterView></div>
    <footer>
        <van-tabbar v-model="active">
            <van-tabbar-item to="/gohome" icon="home-o">配送到家</van-tabbar-item>
            <van-tabbar-item to="/cart" icon="cart-o">购物车</van-tabbar-item>
            <van-tabbar-item to="/mine" icon="friends-o">我的</van-tabbar-item>
        </van-tabbar>
    </footer>
    </div>
</template>

<style lang='scss' scoped>
.box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .main{
        flex: 1;
    }
    footer{
        height: 40px;
        display: flex;
        align-items: center;
        text-align: center;
        a{
            flex: 1;
            text-decoration: none;
            height: 100%;
            line-height: 40px;
        }
    }
}

.router-link-active{
    background: orchid;
    font-weight: 900;
}

</style>
