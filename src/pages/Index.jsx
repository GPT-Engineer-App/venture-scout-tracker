import { useState } from "react";
import { Container, VStack, Heading, Box, Checkbox, Text, Flex, Input, IconButton } from "@chakra-ui/react";
import { EditIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";

const scoutsData = [
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
  const [scouts, setScouts] = useState(scoutsData);
  const [editIdx, setEditIdx] = useState({ scoutIdx: null, ideaIdx: null });
  const [editValue, setEditValue] = useState("");

  const handleEdit = (scoutIdx, ideaIdx, value) => {
    setEditIdx({ scoutIdx, ideaIdx });
    setEditValue(value);
  };

  const handleSave = () => {
    const updatedScouts = [...scouts];
    updatedScouts[editIdx.scoutIdx].ideas[editIdx.ideaIdx] = editValue;
    setScouts(updatedScouts);
    setEditIdx({ scoutIdx: null, ideaIdx: null });
    setEditValue("");
  };

  const handleCancel = () => {
    setEditIdx({ scoutIdx: null, ideaIdx: null });
    setEditValue("");
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">VC Scouts Tracker</Heading>
        {scouts.map((scout, scoutIdx) => (
          <Box key={scoutIdx} w="100%" p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Flex justify="space-between" align="center">
              <Heading as="h2" size="md">{scout.name}</Heading>
              <Checkbox>Met</Checkbox>
            </Flex>
            <VStack align="start" mt={4} spacing={2}>
              {scout.ideas.map((idea, ideaIdx) => (
                <Flex key={ideaIdx} align="center" w="100%">
                  {editIdx.scoutIdx === scoutIdx && editIdx.ideaIdx === ideaIdx ? (
                    <>
                      <Input
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        size="sm"
                        mr={2}
                      />
                      <IconButton
                        icon={<CheckIcon />}
                        size="sm"
                        onClick={handleSave}
                        mr={2}
                      />
                      <IconButton
                        icon={<CloseIcon />}
                        size="sm"
                        onClick={handleCancel}
                      />
                    </>
                  ) : (
                    <>
                      <Text flex="1">- {idea}</Text>
                      <IconButton
                        icon={<EditIcon />}
                        size="sm"
                        onClick={() => handleEdit(scoutIdx, ideaIdx, idea)}
                      />
                    </>
                  )}
                </Flex>
              ))}
            </VStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;