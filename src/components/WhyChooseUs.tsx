import React from 'react';
import { Award, Users, Clock, Globe, BookOpen, Headphones } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Industry-Recognized Certificates",
      description: "Earn certificates that are valued by top tech companies worldwide"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Expert Instructors",
      description: "Learn from AI professionals working at Google, Microsoft, and other tech giants"
    },
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      title: "Flexible Learning",
      description: "Study at your own pace with lifetime access to course materials"
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      title: "Global Community",
      description: "Join a worldwide network of AI enthusiasts and professionals"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
      title: "Hands-on Projects",
      description: "Build real-world AI applications and create an impressive portfolio"
    },
    {
      icon: <Headphones className="h-8 w-8 text-teal-600" />,
      title: "24/7 Support",
      description: "Get help whenever you need it with our dedicated support team"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Scalezix Academy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing the best AI education experience with features that set us apart
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Students Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-blue-100">AI Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;