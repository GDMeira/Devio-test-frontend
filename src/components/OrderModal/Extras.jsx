import { useEffect } from "react";
import useProductsContext from "../../hooks/useProductsContext"
import ExtraCard from "./ExtraCard";

export default function Extras({ selectedExtras, setSelectedExtras, productType }) {
    const { extrasData } = useProductsContext();
    const extrasForThis = extrasData[productType];

    useEffect(() => {
        const newExtras = {};
        extrasForThis.forEach(element => newExtras[element.id] = false);
        setSelectedExtras(newExtras);
    }, [])

    return (
        <>
            {extrasForThis.map(extra => <ExtraCard key={extra.id} extra={extra} selectedExtras={selectedExtras} setSelectedExtras={setSelectedExtras} />)}
        </>
    )
}