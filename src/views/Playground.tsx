import NButton, { NButtonProps } from '@/components/NButton';
import { DownloadOutlined } from '@ant-design/icons';

const btnList: (NButtonProps & { index: string })[] = [
  { index: 'btn-1', type: 'primary', shape: 'circle', icon: (<DownloadOutlined />) },
  { index: 'btn-2', text: 'Secondary Button', type: 'dashed' },
  { index: 'btn-3', text: 'last Button', type: 'link' },
  { index: 'btn-4', type: 'ghost', text: 'ohohoh ghost' }
]

export default function Playground() {
  return (
    <div>
      { btnList.map( item => (
        <div style={ { marginBottom: '5px' } } key={item.index}>
          <NButton { ...item } />
        </div>
      )) }
    </div>
  )
}