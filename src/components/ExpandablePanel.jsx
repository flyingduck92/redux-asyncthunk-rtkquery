import { useState } from 'react'
import { GoChevronDown, GoChevronRight } from 'react-icons/go'

function ExpandablePanel({ header, children }) {
  const [expanded, setExpanded] = useState(false)

  const handleExpanded = () => {
    setExpanded((prev) => !prev)
  }

  return (
    <div className='mb-2 border rounded'>
      <div
        className='flex p-2 justify-between items-center cursor-pointer'
        onClick={handleExpanded}
      >
        <div className='flex flex-row items-center justify-between'>
          {header}
        </div>
        <div>{expanded ? <GoChevronDown /> : <GoChevronRight />}</div>
      </div>
      {expanded && <div className='p-2 border-t'>{children}</div>}
    </div>
  )
}

export default ExpandablePanel
