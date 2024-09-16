import Header from "@/components/header/header";
import Footer from "@/components/footer";
import Input from "./components/input";
import ChatInfo from "./components/chat-info";

export default () => (
  <>
    <Header />
    <main className="my-auto">
      <section className="container h-[calc(100vh-58px-35px)]">
        <ChatInfo />
        <Input />
      </section>
    </main>
    <Footer />
  </>
);
