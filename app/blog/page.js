import Blog from "@/components/Blog";
import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";

const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="Blog" />
      <Blog wrapperClass="blog-wrapper blog-1 section-padding" />
    </ZotechLayout>
  );
};
export default page;
