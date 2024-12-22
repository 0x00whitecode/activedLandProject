import Image from 'next/image';

export const PageHeader = () => {
  return (
    <section className="relative min-h-[400px] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
          alt="Education Services"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Educational Consultancy Services</h1>
        <p className="text-xl max-w-2xl">
          Expert guidance to help you navigate your educational journey and achieve your academic goals
        </p>
      </div>
    </section>
  );
};