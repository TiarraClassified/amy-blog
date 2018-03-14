import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import Navbar from './Nav';
import axios from 'axios';

export default class Home extends Component{
    constructor(){
        super()
        this.state={
            uploadedFile: '',
            image: null,
            blogs: []
        }
    }

    componentWillMount(){
        axios.get('/api/getBlogs').then(res=>{
            this.setState({
                blogs: res.data
            })
        })
    }

    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0],
            image: files[0]
        });

    }

    render(){
        return(
            <div>
                <Navbar/>
                {/* this image will eventually be from cloudinary */}
                <div id='homeimage'><p>Micro Mini Short Stories<br/>By Amy Leavitt</p></div>

                <div className='blogholder'>
                    <div className='blogthumbnail'>
                        <img src='' alt='blog thumbnail'/>
                        <div className='blogtext'>
                            <p>Title: {this.state.blogs.length>0 && this.state.blogs[0].title}</p>
                            
                            <br/>

                            <p>Date: {this.state.blogs.length>0 && this.state.blogs[0].date}</p>

                            <br/>
                            <hr/>

                            <p>{this.state.blogs.length>0 && this.state.blogs[0].content}</p>
                        </div>
                    </div>
                </div>
                {/* <Dropzone
                    multiple={false}
                    accept="image/*"
                    onDrop={this.onImageDrop.bind(this)}
                    className="dropzone">
                    <p>Drop an image or click to select a file to upload.</p>
                </Dropzone>
                Image below here:
                <div><img style={{width: "50px", height: "50px"}} src={(this.state.image !== null) ? this.state.image.preview : null}/></div> */}
            </div>
        )
    }
}