import HeroSection from "../../app/components/HeroSection";
import Navbar from "../../app/components/Navbar";
import AboutSection from "../../app/components/AboutSection";
import ProjectsSection from "../../app/components/ProjectsSection";
import EmailSection from "../../app/components/EmailSection";
import Footer from "../../app/components/Footer";
import AchievementsSection from "../../app/components/AchievementsSection";
import { getStaticPaths, makeStaticProps } from '../../app/lib/getStatic'
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Head>
        <title>
          {t('title')}
        </title> 
        <meta
          name="description"
          content={t('description')}
          key="desc"
        />
      </Head>
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}


const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps };