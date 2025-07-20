import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "AI Engineer at Google",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Scalezix Academy transformed my career completely. The hands-on approach and expert instructors helped me land my dream job at Google. The AI courses are incredibly comprehensive and practical.",
      rating: 5,
      course: "Deep Learning Specialization"
    },
    {
      name: "Michael Chen",
      role: "ML Research Scientist at Microsoft",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "The quality of education at Scalezix is outstanding. I went from knowing nothing about AI to becoming a research scientist. The projects and mentorship made all the difference.",
      rating: 5,
      course: "Machine Learning Mastery"
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist at Tesla",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "The practical approach to learning AI at Scalezix is unmatched. Working on real-world projects gave me the confidence to apply for positions at top tech companies.",
      rating: 5,
      course: "Computer Vision Fundamentals"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from successful AI professionals who transformed their careers with our courses
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="text-center lg:text-left">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 mx-auto lg:mx-0 mb-4"
                />
                <div className="mb-4">
                  <div className="font-bold text-gray-900 text-lg mb-1">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-blue-600 font-medium mb-2">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonials[currentTestimonial].course}
                  </div>
                </div>
                <div className="flex justify-center lg:justify-start">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;