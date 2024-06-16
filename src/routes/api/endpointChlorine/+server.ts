import { supabase } from "$lib/dataBase/supabaseClient";
import { json, error, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
    const { data, error: dbError } = await supabase
        .from("freechlorine")
        .select("*")
        .order("date", { ascending: false });

    if (dbError) {
        throw error(500, { message: dbError.message });
    }

    return json(data); 
}

export const POST: RequestHandler = async ({request, body}) => {
    const data = await request.json();
    const { error: dbError } = await supabase
        .from("freechlorine")
        .insert(data);

    if (dbError) {
        throw error(500, { message: `Supabase erro: ${dbError.message}` });
    }

    return json({ message: "Data inserted successfully"})
}