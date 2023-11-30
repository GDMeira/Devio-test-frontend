import { Button, Flex, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useState } from "react";
import styled from "styled-components";
import Logo from "../components/Logo";

export function HomePage() {
    const [tabIndex, setTabIndex] = useState(0)

    const handleTabsChange = (index) => {
        setTabIndex(index)
    }

    return (
        <Container>
            <Flex position={'absolute'} top={0} alignItems={'center'}>

            <Tabs
                index={tabIndex} onChange={handleTabsChange}
                w={'100dvw'} align="end"
                variant={'unstyled'}
            >
                <TabListSC bgColor={'#125C13'} h={'7dvh'} pl={5} pr={10}>
                    <Logo/>
                    <Spacer />
                    <TabSC>Pedidos</TabSC>
                    <TabSC>Cozinha</TabSC>
                    <TabSC>Retirada</TabSC>
                </TabListSC>
                <TabPanels>
                    <TabPanelSC>
                        <p>Click the tabs or pull the slider around</p>
                    </TabPanelSC>
                    <TabPanelSC>
                        <p>Yeah yeah. What's up?</p>
                    </TabPanelSC>
                    <TabPanelSC>
                        <p>Oh, hello there.</p>
                    </TabPanelSC>
                </TabPanels>
            </Tabs>
        </Flex>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100dvh;
    width: 100dvw;
`
const TabListSC = styled(TabList)`
    @media(max-width: 700px) {
        padding: 0 !important;
    }
`;

const TabSC = styled(Tab).attrs(() => ({
    _selected: { bg: '#0C400D' }
}))`
    color: #fff;
    font-size: 20px !important;
    border-radius: 10px;
    height: 4dvh;
    margin: 1.5dvh 1dvw;
    
    @media(max-width: 700px) {
        margin: 1.5dvh 0.5dvw;
        font-size: 12px !important;
    }
`;

const TabPanelSC = styled(TabPanel)`
    min-height: 93dvh !important;
    min-width: 90dvw !important;
    padding: 10dvh 10dvw 0 10dvw !important;

    @media(max-width: 700px) {
        padding: 5dvh 0 0 0 !important;
    }
`;