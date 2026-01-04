import { TimelineBar } from "@/components/timeline/TimelineBar";
import { siteConfig } from "@/config/site";

export default function Education() {
  return (
    <div className="section items-start">
      <h3 className="section-subheading">Education</h3>
      <div className="w-full flex justify-center">
        <div className="relative flex flex-col">
          <TimelineBar className="left-1/2" />
          {siteConfig.education.map((item, index) => {
            index = siteConfig.education.length - index;
            const formattedIndex =
              index + 1 < 9 ? "0" + index : index.toString();

            return (
              <div key={index} className="box flex flex-col my-4 z-10">
                <div className="flex flex-row justify-between items-center mb-2">
                  <h6 className="font-light tracking-wider font-heading">
                    {formattedIndex}
                  </h6>
                  <div className="label">
                    {item.startYear}-{item.endYear}
                  </div>
                </div>
                <div className="font-heading text-2xl font-medium">
                  {item.degree} <span className="font-content">in</span>{" "}
                  {item.major}
                </div>
                <div className="font-content">{item.institution}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
