import { Hero, Highlights, Navbar } from './components';

export default function App() {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
}
