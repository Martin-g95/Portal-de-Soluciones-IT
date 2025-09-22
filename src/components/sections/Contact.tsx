import SEOHead from "../ui/SEOHead";
import { seoData } from "../../utils/seoData";

const Contact = () => {
  return (
    <>
      <SEOHead {...seoData.contact} />
      <div style={{ padding: '2rem' }}>
        <h1>Contacto</h1>
        <p>Formulario de contacto</p>
      </div>
    </>
  );
};

export default Contact;