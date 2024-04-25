import { ChatDataT, PropBaseT } from "@/types";
import { Box } from "@mantine/core";

type PropsChatboxT = {
  data: ChatDataT
} & PropBaseT

const Chatbox = (props: PropsChatboxT) => {
  const { data, ...rest } = props;
  return (
    <Box className={`chat-box ${data.isBot && "bot-message"} ${rest.className}`}>
      {data.message}
    </Box>
  )
}

export default Chatbox;