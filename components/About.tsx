import Image from "next/image";
import next from "../public/next.webp";
export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen maincol mt-10 flex  leading-7 border rounded-xl"
    >
      <section className="basis-1/2 p-4">
        <p>
          As a passionate and experienced frontend developer with a year of
          expertise in React, Next.js, TypeScript, Tailwind CSS, and other
          modern web technologies, I, Darel, thrive in crafting exceptional web
          experiences. Based in Zagreb, Croatia, my dedication to delivering
          professional solutions resonates through my portfolio, showcasing my
          commitment to excellence in the ever-evolving field of frontend
          development. With a strong focus on frontend development, I, Darel,
          bring a wealth of knowledge and expertise to every project. I am
          well-versed in designing and implementing user-friendly interfaces,
          optimizing website performance, and ensuring cross-browser
          compatibility. My deep understanding of responsive design principles
          enables me to create seamless experiences across different devices and
          screen sizes. By staying up-to-date with the latest industry trends
          and best practices, I continuously expand my skill set to deliver
          cutting-edge solutions. Collaborative by nature, I thrive in agile
          development environments, working closely with cross-functional teams
          to achieve project goals efficiently and effectively. With a keen eye
          for detail and a passion for clean and maintainable code, I
          consistently strive for excellence in all aspects of frontend
          development.
        </p>
      </section>
      <section className="basis-1/2 p-4 flex flex-col gap-10">
        <p>
          <Image
            src={next}
            width={1000}
            height={1000}
            alt=""
            className="rounded-xl shadow-lg"
          />
        </p>
        <p>
          <Image
            src={next}
            width={1000}
            height={1000}
            alt=""
            className="rounded-xl shadow-lg"
          />
        </p>
      </section>
      {/* 
      

      */}
    </section>
  );
}
