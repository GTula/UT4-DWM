{/*TA17*/}

import { useParams } from 'react-router-dom';

function Product() {
  const { id } = useParams(); 

  const products = {
    1: { name: "Notebook"},
    2: { name: "Celular"},
    3: { name: "Tablet"}
  };

  return (
    <div>
      <h1>{products[id].name}</h1>
    </div>
  );
}

export default Product;
