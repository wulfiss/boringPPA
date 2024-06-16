<script>
    import ClTable from "$lib/components/chlorine/ClTable.svelte";
    import ModalForm from "$lib/components/chlorine/ClModalForm.svelte";
    import { onMount } from "svelte";
    import { fetchDataAndSetStore } from "$lib/utils/getData";


    let freeChlorine;
    console.log('1111',freeChlorine);
    onMount(async () => {
    freeChlorine = await fetchDataAndSetStore('/api/endpointChlorine');
    });
</script>

<ClTable {freeChlorine}/>
<ModalForm />


