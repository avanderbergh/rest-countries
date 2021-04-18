<script lang="ts">
  import { onMount } from "svelte";
  import { mode } from "./stores";
  import Header from "./components/Header.svelte";
  export let date: string;

  onMount(async () => {
    const res = await fetch("/api/date");
    const newDate = await res.text();
    date = newDate;
  });
</script>

<main class={$mode}>
  <Header/>
  <p>{date ? date : 'Loading date...'}</p>
</main>

<style>
  main {
    height: 100%;
  }
</style>
