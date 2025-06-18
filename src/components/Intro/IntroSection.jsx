import React from "react";
import { Film, Clapperboard, WandSparkles } from "lucide-react";

const features = [
  {
    name: "Compelling Storyline",
    description:
      "Immerse yourself in a captivating narrative crafted by FPT Polytechnic students, blending creativity and emotion to deliver a memorable cinematic experience.",
    icon: Film,
  },
  {
    name: "Student-Driven Production",
    description:
      "Experience a film entirely produced by FPT Polytechnic students, showcasing their skills in directing, cinematography, and editing.",
    icon: Clapperboard,
  },
  {
    name: "Creative Vision",
    description:
      "Discover the unique artistic perspective of FPT Polytechnic student filmmakers, reflecting their passion and innovation in this academic project.",
    icon: WandSparkles,
  },
];

const MovieIntro = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">
                FPT Polytechnic Project
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Student Film Showcase
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Experience a unique cinematic creation from the talented
                students of FPT Polytechnic, crafted as part of our academic
                project to demonstrate creativity and technical skills.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-indigo-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-center">
            <img
              alt="FPT Polytechnic film project screenshot"
              src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2432&h=1442&q=80"
              className="w-full max-w-xl rounded-2xl shadow-lg ring-1 ring-gray-400/10 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieIntro;
