// import React from 'react';
// import styles from './descriptionBlock.scss';

export default class DescriptionBlock extends React.Component {

  constructor (props) {
    super(props);

    this._onTouchStart = this._onTouchStart.bind(this);
    this._onTouchMove = this._onTouchMove.bind(this);
    this._onTouchEnd = this._onTouchEnd.bind(this);

    this.state = {
      swiped: false,
      positionScroll: 0,
      textWithTable: '',
      inCaseOfTable: addClassWhenTable,
      isArrowNeeded: false,
      generatedClassForArrow: null,
      thisArrow: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M18.507 10H1m9-9l9 9-9 9" fill="none" stroke="#2637DD" stroke-width="1" stroke-linecap="round"/></svg>'
    };

    this._swipe = {};
    this.minDistance = 50; // if the finger make more than 50px the system take the information like a real swiping
  }

  _onTouchStart (e) {
    const touch = e.touches[0];
    this._swipe = { x: touch.clientX };
    this.setState({ swiped: false });
  }

  _onTouchMove (e) {
    if (e.changedTouches && e.changedTouches.length) {
      this._swipe.swiping = true;

      const tableElement = document.querySelector('.mobile table');
      const arrowElement = document.querySelector('.mobile span');
      const containerTable = document.querySelector('.mobile');

      let scrollBarPositionX = tableElement.pageXOffset | containerTable.scrollLeft;
      let scrollPercentX = 100 * scrollBarPositionX / (tableElement.clientWidth - containerTable.clientWidth);
      let scrollBarPositionY = window.pageYOffset | window.scrollTop;
      let scrollPercentY = 100 * scrollBarPositionY / (tableElement.clientHeight - window.innerHeight);

      if (scrollPercentY >= 12 && scrollPercentY < 110 && scrollPercentX < 100) {
        this.state.isArrowNeeded = true;
      } else {
        this.state.isArrowNeeded = false;
      }

      if (this.state.isArrowNeeded) {
        arrowElement.classList.remove(styles.hideArrow);
      } else {
        arrowElement.classList.add(styles.hideArrow);
      }
    }
  }

  _onTouchEnd (e) {
    const touch = e.changedTouches[0];
    const absX = Math.abs(touch.clientX - this._swipe.x);

    if (this._swipe.swiping && absX > this.minDistance) {
      this.props.onSwiped && this.props.onSwiped();
      this.setState({ swiped: true });
    }
    this._swipe = {};
  }

  render () {

    return (
      <div
        /* className={`${styles.root} ${styles.specific_table_container_style}`} */
        onTouchStart={this._onTouchStart}
        onTouchMove={this._onTouchMove}
        onTouchEnd={this._onTouchEnd}
        />
    );
  }
}
