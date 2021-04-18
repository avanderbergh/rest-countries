<script lang="ts">
  import { onMount } from "svelte";
  import { mode } from "./stores";
  import Header from "./components/Header.svelte";
  import CountryList from "./components/CountryList.svelte";
  export let date: string;

  onMount(async () => {
    const res = await fetch("/api/date");
    const newDate = await res.text();
    date = newDate;
  });
</script>

<main class={$mode}>
  <Header/>
  <CountryList/>
</main>

<style>
  main {
    min-height: 100%;
  }
</style>
