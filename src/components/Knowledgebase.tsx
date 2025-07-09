import React from 'react';
import { Book, TrendingUp, Anchor } from 'lucide-react';

const articles = [
  {
    icon: <Book className="w-8 h-8 text-[#FF6F3D]" />,
    title: 'Our Vision',
    description: 'To be the leading force for sustainable rail logistics in Europe – through innovative technologies, first-class service and partnership-based collaboration that sets new standards in the industry.'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#FF6F3D]" />,
    title: 'Our Mission',
    description: 'We offer individual, efficient and environmentally friendly rail logistics with the latest infrastructure and the highest level of customer satisfaction.'
  },
  {
    icon: <Anchor className="w-8 h-8 text-[#FF6F3D]" />,
    title: 'Engagements',
    description: 'Committed to quality, transparency, innovation, and fair practices, ensuring every project is handled with precision and dedication.'
  }
];

const Knowledgebase: React.FC = () => {
  return (
    <section id="knowledgebase" className="py-20 bg-primary">
      <div className="container px-4 mx-auto max-width-1140">
        {/* <h2 className="mb-4 text-4xl font-bold text-center text-white">Shakers Transcargo</h2> */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {articles.map((article, index) => (
            <div key={index} className="p-6 transition duration-300 transform bg-white rounded-lg shadow-md hover:scale-105 animate-on-scroll">
              <div className="justify-center mb-4">
                {article.icon}
              </div>
              <h3 className="mb-4 text-xl font-semibold">{article.title}</h3>
              <p className="text-gray-600 ">{article.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Knowledgebase;