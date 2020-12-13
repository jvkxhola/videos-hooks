import React, {useState} from 'react';

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');


  const onChangeText = (e) => {
    setTerm(e.target.value);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();

    onSubmit(term);
  }

  return(
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={term} onChange={onChangeText} />
        </div>
      </form>
    </div>
  )

}

export default SearchBar;