import SortByCategories from "@/components/home-page/sortby-categories/SortByCategories";
import Home from "@/components/home-page/home/Home";
import NewCollection from "@/components/home-page/new-collection/NewCollection";
import Footer from "@/components/home-page/footer/Footer";

export default function Page() {
  return (
    <>
      <div>
        <Home />
      </div>
      <div>
        <SortByCategories />
      </div>
      <div>
        <NewCollection />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}