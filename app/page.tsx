import prisma from "@/lib/prisma";
import { Product } from "@/utils/types";
import Link from 'next/link';
import Image from "next/image";

const HomePage = async () => {
  const products: Product[] = await prisma.product.findMany();

  return (
    <section className="pt-40 pb-20 px-10">
      <div className="w-[40%] mx-auto flex flex-col justify-center items-center gap-4">
        <h1 className="text-5xl font-bold text-center">Transforming Shopping, One Click at a Time</h1>
        <p className="text-justify text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, laudantium. Reiciendis, accusantium facilis voluptatum nam sed quo magni optio ipsum earum doloremque maxime saepe ipsam at adipisci incidunt temporibus accusamus.</p>
        <Link href='/products' className="bg-blue-500 p-2 rounded-md text-black">Our Products</Link>
      </div>

      <p className="text-3xl font-bold m-14">Featured Products</p>

      <ul className="flex items-center justify-center gap-4">
        {products.map((product) => (
          <li key={product.id} className="text-center border border-slate-600 rounded-md p-4">
            <div className="relative w-[400px] h-[250px] mb-4">
              <Image
                src={product.imageUrl}
                alt={product.name}
                // width={300}
                // height={300}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h2 className="font-bold">{product.name}</h2>
            <p className="text-slate-500">${product.price}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
export default HomePage;