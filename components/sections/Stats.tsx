const stats = [
  { value: "$500M+", label: "Funded to Businesses" },
  { value: "10,000+", label: "Businesses Helped" },
  { value: "24-48 hrs", label: "Average Funding Time" },
  { value: "95%", label: "Approval Rate" },
];

export default function Stats() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
