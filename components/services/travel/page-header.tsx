import Image from 'next/image';

export const PageHeader = () => {
  return (
    <section className="relative min-h-[400px] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80"
          alt="Travel Services"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Services</h1>
        <p className="text-xl max-w-2xl">
          Comprehensive travel solutions for students and professionals worldwide
        </p>
      </div>
    </section>
  );
};