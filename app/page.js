import Link from "next/link";
import Image from "next/image";

async function getFeaturedProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products?limit=4');
    return res.json();
  } catch (error) {
    return [];
  }
}

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Discover Quality <br /> Without Compromise.
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
              Explore our curated collection of premium products. From fashion to electronics, find everything you need to elevate your lifestyle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
              >
                Shop Now
              </Link>
              <Link
                href="#featured"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
              >
                View Featured
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section id="featured" className="py-20 bg-gray-50 dark:bg-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Products</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Check out some of our top picks this week.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white truncate">{product.title}</h3>
                <p className="text-blue-600 font-semibold mt-2">${product.price}</p>
                <Link href={`/products/${product.id}`} className="mt-4 block text-center text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  View Details &rarr;
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-500">
              View All Products &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-100 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-900 text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Quality Guarantee</h3>
              <p className="text-gray-500">Every product is verified for quality and authenticity.</p>
            </div>
            <div className="p-8 border border-gray-100 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-900 text-center">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Fast Shipping</h3>
              <p className="text-gray-500">Get your orders delivered to your doorstep in no time.</p>
            </div>
            <div className="p-8 border border-gray-100 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-900 text-center">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Easy Returns</h3>
              <p className="text-gray-500">Not satisfied? Return it within 30 days, no questions asked.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
