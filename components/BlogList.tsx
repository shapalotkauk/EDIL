import React, { useState, useEffect } from 'react';
import { Search, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import Header from './Header';
import Footer from './Footer';

interface BlogListProps {
  onSelectBlogPost: (id: string) => void;
  onOpenFees?: () => void;
  onSelectService?: (id: string) => void;
  onSelectCondition?: (id: string) => void;
  onContactClick?: () => void;
}

const BlogList: React.FC<BlogListProps> = ({ 
  onSelectBlogPost,
  onOpenFees,
  onSelectService,
  onSelectCondition,
  onContactClick
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Dental Health Blog | Emergency Dentist London";
  }, []);

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col animate-in fade-in duration-300">
      <Header 
        onOpenFees={onOpenFees}
        onSelectService={onSelectService}
        onSelectCondition={onSelectCondition}
        onContactClick={onContactClick}
      />

      {/* Hero Section */}
      <div className="bg-medical-900 pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 relative z-10">Dental Health Insights</h1>
        <p className="text-medical-100 max-w-2xl mx-auto text-lg relative z-10">
          Expert advice, emergency guides, and tips for maintaining a healthy smile.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-grow">
        
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat 
                    ? 'bg-medical-600 text-white shadow-md' 
                    : 'bg-white text-slate-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-medical-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <div 
                key={post.id}
                onClick={() => onSelectBlogPost(post.id)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col h-full group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-medical-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-slate-400 mb-3 space-x-4">
                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                    <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-medical-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center text-medical-600 font-bold text-sm">
                    Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-slate-500 text-lg">No articles found matching your criteria.</p>
              <button 
                onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                className="mt-4 text-medical-600 font-bold hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default BlogList;