import Header from '@/components/landingPage/header';
import Banner from '@/components/landingPage/banner';
import UserGuide from '@/components/landingPage/userGuide';
import VendorCategories from '@/components/landingPage/vendorCategories';
import WhyEventConnect from '@/components/landingPage/whyEventConnect';
import Footer from '@/components/landingPage/footer';

export default function Home() {
  return (
    <section>
      <section>
        <Header />
      </section>
      <section>
        <Banner />
      </section>
      <section>
        <UserGuide />
      </section>
      <section>
        <VendorCategories />
      </section>
      <section>
        <WhyEventConnect />
      </section>
      <section>
        <Footer />
      </section>
    </section>
  );
}
