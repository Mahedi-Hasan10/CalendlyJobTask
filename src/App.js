import Header from "./common/header";
import Footer from "./common/footer";
import Hero from "./components/hero";
import Hero2 from "./components/hero2";
import Hero3 from "./components/hero3";
import FeatureHero from "./components/featureHero";
import StoryHero from "./components/storyHero";
import SecureConnection from "./components/secureConnection";
function App() {
  return (
    <section>
      <Header />
      <Hero />
      <Hero2 />
      <Hero3
        title="Retain control as your team scale"
        image="/hero3.svg"
        background="bg-white"
        reverse="md:flex-row"
      />
      {/* i use hero3 section as a component */}
      <Hero3
        title="Automate IT workflows to accomplish more"
        image="/hero4.svg"
        background="bg-[#F8F8F8]"
        reverse="md:flex-row-reverse"
      />
      {/* i use hero3 section as a component */}
      <Hero3
        title="Get more values from your existing technology"
        image="/hero5.svg"
        background="bg-white"
        reverse="md:flex-row"
      />

      <FeatureHero />
      <Hero3
        title="Maintain GDPR compilance"
        subtitle="USER PII DATA DELETION"
        image="/hero6.svg"
        background="bg-white"
        reverse="md:flex-row-reverse"
      />
      <Hero3
        title="Save time with group admins"
        subtitle="USER GROUP"
        image="/group.svg"
        background="bg-white"
        reverse="md:flex-row"
      />
      <Hero3
        title="Reduce risk with secure authentication"
        subtitle="SINGLE SIGN-ON (SSO)"
        image="/ss0.svg"
        background="bg-white"
        reverse="md:flex-row-reverse"
      />
      <Hero3
        title="Manage user access at scale"
        subtitle="SCIM PROVISIONING"
        image="/SCIM.svg"
        background="bg-white"
        reverse="md:flex-row"
      />
      <StoryHero />
      <SecureConnection />
      <Footer />
    </section>
  );
}

export default App;
