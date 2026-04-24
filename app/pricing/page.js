import Pagebanner from "@/components/Pagebanner";
import BrandSlider from "@/components/slider/BrandSlider";
import WorkingProcess from "@/components/WorkingProcess";
import ZotechLayout from "@/layout/ZotechLayout";
const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="Propuestas y modalidades" />
      {/* Brand Section Start */}
      <div className="brand-wrapper brand-1 style-3 section-padding">
        <div className="shape">
          <img className="shape-1" src="assets/img/shape/shape-20.png" alt="" />
        </div>
        <div className="container">
          <div className="brand-inner">
            <p className="text-center mb-5 title">
              500+ clientes satisfechos; cotización según alcance, licenciamiento
              y soporte
            </p>
            <BrandSlider />
          </div>
        </div>
      </div>
      {/* Process Section Start */}
      <WorkingProcess />
    </ZotechLayout>
  );
};
export default page;
