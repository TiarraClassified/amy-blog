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
            blogs: [],
            fade1:false,
            fade2: false, 
            fade3: false, 
            fade4: false,
            line: false
        }
      
          this.handleScroll = this.handleScroll.bind(this)
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

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
    
      handleScroll(event){
        if (window.scrollY>1000){
          this.setState({
            fade1: true
          })
    
          setTimeout(()=>{
            this.setState({
              fade2: true
            })}, 500)
    
          setTimeout(()=>{
            this.setState({
              fade3: true
            })}, 1000)
    
          setTimeout(()=>{
            this.setState({
              fade4: true
            })}, 1500)
        }
    
        if (window.scrollY>1240){
          this.setState({
            line: true
          })
        }
      }

    render(){
        return(
            <div>
                <Navbar/>
                {/* this image will eventually be from cloudinary */}
                <div id='homeimage'><p>Micro Mini Short Stories<br/>By Amy Leavitt</p></div>

                <div id='belownav'>
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
{/* begin scroll effect */}

            <div classname='timeline'>
                <p className='timelinetext'>Story Timeline</p>
                <div className='line' style={(this.state.line)?{opacity:1, height: "1000px", transition: '3s'}:{opacity:0, height: 0}}>
                </div>

                <div className="right" 
                style={(this.state.fade1) ? {opacity : 1, transition: "3s"}: {opacity: 0}}
                ><p className='timelinetitle'>{this.state.blogs.length>0 && this.state.blogs[2].title}</p>
                <p className='timelinedate'>{this.state.blogs.length>0 && this.state.blogs[2].date}</p>
                </div>

                <div className='left' style={(this.state.fade2) ? {opacity : 1, transition: "3s"}: {opacity: 0}}><p className='timelinetitle'>{this.state.blogs.length>0 && this.state.blogs[3].title}</p>
                <p className='timelinedate'>{this.state.blogs.length>0 && this.state.blogs[3].date}</p></div>

                <div className='right' style={(this.state.fade3) ? {opacity : 1, transition: "3s"}: {opacity: 0}}><p className='timelinetitle'>{this.state.blogs.length>0 && this.state.blogs[4].title}</p>
                <p className='timelinedate'>{this.state.blogs.length>0 && this.state.blogs[4].date}</p></div>

                <div className='left' style={(this.state.fade4) ? {opacity : 1, transition: "3s"}: {opacity: 0}}><p className='timelinetitle'>{this.state.blogs.length>0 && this.state.blogs[5].title}</p>
                <p className='timelinedate'>{this.state.blogs.length>0 && this.state.blogs[5].date}</p></div>
            </div>
                </div>

            </div>
        )
    }
}