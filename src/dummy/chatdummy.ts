import { ChatGrouppedT } from "@/types";

export const dummyChatGroupInit:ChatGrouppedT[] = [
  {
    isBot: true,
    name: "Work Buddy",
    messages: [{
      isBot: true,
      name: "Work Buddy",
      message: "Hello, I'm your work-buddy. I will listen to your story and give you advice when you need"
    },{
      isBot: true,
      name: "Work Buddy",
      message: "But, firstly I need to know more about you. Please fill the data form below"
    }]
  }
]