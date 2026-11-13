"use client";

import { Advantages } from "./Advantages";
import { BeforeAfter } from "./BeforeAfter";
import { BookingForm } from "./BookingForm";
import { Contacts } from "./Contacts";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { MobileCTA } from "./MobileCTA";
import { Preloader } from "./Preloader";
import { Reviews } from "./Reviews";
import { Services } from "./Services";

export function LandingPage() {
  return (
    <>
      <Preloader />
      <Header />
      <main className="atmosphere flex-1">
        <Hero />
        <Advantages />
        <Services />
        <BeforeAfter />
        <Reviews />
        <BookingForm />
        <Contacts />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
