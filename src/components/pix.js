import React, { Component } from 'react'
import PicItem from './gallery';

class pix extends Component {
    constructor() {
        super();
        this.state = {
            photos: []
        };
    }

    componentDidMount(){
        this.getPhotos()
    }

    getPhotos() {
        fetch('http://127.0.0.1:5000/pix/get')
            .then(response => response.json())
            .then((data) => {
              this.setState({
                    photos: data,
              });
              console.log("see stored photos", photos)
            })
            .catch((error) => {
                console.log("error getting content", error)
            });
    }

    pictureItems() {
        return this.state.photos.map(pict => {
            return <PicItem key={pict.id} item={pict} />;
        });
    }

        render() {
            return (
                <div className='pics-wrap'>
                    {this.pictureItems()}
                </div>


            );
        }
    

}



export default pix;