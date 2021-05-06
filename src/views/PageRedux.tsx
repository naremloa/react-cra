import { useSelector, useDispatch } from 'react-redux';
import { StoreTypes, setCount } from '@/store';
import NButton from '@/components/NButton';

export default function PageRedux() {
  const dispatch = useDispatch();
  const count = useSelector((state: StoreTypes) => state.count);
  return (
    <div>
      <h1>{`點擊次數為: ${count}`}</h1>
      <NButton
        text="點我"
        onClick={() => {
          dispatch(setCount(count + 1));
        }}
      />
    </div>
  );
}
