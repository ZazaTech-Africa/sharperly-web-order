import Form from "./components/form";
import Header from "./components/header";
import Hero from "./components/hero";

export default function App() {
  return (
    <main className="w-screen md:px-20 overflow-x-hidden relative p-5 min-h-screen">
      <Header />
      <Hero />
    </main>
  );
}
