import { Card, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card>
        <Skeleton />
        <SkeletonText />
    </Card>
  )
}

export default GameCardSkeleton