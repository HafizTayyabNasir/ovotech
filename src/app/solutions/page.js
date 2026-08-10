import PageHeader from "@/components/PageHeader";
import Solutions from "@/components/Solutions";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

export default function SolutionsPage() {
  return (
    <>
      <PageHeader 
        title="Our Solutions" 
        description="Explore our comprehensive suite of automation tools designed specifically for GP practices and healthcare providers." 
      />
      
      {/* We can reuse the Solutions component from the homepage */}
      <div style={{ paddingTop: "20px" }}>
        <Solutions />
      </div>

      <Cta />
      <Footer />
    </>
  );
}
