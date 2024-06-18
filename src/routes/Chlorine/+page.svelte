<script lang="ts">
    import ClTable from "$lib/components/chlorine/ClTable.svelte";
    import ModalForm from "$lib/components/chlorine/ClModalForm.svelte";
    import { onMount } from "svelte";
    import { fetchData } from "$lib/utils/getData";
    import { page } from '$app/stores';

    let chlorineData: any[] = [];
    onMount(async () => {
        chlorineData = await fetchData('/api/endpointChlorine');
    });

</script>

<ClTable {chlorineData}/>
<ModalForm />