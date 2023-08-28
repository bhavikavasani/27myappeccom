import { useEffect, useState } from 'react';
import React from 'react';
import { FakeStoreApi } from '../services/fake-api-store';
import { useSearchParams } from 'react-router-dom';
import Item from '../components/Item';
import { useCart } from '../components/context/cart';


const Allproducts = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [query] = useSearchParams();
  const { addToCart } = useCart()

  const searchQuery = query.get('q');

  useEffect(() => {
      const fetchProducts = async () => {
          setLoading(true);
          const products = searchQuery ? await FakeStoreApi.fetchProductsBySearchQuery(searchQuery) : await FakeStoreApi.fetchAllProducts();
          setProducts(products);
          setLoading(false)
      }
      fetchProducts().catch(console.error)
  }, [searchQuery])

  if (!loading && searchQuery && !products.length) {
      return (
          <div className="container">
              <div className="product py-2">
                  <div className="details p-3">No products found matching your query.</div>
              </div>
          </div>
      )
  }
  return (
    <>
        <div className="container">
                <div className="products my-5">
                    <div className="grid">
                        {loading ? (
                            <div className="loader" />
                        ) : (
                            products.map((product) => (
                                <Item key={product.id} data={product} addToCart={(product)=> addToCart(product)} />
                            ))
                        )}
                    </div>
                </div>
            </div>
    </>
  )
}

export default Allproducts
