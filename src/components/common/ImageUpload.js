import React, { Component } from 'react';
import axios from 'axios';

class ImageUpload extends Component {
    constructor() {
        super();
        this.state = {
            file: '',
            imagePreviewUrl: ''
        }
        this.handleSubmit_Image = this.handleSubmit_Image.bind(this); //for image upload
        this.handleChange_Image = this.handleChange_Image.bind(this); //for previewing of image

    }
    //for image change
    handleChange_Image(e) {
        debugger;
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

    //for image upload
    handleSubmit_Image(e) {
        // logic of multipart
        let data = {
            "file": this.state.file
        }
        debugger;
        console.log('handle uploading-', data);
        const formData = new FormData()
        formData.append('File', this.state.file, this.state.file.name)
        axios.post('http://localhost:62092/api/Upload/user/PostUserImage/', formData)
            .then(response => {
                this.setState({
                    messages: response.data

                });
            });
    }
    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} alt="boo" />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        return (
            <div>
                <div className="form-group">
                    <div className="previewComponent">
                        <form onSubmit={(e) => this.handleSubmit_Image(e)}>
                            <input className="fileInput" type="file" onChange={(e) => this.handleChange_Image(e)} /> <br /><br />
                            <button className="submitButton" type="submit" onClick={(e) => this.handleSubmit_Image(e)}>Upload Image</button>
                        </form><br />
                        <div className="imgPreview">
                            {$imagePreview}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ImageUpload;