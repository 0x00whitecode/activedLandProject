import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

const articles = [
  {
    title: 'How to Choose the Right University',
    excerpt: 'A comprehensive guide to selecting the perfect university for your academic goals.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80',
    category: 'Education',
    readTime: '5 min read',
  },
  {
    title: 'Scholarship Application Tips',
    excerpt: 'Expert advice on crafting winning scholarship applications.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80',
    category: 'Scholarships',
    readTime: '7 min read',
  },
  {
    title: 'Student Visa Guide 2024',
    excerpt: 'Updated information on student visa requirements and application processes.',
    image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&q=80',
    category: 'Travel',
    readTime: '6 min read',
  },
];

export const ArticlesGrid = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <Badge>{article.category}</Badge>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Link
                  href="#"
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Read More →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};