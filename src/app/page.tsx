// import Image from "next/image";

import { services } from "../../data/services";
// import { steps } from "../../data/steps";

// import CoopCard from "./_components/CoopCard/CoopCard";
import LinkButton from "./_components/LinkButton/LinkButton";
import ServiceCard from "./_components/ServiceCard/ServiceCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>
          INTERNETOWA
          <br /> AGENCJA
          <br /> REKLAMOWA
        </h1>
        <div className="catchphrase">
          <span>
            Od <mark className="sea">pomysłu</mark>
          </span>
          <br />
          <span>
            przez <mark className="red">projekt</mark>
          </span>
          <br />
          <span>
            do <mark className="blue">realizacji</mark>
          </span>
        </div>
        <div className="action-invite">
          Poznaj nasze:
          <div>
            <LinkButton to="/uslugi/" text="usługi" />
            <LinkButton to="/produkty/" text="produkty" />
          </div>
        </div>
      </div>
      <section className="we-offer">
        <h3>Co możemy dla Ciebie zrobić?</h3>
        {services.map((service, index) => {
          return <ServiceCard key={index} service={service} />;
        })}
      </section>
      {/* 
      <section>
        <h3>Jak wygląda współpraca?</h3>
        {steps.map((step, index) => {
          return <CoopCard key={index} step={step} />;
        })}
      </section> */}

      <section>
        <h3>Daj nam się zaskoczyć</h3>
        <span>JESTEŚMY</span>
        <span>GOTOWI NA KAŻDE</span>
        <span>WYZWANIE</span>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut.
        </p>
        <button>portfolio</button>
      </section>
    </main>
  );
}
