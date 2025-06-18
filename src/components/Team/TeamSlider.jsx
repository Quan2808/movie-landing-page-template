import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Instagram,
  Facebook,
  Mail,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const teamMembers = [
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    img: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    social: {
      Instagram: "#",
      Facebook: "#",
      email: "leslie@company.com",
    },
  },
  {
    name: "Dries Vincent",
    role: "Business Relations",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    social: {
      Instagram: "#",
      Facebook: "#",
      email: "leslie@company.com",
    },
  },
  {
    name: "Lindsay Walton",
    role: "Front-end Developer",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    social: {
      Instagram: "#",
      Facebook: "#",
      email: "leslie@company.com",
    },
  },
  {
    name: "Courtney Henry",
    role: "Designer",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    social: {
      Instagram: "#",
      Facebook: "#",
      email: "leslie@company.com",
    },
  },
  {
    name: "Tom Cook",
    role: "Director of Product",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    social: {
      Instagram: "#",
      Facebook: "#",
      email: "leslie@company.com",
    },
  },
  {
    name: "Whitney Francis",
    role: "Copywriter",
    img: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    social: {
      Instagram: "#",
      Facebook: "#",
      email: "leslie@company.com",
    },
  },
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    social: {
      Instagram: "#",
      Facebook: "#",
      email: "leslie@company.com",
    },
  },
  {
    name: "Floyd Miles",
    role: "Principal Designer",
    img: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    social: {
      Instagram: "#",
      Facebook: "#",
      email: "leslie@company.com",
    },
  },
  {
    name: "Emily Selman",
    role: "VP, User Experience",
    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    social: {
      Instagram: "#",
      Facebook: "#",
      email: "leslie@company.com",
    },
  },
  {
    name: "Kristin Watson",
    role: "VP, Human Resources",
    img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    social: {
      Instagram: "#",
      Facebook: "#",
      email: "leslie@company.com",
    },
  },
  {
    name: "Emma Dorsey",
    role: "Senior Developer",
    img: "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    social: {
      Instagram: "#",
      Facebook: "#",
      email: "leslie@company.com",
    },
  },
  {
    name: "Alicia Bell",
    role: "Junior Copywriter",
    img: "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    social: {
      Instagram: "#",
      Facebook: "#",
      email: "leslie@company.com",
    },
  },
  {
    name: "Jenny Wilson",
    role: "Studio Artist",
    img: "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    social: {
      Instagram: "#",
      Facebook: "#",
      email: "leslie@company.com",
    },
  },
  {
    name: "Anna Roberts",
    role: "Partner, Creative",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    social: {
      Instagram: "#",
      Facebook: "#",
      email: "leslie@company.com",
    },
  },
  {
    name: "Benjamin Russel",
    role: "Director, Print Operations",
    img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    social: {
      Instagram: "#",
      Facebook: "#",
      email: "leslie@company.com",
    },
  },
];

const TeamSlider = () => {
  return (
    <div className="w-full relative">
      {/* Navigation buttons */}
      <button
        id="slider-button-left"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 group p-3 bg-white/90 backdrop-blur-sm hover:bg-white border border-gray-200 hover:border-indigo-300 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-10"
      >
        <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-indigo-600 transition-colors duration-300" />
      </button>

      <button
        id="slider-button-right"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 group p-3 bg-white/90 backdrop-blur-sm hover:bg-white border border-gray-200 hover:border-indigo-300 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-10"
      >
        <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-indigo-600 transition-colors duration-300" />
      </button>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: "#slider-button-right",
          prevEl: "#slider-button-left",
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="multiple-slide-carousel"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="group transition-all duration-1000 ease-out transform">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-gray-200">{member.role}</p>
                  {/* Social Links */}
                  <div className="flex space-x-3 pt-3 pb-3">
                    <a
                      href={member.social.Instagram}
                      className="p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg transition-all duration-300 hover:scale-110"
                    >
                      <Instagram className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={member.social.Facebook}
                      className="p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg transition-all duration-300 hover:scale-110"
                    >
                      <Facebook className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg transition-all duration-300 hover:scale-110"
                    >
                      <Mail className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamSlider;
