import { createDirectus, rest, readItems } from '@directus/sdk';

const client = createDirectus(import.meta.env.PUBLIC_DIRECTUS_BASE_URL).with(rest());


export const getDirectusItems = async (item) => {
    const result = await client.request(
        readItems(item, {
            fields: ['*'],
        })
    );

    return result;
}