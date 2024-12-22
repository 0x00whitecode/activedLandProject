export const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'Free consultation to understand your goals and requirements',
    },
    {
      number: '02',
      title: 'Personalized Plan',
      description: 'Develop a tailored strategy for your educational journey',
    },
    {
      number: '03',
      title: 'Application Support',
      description: 'Guidance through the entire application process',
    },
    {
      number: '04',
      title: 'Ongoing Assistance',
      description: 'Continuous support until you achieve your goals',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-600">How we help you achieve your educational goals</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="inline-block bg-primary text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};