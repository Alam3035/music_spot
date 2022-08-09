import GradientLayout from "../components/gradientLayout";
import prisma from "../lib/prisma";
import {Box, Flex, Text} from "@chakra-ui/react";

const Home = ({artists}) => {
  return (
    <GradientLayout roundImage={true} color="red" subtitle="profile" title="Random User" description="some playlist in the user stuff" image='https://tinted-gym-f99.notion.site/image/https:%2F%2Fdl.dropboxusercontent.com%2Fs%2Fbgiv0ssz3xpotz9%2Fpeep.png?dl=0?table=block&id=33f9771b-0e6f-4a72-832c-69ed2d41f290&spaceId=511cd811-5561-4a61-b550-c4086b4afafb&width=2000&userId=&cache=v2'>
      <Box color="white" padding="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">Top artist this month</Text>
          <Text fontSize="md">only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX="10px">
              <Box bg="gray.900" borderRadius="4px" padding="15px">
                <Text>{artist.name}</Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  )
}

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({})

  return {
    props: { artists },
  }
}

export default Home;