import { supabase } from '$lib/dataBase/supabaseClient';
import { json, error, type RequestHandler } from '@sveltejs/kit';

/* export const load = async () => {
    const { data: measurements, error: dbError } = await supabase
        .from("freechlorine")
        .select("*").
        order("date", { ascending: false });

    if (dbError) {
        throw new Error(dbError.message);
    }

    return {measurements};
} */

async function getData() {
	const { data: measurements, error: dbError } = await supabase
		.from('freechlorine')
		.select('*')
		.order('date', { ascending: false });

	if (dbError) {
		throw new Error(dbError.message);
	}

	return measurements;
}
