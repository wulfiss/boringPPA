<script>
  /**
	 * @type {HTMLDialogElement}
	 */
  let my_modal_1;

  /**
	 * @param {{ key: string; }} e
	 */
  function showModal(e) {
    if (e.key === "Escape" && my_modal_1.open) {
      my_modal_1.close();
    }
  }

  let date = new Date();
  let today = date.toISOString().slice(0, 10); // YYYY-MM-DD
  let time = date.toLocaleTimeString('en-US', {
    hour12: false, // Ensure 24-hour format
    hour: '2-digit',
    minute: '2-digit'
  });
</script>

<button class="btn fixed bottom-4 right-4" on:click={() =>my_modal_1.showModal()}>open modal</button>

<dialog bind:this={my_modal_1} class="modal">
  <div class="modal-box">
    <div class="modal-action flex justify-center mt-0">
      <form method="dialog">
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Fecha</span>
          </div>
          <input type="date" bind:value={today} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
          <div class="label">
          </div>
        </label>
        
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Hora</span>
          </div>
          <input type="time" bind:value={time} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
          <div class="label">
          </div>
        </label>
        
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Sector</span>
          </div>
          <select class="select select-bordered w-full max-w-xs">
            <option>Zona Sucia</option>
            <option selected>Zona Intermedia</option>
            <option>Sala de Eviscerado</option>
            <option>Sala de Enfriado</option>
            <option>Empaque de Garras</option>
            <option>Empaque de Pollos</option>
            <option>Sala de Trozado</option>
          </select>
        </label>
        
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Grifo</span>
          </div>
          <input type="number" min=00 placeholder="Type here" class="input input-bordered w-full max-w-xs" />
          <div class="label">
          </div>
        </label>
        
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Concentración (ppm)</span>
          </div>
          <input type="number" min=0 max=2.5 step=0.01 placeholder="Type here" class="input input-bordered w-full max-w-xs" />
          <div class="label">
          </div>
        </label>
        <div class="flex space-x-1">
          <button class="btn btn-error">Cerrar</button>
          <button class="btn flex-1 btn-success">Guardar</button>
        </div>
      </form>
    </div>
  </div>
</dialog>




