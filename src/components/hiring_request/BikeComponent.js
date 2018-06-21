import React, { Component } from "react";
import styles from "./HiringRequestComponentStyle";

class BikeComponent extends Component {

    render() {
        return (
            <div className="col-sm-3">
                <div style={styles.block}>
                    <img src={this.props.bike.image} alt="Bikecoin" style={styles.bike} />
                    <div style={styles.action}>
                        <button style={styles.button}>Approve</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default BikeComponent;