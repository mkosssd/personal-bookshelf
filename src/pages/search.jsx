import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Card from '../components/Card'
import './search.css'
import Loader from '../components/loader'

export default function Search() {
    const [searchParams] = useSearchParams()
    const [booklist, setBooklist] = useState([])
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)
    let query = searchParams.get('query')

    useEffect(() => {
      setIsLoading(true)
        const getBookList = async () => {
          const url = `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
          const options = {
            method: 'GET',
          }
          
          try {
            const response = await fetch(url, options)
            const result = await response.json()
            const loadedBooks = []
            for (const key in result.docs) {
              loadedBooks.push(result[key])
            }
            setBooklist(result.docs)
            setIsLoading(false)
            } catch (error) {
            setIsLoading(false)
            setError(error)
            console.error(error)
          }
        }
        getBookList()
      },[query])
      if(!booklist.length) {
        return (
          <div className='container-mid'>
          <p className='font-weight-bold'>Book not Found</p>
          </div>
      )
      }
      console.log(booklist);
      const itemQuery = booklist.map(res => <Card props={res} key={res}></Card>)
      return (
        <>
          {!isLoading && 
            <div className='container-mid'>
              {error == null && (
                <div className='gridBox'>
                  {itemQuery}
                </div>
              )}
            </div>
          }
          {isLoading && <Loader/>}
        </>
      )
    
}
