import GradientLayout from "../components/gradientLayout";
import prisma from "../lib/prisma";
import {Box, Flex, Text} from "@chakra-ui/react";

const Home = ({artists}) => {
  return (
    <GradientLayout roundImage={true} color="green" subtitle="profile" title="Random USer" description="some playlist in the user stuff" image='https://tinted-gym-f99.notion.site/image/https:%2F%2Fdl.dropboxusercontent.com%2Fs%2Fbgiv0ssz3xpotz9%2Fpeep.png?dl=0?table=block&id=33f9771b-0e6f-4a72-832c-69ed2d41f290&spaceId=511cd811-5561-4a61-b550-c4086b4afafb&width=2000&userId=&cache=v2'>
      <Box>
        <Box>
          <Text>Top artist this month</Text>
          <Text>only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Text>{artist.name}</Text>
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