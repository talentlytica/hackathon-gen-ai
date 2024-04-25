import { ChatGrouppedT, PropBaseT } from "@/types";
import { Avatar, Box, Group, Stack } from "@mantine/core";
import Chatbox from "./Chatbox";

type PropsChatboxT = {
  datas: ChatGrouppedT[];
  isLoading?: boolean;
  aiLoading?: boolean;
} & PropBaseT

const ChatDialogue = (props: PropsChatboxT) => {
  const { datas, isLoading, aiLoading, ...rest } = props;
  return (
    <Stack>
      {datas.map((chat, index) => {
        return (
          <Group key={index} {...rest} className={`dialogue-message ${rest.className}`}>
            {chat.isBot && <Avatar radius="xl" color="primary" variant="filled"/>}
            <Stack>
              {chat.messages.map((d, i) => (
                <Chatbox key={i} data={d}/>
              ))}
            </Stack>
          </Group>
        )
      })}
    </Stack>
  )
}

export default ChatDialogue;