import { OneSignal } from 'react-native-onesignal';

export function tagUserInfoCreate() {
  OneSignal.User.addTags({
    user_name: 'John',
    user_email: 'john@doe.com',
  });
}

export function tagCarUpdate(itemsCount: string) {
  OneSignal.User.addTag('cart_items_count', itemsCount);
}
