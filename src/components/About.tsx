import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, Lightbulb, Award, ArrowRight, CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Mission-Driven",
      description: "Empowering the next generation of AI professionals through comprehensive education"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Expert Instructors",
      description: "Learn from industry leaders and experienced AI practitioners"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-indigo-600" />,
      title: "Practical Learning",
      description: "Hands-on projects and real-world AI applications in every course"
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: "Industry Recognition",
      description: "Globally recognized certifications that advance your career"
    }
  ];

  const achievements = [
    { number: "500+", label: "Students Trained" },
    { number: "100+", label: "AI Courses" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "50+", label: "Countries Reached" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Shaping the Future of AI Education
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Scalezix Academy, we believe that artificial intelligence is not just the future – it's the present. 
              Our comprehensive AI education platform is designed to transform curious minds into skilled AI practitioners.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With a focus on practical application, industry relevance, and cutting-edge curriculum, we prepare 
              our students for success in the rapidly evolving AI landscape.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Comprehensive Learning Path",
                "Industry-Relevant Projects",
                "Expert Mentorship",
                "Career Support"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            
            <Link
              to="/about"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="AI Education"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
              <div className="text-2xl font-bold">2019</div>
              <div className="text-blue-100">Founded</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h3>
            <p className="text-gray-600">
              Real results from our commitment to excellence in AI education
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;