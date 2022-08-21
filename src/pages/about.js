import React from 'react';
import juniorPictwo from '../assets/juniorPictwo.jpg';
import johnPictwo from '../assets/johnPictwo.jpg';
import epiPictwo from '../assets/epiPictwo.jpg';
import { Row, Col, } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import '../App.css';

export const About = () => (
    <div>
        <h1>About Us</h1>

        <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
                <Image src={juniorPictwo} circle className="profile-pic" alt="holder.js/100px250" roundedCircle fluid />
                <h3>Junior</h3>
                <br></br>
                <p><font size="4">Junior is the heart and soul for this amazing site. 2 years ago, he experienced a stroke that paralyzed half
                    of his body. Unable to use half of his body, he believed, had faith, and kept moving foward, never allowing
                    anything to stop him in reaching his dreams. One of those dreams was to complete his certification in full
                    stack web development with Bethel School of Technology. For 10 months, he has used half of his body to study,
                    to learn, to succeed in coding. He is a walking testimony, and now has a new profound dream to give the world, stroke survivors,
                    a chance to share their story. To share their testimony. To give hope to those who seem defeated. Junior is a warrior,
                    a survivor, a stroke survivor.
                </font></p>
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
                <Image src={johnPictwo} circle className="profile-pic" alt="holder.js/100px250" roundedCircle fluid />
                <h3>John</h3>
                <br></br>
                <p><font size="4">John is a true leader. He lights up a room, makes others feel valued, honored, and within him is a confidence, a peace and a kindness that others
                    gravitate to. He carries a calling on his life to do great things, to help others, to be a voice of hope. He has been
                    that voice of hope for us as a team and for this site. He believed in us that we can make something amazing, and never
                    gave up on us. His leadership made a way for us to see the vision, to see the goal in plain sight. Becuase of John's
                    continuous optimistic view of this site, we are able to give stroke survivors a chance to be a voice of hope to others.
                    John is one of a kind. We are truly blessed to know him.
                </font></p>
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
                <Image src={epiPictwo} circle className="profile-pic" alt="holder.js/100px250" roundedCircle fluid />
                <h3>Epi</h3>
                <br></br>
                <p><font size="4">Epi has a kindness that shatters fear. When he speaks, the peace of the Lord is ushered in around you. He is a devout husband and father,
                    who loves with a capacity as deep as an ocean. He is bafflingly brilliant, always having a witty joke on hand, or the next solution to one of life's greatest mysteries. His smile and gentle spirit makes you feel at home, and he never misses the opportunity to encourage you and tell you how amazing you are.
                    Epi is truly a friend and son of God, admirable and honorable through and through. </font></p>
            </Col>
        </Row>

    </div>



)
