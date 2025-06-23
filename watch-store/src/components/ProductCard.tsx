import { useEffect } from "react";
import { useProductsStore } from "../store/store";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Product {
    id: string;
    title: string;
    price: number;
    img: {
        black: string;
        brown?: string;
        red?: string;
        white?: string;
        golden?: string;
        [key: string]: string | undefined;
    };
}

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {

    const { productStates, setProductImage, setProductHover, initializeProduct } = useProductsStore();

    const productState = productStates[product.id] || {};
    const currentImage = productState.currentImage || product.img.black;
    const hover = productState.hover || false;
    const images = Object.values(product.img);

    useEffect(() => {
        initializeProduct(product.id, product.img.black);
    }, [product.id, product.img.black, initializeProduct]);

    const handlePrev = () => {
        const currentIndex = images.indexOf(currentImage);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        const prevImage = images[prevIndex];
        if (prevImage) {
            setProductImage(product.id, prevImage);
        }
    };

    const handleNext = () => {
        const currentIndex = images.indexOf(currentImage);
        const nextIndex = (currentIndex + 1) % images.length;
        const nextImage = images[nextIndex];
        if (nextImage) {
            setProductImage(product.id, nextImage);
        }
    };

    return (
        <div
            onMouseEnter={() => setProductHover(product.id, true)}
            onMouseLeave={() => setProductHover(product.id, false)}
            className="relative w-[20rem] m-[1rem] border-gray-400 ml-[3rem] p-4"
        >
            <div className="relative bg-gray-200 p-4">
                <img
                    src={currentImage}
                    alt="prdct"
                    className="object-cover w-[12rem] h-[12rem] rounded-lg"
                />
                {hover && (
                    <div className="absolute inset-0 flex items-center justify-between px-4">
                        <button onClick={handlePrev} className="carousal-button text-white">
                            <FaChevronLeft className="bg-gray-300 rounded-full" />
                        </button>
                        <button onClick={handleNext} className="carousal-button text-white">
                            <FaChevronRight className="bg-gray-300 rounded-full" />
                        </button>
                    </div>
                )}
            </div>

            <div className="mt-[1rem]">
                <h2>{product.title}</h2>
                <p>${product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
