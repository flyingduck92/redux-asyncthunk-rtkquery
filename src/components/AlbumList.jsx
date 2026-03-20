import { useFetchAlbumsQuery, useAddAlbumMutation } from '../store'
import Skeleton from './Skeleton'
import ExpandablePanel from './ExpandablePanel'
import Button from './Button'
import AlbumListItem from './AlbumListItem'

function AlbumList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user)
  const [addAlbum, results] = useAddAlbumMutation()

  const handleAddAlbum = () => addAlbum(user)

  let content
  if (isFetching) {
    content = <Skeleton times={3} className='h-6 w-full' />
  } else if (error) {
    content = <div>Error loading albums</div>
  } else {
    content = data.map(album => {
      return <AlbumListItem key={album.id} album={album} />
    })
  }

  return (
    <div>
      <div className='m-2 flex items-center justify-between'>
        <h3 className='text-lg font-bold'>AlbumList from {user.name}</h3>
        <Button onClick={handleAddAlbum} className='text-nowrap cursor-pointer'
          loading={results.isLoading}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  )
}

export default AlbumList
