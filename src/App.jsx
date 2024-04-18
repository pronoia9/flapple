import * as Sentry from '@sentry/react';

import { Experience, Features, Footer, Hero, Highlights, HowItWorks, Navbar } from './components';

export default Sentry.withProfiler(() => (
  <main className='bg-black'>
    <Navbar />
    <Hero />
    <Highlights />
    <Experience />
    <Features />
    <HowItWorks />
    <Footer />
  </main>
));
