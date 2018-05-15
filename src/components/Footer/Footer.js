import React from 'react';
import {
  Icon,
  Container,
  Grid,
  Header,
  List,
  Segment
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './Footer.css';

const style = {
  footerContainer: {
    backgroundColor: '#FFF0F2',
    color: '#000000',
    height: '100'
  },
  footerStamp: {
    marginRight: 0,
    color: '#000000',
    display: 'block',
    width: '150px'
  },
  container: {},
  p: {
    fontFamily: '"Poiret One", cursive',
    color: '#000000',
    display: 'block',
    fontSize: '18px'
  }
};

const Footer = props => (
  <Segment inverted vertical style={style.footerContainer}>
    <Container className="footer">
      <Grid>
        <div className="row" style={style.footerStamp}>
          <Header
            style={style.p}
            inverted
            as="h4"
            content="&copy; Copyright ♡ Rebecca A. Olson"
          />
        </div>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
