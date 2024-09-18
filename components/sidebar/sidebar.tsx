import sampleChatsContent from "@/sample-db/chats.json";
import ActionButtons from "./components/action-buttons";
import Chats from "./components/chats";

const Sidebar = () => (
  <nav className="w-full h-full overflow-hidden">
    <ActionButtons />
    <Chats chats={sampleChatsContent} />
  </nav>
);

export default Sidebar;
