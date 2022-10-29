import { Box, Image, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { memo } from "react";
import { UserCard } from "../organisms/user/userCard";

export const UserManagement = memo((props: any) => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard
          imageUrl="https://source.unsplash.com/random"
          userName="ryskit"
          fullName="Ryosuke Kida"
        />
      </WrapItem>
    </Wrap>
  );
});
