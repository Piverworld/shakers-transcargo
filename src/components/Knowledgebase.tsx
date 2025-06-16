import React from 'react';
import { Book, TrendingUp, Anchor } from 'lucide-react';

const articles = [
  {
    icon: <Book className="w-8 h-8 text-[#FF6F3D]" />,
    title: 'Shipping Basics',
    description: 'Learn the fundamentals of international shipping and logistics.'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#FF6F3D]" />,
    title: 'Industry Trends',
    description: 'Stay updated with the latest trends shaping the shipping industry.'
  },
  {
    icon: <Anchor className="w-8 h-8 text-[#FF6F3D]" />,
    title: 'Regulatory Updates',
    description: 'Keep informed about the latest maritime regulations and compliance requirements.'
  }
];

const Knowledgebase: React.FC = () => {
  return (
    <section id="knowledgebase" className="py-20 bg-primary">
      <div className="container max-width-1140 mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Learn About Shipping</h2>
        <p className="text-xl text-center text-white mb-12">Stay Informed with the Latest in the Shipping Industry</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 animate-on-scroll">
              <div className="justify-center mb-4">
                {article.icon}
              </div>
              <h3 className="text-xl font-semibold  mb-4">{article.title}</h3>
              <p className="text-gray-600 ">{article.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center animate-on-scroll">
          <a href="#" className="inline-block bg-[#FF6F3D] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#FF8F5D] transition duration-300">
            Explore More Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Knowledgebase;