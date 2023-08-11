import { FormEvent } from "react";

export default function Form() {
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="mt-10">
      <form
        action=""
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-5 md:grid-cols-2 font-medium"
      >
        <div className="space-y-2">
          <label htmlFor="firstName" className="font-semibold">
            First Name
          </label>
          <input
            name="firstName"
            type="text"
            className="w-full"
            placeholder="John"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="font-semibold">
            Last Name
          </label>
          <input
            name="lastName"
            type="text"
            className="w-full"
            placeholder="Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="w-full"
            placeholder="johndoe@yahoo.com"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="font-semibold">
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            className="w-full"
            placeholder="+2341234567890"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="pickup" className="font-semibold">
            Pickup Location
          </label>
          <input
            name="phone"
            type="tel"
            className="w-full"
            placeholder="+2341234567890"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="dropOff" className="font-semibold">
            Dropoff Location
          </label>
          <input
            name="phone"
            type="tel"
            className="w-full"
            placeholder="+2341234567890"
          />
        </div>
      </form>
    </div>
  );
}
