import { useState } from "react";
import CristinaImage from "./cristina.png";
import SampleImage from "./profile-thumbnail.png";

const TESETIMONIALS = [
  {
    name: "Cristina Estupiñán",
    userName: "ciestupinan",
    image: CristinaImage,
    text: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
  },
  {
    name: "Sarah Dole",
    userName: "sarahdole",
    image: SampleImage,
    text: "I've been searching for high-quality abstract images for my design projects for quite some time, and I’m absolutely thrilled to have found this platform. The variety and depth of creativity on display here are truly astounding. Every image feels thoughtfully crafted, with uniq ue compositions, bold color palettes, and a strong sense of artistic vision. Whether I need something moody and atmospheric or vibrant and energetic, there’s always a piece that fits perfectly. The quality is consistently excellent, which makes integrating these visuals into my professional work seamless and stress-free. This platform has quickly become one of my go-to resources for inspiration and high-impact imagery. I couldn’t be more impressed and highly recommend it to other designers and creatives.",
  },
];

const TestimonalCard = () => {
  return (
    <>
      <div className="flex flex-col p-[36px]">
        <div>
          <h1 className="text-4xl text-center mt-[36px] mb-[36px] font-semibold">
            Testimonal Card
          </h1>
        </div>
        <div className="flex justify-center mt-[36px] relative">
          <div className="flex justify-evenly flex-wrap gap-[18px]">
            {TESETIMONIALS.map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="max-w-[320px] text-sm p-[24px] rounded-md cursor-pointer"
                style={{
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              >
                <div className="flex mb-[16px]">
                  <img
                    src={item.image}
                    alt={`${item.name} Image`}
                    className="w-[48px] mr-[6px] rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-gray-500 mt-[4px]">
                      @{item.userName}
                    </div>
                  </div>
                </div>
                <div className="line-clamp-5">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonalCard;
