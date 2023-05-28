import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from 'react-pdf';
import './Qualification.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
class Qualification extends Component {
    state = { numPages: null, pageNumber: 1, filename: this.props.filename };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    goToPrevPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
    goToNextPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div>


                <div style={{ width: "500px", border: "1px solid black" }}>
                    <Document
                        file={`../${this.props.filename}`}
                        onLoadSuccess={this.onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} width={600} />
                    </Document>
                </div>

                <nav>
                    <button className="btn mr-3" onClick={this.goToPrevPage}>Prev</button>
                    <button className="btn my-2" onClick={this.goToNextPage}>Next</button>
                </nav>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </div >
        );
    }
}

export default Qualification;