"use client";
import { useState } from "react";

import Card from "@/components/card/Card";
import Modal from "@/components/modal/Modal";
import ProjectContentViewer from "@/app/projects/ProjectContentViewer";
import Drawer from "@/components/drawer/Drawer";
import { siteConfig } from "@/config/site";

export type Project = {
  backgroundImage: string;
  link: string;
  subtitle: string;
  title: string;
  description: string;
  techTags: string[];
};

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className="section" id="section">
      <div className="section-heading">Projects</div>
      <div className="section-heading-subtitle">
        Things I&apos;ve built along the way
      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">
          {siteConfig.projects.map((project, i) => (
            <Card
              key={i}
              backgroundImage={project.backgroundImage}
              primaryLink={project.link}
              subtitle={project.subtitle}
              title={project.title}
              onClickExecutor={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>
      {activeProject && (
        <>
          <Modal
            className="hidden lg:flex"
            onClose={() => setActiveProject(null)}
          >
            <ProjectContentViewer {...activeProject} variant="modal" />
          </Modal>

          <Drawer
            className="flex lg:hidden"
            direction="bottom"
            onClose={() => setActiveProject(null)}
          >
            <ProjectContentViewer {...activeProject} variant="drawer" />
          </Drawer>
        </>
      )}
    </section>
  );
}
