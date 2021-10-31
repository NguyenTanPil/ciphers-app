import { useTranslation } from 'react-i18next';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { Btn, Counter, InputGroup } from '../../components/Card/CardStyles';
import { getData, selectSimpleSubstitution } from './simpleSubstitutionSlice';

const ExtraInput = () => {
  const data = useSelector(selectSimpleSubstitution);
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
    getKey(e.target.value.replace(/[^a-zA-Z]/gi, ''));
  };

  const randomKey = () => {
    const arr = data.key.split('');
    const result = shuffle(arr).join('');
    getKey(result);
  };

  const shuffle = (array) => {
    // reference in https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  return (
    <>
      <Counter>
        <div>
          <label htmlFor="key">
            {t('key')}
            <Btn onClick={randomKey}>
              <GiPerspectiveDiceSixFacesRandom />
            </Btn>
          </label>
          <InputGroup>
            <input
              type="text"
              value={data.key}
              onChange={handleCountChange}
              maxLength={26}
              placeholder="Enter 26 alphabet key..."
            />
          </InputGroup>
        </div>
      </Counter>
    </>
  );
};

export default ExtraInput;
