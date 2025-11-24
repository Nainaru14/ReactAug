
import { useDispatch } from 'react-redux'
import { addMoney, removeMoney } from './Store'

export default function Button() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(addMoney(10000))}>
        Add 10000
      </button>
      <button onClick={() => dispatch(removeMoney(500))}>
        Remove 500
      </button>
    </div>
  )
}
