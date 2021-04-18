<script lang="ts">
  import { onMount } from "svelte";
  export let date: string;

  onMount(async () => {
    const res = await fetch("/api/date");
    const newDate = await res.text();
    date = newDate;
  });
</script>

<main>
  <h1>Rest Countries</h1>
  <p>{date ? date : 'Loading date...'}</p>
</main>
