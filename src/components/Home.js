import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import Navbar from './Nav';
import axios from 'axios';
import Gear from './Gear';
import Scroll from './Scroll';

export default class Home extends Component{
    constructor(){
        super()
        this.state={
            uploadedFile: '',
            image: null,
            blogs: [],
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

                <div id='belownav'>
                <Gear/>
                <div className='blogholder'>
                    <div className='blogthumbnail'>
                        <div className='thumbnailimg'>
                            <Dropzone
                                multiple={false}
                                accept="image/*"
                                onDrop={this.onImageDrop.bind(this)}
                                className="dropzone">
                                    <img src={(this.state.image !== null) ? this.state.image.preview : null}/>
                            </Dropzone>

                        </div>

                        <div className='blogtext'>
                            <p className='title'>{this.state.blogs.length>0 && this.state.blogs[0].title}</p>
                            
                            <br/>

                            <p className='date'>{this.state.blogs.length>0 && this.state.blogs[0].date}</p>
                        </div>
                    </div>

                    <div className='blogthumbnail'>
                        <div className='thumbnailimg'>
                            <Dropzone
                                multiple={false}
                                accept="image/*"
                                onDrop={this.onImageDrop.bind(this)}
                                className="dropzone">
                                    <img src={(this.state.image !== null) ? this.state.image.preview : null}/>
                            </Dropzone>

                        </div>

                        <div className='blogtext'>
                            <p className='title'>{this.state.blogs.length>0 && this.state.blogs[1].title}</p>
                            
                            <br/>

                            <p className='date'>{this.state.blogs.length>0 && this.state.blogs[1].date}</p>
                        </div>
                    </div>
                </div>
{/* end of blogholder */}
            <Scroll blogs={this.state.blogs}/>

        </div>
        </div>
        )
    }
}