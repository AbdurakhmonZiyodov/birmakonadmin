import { useCallback, useMemo, useState } from 'react';
import $api, { baseUrl } from '../../../../api/index';


interface Shop {
    photoBanner: string;
    photo: string;
    name: string;
    isFavorite: boolean;
}

const initialShop: Shop = {
    photoBanner: "",
    photo: "",
    name: "",
    isFavorite: false
}

const useLogoHook = () => {
    const [shop, setShop] = useState<Shop>(initialShop);

    const getRquestShop = useCallback(
        async () => {
            try {
                const res = await $api.get(baseUrl + "/dashboard/shop");
                const data = await res.data.data;
                setShop(data);
            } catch (error) {
                console.log(error);
            }
        }, []
    )

    return useMemo(() => ({
        shop,
        getRquestShop
    }), [shop, getRquestShop]);
}

export default useLogoHook;