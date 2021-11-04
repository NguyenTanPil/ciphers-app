import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Counter, InputGroup } from '../../components/Card/CardStyles';
import { getData, selectDes } from './desSlice';

const ExtraInput = () => {
  const data = useSelector(selectDes);
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
    getKey(e.target.value.replace(/[^a-fA-F0-9]/gi, ''));
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
              placeholder="Enter your keys..."
            />
          </InputGroup>
        </div>
      </Counter>
    </>
  );
};

export default ExtraInput;
