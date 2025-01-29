import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-16 bg-white">
      <div className="max-w-2xl">
        {/* Heading with better hierarchy and spacing */}
        <h1 className="text-5xl md:text-6xl font-bold text-[#06092D] py-6 leading-tight">
          Pioneering <br />
          <span className='text-red-500'>Your Gateway to Seamless API Connectivity.</span>
        </h1>

        {/* Subheading with a more readable font size and weight */}
        <p className="my-4 text-gray-700 text-xl font-medium">
          Your Best Revolutioner API Provider awaits you!
        </p>

        {/* Body text with improved line spacing and contrast */}
        <p className="mt-2 text-gray-600 text-base md:text-lg leading-relaxed">
          Discover as we bring in groundbreaking API solutions tailored to your
          business needs.
        </p>

        {/* Button section with spacing and alignment */}
        <div className="mt-10 md:mt-16 flex gap-6 justify-start">
          <Button className="bg-red-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition">
            Sign up
          </Button>
          <Button className="border border-red-600 text-red-500 px-10 py-4 rounded-full text-lg font-semibold hover:border-red-700 hover:text-red-700 transition">
            View Documentation
          </Button>
        </div>
      </div>

      {/* Image section with proper margin on smaller screens */}
      <div className="relative mt-10 md:mt-0 md:ml-8">
        <Image
          src="/banner-img.png"
          alt="Banking Tech Illustration"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>
    </section>
  );
}
