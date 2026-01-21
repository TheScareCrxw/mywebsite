import { Section } from "components";
import { useTranslation } from "next-i18next";
import React, { FC, useMemo } from "react";

import { ProjectCard } from "./libs/ProjectCard";

export const Projects: FC = () => {
  const { t } = useTranslation("common");

  const projects = useMemo(
    () => [
      {
        title: "Chess Web App",
        subtitle: t("projects.chess.subtitle"),
        description: t("projects.chess.description"),
        technologies: ["Next.js", "TypeScript", "HTML", "CSS", "Websockets", "Tabler Icons"],
        externalLink: "https://github.com/TheScareCrxw/chess-web-app",
        githubLink: "https://github.com/TheScareCrxw/chess-web-app",
        imageLink: `/images/chesswebapp.png`,
      },
      {
        title: "Twitter Clone",
        subtitle: t("projects.twitter-clone.subtitle"),
        description: t("projects.twitter-clone.description"),
        technologies: ["Next.js", "TypeScript", "HTML", "CSS", "Websockets", "Tabler Icons"],
        externalLink: "https://github.com/TheScareCrxw/twitterclone",
        githubLink: "https://github.com/TheScareCrxw/twitterclone",
        imageLink: `/images/twitterclone.png`,
      },
    ],
    [t]
  );

  return (
    <Section
      className="md:mt-20 mt-14"
      title={t("projects.title")}
      description={t("projects.description")}
    >
      <div className="px-4 mx-auto mt-10 md:mt-20 md:px-8 max-w-screen-lg">
        {projects.map((project, i) => (
          <ProjectCard key={i} rightShift={i % 2 === 0} {...project} />
        ))}
      </div>
    </Section>
  );
};
