import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Button from './Button'
import Skeleton from './Skeleton'
import { addUser, fetchUsers } from '../store'
import { useThunk } from '../hooks/use-thunk'
import UserItem from './UserItem'

function UsersList() {
  // LoadingUsers => isLoadingUsers & loadingUsersError
  // CreatingUser => isCreatingUser & creatingUserError
  const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers)
  const [doAddUser, isCreatingUser, creatingUserError] = useThunk(addUser)

  const { data } = useSelector((state) => state.users)

  useEffect(() => {
    doFetchUsers()
  }, [])

  const handleAddUser = () => {
    doAddUser()
  }

  let content
  if (isLoadingUsers) {
    content = (
      <Skeleton
        times={6}
        className='h-6 w-full'
      />
    )
  } else if (loadingUsersError) {
    content = (
      <div>
        <h6>Error fetching data...</h6>
      </div>
    )
  } else {
    content = data.map((user) => {
      return (
        <UserItem
          key={user.id}
          user={user}
        />
      )
    })
  }

  return (
    <div>
      <div className='flex items-center justify-between my-3'>
        <h2 className='text-2xl font-bold'>User List</h2>
        <Button
          loading={isCreatingUser}
          onClick={handleAddUser}
        >
          + Add User
        </Button>
        {creatingUserError && 'Error Creating User...'}
      </div>
      {content}
    </div>
  )
}

export default UsersList
