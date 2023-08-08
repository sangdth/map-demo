import { Icon } from '@chakra-ui/react';
import type { IconProps as P } from '@chakra-ui/react';
import {
  MdBusiness,
  MdCenterFocusWeak as CenterFocusWeak,
  MdLocationPin,
  MdLogout,
  MdMap,
  MdOutlineAssignmentInd as OutlineAssignment,
  MdOutlineWorkOutline as WorkOutline,
  MdLocalPolice as LocalPolice,
  MdPerson,
  MdSend,
  MdStars as StarCircle,
  MdStarBorder,
  MdSecurity,
  MdSupervisorAccount as SupervisorAccount,
} from 'react-icons/md';

// We should not use MD icons as is, because it not same as Chakra icons.
// export const NameIcon = (p: P) => <Icon as={MdName} {...p} />;

export const PoliceIcon = (p: P) => <Icon as={LocalPolice} {...p} />;
export const AdminIcon = (p: P) => <Icon as={MdSecurity} {...p} />;
export const AssignmentIcon = (p: P) => <Icon as={OutlineAssignment} {...p} />;
export const BusinessIcon = (p: P) => <Icon as={MdBusiness} {...p} />;
export const FocusWeakIcon = (p: P) => <Icon as={CenterFocusWeak} {...p} />;
export const LogoutIcon = (p: P) => <Icon as={MdLogout} {...p} />;
export const MapIcon = (p: P) => <Icon as={MdMap} {...p} />;
export const PersonIcon = (p: P) => <Icon as={MdPerson} {...p} />;
export const PinIcon = (p: P) => <Icon as={MdLocationPin} {...p} />;
export const SendIcon = (p: P) => <Icon as={MdSend} {...p} />;
export const StarCircleIcon = (p: P) => <Icon as={StarCircle} {...p} />;
export const StarBorderIcon = (p: P) => <Icon as={MdStarBorder} {...p} />;
export const SupervisorIcon = (p: P) => <Icon as={SupervisorAccount} {...p} />;
export const WorkIcon = (p: P) => <Icon as={WorkOutline} {...p} />;
