import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch} from '@fortawesome/fontawesome-free-solid'


class SearchBar extends React.Component {
    state = {
        textToFind: 'Buscar'
    };
    handleChange = (event) => {
        this.setState({
            textToFind: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.textToFind);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="videoSearch">Video Search</label>
                        <input onChange={this.handleChange} name='videoSearch' type="text" value={this.state.term}/>
                        <i><FontAwesomeIcon icon={faSearch}/></i>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;