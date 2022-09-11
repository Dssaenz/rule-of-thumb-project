import { FC } from 'react';
import { Container } from './styles';

interface Props {
  setListSection: (item: boolean) => void;
}

const SelectField: FC<Props> = ({ setListSection }) => (
  <Container>
    <select
      className='select'
      onChange={e =>
        e.target.value === '1' ? setListSection(true) : setListSection(false)
      }>
      <option value='1'>Grid</option>
      <option value='2'>List</option>
    </select>
  </Container>
);

export default SelectField;
