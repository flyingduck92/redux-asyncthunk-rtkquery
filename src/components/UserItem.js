import { GoTrashcan } from 'react-icons/go'
import Button from './Button'
import { useThunk } from '../hooks/use-thunk'
import { removeUser } from '../store'
import ExpandablePanel from './ExpandablePanel'
import AlbumList from './AlbumList'

function UserItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser)

  const handleRemoveUser = () => {
    doRemoveUser(user)
  }

  const header = (
    <>
      <Button
        className='mr-3 cursor-pointer'
        loading={isLoading}
        onClick={handleRemoveUser}
      >
        <GoTrashcan />
      </Button>
      {error && <div>Error deleting user</div>}
      {user.name}
    </>
  )

  return (
    <ExpandablePanel header={header}>
      <AlbumList user={user} />
    </ExpandablePanel>
  )
}

export default UserItem
