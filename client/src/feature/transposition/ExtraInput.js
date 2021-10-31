import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Counter, InputGroup } from '../../components/Card/CardStyles';
import { getData, selectTransposition } from './transpositionSlice';

const ExtraInput = () => {
  const data = useSelector(selectTransposition);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const getKey = (value) => {
    dispatch(
      getData({
        ...data,
        key: value,
      }),
    );
  };

  const handleCountChange = (e) => {
    getKey(e.target.value);
  };

  return (
    <>
      <Counter>
        <div>
          <label htmlFor="key">{t('key')}</label>
          <InputGroup>
            <input
              type="text"
              value={data.key}
              onChange={handleCountChange}
              placeholder="Enter columns number..."
            />
          </InputGroup>
        </div>
      </Counter>
    </>
  );
};

export default ExtraInput;
