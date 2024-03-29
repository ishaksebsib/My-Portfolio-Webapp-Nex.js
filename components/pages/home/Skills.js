import Image from "next/image";

import reactlogo from "../../../public/skills/react.png";
import sveltelogo from "../../../public/skills/svelte.png";
import nodelogo from "../../../public/skills/node.png";
import firebaselogo from "../../../public/skills/firebase.png";
import figmalogo from "../../../public/skills/figma.png";
import tailwindlogo from "../../../public/skills/tailwind.png";

export default function Skills({}) {
  const skills = {
    title: "EXPERIENCES",
    subtitle: "My Top Skills",
    skills_content: [
      {
        name: "React.js/Next.js + React Native",
        para: "Intermediate",
        logo: reactlogo,
      },
      {
        name: "Svelte.js",
        para: "Beginner",
        logo: sveltelogo,
      },
      {
        name: "Node.js + Express",
        para: "Advanced",
        logo: nodelogo,
      },
      {
        name: "Firebase",
        para: "Advanced",
        logo: firebaselogo,
      },
      {
        name: "Figma",
        para: "Intermediate",
        logo: figmalogo,
      },
      {
        name: "Tailwind.css",
        para: "Adcanced",
        logo: tailwindlogo,
      },
    ],
  };

  return (
    <div className="bg-bgcolor dark:bg-black h-[100%] w-[100%]">
      <section
        className="flex justify-center min-h-fit bg-bg_light_primary "
        id="experience"
      >
        {/* content */}
        <div className="md:container px-5  py-14 font-roboto">
          <div className="flex items-center justify-center flex-col gap-4 my-6">
            <h2 className=" text-3xl text-mediumer" data-aos="fade-down">
              {skills.title}
            </h2>
            <h4
              className="text-2xl text-warmer dark:text-warmer"
              data-aos="fade-down"
            >
              {skills.subtitle}
            </h4>
          </div>
          <br />
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.skills_content.map((skill, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 400}
                className="bg-white sm:cursor-pointer 
                 relative group w-full flex items-center
                  gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
              >
                <div>
                  <Image
                    src={skill.logo}
                    alt={`skills logo ${skill.name}`}
                    className="w-10 h-15 group-hover:scale-125 duration-200"
                  />
                </div>
                <div className="dark:text-black">
                  <h6>{skill.name}</h6>
                  <p className="italic">{skill.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
