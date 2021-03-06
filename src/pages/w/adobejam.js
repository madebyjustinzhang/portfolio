import React from "react"
import Fade from "react-reveal/Fade"
import { Link } from "gatsby"

import "../../App.css"
import "../pages.css"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import SEO from "../../components/seo"
import Roles from "../../components/Roles"

import ParagraphComponent from "../../components/articles/ParagraphComponent"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"

import ArticleHeader from "../../components/articles/ArticleHeader"

const AdobeJam = () => {
  const highlightColor = "#00A699"

  return (
    <>
      <SEO
        title="Justin Zhang - Airbnb Creative Jam"
        description="Ideating a new way to connect users on the Airbnb platform
                    during a 48 hour Adobe College Creative Jam"
        type="article"
      />
      <Navbar />
      <Container fluid style={{ zIndex: "0" }}>
        <ArticleHeader
          title={[{ text: "Airbnb Memories", color: "white" }]}
          subtitle={[
            {
              text:
                "A re-imagined experience for users to connect on Airbnb during the pandemic",
              color: "rgb(250, 250, 250)",
            },
          ]}
          date={[{ text: "CHALLENGE - 2020", color: "rgb(250, 250, 250)" }]}
          action={[
            {
              text: "Explore the Mockup",
              url:
                "https://xd.adobe.com/view/fbb7ba08-54f7-4032-5a36-98285fda1060-8d86/screen/9b2897d3-5b67-4421-9c6b-413e71f40d7d/Splash-Screen-Frame-1",
              variant: "light",
            },
          ]}
          bg={highlightColor}
        >
          <Image
            fluid
            src="https://doixzan7hf4ti.cloudfront.net/airbnb/memories-hero.png"
            className="p-5"
          />
        </ArticleHeader>

        <Roles
          roles="Product Designer, Motion Designer"
          team="Jenny Tran, Kylie To"
          tools="Adobe XD, Photoshop"
          type="Design Challenge"
          timeline="48 Hours"
        >
          <p>
            Spending 48 hours to create a new solution for Airbnb to allow
            travelers to stay connected during the pandemic, we came up with a
            new 'shared story' format for user to document their travels. This
            allows all members of the experience to provide their perspectives
            and encourage sharing.
          </p>
        </Roles>

        <Row className="mt-5 ">
          <Col>
            <ParagraphComponent title="Problem Statement" solution={false}>
              <p className="font-weight-medium lg">
                How might we empower Airbnb users to share and plan their
                travels?
              </p>
              <p>
                The problem statement was quite open ended, stipulating the need
                for ease of use and the ability for all members of the family to
                contribute their thoughts and experiences.
              </p>
              <p>
                We decided that our approach would be to tackle the issue by
                creating a stand-alone app for travelers to share their
                experiences while also providing social engagement features for
                sharing and tying them back to properties in Airbnb.
              </p>
            </ParagraphComponent>

            <Container>
              <Fade bottom duration={666} distance="50px">
                <Row className="mt-5 text-center">
                  <Col className="picture-highlight aa p-5">
                    <p style={{ color: "white" }}>The initial brainstorm</p>
                    <Image
                      src="https://doixzan7hf4ti.cloudfront.net/airbnb/planning1.png"
                      fluid
                      alt="Whiteboard with planning notes"
                      className="shadow"
                    />
                  </Col>
                </Row>
              </Fade>
            </Container>

            <ParagraphComponent title="Research" solution={false}>
              <p>
                From this point on, our focus was on coming up with a format
                that would be easy to use, while also fitting in with best
                mobile practices. We also worked towards interviewing other
                people and seeing how they used apps to help with their
                traveling experience.
              </p>
              <p>
                In total, we were able to interview over 10 people from
                different age categories and demographics, ranging in level of
                experience in traveling.
              </p>
            </ParagraphComponent>

            <Container>
              <Fade bottom duration={666} distance="50px">
                <Row className="mt-5 text-center">
                  <Col className="picture-highlight aa p-5">
                    <p style={{ color: "white" }}>
                      A series of questions and assumptions that we made during
                      the research process
                    </p>
                    <Image
                      src="https://doixzan7hf4ti.cloudfront.net/airbnb/reasearch.png"
                      fluid
                      alt="Whiteboard with notes around research points"
                      className="shadow"
                    />
                  </Col>
                </Row>
              </Fade>
            </Container>

            <ParagraphComponent title="User Personas" solution={false}>
              <p>
                Using the research that we gathered, we were able to put
                together 2 quick personas to represent that people that we
                invisioned using a platform like this.
              </p>
            </ParagraphComponent>

            {/* User Personal Component */}
            <Container>
              <Fade bottom duration={666} distance="50px">
                <Row className="mt-5 persona shadow-sm">
                  <Col md={4} className="p-5">
                    <Image
                      src="https://doixzan7hf4ti.cloudfront.net/airbnb/jason.jpg"
                      roundedCircle
                      fluid
                    />
                  </Col>
                  <Col md={8} className="my-auto">
                    <p className="font-weight-medium lg">Jason</p>
                    <p>
                      Jason is a 21 year old college student who loves to
                      travel. He’s a regular user of Airbnb because he finds it
                      easy to discover new accommodation options. During his
                      trips, he’s always taking pictures with his friends and
                      tagging them in large albums on social media platforms.
                    </p>
                    <p>
                      Jason also loves reading traveler’s blogs and their
                      experiences traveling with friends. He wishes that he can
                      make content like that on his own, without needing to
                      learn complicated design tools.
                    </p>
                  </Col>
                </Row>
              </Fade>
              <Fade bottom duration={666} distance="50px">
                <Row className="mt-3 persona">
                  <Col md={4} className="p-5">
                    <Image
                      src="https://doixzan7hf4ti.cloudfront.net/airbnb/sandra.jpg"
                      roundedCircle
                      fluid
                    />
                  </Col>
                  <Col md={8} className="my-auto">
                    <p className="font-weight-medium lg">Sandra</p>
                    <p>
                      Sandra is a 39 year old mother of 2. She likes taking
                      family vacations to spend quality time together. As her
                      two kids are still young, she wants to help preserve their
                      memories. They have started scrapbooking as a way to allow
                      them to participate in the documentation process.{" "}
                    </p>
                    <p>
                      As they have done a lot of things together already, Sally
                      is looking for inspiration for new activities that they
                      can do together. She also wants be able to easily share
                      new experiences and activities with her friends.
                    </p>
                  </Col>
                </Row>
              </Fade>
            </Container>

            <ParagraphComponent title="Rough Mockups">
              <p className="font-weight-medium lg">Perspectives</p>
              <p>
                We decided to try a new approach with stories, incorporating the
                simple idea of being able to swipe left and right through
                content with a new feature: perspectives.
              </p>
              <p>
                The content would be grouped in a series of up to 10 chapters.
                Each chapter would consist of a tile, a media item, a location,
                and a caption. Underneath, any person that took part in the trip
                would be able to add in their own media and comments; hence
                adding their perspective.
              </p>
            </ParagraphComponent>

            <Container>
              <Fade bottom duration={666} distance="50px">
                <Row className="mt-5 text-center">
                  <Col className="picture-highlight aa p-5">
                    <p style={{ color: "white" }}>
                      A rough wireframe of the core feature of the application,
                      Memories
                    </p>
                    <Image
                      src="https://doixzan7hf4ti.cloudfront.net/airbnb/initialmockup.png"
                      fluid
                      alt="wireframes"
                      className="shadow"
                    />
                  </Col>
                </Row>
              </Fade>
            </Container>
          </Col>
        </Row>

        <Row className="pt-5 pb-5 mt-5">
          <Container>
            <Row>
              <hr></hr>
            </Row>
            <Row className="">
              <Col md={4}>
                <h2 className="font-weight-bold solution-color">
                  The Solution
                </h2>
              </Col>
              <Col md={8}>
                <Fade bottom duration={666} distance="50px">
                  <p className="font-weight-medium lg">Airbnb Memories</p>
                  <p>Our solution consisted of 3 main features.</p>
                  <ul className="skill-list">
                    <li>
                      The ability to explore your friends and public memories
                    </li>
                    <li>
                      A collaborative editing tool to allow all users regardless
                      of age to contribute their perspectives
                    </li>
                    <li>
                      <span className="font-weight-bold">Memories</span>, a
                      simple narrative based medium to document experiences that
                      is simple to use and share with others
                    </li>
                  </ul>
                </Fade>
              </Col>
            </Row>
          </Container>
        </Row>

        <Row className="text-center">
          <Col md={4} className="picture-highlight">
            <Fade bottom duration={666} distance="50px" delay={300}>
              <h4 className="solution-color">
                Explore feed including smart recommendations
              </h4>
              <Image
                src="https://doixzan7hf4ti.cloudfront.net/airbnb/discovery-feature.png"
                fluid
                alt="A view of the final design choices made by the team"
              />
            </Fade>
          </Col>
          <Col md={4} className="picture-highlight">
            <Fade bottom duration={666} distance="50px" delay={300}>
              <h4 className="solution-color">
                Collaborative editing experience with contextual recommendations
              </h4>
              <Image
                src="https://doixzan7hf4ti.cloudfront.net/airbnb/editing-feature.png"
                fluid
                alt="A view of the final design choices made by the team"
              />
            </Fade>
          </Col>
          <Col md={4} className="picture-highlight">
            <Fade bottom duration={666} distance="50px" delay={500}>
              <h4 className="solution-color">
                Intuitive Memory story format, featuring Perspectives
              </h4>
              <Image
                src="https://doixzan7hf4ti.cloudfront.net/airbnb/memory-feature.png"
                fluid
                alt="A view of the final design choices made by the team"
              />
            </Fade>
          </Col>
        </Row>
        <Row className="conclusion-section pt-5 pb-5">
          <Container>
            <Fade bottom duration={666} distance="50px">
              <Row className="">
                <Col md={4}>
                  <h2 className="font-weight-bold">Conclusion</h2>
                </Col>
                <Col md={8}>
                  <p>
                    48 hours of planning, researching, and designing led to an
                    amazing experience creating this concept. I was able to
                    learn a lot about participating in my first design
                    competition and how to format my thinking in the face of a
                    design challenge!
                  </p>
                  <Button as={Link} to="/" variant="light">
                    Back Home
                  </Button>
                </Col>
              </Row>
            </Fade>
          </Container>
        </Row>
        <Footer />
      </Container>
    </>
  )
}

export default AdobeJam
