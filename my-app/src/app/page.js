import Image from "next/image";
import growth from "./assets/Sales - Light.png";
import sales from "./assets/Statistic - Light.png";
import Link from "next/link";
import icon from "./assets/Icon.png";
import work from "./assets/Image.png";
import sponser from "./assets/Walmart Logo.png";
import big from "./assets/Image (1).png";
import FRAME from "./assets/Frame 1171275177.png";
import rec from "./assets/Rectangle 5651.png";
import stars from "./assets/Frame 48095403.png";
import profile from "./assets/Ellipse 15.png";

export default function Home() {
  return (
    <div>
<header className="flex justify-between items-center px-10 py-6 bg-white shadow-md w-full">
  <h1 className="text-2xl font-bold text-gray-900">Coca</h1>
  <nav className="flex sm:hidden space-x-6 text-gray-700 font-medium">
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/blog">Blog</Link>
    <Link href="/pricing">Pricing</Link>
    <Link
      href="/contact"
      className="font-semibold text-black hover:text-indigo-600"
    >
      Contact Us →
    </Link>
  </nav>
</header>


      <section className="bg-gradient-to-b from-white to-gray-100 py-20 px-10 flex justify-center gap-32 md:flex-wrap xs:flex-wrap">
        <div>
          <h1 className="text-[80px] font-bold text-gray-900 mb-6 lg:text-[50px] md:text-[40px] sm:text-[30px] xs:text-[40px]">
            Digitally forward creative
          </h1>
          <p className="text-[32px] text-gray-700 mb-12 ml-[200px] mt-24 w-[520px] sm:hidden">
            When it comes to interactive marketing, we’ve got you covered. Be
            where the world is going.
          </p>
          <div className="flex ml-[-300px] justify-center gap-4 mb-12 sm:hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none"
            />
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
              Try for free
            </button>
          </div>
        </div>

        <div>
          <div>
            <Image src={growth} />
          </div>
          <div className="mt-[-100px]">
            <Image src={sales} />
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-20 px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Coca helps our clients solve complex problems with data
          </h2>
          <p className="text-lg text-gray-400 mb-12">
            Our solutions offer the modern strategies to help clients gain
            control of their data and achieve more.
          </p>
        </div>
        <div className="flex flex-wrap justify-evenly mx-auto">
          {[
            {
              title: "Build your data fundamental",
              desc: "Build access to date, develop valuable business insights and drive revenue while maintaining full control over access and use of date at all times.",
            },
            {
              title: "Measure more effective",
              desc: "Effectively measure people-based campaigns with the freedom to choose from best-of breed partners to optimize and drive media innovation.  ",
            },
            {
              title: "Activate your data",
              desc: "Accurately address your specific audiences at scale across any channel, platform, publisher or network and safely translate date between identity space to improve results.",
            },
            {
              title: "Strengthen consumer privacy",
              desc: "Protect your customer date with leading privacy-preserving technologies and advanced techniques to minimize date movement while still enabling insight generation.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6  rounded-lg shadow-md w-[500px] hover:shadow-xl transition"
            >
              <Image src={icon} />
              <h3 className="text-xl mt-10 font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-10 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gray-200 rounded-lg flex items-center justify-center">
              {/* Replace this with an actual image */}
              <Image src={work} />
            </div>
          </div>

          {/* Right Side - Text */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Passion to increase company revenue up to 85%
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Automate your sales, marketing, and service in one platform. Avoid
              data leaks and enable consistent messaging.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>Close more deals with single-page contact management</li>
              <li>
                Enjoy one-click calling, call scripts, and voicemail automation
              </li>
              <li>
                Take stages and milestones of your deals to keep the sales
                process on track
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:grid-cols-1">
            {[
              { value: "17k", label: "happy customers worldwide" },
              { value: "15+", label: "Hours of work experience" },
              { value: "50+", label: "Creativity & passionate members" },
              { value: "100+", label: "Integrations lorem ipsum integrations" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-4xl font-bold text-gray-900">
                  {stat.value}
                </h3>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <Image className="m-auto mt-[50px]" src={big} />
      </section>

      <section className="py-16 px-10 bg-white">
        <div className=" flex justify-evenly w-[90%] sm:hidden">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight w-[500px]">
            Lift your business to new heights with our digital marketing
            services
          </h2>
          <p className="text-2xl text-gray-700 w-[500px]">
            To build software that gives customer-facing teams in small and
            medium-sized businesses the ability to create rewarding and
            long-lasting relationships with customers.
          </p>
        </div>

        {/* Right Side - Logos */}
      </section>

      <section className="py-16 px-10 bg-white flex justify-around w-[90%]">
        {/* Left Side - Text */}
        <div>
          <h2 className="text-[90px] font-bold text-gray-900 mb-6 leading-tight w-[500px]">
            890+
          </h2>
          <p className="text-2xl text-gray-700 w-[500px]">
            some big companies that we work with, and trust us very much
          </p>
        </div>
        <div>
          <div className="flex flex-wrap items-center justify-center gap-6 w-[500px]">
            {[
              "airbnb",
              "amazon",
              "fedex",
              "microsoft",
              "google",
              "ola",
              "walmart",
              "oyo",
              "oyo",
              "oyo",
            ].map((brand, idx) => (
              <div
                key={idx}
                className="w-20 h-8 flex items-center justify-center rounded-md sm:hidden"
              >
                <Image src={sponser} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-[150px]">
        <div className="text-center">
          <p className="text-[40px] font-bold">Trending news from Coca</p>
          <p className="text-[18px] text-gray-500">
            we have some new Service to pamper you
          </p>
        </div>

        <div className="flex justify-evenly mt-[50px] flex-wrap gap-2">
          <div className="w-[588px]">
            <Image src={rec} />
            <div className="flex justify-between">
              <p className="text-[14px] text-gray-500">
                Published in Insight Jan 30, 2021
              </p>
              <p className="text-[14px] text-gray-500">by : Albert Sans</p>
            </div>
            <p className="text-[30px] font-bold">
              What makes an authentic employee profile, and why does it matter ?
            </p>
          </div>

          <div className="w-[588px]">
            <Image src={rec} />
            <div className="flex justify-between">
              <p className="text-[14px] text-gray-500">
                Published in Insight Jan 30, 2021
              </p>
              <p className="text-[14px] text-gray-500">by : Albert Sans</p>
            </div>
            <p className="text-[30px] font-bold">
              What makes an authentic employee profile, and why does it matter ?
            </p>
          </div>
        </div>
      </section>

      <section className="flex justify-around items-center mt-[100px]">
        <p className="text-[40px] font-bold w-[400px]">
          What our customer are saying
        </p>
        <p className="text-[18px] text-gray-500 w-[400px]">
          We are trusted numerous companies from different business to meet
          their needs
        </p>
      </section>

      <section className="w-[1000px] m-auto mt-[100px]">
        <Image src={stars} />
        <p className="text-[40px] mt-[10px] sm:hidden">
          “With Agency the results are very satisfying. wrapped with Hight
          quality and innovative design that makes a surge of visitors on my
          website”
        </p>
        <div className="flex items-center gap-6 mt-[30px]">
          <Image src={profile} />
          <div>
            <p>Renee Wells</p>
            <p className="text-gray-500">Product Designer, Quotientx</p>
          </div>
        </div>
      </section>

      <section className="mt-[100px] flex justify-around items-center">
        <div>
          <p className="text-[50px] font-bold text-gray-900 mb-6">
            Think beyond the wave
          </p>
          <p className="text-[32px] text-gray-700 mb-12 ml-[200px] mt-24 w-[520px] sm:hidden">
            Ask about Sans products, pricing, implementation, or anything else.
            Our highly trained reps are standing by, ready to help
          </p>
        </div>
        <button className="bg-black text-white px-6 py-3 h-[50px]  rounded-lg hover:bg-gray-800">
          Try for free
        </button>
      </section>

      <footer className="bg-gradient-to-r from-pink-100 via-white to-green-100 py-8 flex-wrap">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12 text-gray-600">
          <div>
            <h3 className="font-semibold text-black">Company</h3>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/jobs">Jobs</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black">Product</h3>
            <ul>
              <li><Link href="/sales-software">Sales Software</Link></li>
              <li><Link href="/marketplace">Marketplace</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black">Discover</h3>
            <ul>
              <li><Link href="/crm-comparison">CRM Comparison</Link></li>
              <li><Link href="/partner-program">Partner Program</Link></li>
              <li><Link href="/what-is-crm">What is CRM</Link></li>
              <li><Link href="/resource">Resource</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black">Help Center</h3>
            <ul>
              <li><Link href="/community">Community</Link></li>
              <li><Link href="/knowledge-base">Knowledge Base</Link></li>
              <li><Link href="/academy">Academy</Link></li>
              <li><Link href="/support">Support</Link></li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-gray-400 text-sm">
          © Copyright 2023 All Rights Reserved
        </p>
      </div>
    </footer>
    </div>
  );
}
