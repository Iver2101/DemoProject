import React, { useState } from 'react';
import { Text } from 'react-native';
import Counter from './counter';


function Counters(){
  const [total, setTotal] = useState(0);
  const incrementTotal = () => {
    setTotal(total + 1);
  };



  return (
    <>
      <Text>total : {total}</Text>
      <Counter text={'Iver'} func={incrementTotal} />
      <Counter text={'Iselin'} func={incrementTotal} />
      <Counter text={'Ty'} func={incrementTotal} />
    </>
  );
}


export default Counters;