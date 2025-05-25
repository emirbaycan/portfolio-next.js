"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { useTranslation } from 'next-i18next';

const AboutSection = () => {
  const { t } = useTranslation();

  const skillset = t('skill_set', { returnObjects: true });
  const education_set = t('education_set', { returnObjects: true });
  const certification_set = t('certification_set', { returnObjects: true });

  const TAB_DATA = [
    {
      title: t('skills'),
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          {
            skillset.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul>
      ),
    },
    {
      title: t('education'),
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          {
            education_set.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul>
      ),
    },
    {
      title: t('certifications'),
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          {
            certification_set.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul>
      ),
    },
  ];
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/home-main.svg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">{t('about_me')}</h2>
          <p className="text-base lg:text-lg">
            {t('introduction')}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {t('skills')}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {t('education')}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {t('certifications')}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
