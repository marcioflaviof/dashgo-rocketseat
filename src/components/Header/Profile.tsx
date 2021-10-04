import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

type ProfileProps = {
  showProfileData?: boolean;
};

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Marcio Flavio</Text>
          <Text color="gray.300" fontSize="small">
            mflaviof1995@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Marcio Flavio" />
    </Flex>
  );
}
