import prisma from '@/lib/prisma';
import Image from 'next/image';
import Link from 'next/link';

interface ProductPageProps {
    params: {
        id: string;
    };
}

const ProductPage = async ({ params }: ProductPageProps) => {
    const product = await prisma.product.findUnique({
        where: { id: Number(params.id) },
    });

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <section className='pt-20 lg:pt-32 px-10 pb-10'>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                <div className="relative w-[250px] md:w-[550px] h-[150px] md:h-[400px]">
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover rounded-md"
                    />
                </div>

                <div className='w-full lg:w-[30%]'>
                    <Link href='/products' className='underline'>Go Back</Link>
                    <h1 className="text-3xl lg:text-4xl font-bold">{product.name}</h1>
                    <p className="text-md lg:text-xl mt-2 lg:mt-4 bg-slate-800 rounded-md w-fit p-1">${product.price}</p>
                    <p className="text-sm lg:text-md text-slate-500 mt-2 text-justify">{product.description}</p>
                </div>
            </div>
        </section>
    );
};

export async function generateStaticParams() {
    const products = await prisma.product.findMany({
        select: { id: true },
    });

    return products.map((product) => ({
        id: product.id.toString(),
    }));
}

export default ProductPage;