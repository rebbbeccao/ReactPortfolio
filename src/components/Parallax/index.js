// import React, { Component } from 'react';

// export default class Parallax extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       speed: this.props.speed || 1,
//       width: '100%',
//       height: this.props.height || '100%',
//       top: this.props.top || '0%',
//       left: this.props.left,
//       right: this.props.right,
//       position: 'absolute',
//       zIndex: 'this.props.zindex' || '0%',

//       //Background properties
//       backgroundRepeat: 'no-repeat',
//       backgroundPosition: 'center',
//       backgroundColor: this.props.color || null,
//       backgroundImage: `url(${this.props.image})`
//     };

//     this.handleScroll = this.throttle(this.handleScroll.bind(this), 10);
//   }

//   throttle(fn, wait) {
//     let time = Date.now();
//     return function() {
//       if (time + wait - Date.now() < 0) {
//         fn();
//         time = Date.now();
//       }
//     };
//   }

//   componentDidMount() {
//     window.addEventListener('scroll', this.handleScroll);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('scroll', this.handleScroll);
//   }

//   handleScroll() {
//     const speed = this.props.speed;
//     const top = this.top;

//     const pageTop = window.scrollY;
//     const newTop = top - pageTop * speed;

//     this.refs.parallaxElement.style.top = `${newTop}px`;
//   }
//   render() {
//     console.log(this.props.speed);
//     return (
//       <div ref="parallaxElement" style={{ ...this.state }}>
//         {this.props.children}
//       </div>
//     );
//   }
// }
