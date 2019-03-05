<template>
  <div id="app">
    <NoticeSection/>
  </div>
</template>

<script>
import NoticeSection from "./components/NoticeSection";

export default {
  name: 'app',
  components: {
    NoticeSection,
  }
}
</script>

<style lang="scss">
  @import './assets/css/global';

  /* rajdhani */
  /* rajdhani-regular - latin */
  @font-face {
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 400;
    src: url('./assets/fonts/rajdhani-v8-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Rajdhani Regular'), local('Rajdhani-Regular'),
    url('./assets/fonts/rajdhani-v8-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('./assets/fonts/rajdhani-v8-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
    url('./assets/fonts/rajdhani-v8-latin-regular.woff') format('woff'), /* Modern Browsers */
    url('./assets/fonts/rajdhani-v8-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
    url('./assets/fonts/rajdhani-v8-latin-regular.svg#Rajdhani') format('svg'); /* Legacy iOS */
  }
  /* rajdhani-500 - latin */
  @font-face {
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 500;
    src: url('./assets/fonts/rajdhani-v8-latin-500.eot'); /* IE9 Compat Modes */
    src: local('Rajdhani Medium'), local('Rajdhani-Medium'),
    url('./assets/fonts/rajdhani-v8-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('./assets/fonts/rajdhani-v8-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
    url('./assets/fonts/rajdhani-v8-latin-500.woff') format('woff'), /* Modern Browsers */
    url('./assets/fonts/rajdhani-v8-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
    url('./assets/fonts/rajdhani-v8-latin-500.svg#Rajdhani') format('svg'); /* Legacy iOS */
  }
  /* rajdhani-600 - latin */
  @font-face {
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 600;
    src: url('./assets/fonts/rajdhani-v8-latin-600.eot'); /* IE9 Compat Modes */
    src: local('Rajdhani SemiBold'), local('Rajdhani-SemiBold'),
    url('./assets/fonts/rajdhani-v8-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('./assets/fonts/rajdhani-v8-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
    url('./assets/fonts/rajdhani-v8-latin-600.woff') format('woff'), /* Modern Browsers */
    url('./assets/fonts/rajdhani-v8-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
    url('./assets/fonts/rajdhani-v8-latin-600.svg#Rajdhani') format('svg'); /* Legacy iOS */
  }
  /* rajdhani-700 - latin */
  @font-face {
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 700;
    src: url('./assets/fonts/rajdhani-v8-latin-700.eot'); /* IE9 Compat Modes */
    src: local('Rajdhani Bold'), local('Rajdhani-Bold'),
    url('./assets/fonts/rajdhani-v8-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('./assets/fonts/rajdhani-v8-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
    url('./assets/fonts/rajdhani-v8-latin-700.woff') format('woff'), /* Modern Browsers */
    url('./assets/fonts/rajdhani-v8-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
    url('./assets/fonts/rajdhani-v8-latin-700.svg#Rajdhani') format('svg'); /* Legacy iOS */
  }

  #app {
    font-family: 'Rajdhani', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width:100%;
    height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    //height: calc(var(--vh, 1vh) * 100);
    background-color:#eeeeee;
    @include flex-style(center,center);
  }
</style>
