import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FiUser } from 'react-icons/fi';

interface ProfileProps {
  name: string;
}

const Profile: React.FC<ProfileProps> = ({ name }) => {
  const router = useRouter();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="inline-flex size-[35px] items-center justify-center"
          aria-label="Customise options"
        >
          <FiUser className="text-2xl" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-[35] min-w-[120px] rounded-md border border-slate-700 bg-slate-800 p-[5px] text-slate-300 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform]"
          sideOffset={10}
        >
          <DropdownMenu.Label className="group relative flex h-[25px] cursor-pointer select-none items-center rounded-[3px] px-[5px] pl-[10px] text-[14px] font-bold leading-none outline-none">
            {name}
          </DropdownMenu.Label>
          <DropdownMenu.Separator className="m-[5px] h-[1px] border border-slate-400" />
          <DropdownMenu.Item
            onClick={() => {
              router.push('/cart');
            }}
            className="group relative flex h-[25px] cursor-pointer select-none items-center rounded-[3px] px-[5px] pl-[10px] text-[13px] leading-none outline-none hover:bg-slate-200"
          >
            CART
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onClick={() => {
              router.push('/orderhistory');
            }}
            className="group relative flex h-[25px] cursor-pointer select-none items-center rounded-[3px] px-[5px] pl-[10px] text-[13px] leading-none outline-none hover:bg-slate-200"
          >
            ORDER HISTORY
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onClick={() => {
              router.push('/mypage');
            }}
            className="group relative flex h-[25px] cursor-pointer select-none items-center rounded-[3px] px-[5px] pl-[10px] text-[13px] leading-none outline-none hover:bg-slate-200"
          >
            MY PAGE
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="m-[5px] h-[1px] border border-slate-400" />
          <DropdownMenu.Item
            onClick={() => {
              signOut({ redirect: false });
              router.push('/');
            }}
            className="group relative flex h-[25px] cursor-pointer select-none items-center rounded-[3px] px-[5px] pl-[10px] text-[13px] leading-none outline-none hover:bg-slate-200"
          >
            Logout
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
export default Profile;
