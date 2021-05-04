import { useSelector, useDispatch } from "react-redux";
import { storeTypes } from "@/store";
import NButton, { NButtonProps } from "@/components/NButton";
import { setCount } from '@/store';

export default function PageRedux() {
  const dispatch = useDispatch();
  const count = useSelector((state: storeTypes) => state.count);
  const btn: NButtonProps = {
    text: '點我',
    onClick: () => {
      console.log('click', count);
      dispatch(setCount(count + 1))
    }
  };
  return (
    <div>
      <h1>{`點擊次數為: ${count}`}</h1>
      <NButton {...btn} />
    </div>
  );
}