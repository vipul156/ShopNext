import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getProduct(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
        next: { revalidate: 3600 }
    });

    if (!res.ok) {
        if (res.status === 404) return null;
        throw new Error('Failed to fetch product');
    }

    return res.json();
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const product = await getProduct(resolvedParams.id);

    if (!product) {
        return {
            title: 'Product Not Found',
        };
    }

    return {
        title: `${product.title} - ShopNext`,
        description: product.description.slice(0, 160),
    };
}

export default async function ProductPage({ params }) {
    const resolvedParams = await params; // Await params in newer Next.js versions if needed, or structured safely
    const product = await getProduct(resolvedParams.id);

    if (!product) {
        notFound();
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link
                href="/products"
                className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors"
            >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Back to Products
            </Link>

            <div className="grid md:grid-cols-2 gap-12 bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-12 shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="relative h-96 w-full bg-white rounded-xl flex items-center justify-center p-8">
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={500}
                        height={500}
                        className="object-contain h-full w-full"
                        priority
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">{product.category}</span>
                    <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 leading-tight">{product.title}</h1>

                    <div className="flex items-center mb-6 space-x-4">
                        <span className="text-4xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                        <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100">
                            <span className="text-yellow-500 mr-1">★</span>
                            <span className="font-semibold text-yellow-700">{product.rating.rate}</span>
                            <span className="text-gray-400 text-sm ml-1">({product.rating.count} reviews)</span>
                        </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                        {product.description}
                    </p>

                    <div className="flex space-x-4">
                        <button className="flex-1 bg-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/25">
                            Add to Cart
                        </button>
                        <button className="p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
