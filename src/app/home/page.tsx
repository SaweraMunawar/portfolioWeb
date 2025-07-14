
"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HeroSection() {
    const router = useRouter();
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-24 py-16 gap-12">
    
      <div className="max-w-xl space-y-6">
        <h1 className=" text-4xl sm:text-5xl font-extrabold text-gray-900">
          Hi I am Sawera Munawar
        </h1>
        <h2 className="text-2xl text-blue-500 font-semibold">
          Frontend Developer
        </h2>
        <p className="text-gray-200">
          Specializing in building responsive accessible web interfaces using HTML5 modern CSS and component-driven design Experienced in developing full-stack applications with Next.js leveraging React and TypeScript for scalable maintainable codebases. Passionate about delivering pixel-perfect UIs and fast-loading user experiences
        </p>

        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition" onClick={()=>router.push('education')}>Hire Me
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition" onClick={()=>router.push('contact')}>
            Lets Talk
          </button>
        </div>

        
        <div className="flex gap-4 mt-8">
          <Link href="https://www.facebook.com/" target="_blank">
            <Image
              src="facebook.png"
              alt="Facebook"
              width={30}
              height={30}
              className="hover:scale-110 transition-transform"
            />
          </Link>
          <Link href="https://x.com/i/flow/login" target="_blank">
            <Image
              src="twitter.png"
              alt="Twitter"
              width={30}
              height={30}
              className="hover:scale-110 transition-transform"
            />
          </Link>
          <Link href="https://www.linkedin.com/login" target="_blank">
            <Image
              src="linkedin.png"
              alt="LinkedIn"
              width={30}
              height={30}
              className="hover:scale-110 transition-transform"
            />
          </Link>
        </div>
      </div>

      <div>
        <Image
          src="profile.png"
          alt="Profile"
          width={450}
          height={450}
          className="rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
