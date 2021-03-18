import ReactDOM from "react-dom";
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    authFunc() {
        const authData = {data: "Auth on my site"};
        if (WavesKeeper) {
            WavesKeeper.auth(authData)
                .then(auth => {
                    console.log(auth);
                }).catch(error => {
                console.error(error);
            })
        } else {
            alert("To Auth WavesKeeper should be installed.")
        }
    }

    transferFunc() {
        const txData = {
            type: 4,
            data: {
                amount: {
                    assetId: "WAVES",
                    tokens: "0.00000123"
                },
                fee: {
                    assetId: "WAVES",
                    tokens: "0.05"
                },
                recipient: "3N7iaKnAUMcsxqvLCtHgogyxyBLKx8xDztP"
            }
        };

        WavesKeeper.signAndPublishTransaction(txData).then((data) => {
            //data - строка готовая для отсылки на ноду(сервер) сети Waves
        }).catch((error) => {
            console.log(error)
        });
    }

    transferData() {
        const txData = {
            type: 12,
            data: {
                data: [
                    {key: "string", value: "testVal", type: "string"},
                    {key: "binary", value: "base64:AbCd", type: "binary"},
                    {key: "integer", value: 20, type: "integer"},
                    {key: "boolean", value: false, type: "boolean"},
                ],
                fee: {
                    "tokens": "0.01",
                    "assetId": "WAVES"
                }
            }
        };

        WavesKeeper.signAndPublishTransaction(txData).then((data) => {
            //data - строка готовая для отсылки на ноду(сервер) сети Waves
        }).catch((error) => {
            console.log(error)
        });
    }

    render() {
        return (
            <div className="container">
                <input className="btn btn-primary" type="submit" value="Auth with WavesKeeper" onClick={this.authFunc}/>
                &emsp;
                <input className="btn btn-primary" type="submit" value="Transfer money" onClick={this.transferFunc}/>
                &emsp;
                <input className="btn btn-primary" type="submit" value="Send data" onClick={this.transferData}/>
            </div>
        )
    }
}

const app = document.getElementById('app');
if (app) {
    ReactDOM.render(<App/>, app);
}