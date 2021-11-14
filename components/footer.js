import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} This project references the knowledge of Takuya Matsuyama.
    </Box>
  )
}

export default Footer
