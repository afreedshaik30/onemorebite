import { categories } from "../data/data";

const Category = () => {
  return (
    <section id="services">
      <div className="max-w-[1640px] m-auto px-4 py-12">
        <h1 className="text-orange-600 font-bold text-4xl text-center">
          Our Services
        </h1>
        {/* Category's */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
          {categories.map((item) => {
            return (
              <div
                key={item}
                className="bg-gray-100 rounded-lg p-4 flex justify-between items-center"
              >
                <h2 className="font-bold sm:text-xl">{item.name}</h2>
                <img src={item.image} alt={item.name} className="w-20" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;
