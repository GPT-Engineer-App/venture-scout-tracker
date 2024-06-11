import { Container, VStack, Heading, Box, Checkbox, Text, Flex } from "@chakra-ui/react";

const scouts = [
  {
    name: "Scout 1",
    ideas: ["Idea 1.1", "Idea 1.2", "Idea 1.3"],
  },
  {
    name: "Scout 2",
    ideas: ["Idea 2.1", "Idea 2.2"],
  },
  {
    name: "Scout 3",
    ideas: ["Idea 3.1", "Idea 3.2", "Idea 3.3", "Idea 3.4"],
  },
];

const Index = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">VC Scouts Tracker</Heading>
        {scouts.map((scout, index) => (
          <Box key={index} w="100%" p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Flex justify="space-between" align="center">
              <Heading as="h2" size="md">{scout.name}</Heading>
              <Checkbox>Met</Checkbox>
            </Flex>
            <VStack align="start" mt={4} spacing={2}>
              {scout.ideas.map((idea, idx) => (
                <Text key={idx}>- {idea}</Text>
              ))}
            </VStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;