// Updated FeatureCard component
const FeatureCard = ({ icon, title, description, image }) => {
  return (
    <div className="bg-slate-100 rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow space-y-3 md:space-y-5 h-full">
      <div className="mt-auto">
        <img
          src={image}
          alt={`${title} illustration`}
          className="w-full h-36 md:h-48 object-cover rounded-lg"
        />
      </div>

      <div className="flex items-center space-x-3">
        <div>{icon}</div>
        <h3 className="text-lg md:text-xl font-bold">{title}</h3>
      </div>
      <p className="text-[#545454] text-sm md:text-base">{description}</p>
    </div>
  );
};

export default FeatureCard;
