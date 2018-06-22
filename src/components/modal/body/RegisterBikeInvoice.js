import React, { Component } from "react";
import TextField from "material-ui/TextField";
import styles from "./CustomCss";

class RegisterBikeInvoice extends Component {

    render() {
        return (
            <div className="wrapp">
                <div className="w100p">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2">
                            <div className="invoice">
                                <h4>By register your bike!</h4>
                                <h3 className="color-web">You will receive 20BKC</h3>
                            </div>
                            <TextField
                                floatingLabelText="Enter your passport wallet"
                                fullWidth
                                style={styles.mb20}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterBikeInvoice;
