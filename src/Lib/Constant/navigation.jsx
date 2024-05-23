import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/dashboard',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'course',
		label: 'COURSE',
		path: '/course',
		icon: <HiOutlineCube />
	},
	{
		key: 'parents',
		label: 'USERS/Parents',
		path: '/parent',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'instructors',
		label: 'INSTRUCTORS',
		path: '/instructor',
		icon: <HiOutlineUsers />
	},
	// {
	// 	key: 'transactions',
	// 	label: 'Transactions',
	// 	path: '/transactions',
	// 	icon: <HiOutlineDocumentText />
	// },
	// {
	// 	key: 'messages',
	// 	label: 'Messages',
	// 	path: '/messages',
	// 	icon: <HiOutlineAnnotation />
	// }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]