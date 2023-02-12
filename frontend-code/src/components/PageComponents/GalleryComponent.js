import React from "react";
import { baseRequest } from "../../constants";

import ImageGallery from 'react-image-gallery';

const DataHeader = (props) => {
  return (
    <div className="col l12 s12">
      <h3>{props.header}</h3>
    </div>
  );
};

class GalleryComponent extends React.Component {
  state = {
    images: [
      {
        "imageLink": "https://res.cloudinary.com/iste-nitk-website/image/upload/v1675586733/Gallery/pics_2022/To_be_honest_kcq7tv.png"
      },
      {
        "imageLink": "https://res.cloudinary.com/iste-nitk-website/image/upload/v1675586732/Gallery/pics_2022/Obscura_mlbhy5.png"
      }
    ]
  }

  componentDidMount() {
    console.log("Fetching...");
    
    baseRequest.get("/gallery/").then((res) => {
      console.log(res);
      this.setState({
          images: [...this.state.images, ...res.data.images],
      }); 
    });
  } 

  render() {
    const images = [
      {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ];

    let cards = []
    for (let image of this.state.images) {
      cards.push(
        <div>
          <div className="card">
            <div className="card-image waves-block waves-light">
              <img className="activator responsive_img" src={image.imageLink} alt={image.caption} />
            </div>
            <div className="card-reveal" style={{opacity: 0.8}}>
              <span className="card-title grey-text text-darken-4">
              <i class="material-icons right">close</i><br/>{image.caption}
              </span>
            </div>
          </div>  
        </div>
      );
    }

    return (
      <div>
        <DataHeader header="Gallery" />

        <div className="row">
          <div className="col s6 push-s3">
            <ImageGallery items={images} />
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryComponent;