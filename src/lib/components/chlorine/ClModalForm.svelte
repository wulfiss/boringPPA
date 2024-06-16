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
</script>

<button class="btn fixed bottom-4 right-4" on:click={() =>my_modal_1.showModal()}>open modal</button>

<dialog bind:this={my_modal_1} class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
        <button class="btn">Save</button>
      </form>
    </div>
  </div>
</dialog>