import * as Sentry from '@sentry/react';

import { Features, Footer, Hero, Highlights, HowItWorks, Model, Navbar } from './components';

// eslint-disable-next-line react-refresh/only-export-components
export default Sentry.withProfiler(() => (
  <main className='bg-black'>
    <Navbar />
    <Hero />
    <Highlights />
    <Model />
    <Features />
    <HowItWorks />
    <Footer />
  </main>
));
