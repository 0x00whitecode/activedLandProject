export const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'Discuss your travel needs and requirements',
    },
    {
      number: '02',
      title: 'Travel Planning',
      description: 'Customize your travel itinerary and arrangements',
    },
    {
      number: '03',
      title: 'Documentation',
      description: 'Handle visa and travel document processing',
    },
    {
      number: '04',
      title: 'Travel Support',
      description: 'Provide assistance throughout your journey',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600">Your journey with us is simple and straightforward</p>
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