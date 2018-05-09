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
    backgroundColor: '#fae8f3',
    color: '#000000'
  },
  footerList: {
    color: 'rgb(21, 221, 98)'
  },
  footerStamp: {
    margin: 0,
    color: '#000000'
    // fontFamily: '"Sofia", cursive'
  },
  heartIcon: {
    float: 'none',
    textAlign: 'center'
  }
};

const Footer = props => (
  <Segment inverted vertical style={style.footerContainer}>
    <Container className="footer">
      <Grid>
        <Grid.Row style={style.heartIcon}>
          <Header
            inverted
            as="h4"
            content="Made with"
            style={style.footerStamp}
          />
          <Icon name="empty heart" size="big" style={style.footerStamp} />
          <Header
            inverted
            as="h4"
            content="by Rebecca A. Olson"
            style={style.footerStamp}
          />
        </Grid.Row>
        {/* <Grid.Row>
          <Grid.Column width={5}>
            <Header inverted as="h4" content="Meet Our TEAM" />
            <List link inverted>
              <List.Item
                content={<a href="https://github.com/mtoasis">Julian</a>}
              />
              <List.Item
                content={
                  <a href="https://github.com/codechennerator">Nathan</a>
                }
              />
              <List.Item
                content={<a href="https://github.com/akaryanreynolds">Ryan</a>}
              />
              <List.Item
                content={<a href="https://github.com/yangmeeso">Meeso</a>}
              />
              <List.Item
                content={<a href="https://github.com/liuzhongiceman">Zhong</a>}
              />
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header inverted as="h4" content="Follow Us" />
            <List link inverted>
              <List.Item as="a">
                <Icon name="twitter" size="big" style={style.footerList} />
              </List.Item>
              <List.Item as="a">
                <Icon name="facebook" size="big" style={style.footerList} />
              </List.Item>
              <List.Item as="a">
                <Icon name="instagram" size="big" style={style.footerList} />
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row> */}
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
