
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  // Sample blog post data - in a real app, this would be fetched based on the slug
  const blogPosts: Record<string, any> = {
    'online-dating-tips-india': {
      title: 'Top 10 Online Dating Tips for Indians in 2024',
      content: `
        <p>Online dating in India has evolved significantly over the years. Here are the top tips to help you succeed in finding meaningful connections.</p>
        
        <h2>1. Create an Authentic Profile</h2>
        <p>Your profile is your first impression. Be genuine, use recent photos, and write a bio that reflects your true personality.</p>
        
        <h2>2. Be Clear About Your Intentions</h2>
        <p>Whether you're looking for casual dating or marriage, be upfront about your intentions to attract like-minded individuals.</p>
        
        <h2>3. Use Quality Photos</h2>
        <p>Invest in good profile pictures. They should be clear, recent, and show your face prominently.</p>
        
        <h2>4. Start Meaningful Conversations</h2>
        <p>Move beyond "Hi" and "Hello". Ask about their interests, share something about yourself, and show genuine interest.</p>
        
        <h2>5. Respect Cultural Values</h2>
        <p>Understand and respect the cultural background of your matches. This shows maturity and genuine interest.</p>
        
        <p>Remember, online dating is about building genuine connections. Take your time, be patient, and stay true to yourself.</p>
      `,
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Dating Tips',
      author: 'Peradel Team'
    },
    'matrimony-vs-dating-apps': {
      title: 'Matrimony vs Dating Apps: Which is Right for You?',
      content: `
        <p>Choosing between matrimony platforms and dating apps can be confusing. Let's break down the differences to help you make the right choice.</p>
        
        <h2>Matrimony Platforms</h2>
        <p>Traditional matrimony platforms focus on long-term relationships and marriage. They typically involve family participation and detailed profiles.</p>
        
        <h2>Dating Apps</h2>
        <p>Dating apps offer more casual interactions and allow you to explore different types of relationships before committing.</p>
        
        <h2>The Peradel Advantage</h2>
        <p>At Peradel, we combine the best of both worlds. You can specify your intentions - whether dating or marriage - and find matches accordingly.</p>
        
        <p>The key is being honest about what you're looking for and choosing a platform that aligns with your goals.</p>
      `,
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Relationships',
      author: 'Peradel Team'
    },
    'affordable-dating-platforms': {
      title: 'Why Affordable Dating Platforms are the Future',
      content: `
        <p>The dating industry is evolving, and affordable platforms are leading the change. Here's why value-for-money is the future.</p>
        
        <h2>Accessibility for All</h2>
        <p>Love shouldn't be limited by your budget. Affordable platforms make quality matchmaking accessible to everyone.</p>
        
        <h2>Focus on Genuine Connections</h2>
        <p>When platforms are affordable, they attract users genuinely interested in finding connections, not just those who can afford premium prices.</p>
        
        <h2>Innovation Through Efficiency</h2>
        <p>Affordable platforms innovate to provide maximum value, leading to better user experiences and more effective matching.</p>
        
        <p>At Peradel, we believe that everyone deserves access to quality matchmaking services, regardless of their economic background.</p>
      `,
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'Industry Insights',
      author: 'Peradel Team'
    }
  };

  const post = blogPosts[slug || ''];

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-amber-600 hover:text-amber-700">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - Peradel Blog</title>
        <meta name="description" content={post.content.substring(0, 160)} />
        <meta name="keywords" content={`${post.category.toLowerCase()}, dating tips, relationships, peradel`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.content.substring(0, 160)} />
        <meta property="og:type" content="article" />
        <meta name="article:author" content={post.author} />
        <meta name="article:published_time" content={post.date} />
      </Helmet>
      
      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <Link to="/blog" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Blog
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <article className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full">
                  {post.category}
                </span>
              </div>
              
              <h1 className="font-playfair text-2xl md:text-4xl font-bold text-slate-900 mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div>
                  <span>By {post.author}</span>
                </div>
              </div>
              
              <button className="flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors">
                <Share2 className="w-4 h-4" />
                Share Article
              </button>
            </header>

            {/* Article Content */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div 
                className="prose prose-lg max-w-none font-inter"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Article Footer */}
            <footer className="mt-12 p-8 bg-white rounded-2xl shadow-lg">
              <div className="text-center">
                <h3 className="font-playfair text-xl font-semibold text-slate-900 mb-4">
                  Ready to Find Your Perfect Match?
                </h3>
                <p className="font-inter text-slate-600 mb-6">
                  Join Peradel today and start your journey to meaningful connections.
                </p>
                <Link
                  to="/"
                  className="inline-block bg-gradient-to-r from-slate-900 to-amber-400 text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </footer>
          </article>
        </main>
      </div>
    </>
  );
};

export default BlogPost;
