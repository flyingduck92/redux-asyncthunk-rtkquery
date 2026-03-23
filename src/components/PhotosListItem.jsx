import { GoTrashcan } from 'react-icons/go'
import { useRemovePhotoMutation } from '../store'
import Button from './Button'

function PhotosListItem({ photo }) {
  const [removePhoto, results] = useRemovePhotoMutation()

  const handleRemovePhoto = () => removePhoto(photo)

  return (
    <div className='relative cursor-pointer group/photo'>
      <Button loading={results.isLoading}
        onClick={handleRemovePhoto}
        className="absolute cursor-pointer top-2 left-2 z-5 opacity-0 group-hover/photo:bg-gray-200 group-hover/photo:opacity-80 border-0 size-12">
        <GoTrashcan className='text-3xl' />
      </Button>
      <img className='sm:size-37.5 md:size-40'
        src={photo.url}
        alt={photo.id} />
    </div>
  )
}

export default PhotosListItem