'use client';

import { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';

export default function ProductList({ initialProducts }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [products] = useState(initialProducts);

    const filteredProducts = useMemo(() => {
        let result = [...products];

        // Filter
        if (searchQuery) {
            const lowerQuery = searchQuery.toLowerCase();
            result = result.filter(p =>
                p.title.toLowerCase().includes(lowerQuery) ||
                p.description.toLowerCase().includes(lowerQuery) ||
                p.category.toLowerCase().includes(lowerQuery)
            );
        }

        // Sort
        if (sortOption === 'price_asc') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'price_desc') {
            result.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'rating') {
            result.sort((a, b) => b.rating.rate - a.rating.rate);
        }

        return result;
    }, [products, searchQuery, sortOption]);

    return (
        <div>
            <SearchBar onSearch={setSearchQuery} onSort={setSortOption} />

            {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                    <h3 className="text-xl text-gray-500">No products found matching your criteria.</h3>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}
