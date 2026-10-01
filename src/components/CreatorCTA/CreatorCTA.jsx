import "./CreatorCTA.css";
import Image from "next/image";
import GridBackground from "../ui/GridBackground";

const CreatorCTA = () => {
  return (
    <GridBackground className="creator-cta">
      <div className="creator-cta-inner">
        <div className="creator-cta-art" aria-hidden="true">
          <div className="creator-cta-artboard">
            <Image
              src="/shapes/parrotSpiralShape.png"
              alt=""
              width={266}
              height={387}
              className="creator-cta-shape creator-cta-parrot-top-left"
            />
            <Image
              src="/shapes/whiteSpiralShape.png"
              alt=""
              width={633}
              height={664}
              className="creator-cta-shape creator-cta-white-top-left"
            />
            <Image
              src="/shapes/parrotPiramid.png"
              alt=""
              width={426}
              height={744}
              className="creator-cta-shape creator-cta-lime-top-right"
            />
            <Image
              src="/shapes/whitePiramid.png"
              alt=""
              width={380}
              height={378}
              className="creator-cta-shape creator-cta-white-top-right"
            />
            <Image
              src="/shapes/whitePiramid.png"
              alt=""
              width={380}
              height={378}
              className="creator-cta-shape creator-cta-white-left"
            />
            <Image
              src="/shapes/ring.png"
              alt=""
              width={344}
              height={343}
              className="creator-cta-shape creator-cta-ring"
            />
            <Image
              src="/shapes/parrotSpiralShape.png"
              alt=""
              width={266}
              height={387}
              className="creator-cta-shape creator-cta-parrot-bottom-right"
            />
          </div>
        </div>

        <div className="creator-cta-content">
          <h2>
            Unlock Your Potential as a
            <br />
            Creator with ByteSpace
          </h2>

          <p>
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize your
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>

          <button type="button" className="creator-cta-button">
            Join as Creator
          </button>
        </div>
      </div>
    </GridBackground>
  );
};

export default CreatorCTA;