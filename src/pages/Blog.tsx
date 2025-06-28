
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Sample blog posts - in a real app, this would come from a CMS or API
  const blogPosts = [
    {
      slug: 'online-dating-tips-india',
      title: 'Top 10 Online Dating Tips for Indians in 2024',
      excerpt: 'Discover the best practices for online dating success in India. From creating the perfect profile to making meaningful connections.',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Dating Tips'
    },
    {
      slug: 'matrimony-vs-dating-apps',
      title: 'Matrimony vs Dating Apps: Which is Right for You?',
      excerpt: 'Understanding the differences between matrimony platforms and dating apps to make the right choice for your relationship goals.',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Relationships'
    },
    {
      slug: 'affordable-dating-platforms',
      title: 'Why Affordable Dating Platforms are the Future',
      excerpt: 'Exploring how value-for-money dating platforms are revolutionizing the Indian matchmaking industry.',
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'Industry Insights'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Peradel | Dating Tips, Relationship Advice & Industry Insights</title>
        <meta name="description" content="Read the latest dating tips, relationship advice, and industry insights from Peradel. Your guide to successful online dating in India." />
        <meta name="keywords" content="dating tips, relationship advice, matrimony tips, online dating india, dating blog" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-playfair text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                Our Blog
              </h1>
              <p className="font-inter text-lg text-slate-600 max-w-2xl mx-auto">
                Dating tips, relationship advice, and insights to help you find meaningful connections.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="font-playfair text-xl font-semibold text-slate-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="font-inter text-slate-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mt-12 text-center">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
                Stay Updated
              </h2>
              <p className="font-inter text-slate-600 mb-6">
                Subscribe to our newsletter for the latest dating tips and relationship advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none"
                />
                <button className="bg-gradient-to-r from-slate-900 to-amber-400 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Blog;
