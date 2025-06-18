import TeamSlider from "./TeamSlider";

export default function TeamSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 py-24 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/10 to-rose-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/5 to-purple-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 animate-pulse" />
            Meet Our Team
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Meet our{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              leadership
            </span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We're a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering exceptional results for our
            clients.
          </p>
        </div>

        {/* Team Slider */}
        <TeamSlider />

        {/* CTA Section 
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Join Our Team
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full border-2 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl">
              View All Members
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
