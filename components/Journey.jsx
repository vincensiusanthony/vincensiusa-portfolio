const journey = [
    {
      years: "2022 - 2024",
      role: "Product Admin",
      institution: "Little Palmerhaus",  
    },
    {
      years: "2022",
      role: "Technical Support and Ecommerce",
      institution: "PT BENIKA PRIMATAMA APPLIANSI",  
    },
    {
      years: "2024 - Ongoing",
      role: "Information and System Technology",
      institution: "Cakrawala University",  
    },
    {
      years: "2017 - 2019",
      role: "Interior Design",
      institution: "Tarumanagara University",  
    },
]

const Journey = () => {
  return ( 
    <div>
      <h2 className="h2 mb-8">
        Education & <span className="text-accent">Experience</span>
      </h2>
      {journey.map((item, index) => {
        const { institution, role, years } = item;
        const isLast = index === journey.length - 1;
        return (
          <div key={index} className="flex gap-4 md:gap-12 w-full">
            {/* bullets */}
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-accent rounded-full mt-2" />
              {!isLast && (
                <div className="w-[1px] flex-1 bg-white/10" style={{ minHeight: 40 }} />
              )}
            </div>
            {/* text */}
            <div className="max-w-[500px]">
              <p className="mb-4 text-lg text-white/50">{years}</p>
              <h4 className="h4 mb-2 text-xl">{role}</h4>
              <p className="mb-6 text-lg text-white/50">{institution}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Journey;
