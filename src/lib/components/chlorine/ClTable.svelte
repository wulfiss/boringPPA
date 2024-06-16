<script>

let data = [
  {
    fecha: "2021-10-01",
    hora: "10:00",
    sector: "Sector 2",
    grifo: "Grifo 2",
    concentracion: "1.5"
  },
  {
    fecha: "2021-10-01",
    hora: "10:00",
    sector: "Sector 4",
    grifo: "Grifo 5",
    concentracion: "1.5"
  },
  {
    fecha: "2021-10-01",
    hora: "10:00",
    sector: "calle 1",
    grifo: "Grifo 1",
    concentracion: "1.5"
  },
  {
    fecha: "2022-10-01",
    hora: "10:00",
    sector: "Sector 1",
    grifo: "Grifo 1",
    concentracion: "1.5"
  },
  {
    fecha: "2023-10-01",
    hora: "10:00",
    sector: "Sector 1",
    grifo: "Grifo 1",
    concentracion: "1.5"
  },
  {
    fecha: "2021-10-01",
    hora: "10:00",
    sector: "Sector 1",
    grifo: "Grifo 1",
    concentracion: "1.5"
  },
  {
    fecha: "2021-10-01",
    hora: "10:00",
    sector: "Sector 1",
    grifo: "Grifo 1",
    concentracion: "1.5"
  },
  {
    fecha: "2021-10-01",
    hora: "10:00",
    sector: "Sector 1",
    grifo: "Grifo 1",
    concentracion: "1.5"
  },
  {
    fecha: "2021-10-01",
    hora: "10:00",
    sector: "Sector 1",
    grifo: "Grifo 1",
    concentracion: "1.5"
  },
  {
    fecha: "2021-10-01",
    hora: "10:00",
    sector: "Sector 1",
    grifo: "Grifo 1",
    concentracion: "1.5"
  }
]

let searchTerm = "";

$: filteredItems = data.filter(item => {
   const searchLower = searchTerm.toLowerCase();
   return item.fecha.toLowerCase().includes(searchLower) || 
    item.sector.toLowerCase().includes(searchLower) || 
    item.sector.toLowerCase().includes(searchLower);
});

</script>

<div class="overflow-x-auto">
  <label class="input input-bordered flex items-center gap-2">
    <input type="text" class="grow" placeholder="Search" bind:value={searchTerm}/>
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
          <th class="text-center">{item.fecha}</th>
          <td class="text-center">{item.hora}</td>
          <td class="text-center">{item.sector}</td>
          <td class="text-center">{item.grifo}</td>
          <td class="text-center">{item.concentracion}</td>
        </tr>
        {/each}
      </tbody>
    </table>
  </div>