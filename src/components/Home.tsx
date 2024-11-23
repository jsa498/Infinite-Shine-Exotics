// src/components/Home.tsx

import { Hero } from './Hero';
import { WhyChooseUs } from './WhyChooseUs';
import { Services } from './Services';

interface HomeProps {
  setShowModal: (pkg: { name: string; price: number }) => void;
}

export function Home({ setShowModal }: HomeProps) {
  return (
    <>
      <Hero setShowModal={setShowModal} />
      <WhyChooseUs />
      <Services setShowModal={setShowModal} />
    </>
  );
}