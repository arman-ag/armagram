export interface menuItem {
  bio: string;
  id: number;
  name: string;
  phone: string;
  profileImage: string;
  user: string;
}
export type menuItemProps = {
  profileData: menuItem;
};
