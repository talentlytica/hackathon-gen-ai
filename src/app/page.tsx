'use client'

import ChatDialogue from "@/Components/ChatDialogue";
import DateWelcome from "@/Components/DateWelcome";
import FormInit from "@/Components/FormInit";
import IconTab from "@/Components/IconTab";
import { dummyChatGroupInit } from "@/dummy/chatdummy";
import { useAppSelector } from "@/store";
import { TabsList, TabsTab, Text } from "@mantine/core";
import { Box, Button, Flex, Tabs } from "@mantine/core";
import { IconMessages } from "@tabler/icons-react";
import { useState } from "react";

export default function Home() {
  const { user } = useAppSelector((state) => state.global);

  const [numState, setState] = useState<number>(4);//user ? 3:1);
  const [activeTab, setActiveTab] = useState<string | null>('curhat');

  const nextState = () => {
    setState(numState+1);
  }

  return (
    <Box className="workspace">
      <Box className="content-box">
        <Tabs value={activeTab} onChange={setActiveTab} color="primary">
          <Tabs.Panel value="curhat">
            {numState === 4 && <DateWelcome />}
            <ChatDialogue datas={dummyChatGroupInit}/>
          </Tabs.Panel>
          <Tabs.Panel value="colleague">colleague panel</Tabs.Panel>
          <Tabs.Panel value="insight">insight panel</Tabs.Panel>
          
          <Box className="bottom-content">
            {numState == 1 ? 
            <FormInit onSuccess={nextState}/>: 
            numState <= 3 ? 
            <Flex justify={"center"}>
              <Button onClick={nextState} color="primary">
                {numState === 2 ? "Take Assesment": "I Understand"}
              </Button>
            </Flex>
            : 
            <TabsList grow justify="center">
              <TabsTab value="curhat"><IconTab type="curhat"/></TabsTab>
              <TabsTab value="colleague"><IconTab type="colleague"/></TabsTab>
              <TabsTab value="insight"><IconTab type="insight"/></TabsTab>
            </TabsList>}
          </Box>
        </Tabs>
      </Box>
    </Box>
  );
}
