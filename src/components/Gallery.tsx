import GalleryItem, { GalleryInfo } from './GalleryItem'

interface GalleryProps {
    data: GalleryInfo[],
}

function Gallery(props: GalleryProps){

    const display = props.data.map((item: GalleryInfo, index: number) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
