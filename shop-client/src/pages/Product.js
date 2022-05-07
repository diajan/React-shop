import React from 'react'
import { useParams } from 'react-router'
import { useOneProduct } from '../services/hooks/product'
import Box from '../components/utils/Box'

export default function Product() {
  const { slug } = useParams()
  const { data: product, isLoading, isError } = useOneProduct(slug)

  return <Box></Box>
}
