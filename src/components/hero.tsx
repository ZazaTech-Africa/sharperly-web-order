import Form from "./form";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen">
      <div>
        <h4 className="font-black text-center text-6xl">Need a Sharp Rider?</h4>
        <p className="text-xl mt-2 text-center">
          Our Sharp Riders are always ready to move goods to any location at any
          time.
        </p>
      </div>
      <Form />
    </section>
  );
}
