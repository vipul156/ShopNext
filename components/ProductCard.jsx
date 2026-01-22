import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
    return (
        <Link href={`/products/${product.id}`} className="group">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <div className="relative h-64 w-full bg-white p-4 flex items-center justify-center">
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={300}
                        height={300}
                        className="object-contain h-full w-full group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                    <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">
                        {product.category}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 line-clamp-2 mb-2 group-hover:text-blue-500 transition-colors">
                        {product.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 mb-4 flex-grow">
                        {product.description}
                    </p>
                    <div className="flex justify-between items-center mt-auto">
                        <span className="text-xl font-bold text-green-600">
                            ${product.price.toFixed(2)}
                        </span>
                        <div className="flex items-center text-yellow-500 text-sm">
                            <span className="mr-1">★</span>
                            <span>{product.rating?.rate}</span>
                            <span className="text-gray-400 ml-1">({product.rating?.count})</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
