import Link from 'next/link';

export default function Sidebar() {
  return (
    <div>
      <div className="drawer lg:drawer-open h-screen">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

        {/* Main content */}
        <div className="drawer-content flex flex-col">
          <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden m-4">
            Open drawer
          </label>
          {/* Page content goes here */}
        </div>

        {/* Sidebar */}
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>

          <div className="flex flex-col bg-base-200 w-80 h-screen p-4">
            {/* Top menu */}
            <div className="space-y-2 mb-0">
              <h3 className="text-xl font-bold">HACKULINER</h3>
              <ul className="menu gap-2">
                <li>
                  <Link href={'/'}>Semua Resep</Link>
                </li>
                <li>
                  <Link href={'/create-recipe'}>Tambah Resep</Link>
                </li>
              </ul>
            </div>

            {/* Bottom menu */}
            <div className="space-y-2 mt-5 border-t-2">
              <h4 className="font-semibold mt-5">Kategori</h4>
              <ul className="menu gap-1">
                <Link href={'/utama'}>Utama</Link>
                <Link href={'/jajanan'}>Jajanan</Link>
                <Link href={'/minuman'}>Minuman</Link>
                <Link href={'/sambal'}>Sambal</Link>
                <Link href={'/kue'}>Kue</Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
