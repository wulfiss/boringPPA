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
    <h3 class="font-bold text-lg">Cloro</h3>
    <div class="modal-action flex justify-center">
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
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
          <div class="label">
          </div>
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
        <button class="btn">Close</button>
        <button class="btn">Save</button>
      </form>
    </div>
  </div>
</dialog>




