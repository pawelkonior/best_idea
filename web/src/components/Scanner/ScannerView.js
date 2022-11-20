import React, {useState, useRef, useEffect} from "react";
import "../../partials/MainPage.scss";
import Scanner from "./Scanner";
import NavBar from "../NavBar";
import Footer from "../Footer";
import {handleDataFromAPI} from "../../request";
import ScannerResult from "./ScannerResult";


var myHeaders = new Headers();
myHeaders.append(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcxNTAwOTUyLCJpYXQiOjE2Njg5MDg5NTIsImp0aSI6IjJjM2Y2NDE2YzJlZTQ2YTRiNjQ1OTlhODY1YWVkYjgwIiwidXNlcl9pZCI6MX0.1pxGdWVV2B9xlOgY7u4YZbUBjSmucHYJqsKIhhyCp3E"
);
myHeaders.append("Access-Control-Allow-Origin", "*");

var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
};

const ScannerView = () => {
    const [scanning, setScanning] = useState(false);
    const [results, setResults] = useState([]);
    const [product, setProduct] = useState(null);
    const scannerRef = useRef(null);

    useEffect(() => {
        if (results[0] !== undefined) {
            handleDataFromAPI({endpoint: `barcode/${results[0]}`})
                .then((response) => response.json())
                .then((data) => {
                    setProduct(data);
                })
                .catch((error) => console.log("error", error));
        }
    }, [results]);

    return (
        <div>
            <NavBar/>
            <div className="scanner">
                <button className={scanning ? "btn btn-rel btn-scan" : "btn btn-rel"}
                        onClick={() => setScanning(!scanning)}>{scanning ? 'Stop scan' : 'Start scan'}</button>

                <div ref={scannerRef}
                     style={{
                         position: 'relative',
                         border: '0px solid white',
                         width: '100%',
                         height: '300px',
                         overflow: "hidden"
                     }}>
                    <canvas className="drawingBuffer" style={{
                        position: 'absolute',
                        top: '0px',
                        left: '0px',
                        height: '100%',
                        width: '100%',
                        border: '0px solid green',
                    }} width="640" height="300"/>
                    {scanning ? <Scanner scannerRef={scannerRef}
                                         onDetected={(result) => setResults([result])}/> : null}
                </div>
            </div>

            {!!product ? (
                <ScannerResult name={product.name} image={product.image}/>
            ) : null}
            <Footer/>
        </div>
    );
};

export default ScannerView;
