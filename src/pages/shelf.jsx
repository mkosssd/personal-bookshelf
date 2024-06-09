import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Card from '../components/Card'
import './shelf.css'

export default function Shelf() {
    const [searchParams] = useSearchParams()
    const [shelf, setShelf] = useState([])
    const [error, setError] = useState()
    let query = searchParams.get('query')
    useEffect(() => {
        const getBookList = async () => {
    
          try {
            const shelf = JSON.parse(localStorage.getItem('shelf')) || []
            if (!shelf) {
              setError('Shelf Is Empty!')
            }
            setShelf(shelf)
          } catch (error) {
            console.error(error)
          }
        }
        getBookList()
      },[query])
      const itemQuery = shelf.map(res => <Card props={res} key={res} isShelf={true}></Card>)
      return (
        <>
          {
            <div className='container-mid'>
              {error && <p className=''>{error}</p>}
              {error == null && (
                <div className='gridBox'>
                  {itemQuery}
                </div>
              )}
            </div>
          }
        </>
      )
    
}
