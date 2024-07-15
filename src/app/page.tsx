// import Image from "next/image";

import { services } from "../../data/services";
import { steps } from "../../data/steps";

import CoopCard from "./_components/CoopCard/CoopCard";
import LinkButton from "./_components/LinkButton/LinkButton";
import ServiceCard from "./_components/ServiceCard/ServiceCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        {/* <Container className="header"> */}
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
        <div className="social">
          <a href="#">
            Facebook
            {/* <Image src="/images/facebook_ico.png" alt="Facebook" /> */}
          </a>
          <a href="#">
            Instagram
            {/* <Image src="/images/instagram_ico.png" alt="Instagram" /> */}
          </a>
          <a href="#">
            Twitter
            {/* <Image src="/images/twitter_ico.png" alt="Twitter" /> */}
          </a>
        </div>
        {/* </Container> */}
      </div>
      <section className="we-offer">
        <h3>Co możemy dla Ciebie zrobić?</h3>
        {/* <Row noGutters xs={1} md={2} lg={3}> */}
        {services.map((service, index) => {
          return <ServiceCard key={index} service={service} />;
        })}
        {/* </Row> */}
        {/* </Container> */}
      </section>

      <section className="co-op">
        {/* <Container> */}
        <h3>Jak wygląda współpraca?</h3>
        {/* <Row noGutters xs={1} md={1} lg={1}> */}
        {steps.map((step, index) => {
          return <CoopCard key={index} step={step} />;
        })}
        {/* </Row> */}
        {/* </Container> */}
      </section>

      <section className="talk-to-us">
        {/* <Container> */}
        <h3>Daj nam się zaskoczyć</h3>
        {/* <Row noGutters xs={1} md={2} lg={2}> */}
        {/* <Col lg={4} xs={{ order: 2 }} md={{ order: 1 }}> */}
        <span>JESTEŚMY</span>
        <br />
        <span>GOTOWI NA KAŻDE</span>
        <br />
        <span>WYZWANIE</span>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut.
        </p>
        <button>portfolio</button>
        {/* </Col> */}

        {/* <Col lg={8} xs={{ order: 1 }} md={{ order: 2 }}> */}
        {/* <Image
          src="/images/kreatywny_zespol.jpg"
          alt="Gotowi na każde wyzwanie!"
        /> */}
        {/* </Col>
            </Row>
          </Container> */}
      </section>
      {/* </Layout> */}
    </main>
  );
}
