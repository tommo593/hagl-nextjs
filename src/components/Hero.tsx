import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-row justify-between py-3 px-20">
        <Image
          src="/house1.jpg"
          alt="House 1"
          width={300}
          height={300}
          className="rounded-2xl"
        />
        <Image
          src="/house2.jpg"
          alt="House 2"
          width={300}
          height={300}
          className="rounded-2xl"
        />
        <div className="relative">
          <Image
            src="/house3.jpg"
            alt="House 2"
            width={300}
            height={300}
            className="rounded-2xl"
          />
          <p className="absolute text-black bottom-5 right-5">
            Giving you the ability to
            <strong> set your own price</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
