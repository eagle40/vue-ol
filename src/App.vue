<template>
  <div id="app">
      <div id="nav">
          <router-link to="/">Accessible</router-link> |
          <router-link to="/animation">Animation</router-link> |
          <router-link to="/arcgis-image">ArcgisImage</router-link> |
          <router-link to="/arcgis-tiled">ArcgisTiled</router-link> |
          <router-link to="/xyz">XYZ</router-link>
      </div>
    <router-view/>
  </div>
</template>

<style lang="less">
    @import "~ol/ol.css";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
