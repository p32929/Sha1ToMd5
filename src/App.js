import React, {Component} from 'react';
import './App.css';
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Typography from "@material-ui/core/es/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/es/Button/Button";
import Snackbar from "@material-ui/core/es/Snackbar/Snackbar";

const style = {
    root: {
        flexGrow: 1,
    },
    AppBar: {
        backgroundColor: '#388E3C'
    },
    TypographyToolbar: {
        color: '#FFF',
    },
    TypographyBox: {
        marginTop: 16,
    },
    Paper: {
        margin: 16,
        padding: 16,
    },
    ButtonLeft: {
        marginLeft: 16,
        marginBottom: 16,
        marginTop: 16,
        marginRight: 8
    },
    ButtonRight: {
        marginLeft: 8,
        marginBottom: 16,
        marginTop: 16,
        marginRight: 16
    },

}

class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.setSha1 = this.setSha1.bind(this)
        this.setMd5 = this.setMd5.bind(this)
        this.copy = this.copy.bind(this)

        this.state = {
            sha1: '',
            md5: '',
            open: false,
            snackbarText: ''
        }
    }

    setSha1(e) {
        console.log(e.target.value)
        if (e.target.value != null) {
            this.setState({
                sha1: e.target.value.toString().trim()
            })
        }
    }

    setMd5() {
        var sha1 = this.state.sha1
        if (sha1 !== '') {
            var arr = sha1.split(":")
            var byteValues = []

            for (var i = 0; i < arr.length; i++) {
                byteValues[i] = this.hexToDec(arr[i])
            }

            this.setState({
                md5: Buffer.from(byteValues).toString('base64')
            })
        }
        else {
            this.setState({
                open: true,
                snackbarText: 'Please input SHA1 value first'
            })

            setTimeout(() => {
                this.setState({
                    open: false
                })
            }, 2000)
        }
    }

    hexToDec(s) {
        var i, j, digits = [0], carry;
        for (i = 0; i < s.length; i += 1) {
            carry = parseInt(s.charAt(i), 16);
            for (j = 0; j < digits.length; j += 1) {
                digits[j] = digits[j] * 16 + carry;
                carry = digits[j] / 10 | 0;
                digits[j] %= 10;
            }
            while (carry > 0) {
                digits.push(carry % 10);
                carry = carry / 10 | 0;
            }
        }
        return digits.reverse().join('');
    }

    copy(e) {
        if (this.state.md5 !== '') {
            var textField = document.createElement('textarea')
            textField.innerText = this.state.md5.trim()
            document.body.appendChild(textField)
            textField.select()
            document.execCommand('copy')
            textField.remove()

            this.setState({
                open: true,
                snackbarText: 'Text copied'
            })

            setTimeout(() => {
                this.setState({
                    open: false
                })
            }, 2000)
        } else {
            this.setState({
                open: true,
                snackbarText: 'Empty value'
            })

            setTimeout(() => {
                this.setState({
                    open: false
                })
            }, 2000)
        }
    }

    render() {
        return (

            <Grid style={style.root} direction="row" spacing={16}>
                <AppBar position='static' style={style.AppBar}>
                    <Toolbar>
                        <Typography variant="h6" style={style.TypographyToolbar}>
                            Facebook MD5 Helper for Release APK
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Grid container direction='row' justify='center' alignContent='center'>
                    <Paper style={style.Paper}>
                        <Grid container direction='column' justify='center' alignContent='center'>

                            <Typography align='center' variant="title" gutterBottom>
                                Input Sha1 value here
                            </Typography>

                            <TextField
                                label="SHA1"
                                margin="normal"
                                onChange={this.setSha1}
                            />

                            <Typography style={style.TypographyBox} align='center' variant="title" gutterBottom>
                                Converted MD5 value will be here
                            </Typography>

                            <TextField
                                label="MD5"
                                margin="normal"
                                value={this.state.md5}/>

                        </Grid>

                        <Grid container direction='row' justify='center' alignContent='center'>
                            <Button style={style.ButtonLeft} variant="contained" color="primary" onClick={this.setMd5}>
                                Convert
                            </Button>
                            <Button style={style.ButtonRight} variant="contained" color="primary" onClick={this.copy}>
                                Copy
                            </Button>
                        </Grid>
                    </Paper>
                </Grid>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.state.snackbarText}</span>}
                />

            </Grid>
        );
    }
}

export default App;
