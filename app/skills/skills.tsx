import { siteConfig } from "@/config/site";

export default function Skills() {
  return (
    <section className="section">
      <div className="section-heading">Skills</div>
      <div className="section-heading-subtitle">My brags</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {siteConfig.skills.map((subsection, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-4 border-border border-1 bg-background-tertiary hover:bg-background-tertiary-hover duration-500 ease-in-out p-4"
            >
              <h3 className="font-heading text-2xl">{subsection.name}</h3>
              <div className="flex flex-row flex-wrap gap-2">
                {subsection.items.map((skill, index) => {
                  return (
                    <h4 key={index} className="label">
                      {skill}
                    </h4>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
