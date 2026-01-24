import { CloudrunOriginal } from "@soumil4561/svg-kit";

import { siteConfig, skillIcons } from "@/config/site";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-heading">Skills</div>
      <div className="section-heading-subtitle">
        Languages, tools, and systems I work with.
      </div>

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
                  const Icon = skillIcons[skill] ?? CloudrunOriginal;

                  return (
                    <h4 key={index} className="label">
                      <Icon className="text-default h-5 w-5" />
                      <span className="text-[1rem] tracking-widest font-heading">
                        {skill}
                      </span>
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
