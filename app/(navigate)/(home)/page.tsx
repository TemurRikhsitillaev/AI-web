import Header from "@/components/header/header";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";
import Input from "./components/input";
import ChatInfo from "./components/chat-info";

export default () => (
  <div className="relative flex h-full w-full overflow-hidden transition-colors z-0">
    <div className="flex-shrink-0 overflow-x-hidden bg-sidebar max-md:!w-0">
      <div className="h-full w-[260px] p-3 flex flex-col">
        <Sidebar />
      </div>
    </div>
    <div className="relative flex h-full max-w-full flex-1 flex-col overflow-hidden">
      <Header />
      <main className="my-auto h-full">
        <section className="flex-1 overflow-hidden">
          <ChatInfo />
        </section>
        <section className="max-w-3xl mx-auto md:px-0 px-4">
          <Input />
        </section>
      </main>
      <Footer />
    </div>
  </div>
);
