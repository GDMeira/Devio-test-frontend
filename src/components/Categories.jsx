import useProductsContext from "../hooks/useProductsContext";
import { foodCategories } from "../utils/constants";

export default function Categories() {
    const { productsData } = useProductsContext();

    return (
        <>
            {Object.keys(productsData).map(category => <p key={category}>{foodCategories[category]}</p>)}
        </>
    )
}