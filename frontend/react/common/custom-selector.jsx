import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CustomSelector extends Component {
  constructor(props) {
    super(props);
    this.selectBox = null;
    this.state = {
      selectdValue: null,
    };
    this.changeSelect = this.changeSelect.bind(this);
  }

  componentDidMount() {
    this.setSelectd(this.props.options, this.props.selected);
  }

  showSelect(e) {
    const selectBox = ReactDOM.findDOMNode(this.selectBox);
    if (selectBox.style.display && selectBox.style.display === 'block') {
      selectBox.style.display = 'none';
    } else {
      selectBox.style.display = 'block';
    }
  }

  changeSelect(label) {
    this.setState({ selectedValue: label });
  }

  renderOptions(options) {
    return options.map((option) => {
      const { val, label } = option;
      return <a href='#' key={val} className='option-select' onClick={(e) => { this.changeSelect(label); }}>{label}</a>;
    });
  }

  setSelectd(options, selected) {
    let ret = null;
    if (selected) {
      ret = options.filter((option) => {
        return option.val === selected;
      })[0];
    } else {
      ret = options[0];
    }
    this.setState({
      selectedValue: ret.label,
    })
  }

  render() {
    const { options, selected } = this.props;
    return (
      <div className='inline-block btn-middle' id='search-filter' onClick={e => this.showSelect(e)}>
        {this.state.selectedValue}
        <span className='glyphicon glyphicon-chevron-down' />
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
};
