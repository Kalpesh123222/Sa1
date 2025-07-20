import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import PaymentModal from '../components/PaymentModal';
import toast from 'react-hot-toast';
import { 
  Play, 
  Clock, 
  Users, 
  Star, 
  Award, 
  Download, 
  Globe, 
  CheckCircle, 
  Calendar,
  BookOpen,
  Target,
  TrendingUp,
  Shield,
  Headphones,
  ChevronDown,
  ChevronUp,
  User,
  Briefcase,
  GraduationCap
} from 'lucide-react';

const CourseSingle = () => {
  const { courseId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [paymentModal, setPaymentModal] = useState(false);

  // Mock course data - in real app, this would come from API based on courseId
  const course = {
    id: 1,
    title: "Complete Machine Learning Mastery with Python",
    subtitle: "Master Machine Learning from Basics to Advanced with Real-World Projects",
    rating: 4.8,
    reviews: 2847,
    students: 15420,
    duration: "12 weeks",
    level: "Beginner to Advanced",
    language: "English",
    price: 5000,
    originalPrice: 7000,
    discount: 50,
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
    videoPreview: "#",
    instructor: {
      name: "Dr. Sarah Mitchell",
      title: "Senior ML Engineer at Google",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150",
      experience: "8+ years",
      students: "50,000+",
      courses: 12,
      rating: 4.9
    },
    highlights: [
      "100+ Hours of Content",
      "50+ Real-World Projects",
      "Industry-Recognized Certificate",
      "Lifetime Access",
      "24/7 Support",
      "Job Placement Assistance"
    ],
    learningOutcomes: [
      "Master Python for Machine Learning",
      "Build and Deploy ML Models",
      "Work with Real Datasets",
      "Understand Deep Learning Fundamentals",
      "Create Portfolio Projects",
      "Prepare for ML Interviews"
    ],
    curriculum: [
      {
        title: "Introduction to Machine Learning",
        duration: "8 hours",
        lessons: 12,
        topics: [
          "What is Machine Learning?",
          "Types of Machine Learning",
          "Setting up Python Environment",
          "Introduction to NumPy and Pandas",
          "Data Preprocessing Basics"
        ]
      },
      {
        title: "Supervised Learning Algorithms",
        duration: "15 hours",
        lessons: 18,
        topics: [
          "Linear Regression",
          "Logistic Regression",
          "Decision Trees",
          "Random Forest",
          "Support Vector Machines",
          "Model Evaluation Metrics"
        ]
      },
      {
        title: "Unsupervised Learning",
        duration: "12 hours",
        lessons: 15,
        topics: [
          "K-Means Clustering",
          "Hierarchical Clustering",
          "Principal Component Analysis",
          "Association Rules",
          "Anomaly Detection"
        ]
      },
      {
        title: "Deep Learning Fundamentals",
        duration: "20 hours",
        lessons: 25,
        topics: [
          "Neural Networks Basics",
          "Backpropagation",
          "Convolutional Neural Networks",
          "Recurrent Neural Networks",
          "Transfer Learning"
        ]
      },
      {
        title: "Real-World Projects",
        duration: "25 hours",
        lessons: 20,
        topics: [
          "House Price Prediction",
          "Customer Segmentation",
          "Image Classification",
          "Sentiment Analysis",
          "Recommendation System"
        ]
      }
    ],
    requirements: [
      "Basic Python knowledge (variables, loops, functions)",
      "High school level mathematics",
      "Computer with internet connection",
      "Willingness to learn and practice"
    ],
    features: [
      {
        icon: <Clock className="h-6 w-6" />,
        title: "Self-Paced Learning",
        description: "Learn at your own pace with lifetime access"
      },
      {
        icon: <Award className="h-6 w-6" />,
        title: "Industry Certificate",
        description: "Get recognized certification upon completion"
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Community Support",
        description: "Join 15,000+ students in our learning community"
      },
      {
        icon: <Headphones className="h-6 w-6" />,
        title: "24/7 Support",
        description: "Get help whenever you need it"
      }
    ]
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'instructor', label: 'Instructor' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' }
  ];

  const toggleModule = (index: number) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  const handleEnrollClick = () => {
    setPaymentModal(true);
  };

  const handlePaymentSuccess = () => {
    toast.success('Successfully enrolled! Welcome to the course!');
  };

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <SEOHead
        title={course.title}
        description={course.subtitle}
        keywords="machine learning course, python programming, AI training, data science course"
      />

      {/* Course Header */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Info */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                  {course.discount}% OFF
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-blue-100 mb-6">{course.subtitle}</p>
              
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="font-semibold mr-2">{course.rating}</span>
                  <span className="text-blue-200">({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-blue-300 mr-2" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-300 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-blue-300 mr-2" />
                  <span>{course.level}</span>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <img
                  src={course.instructor.image}
                  alt={course.instructor.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold">{course.instructor.name}</div>
                  <div className="text-blue-200 text-sm">{course.instructor.title}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {course.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    <span className="text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Preview Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-24">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-40 transition-opacity">
                    <Play className="h-16 w-16 text-white" />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl font-bold text-gray-900">₹{course.price}</span>
                      <span className="text-lg text-gray-500 line-through">₹{course.originalPrice}</span>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      Limited time offer - {course.discount}% off!
                    </div>
                  </div>

                  <button 
                    onClick={handleEnrollClick}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 mb-4"
                  >
                    Enroll Now
                  </button>

                  <button className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 mb-6">
                    Add to Wishlist
                  </button>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Level:</span>
                      <span className="font-medium">{course.level}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Language:</span>
                      <span className="font-medium">{course.language}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Certificate:</span>
                      <span className="font-medium text-green-600">Yes</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-center text-sm text-gray-600 mb-4">
                      30-day money-back guarantee
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center">
                        <Shield className="h-4 w-4 mr-1" />
                        Secure Payment
                      </div>
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 mr-1" />
                        Lifetime Access
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="bg-white rounded-lg shadow-sm mb-8">
                <div className="border-b border-gray-200">
                  <nav className="flex space-x-8 px-6">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-4 px-1 border-b-2 font-medium text-sm ${
                          activeTab === tab.id
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="p-6">
                  {/* Overview Tab */}
                  {activeTab === 'overview' && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          This comprehensive Machine Learning course is designed to take you from a complete beginner to an advanced practitioner. 
                          You'll learn the fundamental concepts, algorithms, and practical applications of machine learning using Python. 
                          Through hands-on projects and real-world examples, you'll build a strong foundation in ML that will prepare you for a successful career in data science and AI.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">What You'll Learn</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {course.learningOutcomes.map((outcome, index) => (
                            <div key={index} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h4>
                        <ul className="space-y-2">
                          {course.requirements.map((requirement, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{requirement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Course Features</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {course.features.map((feature, index) => (
                            <div key={index} className="flex items-start">
                              <div className="text-blue-600 mr-4 mt-1">
                                {feature.icon}
                              </div>
                              <div>
                                <h5 className="font-semibold text-gray-900 mb-1">{feature.title}</h5>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Curriculum Tab */}
                  {activeTab === 'curriculum' && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h3>
                      <div className="space-y-4">
                        {course.curriculum.map((module, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg">
                            <button
                              onClick={() => toggleModule(index)}
                              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                            >
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                                  {index + 1}
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900">{module.title}</h4>
                                  <div className="text-sm text-gray-500 mt-1">
                                    {module.lessons} lessons • {module.duration}
                                  </div>
                                </div>
                              </div>
                              {expandedModule === index ? (
                                <ChevronUp className="h-5 w-5 text-gray-400" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-gray-400" />
                              )}
                            </button>
                            
                            {expandedModule === index && (
                              <div className="px-6 pb-4 border-t border-gray-100">
                                <ul className="space-y-2 mt-4">
                                  {module.topics.map((topic, topicIndex) => (
                                    <li key={topicIndex} className="flex items-center text-sm text-gray-600">
                                      <Play className="h-4 w-4 text-gray-400 mr-3" />
                                      {topic}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Instructor Tab */}
                  {activeTab === 'instructor' && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Meet Your Instructor</h3>
                      <div className="flex items-start space-x-6">
                        <img
                          src={course.instructor.image}
                          alt={course.instructor.name}
                          className="w-24 h-24 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-gray-900 mb-2">{course.instructor.name}</h4>
                          <p className="text-blue-600 font-medium mb-4">{course.instructor.title}</p>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-gray-900">{course.instructor.rating}</div>
                              <div className="text-sm text-gray-600">Instructor Rating</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-gray-900">{course.instructor.students}</div>
                              <div className="text-sm text-gray-600">Students</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-gray-900">{course.instructor.courses}</div>
                              <div className="text-sm text-gray-600">Courses</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-gray-900">{course.instructor.experience}</div>
                              <div className="text-sm text-gray-600">Experience</div>
                            </div>
                          </div>

                          <p className="text-gray-600 leading-relaxed">
                            Dr. Sarah Mitchell is a Senior Machine Learning Engineer at Google with over 8 years of experience in the field. 
                            She has worked on various ML projects including recommendation systems, computer vision, and natural language processing. 
                            Sarah holds a PhD in Computer Science from Stanford University and has published numerous research papers in top-tier conferences. 
                            She is passionate about teaching and has helped thousands of students transition into successful AI careers.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Reviews Tab */}
                  {activeTab === 'reviews' && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Reviews</h3>
                      <div className="mb-8">
                        <div className="flex items-center mb-4">
                          <div className="text-4xl font-bold text-gray-900 mr-4">{course.rating}</div>
                          <div>
                            <div className="flex items-center mb-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <div className="text-gray-600">{course.reviews} reviews</div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {[
                          {
                            name: "John Smith",
                            rating: 5,
                            date: "2 weeks ago",
                            review: "Excellent course! The instructor explains complex concepts in a very understandable way. The projects are practical and helped me build a strong portfolio."
                          },
                          {
                            name: "Maria Garcia",
                            rating: 5,
                            date: "1 month ago",
                            review: "This course exceeded my expectations. I was able to land a ML engineer job within 3 months of completing it. Highly recommended!"
                          },
                          {
                            name: "David Chen",
                            rating: 4,
                            date: "2 months ago",
                            review: "Great content and well-structured curriculum. The support from the community and instructors is amazing. Worth every penny!"
                          }
                        ].map((review, index) => (
                          <div key={index} className="border-b border-gray-200 pb-6">
                            <div className="flex items-center mb-3">
                              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                                <User className="h-5 w-5 text-gray-600" />
                              </div>
                              <div>
                                <div className="font-semibold text-gray-900">{review.name}</div>
                                <div className="flex items-center">
                                  <div className="flex items-center mr-2">
                                    {[...Array(review.rating)].map((_, i) => (
                                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                    ))}
                                  </div>
                                  <span className="text-sm text-gray-500">{review.date}</span>
                                </div>
                              </div>
                            </div>
                            <p className="text-gray-700">{review.review}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* FAQ Tab */}
                  {activeTab === 'faq' && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                      <div className="space-y-4">
                        {[
                          {
                            question: "Is this course suitable for beginners?",
                            answer: "Yes, this course is designed for beginners. We start with the basics and gradually progress to advanced topics. Basic Python knowledge is helpful but not required."
                          },
                          {
                            question: "How long do I have access to the course?",
                            answer: "You get lifetime access to the course content, including all future updates and additions."
                          },
                          {
                            question: "Do I get a certificate upon completion?",
                            answer: "Yes, you'll receive an industry-recognized certificate upon successful completion of the course and all projects."
                          },
                          {
                            question: "Is there any job placement assistance?",
                            answer: "Yes, we provide job placement assistance including resume review, interview preparation, and connections to our hiring partners."
                          },
                          {
                            question: "What if I'm not satisfied with the course?",
                            answer: "We offer a 30-day money-back guarantee. If you're not satisfied, you can request a full refund within 30 days of purchase."
                          }
                        ].map((faq, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-6">
                            <h4 className="font-semibold text-gray-900 mb-3">{faq.question}</h4>
                            <p className="text-gray-600">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Related Courses */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Related Courses</h4>
                <div className="space-y-4">
                  {[
                    {
                      title: "Deep Learning Specialization",
                      price: 5000,
                      rating: 4.9,
                      image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=200"
                    },
                    {
                      title: "Natural Language Processing",
                      price: 5000,
                      rating: 4.7,
                      image: "https://images.pexels.com/photos/8386439/pexels-photo-8386439.jpeg?auto=compress&cs=tinysrgb&w=200"
                    },
                    {
                      title: "Computer Vision Fundamentals",
                      price: 5000,
                      rating: 4.8,
                      image: "https://images.pexels.com/photos/8386423/pexels-photo-8386423.jpeg?auto=compress&cs=tinysrgb&w=200"
                    }
                  ].map((relatedCourse, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <img
                        src={relatedCourse.image}
                        alt={relatedCourse.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-900 text-sm mb-1">{relatedCourse.title}</h5>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                            <span className="text-sm text-gray-600">{relatedCourse.rating}</span>
                          </div>
                          <span className="font-semibold text-blue-600">₹{relatedCourse.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Stats */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Course Statistics</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Enrollments</span>
                    <span className="font-semibold">{course.students}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Average Rating</span>
                    <span className="font-semibold">{course.rating}/5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Completion Rate</span>
                    <span className="font-semibold">87%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={paymentModal}
        onClose={() => setPaymentModal(false)}
        courseTitle={course.title}
        coursePrice={course.price}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </div>
  );
};

export default CourseSingle;