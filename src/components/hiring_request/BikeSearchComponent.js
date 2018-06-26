import React, { Component } from "react";
import styles from "./HiringRequestComponentStyle";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";
import BikeFilterComponent from "./BikeFilterComponent";

class BikeSearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        };
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <div className="row" style={styles.mb20}>
                <div className="col-sm-3">
                    <SelectField
                        floatingLabelText="Location"
                        value={this.state.value}
                        onChange={this.handleChange}
                        fullWidth
                        selectedMenuItemStyle={styles.selectedMenuItemStyle}
                    >
                        <MenuItem value={0} primaryText="San Francisco" />
                        <MenuItem value={1} primaryText="Delaware" />
                        <MenuItem value={2} primaryText="Milano (Italy)" />
                        <MenuItem value={3} primaryText="Singapore" />
                    </SelectField>
                </div>
                <div className="col-sm-9">
                    <div style={styles.filter}>
                        <div style={styles.search}>
                            <TextField
                                floatingLabelText="Search"
                                fullWidth
                            />
                        </div>
                        <BikeFilterComponent onChangeFilter={this.props.onChangeFilter}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default BikeSearchComponent;