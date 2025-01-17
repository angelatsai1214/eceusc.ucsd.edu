import * as React from "react";
import { Container } from "./helpers";
import members from "./members";

const Slides1 = () => (
  <React.Fragment>
    <div class="ui row">
      <div style={{ textAlign: "center" }}>
        <iframe
          title="slides"
          src="slides/UCSD ECE USC Interview 10_28_2020.pdf"
          width="575"
          height="375"
          frameborder="0"
          scrolling="no"
        />
      </div>
    </div>
  </React.Fragment>
);
const Slides2 = () => (
  <React.Fragment>
    <div class="ui row">
      <div style={{ textAlign: "center" }}>
        <iframe
          title="slides"
          src="slides/UCSD ECE USC Interview 11_25_2020.pdf"
          width="575"
          height="375"
          frameborder="0"
          scrolling="no"
        />
      </div>
    </div>
  </React.Fragment>
);
const Slides3 = () => (
  <React.Fragment>
    <div class="ui row">
      <div style={{ textAlign: "center" }}>
        <iframe
          title="slides"
          src="slides/UCSD ECE USC Interview 01_21_2021.pdf"
          width="575"
          height="375"
          frameborder="0"
          scrolling="no"
        />
      </div>
    </div>
  </React.Fragment>
);

export default class Interview extends React.Component {
  render() {
    return (
      <div >
        <Container
          header="ECE Interviews"
          subheader=""
          content="The newest addition to the events, ECE interview 
          was created to benefit those remote learning. ECE interview 
          invites a professor to come and present what they do here at UCSD, 
          with the professor representing a specific depth that ECE students 
          can take. Once finished, students who come or answer a form can 
          question the professor about anything, be it research, the classes 
          they teach, or even how they have been handling the quarantine."
          content2={
            <div
              style={{
                fontSize: "1.5rem",
                textAlign: "center",
                marginTop: "22px"
              }}
            >
            <div class="ui divider" />
            Previous ECE Interviews
            </div>
          }
          content3={
            <div
            style={{
              fontSize: "1.0rem",
              textAlign: "center",
              marginTop: "22px"
            }}
            >
              <div className="ui centered header"
                style={{
                  fontSize: "1.0rem",
                  marginBottom: "0px"
                }}
              >
                October 28th, 2020: Hanh-Phuc Le
              </div>
              <div className="ui centered header"
                style={{
                  fontSize: "1.0rem",
                  marginTop: "0px"
                }}
              >
                <a
                  href="https://drive.google.com/file/d/18r-2oTG70d3ataE847DSWOBwzBZloUPJ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video
                </a>
              </div>
              <Slides1 />
              
              <div className="ui centered header"
                style={{
                  fontSize: "1.0rem",
                  marginBottom: "0px"
                }}
              >
                November 25th, 2020: Tse Nga
              </div>

              <div className="ui centered header"
                style={{
                  fontSize: "1.0rem",
                  marginTop: "0px"
                }}
              >
                <a
                  href="https://drive.google.com/file/d/1rl3JJ3rtuMhqcCDGahgk-BCn4bSQKWNe/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video
                </a>
              </div>
              <Slides2 />

              <div className="ui centered header"
                style={{
                  fontSize: "1.0rem",
                  marginBottom: "0px"
                }}
              >
                January 21st, 2021: Fred Harris
              </div>
              <div className="ui centered header"
                style={{
                  fontSize: "1.0rem",
                  marginTop: "0px"
                }}
              >
                <a
                  href="https://drive.google.com/file/d/1X53REplobWadM2HO467qUmexHSmkZ-sb/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video
                </a>
              </div>
              <Slides3 />
              </div>
          }
          contacts={[members[8]]}
        />
      </div>
    );
  }
}
