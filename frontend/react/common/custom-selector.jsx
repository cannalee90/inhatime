import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CustomSelector extends Component {
  constructor(props) {
    super(props);
    this.selectBox = null;
    this.wrapper = null;
    this.state = {
      selected: { label: null, value: null },
      isOpen: false,
    };
    this.handleTouchOutside = this.handleTouchOutside.bind(this);
  }

  componentWillMount() {
    this.setState({ isOpen: false });
  }

  componentDidMount() {
    this.setSelected(this.props.options, this.props.selected);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.isOpen !== this.state.isOpen) {
      this.toggleTouchOutsideEvent(nextState.isOpen);
    }
  }

  toggleTouchOutsideEvent(isOpen) {
    if (isOpen) {
      document.addEventListener('click', this.handleTouchOutside);
    } else {
      document.removeEventListener('click', this.handleTouchOutside);
    }
  }

  handleTouchOutside(event) {
    if (this.wrapper && !this.wrapper.contains(event.target)) {
      this.menuClose();
    }
  }

  setSelected(options, selected) {
    let ret = {};
    if (selected) {
      ret = options.filter((option) => {
        return option.value === selected;
      })[0];
    } else {
      ret = options[0];
    }
    this.changeSelected(ret);
  }

  changeSelected(option) {
    this.setState({
      selected: option,
    });
    this.props.onChange(option.value);
  }

  toggleSelect(e) {
    if (this.state.isOpen) {
      this.menuClose();
    } else {
      this.menuOpen();
    }
  }

  menuClose() {
    const selectBox = ReactDOM.findDOMNode(this.selectBox);
    selectBox.style.display = 'none';
    this.setState({ isOpen: false });
  }

  menuOpen() {
    const selectBox = ReactDOM.findDOMNode(this.selectBox);
    selectBox.style.display = 'block';
    this.setState({ isOpen: true });
  }

  renderArrow() {
    if (this.state.isOpen) {
      return <span className='glyphicon glyphicon-chevron-up' />;
    }
    return <span className='glyphicon glyphicon-chevron-down' />;
  }

  renderOptions(options) {
    return options.map((option) => {
      const { value, label } = option;
      return <span href='#' key={value} className='option-select' onClick={(e) => { this.changeSelected(option); }}>{label}</span>;
    });
  }

  render() {
    const { options } = this.props;
    return (
      <div className='inline-block btn-middle' id='search-filter' ref={(target) => { this.wrapper = target; }} onClick={e => this.toggleSelect(e)}>
        {this.state.selected.label}
        {this.renderArrow()}
        <div id='serach-filter-drop' className='btn-middle btn-drop' ref={(target) => { this.selectBox = target; }}>
          {this.renderOptions(options)}
        </div>
      </div>
    );
  }
}

CustomSelector.propTypes = {
  options: React.PropTypes.array.isRequired,
  selected: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
};
