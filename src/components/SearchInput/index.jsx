import React from 'react';
import './index.css';

class SearchInput extends React.PureComponent {
  state = {
    searchInput: ''
  };

  handleChange = ({ target }) =>
    this.setState({
      [target.name]: target.value
    });

  render() {
    const { searchInput } = this.state;

    return (
      <input
        className="searchInput"
        type="text"
        name="searchInput"
        onChange={this.handleChange}
        value={searchInput}
        placeholder="Поиск по сайту"
      />
    );
  }
}

export default SearchInput;
