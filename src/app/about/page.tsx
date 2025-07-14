"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
export default function About() {
    const router = useRouter();
  return (
    <section className="bg-blue-950 text-white">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-[60px] font-extrabold">
          About <span className="text-[#00bfff]">Me</span>
        </h1>
        <div className="profile-container">
          <div className="ring">
            <Image
              src="profile.png"
              className="aboutImage"
              alt="Profile"
            />
          </div>
        </div>
        <h2 className="text-[30px] font-extrabold ">
          Frontend Developer!
        </h2>
        <p className=" m-[20px] line-height-[1.6] text-align-center">
          specializing in building responsive, accessible web interfaces using
          HTML5, modern CSS, and component-driven design.Experienced in
          developing full-stack applications with Next.js, leveraging React and
          TypeScript for scalable, maintainable codebases.Passionate about delivering pixel-perfect UIs and
          fast-loading user experiences.
        </p>
        <button className="h-[50px] w-[100px] text-[16px] rounded-2xl hover:bg-blue-400 bg-blue-100 text-black " onClick={()=>router.push('education')}>
          Read More
        </button>
      </div>
    </section>
  );
}
