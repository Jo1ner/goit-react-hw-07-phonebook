import { useDispatch } from 'react-redux';
import { addContactsFilter } from 'redux/filter.reducer';
import { FilterStyle } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleInputFilterChange = evt => {
    const filterValue = evt.target.value;
    console.log('filterValue: ', filterValue);
    dispatch(addContactsFilter(filterValue));
  };
  return (
    <div>
      <h2>Find contacts by name</h2>
      <FilterStyle type="text" onChange={handleInputFilterChange} />
    </div>
  );
};
