import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Capabilities from '../components/Capabilities/Capabilities';
import Careers from '../components/Careers/Careers';
import Contact from '../components/Contact/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Decipher Financials - Professional Portfolio</title>
        <meta name="description" content="Professional financial services portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="capabilities">
          <Capabilities />
        </div>
        <div id="careers">
          <Careers />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </>
  );
}
