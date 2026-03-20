import { GoTrashcan } from 'react-icons/go'
import Button from './Button'
import ExpandablePanel from './ExpandablePanel'
import { useRemoveAlbumMutation } from '../store'

function AlbumListItem({ album }) {

  const [removeAlbum, results] = useRemoveAlbumMutation()
  const handleRemoveAlbum = () => removeAlbum(album)

  const header = <>
    <Button
      className='mr-3 cursor-pointer'
      loading={results.isLoading}
      onClick={handleRemoveAlbum}
    >
      <GoTrashcan />
    </Button>
    <span>
      {album.title}
    </span>
  </>

  return <ExpandablePanel key={album.id} header={header}>
    List of photos in the album
  </ExpandablePanel>
}

export default AlbumListItem