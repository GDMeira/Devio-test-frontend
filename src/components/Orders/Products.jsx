import { Flex, useDisclosure } from "@chakra-ui/react";
import useProductsContext from "../../hooks/useProductsContext";
import { bgColors, filterProducts } from "../../utils/constants";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import OrderModal from "../OrderModal/OrderModal";
import styled from "styled-components";

export default function Products() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { productsData, productsFilter } = useProductsContext();
    const [productsToRender, setProductsToRender] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [bgColor, setBgColor] = useState(undefined);

    useEffect(() => {
        setProductsToRender(filterProducts(productsData, productsFilter));
    }, [productsFilter]);


    return (
        <>
            <FlexSC justifyContent={"space-between"} w={'100%'} wrap={"wrap"}>
                {productsToRender.length > 0 && productsToRender.map((product, i) => <ProductCard
                    key={product.id}
                    product={product}
                    bgColor={bgColors[Math.floor((i % 12) / 4)]}
                    setSelectedProduct={setSelectedProduct}
                    onOpen={onOpen}
                    setBgColor={setBgColor}
                />)}
            </FlexSC>
            <OrderModal 
                isOpen={isOpen} onClose={onClose} 
                selectedProduct={selectedProduct} bgColor={bgColor}
            />
        </>
    )
}

const FlexSC = styled(Flex)`
    @media (max-width: 700px) {
        justify-content: space-around !important;
    }
`