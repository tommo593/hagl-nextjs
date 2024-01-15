import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-row border-red-500">
      <div>
        <Image src="/house1.jpg" alt="House 1" width={300} height={300} />
        <Image src="/house2.jpg" alt="House 2" width={300} height={300} />
        <Image src="/house3.jpg" alt="House 2" width={300} height={300} />
        <div>
          <p>Giving you the ability to</p>
          <strong>set your own price</strong>
        </div>
      </div>
    </section>
  );
};

export default Hero;
