import React, { useState } from 'react';
import { setGlobal } from 'reactn';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { Button } from "../Wrappers/Wrappers";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    rightAlign: { textAlign: 'right', verticalAlign: 'top' },
}));

const config = require('../../config');
const Web3 = require('web3');
import axios from "axios";
import Cookies from "universal-cookie";
let cookies = new Cookies();

export default function sendDialog(props) {
    var acctInfo = props.tokenAcct.split("|");
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => { setOpen(true); };
    const classes = useStyles();
    async function handleSend() {
        if (!window['ethereum']) { alert("Metamask is either not installed or disabled"); return; }
        var web3 = new Web3(window['ethereum']);
        window['ethereum'].enable();
        var accounts = await web3.eth.getAccounts();
        if (accounts.length == 0) { alert("You need be logged in to Metamask and allow the connection!"); return; };

        // blockchain code
        alert("Still implementing sexy new SEND TOKENS implementation.  Please check back Monday.");

        setOpen(false);
    };
    const handleClose = () => { setOpen(false); };

    return (
        <div>
            <Button className variant={"outlined"} color={"secondary"} style={{ marginLeft: 24 }} onClick={handleClickOpen}>Send Tokens</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Send Tokens</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Send {acctInfo[0]} tokens from {acctInfo[1]}: ...{acctInfo[2].slice(-6)} to
                    </DialogContentText>
                    <table><tr><td className={classes.rightAlign}><label>Blockchain: </label></td><td><select id="blockchain">
                        <option value="GBA Hub">GBA Hub</option>
                        <option value="Hive">Hive</option>
                        <option value="Steem">Steem</option>
                        <option value="Sokol" disabled>Sokol</option>
                        <option value="Ethereum" disabled>Ethereum</option>
                        <option value="Telos" disabled>Telos</option>
                    </select><br /><br /></td></tr>
                        <tr><td className={classes.rightAlign}><label>Address: </label></td><td><input type="text" id="addr" /><br /><br /></td></tr>
                        <tr><td className={classes.rightAlign}><label>Amount: </label></td><td><input type="text" id="amount" /><br /><br /></td></tr>
                        <tr><td className={classes.rightAlign}><label>Memo: </label></td><td><input type="text" id="memo" /></td></tr></table>
                </DialogContent>
                <DialogActions>
                    <Button className onClick={handleClose} color="primary">Cancel</Button>
                    <Button className onClick={handleSend} color="primary">Send</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}