import CristinaImage from "./cristina.png";
import SampleImage from "./profile-thumbnail.png"
const TestimonalCard = () => {
  return (
    <div className="flex justify-center flex-col">
      <div>
        <h1 className="text-4xl text-center mt-[36px] mb-[36px]">Testimonal Card</h1>
      </div>
      <div className="flex justify-evenly">
        <div
          className="w-[320px] text-sm p-[24px]"
          style={{
            borderRadius: "8px",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <div className="flex mb-[16px]">
            <img src={CristinaImage} className="w-[48px] mr-[6px] rounded-full"></img>
            <div>
              <div className="font-semibold">Cristina Estupiñán</div>
              <div>@ciestupinan</div>
            </div>
          </div>
          <div>
            I've been searching for high-quality abstract images for my design
            projects, and I'm thrilled to have found this platform. The variety
            and depth of creativity are astounding!
          </div>
        </div>
        <div
          className="w-[320px] text-sm p-[24px] rounded-md"
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <div className="flex mb-[16px]">
            <img src={SampleImage} className="w-[48px] mr-[6px] rounded-full"></img>
            <div>
              <div className="font-semibold">Sarah Dole</div>
              <div>@sarahdole</div>
            </div>
          </div>
          <div className="line-clamp-5">
            I've been searching for high-quality abstract images for my design
            projects for quite some time, and I’m absolutely thrilled to have
            found this platform. The variety and depth of creativity on display
            here are truly astounding. Every image feels thoughtfully crafted,
            with unique compositions, bold color palettes, and a strong sense of
            artistic vision. Whether I need something moody and atmospheric or
            vibrant and energetic, there’s always a piece that fits perfectly.
            The quality is consistently excellent, which makes integrating these
            visuals into my professional work seamless and stress-free. This
            platform has quickly become one of my go-to resources for
            inspiration and high-impact imagery. I couldn’t be more impressed
            and highly recommend it to other designers and creatives.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonalCard;
