import Form from "./form";

export default function Hero() {
  return (
    <section className="flex p-5 md:p-0 flex-col md:justify-center items-center min-h-screen">
      <div>
        <h4 className="font-black text-center text-4xl md:text-6xl">
          Need a Sharp Rider?
        </h4>
        <p className="md:text-xl mt-2 text-center">
          Our Sharp Riders are always ready to move goods to any location at any
          time.
        </p>
      </div>
      <Form />
    </section>
  );
}
