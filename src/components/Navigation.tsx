import { linkClass, navList } from "@/components/utils";

const Navigation = () => {
  return (
    <nav className="flex flex-row flex-wrap gap-6">
      {navList.map((item) => (
        <a className={linkClass} key={item.name} href={item.href}>{item.name}</a>
      ))}
    </nav>
  )
}

export default Navigation;
