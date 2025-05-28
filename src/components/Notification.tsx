import { TouchableOpacity } from 'react-native';

import { HStack, Text, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  title: string;
  onClose: () => void;
};

export function Notification({ title, onClose }: Props) {
  return (
    <HStack
      w="full"
      p={4}
      pt={12}
      justifyContent="space-between"
      alignItems="center"
      bgColor="gray.200"
      position="absolute"
      top={0}
    >
      <Icon
        as={Ionicons}
        name="notifications-outline"
        size={5}
        color="black"
        mr={2}
      />

      <Text fontSize="md" color="black" flex={1}>
        {title}
      </Text>

      <TouchableOpacity onPress={onClose}>
        <Text>Fechar</Text>
      </TouchableOpacity>
    </HStack>
  );
}
