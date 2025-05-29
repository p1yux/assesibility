import Image from "next/image";
import Link from "next/link";

const ServicesHero = () => {
  return (
  
       <section className="relative w-[80%] h-[350px] left-[10%] mb-8">
      {/* Background Image */}
      <Image 
      className="rounded-3xl"
        src="/images/service-herosection.png" 
        alt="Person using assistive technology" 
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-opacity-70 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            How We Make a Difference
          </h1>
        </div>
      </div>
    </section>
    
   
  );
};

export default ServicesHero; 