<script lang="ts">

  export let chlorineData; // Replace 'any' with the actual type of the 'chlorineData' variable.
  let filteredItems: never[] = [];
  let searchTerm = "";

  console.log('uno', chlorineData)
  async function filterItems() {
    if (chlorineData.length === 0) {
      // Wait for chlorineData if it's still being fetched
      await new Promise<void>(resolve => {
        const unsubscribe = chlorineData.subscribe(() => {
          resolve();
          unsubscribe();
        });
      });
    }
  }

  const searchLower = searchTerm.toLowerCase();
  filteredItems = chlorineData.filter(item => {
    return(
      item.date.toLowerCase().includes(searchLower) ||
      item.location.toLowerCase().includes(searchLower) ||
      item.tap.toString().includes(searchLower)
    )
  })
/* $: filteredItems = chlorineData.filter((item) => {
   const searchLower = searchTerm.toLowerCase();
   return item.date.toLowerCase().includes(searchLower) || 
    item.location.toLowerCase().includes(searchLower) ||
    // @ts-ignore
    item.tap.includes(searchLower);
});
 */

$: searchTerm, filterItems();
console.log('dos', filteredItems)
</script>

<div class="overflow-x-auto">
  <label class="input input-bordered flex items-center gap-2">
    <input type="text" class="grow" placeholder="Filtrar por fecha, sector o grifo" bind:value={searchTerm}/>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
  </label>
    <table class="table table-zebra">
      <!-- head -->
      <thead>
        <tr>
          <th class="text-center">Fecha</th>
          <th class="text-center">Hora</th>
          <th class="text-center">Sector</th>
          <th class="text-center">Grifo</th>
          <th class="text-center">Concentración (ppm)</th>
        </tr>
      </thead>
      <tbody>
        <!-- body -->
        {#each filteredItems as item, i}
        <tr>
          <th class="text-center">{item.date}</th>
          <td class="text-center">{item.time}</td>
          <td class="text-center">{item.location}</td>
          <td class="text-center">{item.tap}</td>
          <td class="text-center">{item.freeChlorine}</td>
        </tr>
        {/each}
      </tbody>
    </table>
  </div>