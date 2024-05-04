import { Container, VStack, Heading, Text, Input, Button, SimpleGrid, Box, Image } from "@chakra-ui/react";
import { FaSearch, FaIndustry, FaBuilding } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Business Marketplace Platform
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Empowering Sri Lankan businesses to thrive in a fair and competitive environment.
        </Text>
        <VStack spacing={4}>
          <Text fontSize="lg" fontWeight="bold">
            Search for Companies or Products
          </Text>
          <Input placeholder="Search by company name, product, or industry" size="lg" />
          <Button leftIcon={<FaSearch />} colorScheme="blue" size="lg">
            Search
          </Button>
        </VStack>
        <SimpleGrid columns={2} spacing={10}>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <VStack>
              <FaIndustry size="3em" />
              <Text mt={4}>Browse by Industry</Text>
              <Button variant="outline" colorScheme="teal">
                Explore Industries
              </Button>
            </VStack>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <VStack>
              <FaBuilding size="3em" />
              <Text mt={4}>Company Profiles</Text>
              <Button variant="outline" colorScheme="teal">
                View Companies
              </Button>
            </VStack>
          </Box>
        </SimpleGrid>
        <VStack spacing={4} align="stretch">
          <Heading as="h2" size="lg">
            Featured Companies
          </Heading>
          <SimpleGrid columns={3} spacing={5}>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
              <Image src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwY29tcGFueXxlbnwwfHx8fDE3MTQ4MTE1ODN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Manufacturing Company" />
              <Text mt={2} fontSize="md" fontWeight="bold">
                ABC Manufacturing
              </Text>
              <Text fontSize="sm">Leading in textile production</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
              <Image src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMGNvbXBhbnl8ZW58MHx8fHwxNzE0ODExNTgzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Tech Startup" />
              <Text mt={2} fontSize="md" fontWeight="bold">
                Innovate Tech
              </Text>
              <Text fontSize="sm">Pioneers in tech solutions</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
              <Image src="https://images.unsplash.com/photo-1518619745898-93e765966dcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb29kJTIwaW5kdXN0cnklMjBjb21wYW55fGVufDB8fHx8MTcxNDgxMTU4NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Food Industry Company" />
              <Text mt={2} fontSize="md" fontWeight="bold">
                Delight Foods
              </Text>
              <Text fontSize="sm">Quality food products</Text>
            </Box>
          </SimpleGrid>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
