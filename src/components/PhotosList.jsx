import { useAddPhotoMutation, useFetchPhotosQuery } from '../store'
import Button from './Button'
import PhotosListItem from './PhotosListItem'
import Skeleton from './Skeleton'

function PhotosList({ album }) {
  const { data, error, isFetching } = useFetchPhotosQuery(album)
  const [addPhoto, addPhotoResults] = useAddPhotoMutation()

  const handleAddPhoto = () => addPhoto(album)

  let content
  if (isFetching) {
    content = <Skeleton times={4} className='h-40 w-40' />
  } else if (error) {
    content = <div>Error loading albums</div>
  } else {
    content = data.map(photo => {
      return <PhotosListItem key={photo.id} photo={photo} />
    })
  }

  return (
    <div className='m-2'>
      <div className='flex flex-row items-center justify-between'>
        <h3 className='text-lg font-bold'>Photos in {album.title}</h3>
        <Button className='text-nowrap cursor-pointer'
          loading={addPhotoResults.isLoading}
          onClick={handleAddPhoto}
        >
          + Add Photo
        </Button>
      </div>
      <div className='flex items-center flex-wrap gap-2 mt-2'>
        {content}
      </div>
    </div>
  )
}

export default PhotosList