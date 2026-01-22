import { Suspense } from 'react';
import ProductList from '@/components/ProductList';

async function getProducts() {
    const res = await fetch('https://fakestoreapi.com/products', {
        // Revalidate every hour
        next: { revalidate: 3600 }
    });

    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }

    return res.json();
}

export const metadata = {
    title: 'All Products - ShopNext',
    description: 'Browse our extensive collection of products.',
};

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">All Products</h1>
                <p className="text-gray-500">Browse our collection of {products.length} products</p>
            </div>

            <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-pulse">{[...Array(8)].map((_, i) => <div key={i} className="h-64 bg-gray-200 rounded-xl"></div>)}</div>}>
                <ProductList initialProducts={products} />
            </Suspense>
        </div>
    );
}
