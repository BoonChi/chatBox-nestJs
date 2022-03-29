import { IUserLists } from "@components/UserLists";

export interface IConversationState {
  id: string
  text: string
  time: string
  sent: boolean
}

export interface IStaticProps {
  conversationHistory: IConversationState[];
}

export interface IConversationProps extends IStaticProps {
  currentUser: IUserLists;
}